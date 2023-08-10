import HomeAbout from "../../components/HomeComponents/HomeAbout";
import HomeBanner from "../../components/HomeComponents/HomeBanner";
import OfferBanner from "../../components/HomeComponents/OfferBanner";
import Products from "../../components/HomeComponents/Products";
import Testimonial from "../../components/HomeComponents/Testimonial";

const Home = () => {
	return (
		<>
			<HomeBanner></HomeBanner>
			<OfferBanner></OfferBanner>
			<HomeAbout></HomeAbout>
			<Products></Products>
			<Testimonial></Testimonial>
		</>
	);
};

export default Home;
