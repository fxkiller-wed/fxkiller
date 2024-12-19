import Footer from "@/components/Footer";
import InfoTerms from "@/components/InfoTerms";
import Header from "@/components/Header";

const Terms = () => {
  return (
    <>
    <Header />
      <div className="min-w-full bg-gray-50 flex flex-col justify-center pt-20 items-center min-h-screen">
        <InfoTerms/>
        <Footer />
      </div>
    </>
  );
};
export default Terms;
