import Welcome from "@/components/Home-Welcome"
import AboutMe from "@/components/Home-AboutMe"
import GlobalBrands from "@/components/Home-GlobalBrands"
import Testimonial from "@/components/Home-Testimonial"
import HomeWhyChosee from "@/components/Home-WhyChosee"
import Footer from "@/components/Footer"

const Home = () => {
   return(
      <div className="min-w-full bg-gray-100 flex flex-col justify-center pt-24 items-center min-h-screen">
         <Welcome/>
         <GlobalBrands/>
         <Testimonial/>
         <HomeWhyChosee/>
         <AboutMe/>
         <Footer/>
      </div>
   )
}

export default Home;