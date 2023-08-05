import backgroundImage from "../../assets/Home/background.jpg";
import MainContainer from "../Container";

const HomeBanner = () => {
	return (
		<div
			className="min-h-[700px]  w-full bg-no-repeat bg-cover"
			style={{
				background: `linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0,.4)), url(${backgroundImage})`,
				// backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<h4 className="text-3xl font-normal text-white italic text-center pt-[150px]">
				100% Natural Food
			</h4>
			<h2 className="text-3xl font-bold text-white text-center pt-4">
				Choose the best healthier way of life
			</h2>
		</div>
	);
};

export default HomeBanner;
