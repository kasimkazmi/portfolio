import React, { useState, useEffect } from "react";

import { skills } from "../data/data";
const Skills = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const scroll = () => {
			if (window.scrollY >= 1200) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", scroll);
		return () => window.removeEventListener("scroll", scroll);
	}, []);

	const visiblestyle = {
		opacity: visible ? 1 : 0,
		transition: "opacity 0.3s ease",
	};

	return (
		<div
			name="skills"
			className="w-full sm:h-screen bg-[#071121] text-gray-300"
		>
			<div className="max-w-[1000px] p-4 w-full  mx-auto flex flex-col justify-center">
				<div>
					<p
						style={visiblestyle}
						className="text-4xl font-bold inline border-b-4 border-pink-600"
					>
						Experience
					</p>
					<p style={visiblestyle} className="py-3">
						These are the technologies i have worked with
					</p>
				</div>

				<div
					style={visiblestyle}
					className="w-full sm:grid-cols-4 grid grid-cols-2 gap-6 text-center py-5"
				>
					{skills.map((skill) => (
						<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-150">
							<img
								className={`w-20 mx-auto ${skill.width && skill.width}`}
								src={skill.src}
								alt="html image"
							/>
							<p className="my-4">{skill.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
