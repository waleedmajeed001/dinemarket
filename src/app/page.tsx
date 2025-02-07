import FeaturesSection from '@/components/Featuer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Products from '@/components/prodect'
import Promotions from '@/components/promotions'

const page = () => {
  return (
    <div>
      <Hero />
      <Promotions />
      <Products />
      <FeaturesSection />
      <Newsletter />
    </div>
  )
}

export default page
