import logo from "../../assets/logo.png";
import insta from "../../assets/Home/social/1.svg";
import facebook from "../../assets/Home/social/2.svg";
import twitter from "../../assets/Home/social/3.svg";
const Footer = () => {
	return (
		<div>
			<div className="md:grid md:grid-cols-3 py-20">
				<div className="mb-10 border-r-[1px] border-[#ddd] pr-8 ml-5">
					<h2 className="text-[25px] text-[#274C5B] font-bold md:text-right mb-10">
						Contact Us
					</h2>
					<p className="text-[18px] text-[#274C5B] font-bold md:text-right">
						Email
					</p>
					<p className="text-xl  md:text-right mb-5">needhelp@Organia.com</p>
					<p className="text-[18px] text-[#274C5B] font-bold md:text-right">
						Phone
					</p>
					<p className="text-xl  md:text-right mb-5">666 888 888</p>
					<p className="text-[18px] text-[#274C5B] font-bold md:text-right">
						Address
					</p>
					<p className="text-xl  md:text-right mb-5">
						88 road, borklyn street, USA
					</p>
				</div>
				<div className="px-10 mb-10 ">
					<div className="flex gap-4 justify-center items-center">
						<img width={36} height={53} src={logo} alt="logo" />
						<p className="text-[38px] text-[#274C5B] font-bold">Organic</p>
					</div>
					<p className="text-[18px] text-[#525C60] text-center mt-10">
						Simply dummy text of the printing and typesetting industry. Lorem
						Ipsum simply dummy text of the printing{" "}
					</p>
					<div className="flex gap-3 justify-center items-center mt-10">
						<img
							width={60}
							height={60}
							className="rounded-[100%]"
							src={facebook}
							alt="facebook-logo"
						/>
						<img
							width={60}
							height={60}
							className="rounded-[100%]"
							src={insta}
							alt="insta-logo"
						/>
						<img
							width={60}
							height={60}
							className="rounded-[100%]"
							src={twitter}
							alt="twitter-logo"
						/>
					</div>
				</div>
				<div className="border-l-[1px] border-[#ddd] pl-8">
					<h2 className="text-[25px] text-[#274C5B] font-bold md:text-left mb-10">
						Utility Pages
					</h2>
					<p className="text-[18px] text-[#274C5B]  md:text-left mb-3">
						Style Guide
					</p>
					<p className="text-[18px] text-[#274C5B] md:text-left mb-3">
						404 Not Found
					</p>
					<p className="text-[18px] text-[#274C5B] md:text-left mb-3">
						Password Protected
					</p>
					<p className="text-[18px] text-[#274C5B] md:text-left mb-3">
						Licences Changelog
					</p>
				</div>
			</div>
			<div className="border-[1px] border-[#ddd]">
				<p className="text-center text-lg font-medium text-[#525C60] py-5">
					Copyright © Organic | Convert Figma to React
					<span className="text-lg font-bold text-red-800 italic ml-2 ">
						*Abu Taher Hossain*
					</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
