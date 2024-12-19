import { useState, useEffect } from 'react';
import Welcome from "@/components/Home-Welcome"
import AboutMe from "@/components/Home-AboutMe"
import GlobalBrands from "@/components/Home-GlobalBrands"
import Testimonial from "@/components/Home-Testimonial"
import HomeWhyChosee from "@/components/Home-WhyChosee"
import Footer from "@/components/Footer"
import HomeTrustpilot from "@/components/Home-Trustpilot"
import Header from "@/components/Header"
import Spinner from "@/components/Spinner"

const Home = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 3000); 
   }, []);

   return(
      <>
      {loading ? (
        <Spinner />
      ) : (
         <div>
         <Header/>
            <div className="min-w-full bg-gray-50 flex flex-col justify-center pt-24 items-center min-h-screen">
               <Welcome/>
               <GlobalBrands/>
               <Testimonial/>
               <HomeTrustpilot/>
               <HomeWhyChosee/>
               <AboutMe/>
               <Footer/>
            </div>
         </div>
      )}
      </>
   )
}

export default Home;