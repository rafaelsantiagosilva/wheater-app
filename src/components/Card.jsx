import React from "react";

function Card() {
	return (
		<div className="bg-white text-slate-700 p-6 mt-10 rounded-md shadow-md">
			<div className="text-center">
				<p className="block text-lg font-bold">Fortaleza</p>
				<p className="text-slate-400 text-sm">
					<span className="">Ceará, </span>
					<span className="">Brasil</span>
				</p>
			</div>

			<div className="mt-4">
				<p className="font-bold">
					<span className="text-7xl">27</span>
					<span className="text-2xl">ºC</span>
				</p>
			</div>

			<div className="text-center">
				<span>icone</span>
				<p className="font-medium">Nublado</p>
			</div>
		</div>
	);
}

export default Card;
