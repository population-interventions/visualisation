// ------------------------------------------------------------
// Colour scales ----------------------------------------------
// ------------------------------------------------------------
const infectYr1_scale = [3, 15, 81, 243, 729];
const infectYr2_scale = [3, 15, 81, 243, 729];
const infectFull_scale = [3, 15, 81, 243, 729];
const deathsYr1_scale = [2, 4, 6, 8, 10];
const deathsYr2_scale = [12, 35, 100, 500, 2000];
const deathsFull_scale = [12, 35, 100, 500, 2000];
const hospitalYr1_scale = [7, 10, 15, 25, 35];
const hospitalYr2_scale = [75, 200, 500, 2000, 6000];
const hospitalFull_scale = [75, 200, 500, 2000, 6000];
const lockdown_scale = [0.01, 0.02, 0.04, 0.06, 0.09];

const infectYr1_min = 0;
const infectYr1_max = 25;
const infectYr2_min = 0;
const infectYr2_max = 2400;
const infectFull_min = 0;
const infectFull_max = 1500;

const deathsYr1_min = 0;
const deathsYr1_max = 70;
const deathsYr2_min = 0;
const deathsYr2_max = 7000;
const deathsFull_min = 0;
const deathsFull_max = 4200;

const hospitalYr1_min = 0;
const hospitalYr1_max = 1000;
const hospitalYr2_min = 0;
const hospitalYr2_max = 95000;
const hospitalFull_min = 0;
const hospitalFull_max = 60000;

const icuYr1_min = 0;
const icuYr1_max = 45;
const icuYr2_min = 0;
const icuYr2_max = 15000;
const icuFull_min = 0;
const icuFull_max = 9500;

const lockdownYr1_min = 0;
const lockdownYr1_max = 0.5;
const lockdownYr2_min = 0;
const lockdownYr2_max = 0.5;
const lockdownFull_min = 0;
const lockdownFull_max = 0.5;

    /* Green - Yellow - Red */
const colours = {
	0	:	'#41af4c'	,
	2.5	:	'#41b146'	,
	5	:	'#41b340'	,
	7.5	:	'#47b540'	,
	10	:	'#4db73f'	,
	12.5	:	'#53b93f'	,
	15	:	'#5abb3e'	,
	17.5	:	'#61bd3d'	,
	20	:	'#68bf3d'	,
	22.5	:	'#6fc13c'	,
	25	:	'#77c33c'	,
	27.5	:	'#7fc43c'	,
	30	:	'#87c53c'	,
	32.5	:	'#8fc73c'	,
	35	:	'#98c83c'	,
	37.5	:	'#a0c93c'	,
	40	:	'#a9ca3d'	,
	42.5	:	'#b1cb3d'	,
	45	:	'#bacd3d'	,
	47.5	:	'#c3ce3d'	,
	50	:	'#cccf3e'	,
	52.5	:	'#d0cc3e'	,
	55	:	'#d1c53e'	,
	57.5	:	'#d2be3f'	,
	60	:	'#d3b73f'	,
	62.5	:	'#d5b03f'	,
	65	:	'#d6a940'	,
	67.5	:	'#d7a140'	,
	70	:	'#d89a40'	,
	72.5	:	'#d99341'	,
	75	:	'#da8b41'	,
	77.5	:	'#db8441'	,
	80	:	'#dc7c42'	,
	82.5	:	'#dd7442'	,
	85	:	'#de6d43'	,
	87.5	:	'#df6543'	,
	90	:	'#e05d44'	,
	92.5	:	'#e15544'	,
	95	:	'#e24d45'	,
	97.5	:	'#e34545'	,
	100	:	'#e34545'	
}


function logColor(colours,val,maxVal,minVal) {
    var perc = ((val) / maxVal) * 100
	var scaleFactor = 100/Math.log(100)
	var perc_rounded = 2.5 * Math.round(Math.log(perc)*scaleFactor/2.5)
	if (perc_rounded > 100) {
		perc_rounded = 100
	}
	if (perc_rounded < 0) {
		perc_rounded = 0
	}


    return colours[perc_rounded]; 
}

function linearColor(colours,val,maxVal,minVal) {
    var perc = ((val - minVal) / maxVal) * 100
	var perc_rounded = 5 * Math.round(perc/5)
	if (perc_rounded > 100) {
		perc_rounded = 100
	}
    return colours[perc_rounded]; 
}

// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------

var infectionCells = document.querySelectorAll('#infections-heatmap td');
var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');

var variableSelector = document.getElementById("heatmapVarSelector").value;
var domainSelector = document.getElementById("heatmapDomainSelector").value;
eval('var minVal =' + variableSelector + domainSelector + '_min;');
eval('var maxVal =' + variableSelector + domainSelector + '_max;');


for(var i = 0, max = infectionCells.length; i < max; i++) {
    var node = infectionCells[i];

	eval('var variableOfInterest = node.dataset.' + variableSelector + domainSelector + ';');
	eval('var upperBound = node.dataset.' + variableSelector + domainSelector + 'Upper;');
	eval('var lowerBound = node.dataset.' + variableSelector + domainSelector + 'Lower;');


    node.innerHTML = variableOfInterest;
	node.innerHTML += "<span class='cell-tooltip'>" +
	"<div class='tooltip-row'><span>Upper bound: </span><span>"+ upperBound + "</span></div>" +
	"<div class='tooltip-row'><span>Lower bound: </span><span>"+ lowerBound + "</span></div>" +
	"</span>"

    // check for value and colour accordingly
	node.style.backgroundColor = logColor(colours,variableOfInterest,maxVal,minVal);
	node.style.color = "#fff";
	
}

