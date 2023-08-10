import leftImg from "../../assets/Home/Photo (9).png";
import rightImg from "../../assets/Home/Photo (10).png";
const Testimonial = () => {
	return (
		<div className=" w-full md:flex bg-[#FCFCFC] ">
			<div className="basis-1/5 hidden md:block">
				<img src={leftImg} alt="" />
			</div>
			<div className="w-full  md:basis-3/5 py-20 ">
				<p className="text-xl font-bold italic text-[#7EB693] text-center">
					Testimonial
				</p>
				<h2 className="text-[50px] text-[#274C5B] font-bold text-center block">
					What Our Customer Saying?
				</h2>
			</div>
			<div className="basis-1/5 hidden md:block">
				<img src={rightImg} alt="" />
			</div>
		</div>
	);
};

export default Testimonial;
