import HomeAbout from "../../components/HomeComponents/HomeAbout";
import HomeBanner from "../../components/HomeComponents/HomeBanner";
import OfferBanner from "../../components/HomeComponents/OfferBanner";

const Home = () => {
	return (
		<>
			<HomeBanner></HomeBanner>
			<OfferBanner></OfferBanner>
			<HomeAbout></HomeAbout>
		</>
	);
};

export default Home;
