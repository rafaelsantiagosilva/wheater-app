import React from "react";
import Card from "./components/Card";

function App() {
	return (
		<div className="flex flex-col w-full h-screen items-center justify-center">
			<form>
				<input
					type="text"
					name="inpcity"
					id="inpcity"
					placeholder="Cidade"
					className="p-3 rounded-md outline-none"
				/>
				<button
					type="submit"
					className="bg-blue-600 p-3 rounded-md ml-3 text-white font-bold hover:bg-blue-500"
				>
					Pesquisar
				</button>
			</form>
			<Card></Card>
		</div>
	);
}

export default App;
