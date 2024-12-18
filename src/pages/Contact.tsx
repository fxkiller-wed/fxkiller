import Footer from "@/components/Footer";
import InfoContact from "@/components/InfoContact";

const Contact = () => {
   return(
      <>
        <div className="min-w-full bg-gray-100 flex flex-col justify-center pt-20 items-center min-h-screen">
         <InfoContact/>
         <Footer/>

        </div>
      </>
   )
}

export default Contact;