// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Left from "../Testimonial/Left";
import Right from "../Testimonial/Right";

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div className=" w-full lg:w-[90vw] mx-auto  md:flex  bg-[#FCFCFC]  justify-between">
			<div className=" w-1/5 hidden md:block left-container">
				<Left></Left>
			</div>

			<div className=" w-full md:w-3/5  py-20   ">
				<p className="text-xl font-bold italic text-[#7EB693] text-center">
					Testimonial
				</p>
				<h2 className="text-4xl md:text-[50px] text-[#274C5B] font-bold text-center block">
					What Our Customer Saying?
				</h2>

				<div>
					<Swiper
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper   "
					>
						{reviews?.map((review) => (
							<SwiperSlide key={review._id}>
								<div className="flex  flex-col items-center m-24">
									<p>{review.details}</p>
									<h2 className="text-2xl text-center">{review.name}</h2>
									<Rating
										className="text-center "
										style={{ maxWidth: 180 }}
										value={review.rating}
										readOnly
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="mt-20 border-t-[1px] border-[#ddd] ">
					<div className="w-full mx-auto lg:ml-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly items-center    mt-20 ">
						<div className="rounded-[100%] mb-5 bg-[#FCFCFC] border-2 border-solid border-red-600 w-[150px] h-[150px] flex flex-wrap flex-col justify-center items-center ">
							<h4 className="text-[50px] text-[#274C5B] font-bold text-center inline-block">
								100%
							</h4>
							<p className="text-lg text-[#274C5B] font-semibold text-center inline-block">
								Organic
							</p>
						</div>
						<div className="rounded-[100%] mb-5 bg-[#FCFCFC] border-2 border-solid border-red-600 w-[150px] h-[150px] flex flex-wrap flex-col justify-center items-center ">
							<h4 className="text-[50px] text-[#274C5B] font-bold text-center inline-block">
								100%
							</h4>
							<p className="text-lg text-[#274C5B] font-semibold text-center inline-block">
								Organic
							</p>
						</div>
						<div className="rounded-[100%] mb-5 bg-[#FCFCFC] border-2 border-solid border-red-600 w-[150px] h-[150px] flex flex-wrap flex-col justify-center items-center ">
							<h4 className="text-[50px] text-[#274C5B] font-bold text-center inline-block">
								100%
							</h4>
							<p className="text-lg text-[#274C5B] font-semibold text-center inline-block">
								Organic
							</p>
						</div>
						<div className="rounded-[100%] mb-5 bg-[#FCFCFC] border-2 border-solid border-red-600 w-[150px] h-[150px] flex flex-wrap flex-col justify-center items-center ">
							<h4 className="text-[50px] text-[#274C5B] font-bold text-center inline-block">
								100%
							</h4>
							<p className="text-lg text-[#274C5B] font-semibold text-center inline-block">
								Organic
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className=" w-1/5 hidden md:block right-container">
				<Right></Right>
			</div>
		</div>
	);
};

export default Testimonial;
