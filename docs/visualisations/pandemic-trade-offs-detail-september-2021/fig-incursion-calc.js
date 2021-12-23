
let preCOVIDarrivals = 31000000;
let calcArrivalsType = 'pc';

function truncate(id, min, max) {

	let value = document.querySelector(id).value;
	document.querySelector(id).value = Math.max(min, Math.min(max, Number(value)));

}

function calcToggle(input) {

	if (input == 'n') {
		document.querySelector('#calc-toggle-n').classList.add('on');
		document.querySelector('#calc-toggle-pc').classList.remove('on');
		document.querySelector('#calc-arrivals-input-pc').classList.add('hide');
		document.querySelector('#calc-arrivals-input-n').classList.remove('hide');
		calcArrivalsType = 'n';
	} else if (input == 'pc') {
		document.querySelector('#calc-toggle-n').classList.remove('on');
		document.querySelector('#calc-toggle-pc').classList.add('on');
		document.querySelector('#calc-arrivals-input-pc').classList.remove('hide');
		document.querySelector('#calc-arrivals-input-n').classList.add('hide');
		calcArrivalsType = 'pc';
	}
}

function balance(input) {

	if (input == 'n') {
		document.querySelector('#calc-arrivals-pc').value = (document.querySelector('#calc-arrivals-n').value/preCOVIDarrivals)*100;
	} else if (input == 'pc') {
		document.querySelector('#calc-arrivals-n').value = (document.querySelector('#calc-arrivals-pc').value/100)*preCOVIDarrivals;
	}

}

function simulate(nArrivals, pcArrivals, nInfections, pcVaccinated) {

	let mu1 = Number(pcArrivals),
		sig1 = 0.1,
		mu2 = Number(nInfections),
		sig2 = 0.25*mu2,
		mu3 = Number(pcVaccinated),
		sig3 = 0.1,
		mu4 = 0.7,
		sig4 = 0.06,
		mu6 = 0.5,
		sig6 = 0.1;

	let a1 = ((1-mu1)/math.pow(sig1,2) - 1/mu1)*math.pow(mu1,2),
		b1 = a1*(1/mu1 - 1),
		MEAN = math.log(mu2),
		SD = (math.log(mu2 + 1.96*sig2) - math.log(mu2 - 1.96*sig2))/3.92,
		a3 = ((1-mu3)/math.pow(sig3,2) - 1/mu3)*math.pow(mu3,2),
		b3 = a3*(1/mu3 - 1),
		a4 = ((1-mu4)/math.pow(sig4,2) - 1/mu4)*math.pow(mu4,2),
		b4 = a4*(1/mu4 - 1),
		a6 = ((1-mu6)/math.pow(sig6,2) - 1/mu6)*math.pow(mu6,2),
		b6 = a6*(1/mu6 - 1);

	let H = Math.random(),
		F = 1 + jStat.beta.inv(H, 99, 3) + jStat.beta.inv(H, 9, 1) + jStat.beta.inv(H, 8, 4) + jStat.beta.inv(H, 10, 16),
		D = jStat.beta.inv(Math.random(), a3, b3);

	if (calcArrivalsType == 'pc') {
		return jStat.beta.inv(Math.random(), a1, b1) * preCOVIDarrivals/365 * F * (1 - jStat.beta.inv(Math.random(), a6, b6)) * math.exp( jStat.normal.inv(Math.random(), MEAN, SD) ) / 100000 / ( D + (1 - D)/(1 - jStat.beta.inv(Math.random(), a4, b4)) );
	} else if (calcArrivalsType == 'n') {
		return Number(nArrivals)/365 * F * (1 - jStat.beta.inv(Math.random(), a6, b6)) * math.exp( jStat.normal.inv(Math.random(), MEAN, SD) ) / 100000 / ( D + (1 - D)/(1 - jStat.beta.inv(Math.random(), a4, b4)) );
	}

}

function estimate() {

	truncate('#calc-arrivals-pc', 2, 98);
	truncate('#calc-arrivals-n', 0, 8000000000);
	truncate('#calc-infections', 0.1, 99999);
	truncate('#calc-vaccinated', 3, 98);

	let nArrivals = document.querySelector("#calc-arrivals-n").value,
		pcArrivals = document.querySelector("#calc-arrivals-pc").value/100,
		nInfections = document.querySelector("#calc-infections").value,
		pcVaccinated = document.querySelector("#calc-vaccinated").value/100;

	let simulations = [];
	for (let k = 0; k < 10000; k++) {
		simulations.push(simulate(nArrivals, pcArrivals, nInfections, pcVaccinated))
	}

	document.querySelector("#calc-infected-arrivals").innerHTML = Math.round(math.mean(...simulations)*10000)/10000;
	document.querySelector("#calc-qL").innerHTML = Math.round(math.quantileSeq(simulations, 0.025)*10000)/10000;
	document.querySelector("#calc-qU").innerHTML = Math.round(math.quantileSeq(simulations, 0.975)*10000)/10000;

	document.querySelector("#calc-infected-arrivals-year").innerHTML = Math.round(365*math.mean(...simulations)*10000)/10000;
	document.querySelector("#calc-qL-year").innerHTML = Math.round(365*math.quantileSeq(simulations, 0.025)*10000)/10000;
	document.querySelector("#calc-qU-year").innerHTML = Math.round(365*math.quantileSeq(simulations, 0.975)*10000)/10000;
}

estimate()