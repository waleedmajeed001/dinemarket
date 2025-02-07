"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Brushed Raglan Sweatshirt", price: "$195", img: "/Female.png", link: "/products/1" },
  { id: 2, name: "Cameryn Sash Tie Dress", price: "$545", img: "/Female1.png", link: "/products/2" },
  { id: 3, name: "Flex Sweatshirt", price: "$175", img: "/Female2.png", link: "/products/3" },
  { id: 4, name: "Flex Push Button Bomber", price: "$225", img: "/Female3.png", link: "/products/4" },
  { id: 5, name: "Muscle Tank", price: "$75", img: "/Female4.png", link: "/products/5" },
  { id: 6, name: "Ribbed Tank Top", price: "$80", img: "/Female5.png", link: "/products/6" },
  { id: 7, name: "Classic Straight Jeans", price: "$120", img: "/Female6.png", link: "/products/7" },
  { id: 8, name: "Oversized Hoodie", price: "$210", img: "/Female7.png", link: "/products/8" },
  { id: 9, name: "Ribbed Tank Top", price: "$80", img: "/Female8.png", link: "/products/9" },
  { id: 10, name: "Classic Straight Jeans", price: "$120", img: "/Male.png", link: "/products/10" },
  { id: 11, name: "Oversized Hoodie", price: "$210", img: "/Male1.png", link: "/products/11" },
];

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    velocity.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    velocity.current = walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    snapToClosest();
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += e.deltaY * 2;
    snapToClosest();
  };

  const snapToClosest = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = 350 + 24; // Card width (350px) plus gap (24px)
    const closestIndex = Math.round(scrollPosition / cardWidth);
    const targetScroll = closestIndex * cardWidth;
    smoothScrollTo(targetScroll);
  };

  const smoothScrollTo = (target: number) => {
    if (!scrollRef.current) return;
    const start = scrollRef.current.scrollLeft;
    const duration = 500;
    let startTime: number | null = null;

    const animateScroll = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      scrollRef.current!.scrollLeft = start + (target - start) * easeOutQuad(progress);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <section className="py-12 px-6 lg:px-16 text-white">
      <div className="text-center mb-8">
        <p className="text-blue-400 font-semibold uppercase text-sm">Products</p>
        <h2 className="text-3xl font-bold">Check What's New</h2>
      </div>

      <div className="max-w-[1080px] mx-auto overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            display: "flex",
            width: "100%",
            padding: "10px 0",
            overflow: "hidden",
            userSelect: "none",
          }}
        >
          {products.map((product) => (
            <Link key={product.id} href={product.link} className="no-underline">
              <div
                className="relative p-4 text-center shadow-lg flex-shrink-0 w-[350px] rounded-xl transition-transform duration-300 transform hover:scale-105"
                style={{ scrollSnapAlign: "start" }}
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={350}
                  height={350}
                  className="w-full h-auto"
                  draggable={false}
                />
                <div className="mt-4">
                  <p className="text-xl font-semibold">{product.name}</p>
                  <p className="text-gray-400">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
