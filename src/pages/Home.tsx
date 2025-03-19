import { useState, useEffect } from 'react';
import Spinner from "@/components/Spinner"
import Hero from "@/components/home/Hero"
import Testimonial from "@/components/home/Testimonial"
import Trustpilot from "@/components/home/Trustpilot"
import PlansPay from "@/components/suscriptions/PlansPay"
import WhyChosee from "@/components/home/WhyChosee"
import AboutMe from "@/components/home/AboutMe"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div>
					<Header />
					<div className="min-w-full bg-blue1 flex flex-col justify-center pt-20 items-center min-h-screen">
						<Hero />
						<Testimonial />
						<PlansPay />
						<Trustpilot />
						<WhyChosee />
						<AboutMe />
						<Footer />
					</div>
				</div>
			)}
		</>
	)
}

export default Home;
