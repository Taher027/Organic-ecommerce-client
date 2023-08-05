import img1 from "../../assets/Home/Photo1.jpg";
import img2 from "../../assets/Home/Photo2.jpg";
const OfferBanner = () => {
	return (
		<div className=" md:flex lg:px-[15%] lg:py-[7%]  gap-6 w-full mx-auto justify-center p-5 ">
			<div className="relative">
				<p className="absolute mt-[10%] ml-[5%] text-white font-normal text-4xl">
					Natural!!
				</p>
				<h2 className="text-[40px] font-extrabold text-white w-full absolute mt-[20%] ml-[5%]">
					Get Garden <br /> Fresh Fruits
				</h2>
				<img className="rounded-3xl" src={img1} alt="" />
			</div>
			<div className=" relative mt-6 md:mt-0">
				<p className="absolute mt-[10%] ml-[5%] text-[#7EB693] font-normal text-4xl">
					Offer!!
				</p>
				<h2 className="text-[40px] font-extrabold text-[#274C5B] w-full absolute mt-[20%] ml-[5%]">
					Get 10% off <br /> on Vegetables
				</h2>
				<img className="rounded-3xl" src={img2} alt="" />
			</div>
		</div>
	);
};

export default OfferBanner;
