import { useEffect } from "react";
import iconDice from "../../assets/images/icon-dice.svg";
import patternDividerDesktop from "../../assets/images/pattern-divider-desktop.svg"
import patternDividerMobile from "../../assets/images/pattern-divider-mobile.svg"
const Card = () => {
	const handleOnClick = () => {
		fetch("https://api.adviceslip.com/advice", { method: "GET", cache: 'no-cache' } )
			.then((res) => res.json())
			.then((res) => {
				let el = document.getElementById("id") as HTMLElement;
				el.innerHTML = res.slip.id;
				el = document.getElementById("advice") as HTMLElement;
				el.innerHTML = res.slip.advice;
			})
			.catch((e) => {
				console.log(e);
			});
	};
	useEffect(() => {
		handleOnClick();
	}, []);
	return (
		<div className="font-sans font-extrabold text-[28px] bg-Dark_Grayish_Blue rounded-lg flex flex-col items-center p-12 m-12 relative max-w-xl">
			<h1 className="text-Neon_Green text-base uppercase tracking-[0.2em]">
				Advice #<span id="id"></span>
			</h1>
			<p className="text-Light_Cyan mt-8">
				"<span id="advice"></span>"
			</p>
            <img src={patternDividerMobile} alt="" className="my-6 sm:hidden"/>
            <img src={patternDividerDesktop} alt="" className="my-6 hidden sm:block"/>
			<button onClick={handleOnClick} className="bg-Neon_Green p-5 rounded-full absolute bottom-0 translate-y-1/2 transition-all hover:shadow-[0_0_20px_10px_hsl(150,100%,66%,0.3)]">
				<img src={iconDice} alt="" />
			</button>
		</div>
	);
};
export default Card;
