import { useState, useEffect } from 'react';
import Spinner from "@/components/Spinner";
import UserActive from "@/components/Suscriptions-UserActive";
import PlansPay from "@/components/Suscriptions-PlansPay";
import Newsletter from "@/components/Suscription-Newsletter";
import Footer from "@/components/Footer"
import Header from "@/components/Header";

const Suscriptions = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000); 
   }, []);

   return(
      <>
         <Header/>
         {loading ? (
        <Spinner />
         ) : (
            <div className="min-w-full bg-gray-50 flex flex-col justify-center pt-20 items-center min-h-screen">
               <PlansPay/>
               <UserActive/> 
               <Newsletter/>
               <Footer/>
            </div>
         )}
      </>
   )
}

export default Suscriptions;