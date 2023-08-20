/* eslint-disable react/prop-types */
// import demo from "../../assets/Home/Photo.svg";
const SingleProducts = ({ product }) => {
	const { name, price, img, category, offerPrice, reviews } = product;
	return (
		<div>
			<div className="shadow-lg w-full mt-8 p-10 rounded-2xl  ">
				<p className="text-base font-bold bg-[#274C5B] text-white px-3 py-1 inline-block rounded-md ">
					{category}
				</p>
				<img src={img} width={336} height={324} alt="product-image" />
				<p className="text-xl text-[#274C5B]  font-semibold">{name}</p>

				<div className="mt-5 flex justify-between items-center">
					<div>
						<p className="line-through text-sm font-semibold inline-block mr-2">
							{price}
						</p>
						<p className="text-lg font-bold text-[#274C5B] inline-block">
							{offerPrice}
						</p>
					</div>
					<div>
						<p className="text-[#FFA858] text-4xl">{reviews}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProducts;
