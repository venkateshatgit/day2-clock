

function moveHand(hand, degree){
	degree = degree+90;
	rotate="rotate("+ degree + "deg)";
	hand.css("transform", rotate);
}

function setDate(){
	var secondHand = $(".seconds");
	var minuteHand = $(".minutes");
	var hourHand = $(".hours");


	var date = new Date();
	var seconds = date.getSeconds();
	var secondDeg = seconds*6;
	console.log(secondDeg);
	moveHand(secondHand, secondDeg);

	var minutes = date.getMinutes();
	var minuteDeg = minutes*6;
	console.log(minuteDeg);
	moveHand(minuteHand, minuteDeg);

	var hours = date.getHours()*60;
	var hourDeg = 0.5*hours;
	console.log(hourDeg);
	moveHand(hourHand, hourDeg);
}

setInterval(setDate, 1000);
