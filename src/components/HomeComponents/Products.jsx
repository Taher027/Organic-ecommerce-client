import { useState } from "react";
import SingleProducts from "./SingleProducts";
import { useEffect } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className="w-full lg:w-[90vw] mx-auto py-24 ">
			<div className="w-full">
				<p className="text-4xl text-[#7EB693] font-normal italic text-center ">
					Categories{" "}
				</p>
				<h2 className="text-[#274C5B] text-center font-bold text-[50px]">
					Our Products
				</h2>
				<div className="mt-10 mx-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  lg:gap-10 justify-center items-center ">
					{products?.map((product) => (
						<SingleProducts key={product.id} product={product}></SingleProducts>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
