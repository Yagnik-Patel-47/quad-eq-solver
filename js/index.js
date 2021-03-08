"use strict";

const xsCo = document.querySelector(".xs");
const xCo = document.querySelector(".x");
const con = document.querySelector(".c");
const subBtn = document.querySelector("#sub-btn");
const resultBar = document.querySelector(".resultBar");
const clearBtn = document.querySelector("#reset-btn");

let root1, root2;

function pDefault(e) {
	e.preventDefault();
}

function getAnswer(a, b, c) {
	// calculate discriminant
	let discriminant = b * b - 4 * a * c;
	
	// condition for real and different roots
	if (discriminant > 0) {
	    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	    // result
	    resultBar.innerHTML = `
	    	<h5>Answer👇🏻</h5>
	    	<p>α --> “ <span class="answerText">${root1}</span> ”</p>
	    	<p>β --> “ <span class="answerText">${root2}</span> ”</p>
	    	<p>Discriminant --> ${discriminant}</p>
	    `;
	}
	// condition for real and equal roots
	else if (discriminant === 0) {
	    root1 = root2 = -b / (2 * a);
	    // result
	    resultBar.innerHTML = `
	    	<h5>Answer👇🏻</h5>
	    	<p>Same Roots</p>
	    	<p>α & β --> “ <span class="answerText">${root1}</span> ”</p>
	    	<p>Discriminant --> ${discriminant}</p>
	    `;
	}
	// if roots are not real
	else {
		/*
	    let realPart = (-b / (2 * a)).toFixed(2);
	    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
	
	    // result
	    console.log(
	    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
	  );
	  */
	  resultBar.innerHTML = `
	    	<h5>Answer👇🏻</h5>
	    	<p>No Real Roots</p>
	    	<p>Discriminant --> ${discriminant}</p>
	    `;
	}
}

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems);
});

subBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let firstNum = Number(xsCo.value);
	let secondNum = Number(xCo.value);
	let thirdNum = Number(con.value);
	if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
		let instance = M.Modal.getInstance(document.querySelector("#modal1"));
		instance.open();
	} else if (xsCo.value === "" || xCo.value === "" || con.value === "") {
		let instance = M.Modal.getInstance(document.querySelector("#modal1"));
		instance.open();
	} else {
  	getAnswer(firstNum, secondNum, thirdNum);
  	resultBar.classList.remove("hidden_result");
	}
});

clearBtn.addEventListener("click", () => {
  resultBar.classList.add("hidden_result");
});