import React, { useState } from "react";
import fetchData from "./services/api";
import initialData from "./helpers/initialData";
import Card from "./components/Card";

function App() {
	const [city, setCity] = useState("");
	const [data, setData] = useState(initialData);

	const handleSubmit = (event) => {
		event.preventDefault();
		fetchData(city).then((res) => {
			setData(res);
		});
	};

	return (
		<div className="flex flex-col w-full h-screen items-center justify-center">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="inpcity"
					id="inpcity"
					placeholder="Cidade"
					className="p-3 rounded-md outline-none"
					value={city}
					onChange={({ target: { value } }) => {
						setCity(value);
					}}
				/>
				<button
					type="submit"
					className="bg-blue-600 p-3 rounded-md ml-3 text-white font-bold hover:bg-blue-500"
				>
					Pesquisar
				</button>
			</form>
			<Card data={data} />
		</div>
	);
}

export default App;
