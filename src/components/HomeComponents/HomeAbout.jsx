import aboutImg from "../../assets/Home/home-about.png";
import mailImage from "../../assets/Home/mail.png";
import VeganFood from "../../assets/Home/vegan.png";

const HomeAbout = () => {
	return (
		<section className="w-full bg-[#F9F8F8]">
			<div className="lg:flex w-full lg:w-[90vw]  justify-center mx-4 py-14 md:py-10 md:px-8 ">
				<div>
					<img
						className="md:w-4/5 h-full lg:w-full ml-[5%]"
						src={aboutImg}
						alt="about-image"
					/>
				</div>
				<div className="pl-4 md:pl-16 ">
					<p className="text-lg md:text-4xl font-normal text-[#7EB693] italic md:mt-9 md:-ml-4">
						About Us
					</p>
					<h2 className="text-[#274C5B] text-3xl md:text-5xl lg:text-6xl font-extrabold md:-ml-4 md:mt-6">
						We Believe in Working <br /> Accredited Farmers
					</h2>
					<p className="text-lg md:text-xl text-[#525C60] font-normal mt-4">
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to <br /> been the industry's standard dummy text ever
						since the 1500s, when an unknown printer <br /> took a galley.
					</p>

					{/* about sections inner  layout  */}

					<div className="flex gap-3 mt-5">
						<div className="bg-white rounded-lg  w-[100px] h-[100px] relative">
							<img
								width={46}
								height={46}
								className="absolute top-1/4 left-1/4"
								src={VeganFood}
								alt="png"
							/>
						</div>
						<div>
							<p className="text-[274C5B] font-bold text-[25px]">
								Organic Foods Only
							</p>
							<p className="text-lg text-[#525C60]">
								Simply dummy text of the printing and typesetting <br />{" "}
								industry. Lorem Ipsum
							</p>
						</div>
					</div>
					<div className="flex gap-3 mt-5">
						<div className="bg-white rounded-lg  w-[100px] h-[100px] relative">
							<img
								width={46}
								height={46}
								className="absolute top-1/4 left-1/4"
								src={mailImage}
								alt="png"
							/>
						</div>
						<div>
							<p className="text-[274C5B] font-bold text-[25px]">
								Quality Standards
							</p>
							<p className="text-lg text-[#525C60]">
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum
							</p>
						</div>
					</div>

					<button className="rounded-lg bg-[#274C5B] text-white text-xl font-bold mt-8 py-2 px-2 border-2 cursor-pointer hover:duration-200 hover:bg-white hover:text-[#274C5B] hover:border-solid  hover:border-[#243c5a] ">
						SHOP NOW
					</button>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;
