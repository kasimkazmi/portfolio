import React from "react";

import { work } from "../data/work";
const Work = () => {
	return (
		<div name="work" className="w-full sm:h-screen bg-[#071121] text-gray-300">
			<div className="w-full max-w-[1000px]  flex flex-col p-4 justify-center mx-auto h-full  ">
				<div className="py-8">
					<p className="text-4xl font-bold border-b-4 border-pink-600 inline">
						Work
					</p>
					<p className="py-4">// check out my recent work</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
					{work.map((work) => (
						<div
							style={{
								backgroundImage: `url(${work.image})`,
								backgroundSize: "cover",
							}}
							className="w-full group shadow-lg  rounded-md flex justify-center content items-center"
						>
							<div className="group-hover:opacity-100 opacity-5 duration-200 flex flex-col items-center ">
								<span className="text-xl text-center  font-bold p-2 mb-4 text-white">
									{work.name}
								</span>
								<div className="flex justify-center gap-4">
									<a href={work.live}>
										<button className="bg-white text-black text-lg font-bold py-3 px-4 rounded-lg">
											Live
										</button>
									</a>
									<a href={work.github}>
										<button className="bg-white text-black text-lg font-bold py-3 px-4 rounded-lg">
											Github
										</button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* again */}
			</div>
		</div>
	);
};

export default Work;
