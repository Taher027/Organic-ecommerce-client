import backgroundImage from "../../assets/Home/background.jpg";
const HomeBanner = () => {
	return (
		<div
			className="h-[360px] w-full min-h-[300px]  md:min-h-[500px] lg:min-h-[700px]  bg-no-repeat bg-cover flex justify-center items-center flex-col"
			style={{
				background: `linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0,.4)), url(${backgroundImage})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				objectFit: "cover",
				width: "100%",
				height: "auto",
				border: "1px solid red",
			}}
		>
			<h4 className="text-3xl font-normal text-white italic text-center vertilcale-middle align-middle">
				100% Natural Food
			</h4>
			<h2 className="text-3xl font-bold text-white text-center ">
				Choose the best healthier way of life
			</h2>
		</div>
	);
};

export default HomeBanner;
