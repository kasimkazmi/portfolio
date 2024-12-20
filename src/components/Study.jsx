import study from "../assets/projects/Screenshot 2024-06-18 at 00.20.12.png";

export default function Study() {
	return (
		<div
			name="study"
			bg
			className="w-full h-screen bg-[#071121] flex justify-center items-center p-4"
		>
			<div className="pb-8">
				<p className="text-4xl font-bold inline border-pink-600 border-b-4 text-gray-300">
					Study & University
				</p>
				<p className=" py-4 text-gray-300">
					// Currently i am in six semester in informatics degree study in
					poland.
					{/* <span className="font-medium"> Rajakazmi47@gmail.com</span> */}
				</p>
				<div>
					<h2 className=" text-gray-300 text-3xl text-center font-extrabold">
						Akademia Techniczno-Informatyczna w Naukach Stosowanych
					</h2>
				</div>
				<img src={study} alt="study" />
			</div>
		</div>
	);
}
