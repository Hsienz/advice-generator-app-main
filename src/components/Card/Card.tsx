import { useEffect } from "react";
import iconDice from "../../assets/images/icon-dice.svg";
const Card = () => {
	const handleOnClick = () => {
		fetch("https://api.adviceslip.com/advice", { method: "GET" })
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
    useEffect(()=>{
        handleOnClick()
    },[])
	return (
		<div>
			<button onClick={handleOnClick}>
				<h1>
					Advice #<span id="id"></span>
				</h1>
				<p id="advice"></p>
				<img src={iconDice} alt="" />
			</button>
		</div>
	);
};
export default Card;
