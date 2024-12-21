import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import FAQsAccordions from "@/components/FAQs-Accordions";
import FAQsContacts from "@/components/FAQs-Contacts";
import Footer from "@/components/Footer"
import Header from "@/components/Header";

const FAQ = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000); 
   }, []);

   return(
      <>
         <Header/>
         {loading ? (
         <Spinner />
         ) : (
            <div className="min-w-full bg-gray-50 flex flex-col justify-center pt-20 items-center min-h-screen">
               <FAQsAccordions/>
               <FAQsContacts/>
               <Footer/>
            </div>
         )}
      </>
   )
}

export default FAQ;