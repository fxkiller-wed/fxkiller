import UserActive from "@/components/Suscriptions-UserActive";
import PlansPay from "@/components/Suscriptions-PlansPay";
import Newsletter from "@/components/Suscription-Newsletter";
import Footer from "@/components/Footer"
import Header from "@/components/Header";

const Suscriptions = () => {
   return(
      <>
         <Header/>
         <div className="min-w-full bg-gray-100 flex flex-col justify-center pt-20 items-center min-h-screen">
            <PlansPay/>
            <UserActive/> 
            <Newsletter/>
            <Footer/>
         </div>
      </>
   )
}

export default Suscriptions;