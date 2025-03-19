import { useState, useEffect } from 'react';
import Spinner from "@/components/Spinner";
import UserActive from "@/components/suscriptions/UserActive";
import PlansPay from "@/components/suscriptions/PlansPay";
import Newsletter from "@/components/suscriptions/Newsletter";

import Footer from "@/components/Footer"
import Header from "@/components/Header";

const Suscriptions = () => {
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
				<div className="min-w-full bg-gray-50 flex flex-col justify-center pt-20 items-center min-h-screen">
					<PlansPay />
					<UserActive />
					<Newsletter />
					<Footer />
				</div>
			)}
		</>
	)
}

export default Suscriptions;