eval('var minVal = lockdown' + domainSelector + '_min;');
eval('var maxVal = lockdown' + domainSelector + '_max;');

for(var i = 0, max = lockdownCells.length; i < max; i++) {
    var node = lockdownCells[i];

	var scale = lockdown_scale;

    // get data values from table cells
    eval('var lockdownVal = node.dataset.lockdown' + domainSelector + ';');
	eval('var upperBound = Math.round(node.dataset.lockdown' + domainSelector + 'Upper*100) + "%";');
	eval('var lowerBound = Math.round(node.dataset.lockdown' + domainSelector + 'Lower*100) + "%";');


    node.innerHTML = Math.round(lockdownVal*100) + "%";
	node.innerHTML += "<span class='cell-tooltip'>" +
	"<div class='tooltip-row'><span>Upper bound: </span><span>"+ upperBound + "</span></div>" +
	"<div class='tooltip-row'><span>Lower bound: </span><span>"+ lowerBound + "</span></div>" +
	"</span>"

    // check for value and colour accordingly
	node.style.backgroundColor = linearColor(colours,lockdownVal,maxVal,minVal);
	node.style.color = "#fff";
}


// ------------------------------------------------------------
// Update heatmaps --------------------------------------------
// ------------------------------------------------------------

function updateHeatmap() {
	var variableSelector = document.getElementById("heatmapVarSelector").value;
	var domainSelector = document.getElementById("heatmapDomainSelector").value;

	var infectionCells = document.querySelectorAll('#infections-heatmap td');
	var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');
	eval('var minVal =' + variableSelector + domainSelector + '_min;');
	eval('var maxVal =' + variableSelector + domainSelector + '_max;');

	for(var i = 0, max = infectionCells.length; i < max; i++) {
		var node = infectionCells[i];

		eval('var variableOfInterest = node.dataset.' + variableSelector + domainSelector + ';');
		eval('var upperBound = node.dataset.' + variableSelector + domainSelector + 'Upper;');
		eval('var lowerBound = node.dataset.' + variableSelector + domainSelector + 'Lower;');

	
		node.innerHTML = variableOfInterest;
		node.innerHTML += "<span class='cell-tooltip'>" +
		"<div class='tooltip-row'><span>Upper bound: </span><span>"+ upperBound + "</span></div>" +
		"<div class='tooltip-row'><span>Lower bound: </span><span>"+ lowerBound + "</span></div>" +
		"</span>"
	
		// check for value and colour accordingly
		node.style.backgroundColor = logColor(colours,variableOfInterest,maxVal,minVal);
		node.style.color = "#fff";
	}

	var scale = lockdown_scale;
	for(var i = 0, max = lockdownCells.length; i < max; i++) {
		var node = lockdownCells[i];

		// get data values from table cells
		eval('var lockdownVal = node.dataset.lockdown' + domainSelector + ';');
		eval('var upperBound = Math.round(node.dataset.lockdown' + domainSelector + 'Upper*100) + "%";');
		eval('var lowerBound = Math.round(node.dataset.lockdown' + domainSelector + 'Lower*100) + "%";');
		eval('var minVal = lockdown' + domainSelector + '_min;');
		eval('var maxVal = lockdown' + domainSelector + '_max;');

		node.innerHTML = Math.round(lockdownVal*100) + "%";
		node.innerHTML += "<span class='cell-tooltip'>" +
		"<div class='tooltip-row'><span>Upper bound: </span><span>"+ upperBound + "</span></div>" +
		"<div class='tooltip-row'><span>Lower bound: </span><span>"+ lowerBound + "</span></div>" +
		"</span>"

		// check for value and colour accordingly
		node.style.backgroundColor = linearColor(colours,lockdownVal,maxVal,minVal);
		node.style.color = "#fff";
	}
}


// ------------------------------------------------------------
// Cell tooltip positioning -----------------------------------
// ------------------------------------------------------------
document.getElementById("infections-heatmap").addEventListener("mousemove", e => {
	// e = Mouse move event.
	var rect = document.getElementById("infections-heatmap").getBoundingClientRect();
	var x = (e.clientX - rect.left)/rect.width; //x position within the element.
	var y = (e.clientY - rect.top)/rect.height;  //y position within the element.
	var tooltip = e.target.getElementsByClassName("cell-tooltip");

	if (x > 0.9) {
		$('.cell-tooltip').addClass('position-right');
	} else {
		$('.cell-tooltip').removeClass('position-right');
	}
	if (y > 0.8) {
		$('.cell-tooltip').addClass('position-top');
	} else {
		$('.cell-tooltip').removeClass('position-top');
	}
});

document.getElementById("lockdown-heatmap").addEventListener("mousemove", e => {
	// e = Mouse move event.
	var rect = document.getElementById("lockdown-heatmap").getBoundingClientRect();
	var x = (e.clientX - rect.left)/rect.width; //x position within the element.
	var y = (e.clientY - rect.top)/rect.height;  //y position within the element.
	var tooltip = e.target.getElementsByClassName("cell-tooltip");

	if (x > 0.8) {
		$('.cell-tooltip').addClass('position-right');
	} else {
		$('.cell-tooltip').removeClass('position-right');
	}
	if (y > 0.8) {
		$('.cell-tooltip').addClass('position-top');
	} else {
		$('.cell-tooltip').removeClass('position-top');
	}
});