import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
const Header = () => {
	const menuItems = (
		<>
			<li className="hover:bg-[#274C5B] hover:duration-500 ">
				<a className="hover:text-white hover:duration-500">Home</a>
			</li>
			<li className="hover:bg-[#274C5B] hover:duration-500">
				<a className="hover:text-white hover:duration-500">Shop</a>
			</li>
			<li className="hover:bg-[#274C5B] hover:duration-500">
				<a className="hover:text-white hover:duration-500">About</a>
			</li>
			<li className="hover:bg-[#274C5B]  hover:duration-500">
				<a className="hover:text-white hover:duration-500">News</a>
			</li>
			<li className="hover:bg-[#274C5B] hover:duration-500">
				<a className="hover:text-white hover:duration-500">Contact</a>
			</li>
		</>
	);
	return (
		<header>
			<div className="navbar w-full lg:w-[90%] mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden" size={18}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-bold text-[#274C5B] text-xl "
						>
							{menuItems}
						</ul>
					</div>
					<div className="flex gap-1 justify-center items-center">
						<img
							src={logo}
							className="mr-2 cursor-pointer hidden md:block w-9"
							alt="logo"
						/>
						<a className="text-2xl md:text-4xl font-bold  text-[#274C5B] hover:scale-105 duration-300 cursor-pointer">
							Organic
						</a>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-[#274C5B] font-bold text-xl ">
						{menuItems}
					</ul>
				</div>
				<div className="navbar-end">
					<div className="w-full md:w-auto py-2   cursor-pointer">
						<div className="flex flex-row items-center justify-between">
							<div className="flex justify-center items-center   ">
								<input
									type="text"
									placeholder="Search Anything"
									className="border-[1px] gap-3 py-2 px-5 rounded-full outline-none hidden md:block font-semibold bg-[#FAFAFA] "
								/>
								<BiSearch className="-ml-8 hidden md:block " size={18} />
							</div>

							<div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
								<Link
									className="font-bold text-[#274C5B] text-xl  rounded-lg border-[1px] px-5 py-2"
									to="/"
								>
									SignIn
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
