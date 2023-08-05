import img1 from "../../assets/Home/Photo1.jpg";
import img2 from "../../assets/Home/Photo2.jpg";
const OfferBanner = () => {
	return (
		<div className=" p-8 lg:flex md:px-5 md:py-8 lg:px-[15%] lg:py-[7%]  gap-6 w-full mx-auto justify-center ">
			<div className="relative ">
				<p className="absolute mt-[10%] ml-[5%] text-white font-normal text-4xl italic">
					Natural!!
				</p>
				<h2 className="text-[28px] md:text-[35px] lg:text-[40px] font-extrabold text-white w-full absolute mt-[20%] ml-[5%]">
					Get Garden <br /> Fresh Fruits
				</h2>
				<img className="rounded-3xl w-full h-auto" src={img1} alt="" />
			</div>
			<div className=" relative  mt-6 lg:mt-0">
				<p className="absolute mt-[10%] ml-[5%] text-[#7EB693] font-normal text-4xl italic">
					Offer!!
				</p>
				<h2 className="text-[28px] md:text-[35px] lg:text-[40px] font-extrabold text-[#274C5B] w-full absolute mt-[20%] ml-[5%]">
					Get 10% off <br /> on Vegetables
				</h2>
				<img className="rounded-3xl w-full h-auto" src={img2} alt="" />
			</div>
		</div>
	);
};

export default OfferBanner;
