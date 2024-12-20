import React, {useEffect, useState} from "react";

const Loading = ({children}) => {
	const [count, setCount] = useState(0);
	const animation = {
		width: `${count}%`,
		transition: "width 0.5s ease",
	};

	useEffect(() => {
		let timeout;
		if (count !== 100) {
			timeout = setTimeout(() => {
				setCount((prev) => prev + 10);
			}, 100);
		}
		return () => clearTimeout(timeout);
	}, [count]);

	return (
		<div>
			{count !== 100 ? (
				<div className="w-full h-screen bg-[#071121] text-white flex flex-col justify-center items-center">
					<h1 className="text-4xl animate-charcter">Fetching...</h1>
					<div className="loading  overflow-hidden relative max-w-[400px] rounded-lg w-full h-[10px]  mt-3">
						<div
							style={animation}
							className={`w-full absolute   bg-pink-800 duration-150 h-[20px]`}
						></div>
					</div>
					<span className="text-4xl text-gray-400">{count} %</span>
				</div>
			) : (
				children
			)}
		</div>
	);
};

export default Loading;
