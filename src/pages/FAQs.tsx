import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import Accordions from "@/components/fqa/Accordions";
import Footer from "@/components/Footer"
import Header from "@/components/Header";

const FAQ = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<Header />
			{loading ? (
				<Spinner />
			) : (
				<div className="min-w-full bg-gray-50 flex flex-col justify-center pt-24 items-center min-h-screen">
					< Accordions/>
				</div>
			)}
			<Footer />
		</>
	)
}

export default FAQ;
