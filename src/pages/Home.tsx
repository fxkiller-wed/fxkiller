import { useState, useEffect } from 'react';
import Welcome from "@/components/Home-Welcome"
import AboutMe from "@/components/Home-AboutMe"
// import GlobalBrands from "@/components/Home-GlobalBrands"
import Testimonial from "@/components/Home-Testimonial"
import HomeWhyChosee from "@/components/Home-WhyChosee"
import Footer from "@/components/Footer"
import HomeTrustpilot from "@/components/Home-Trustpilot"
import PlansPay from "@/components/Suscriptions-PlansPay"
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
            <div className="min-w-full bg-blue1 flex flex-col justify-center pt-20 items-center min-h-screen">
               <Welcome/>
               {/* <GlobalBrands/> */}
               <Testimonial/>
               <PlansPay/>
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