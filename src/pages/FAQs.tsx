import FAQsAccordions from "@/components/FAQs-Accordions";
import FAQsContacts from "@/components/FAQs-Contacts";
import Footer from "@/components/Footer"

const FAQ = () => {
   return(
      <>
         <div className="min-w-full bg-gray-100 flex flex-col justify-center pt-24 items-center min-h-screen">
            <FAQsAccordions/>
            <FAQsContacts/>
            <Footer/>
         </div>
      </>
   )
}

export default FAQ;