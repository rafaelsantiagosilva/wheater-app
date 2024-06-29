import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
	const { location, current } = data;

	return (
		<div className="bg-white text-slate-700 p-6 mt-10 rounded-md shadow-md">
			<div className="text-center">
				<p className="block text-lg font-bold">{location.name}</p>
				<p className="text-slate-400 text-sm">
					<span>{location.region}, </span>
					<span>{location.country}</span>
				</p>
			</div>

			<div className="mt-4">
				<p className="font-bold text-center">
					<span className="text-7xl">{current.temp_c}</span>
					<span className="text-2xl">ºC</span>
				</p>
			</div>

			<div className="text-center flex flex-col items-center">
				<img src={current.condition.icon}></img>
				<p className="font-medium">{current.condition.text}</p>
			</div>
		</div>
	);
}

export default Card;

Card.propTypes = {
	data: propTypes.object,
};
