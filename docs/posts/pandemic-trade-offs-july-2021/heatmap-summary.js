// ------------------------------------------------------------
// Colour scales ----------------------------------------------
// ------------------------------------------------------------
const infectYr1_scale = [0.2, 0.4, 0.6, 0.8, 1];
const infectYr2_scale = [3, 15, 81, 243, 729];
const infectFull_scale = [3, 15, 81, 243, 729];
const deathsYr1_scale = [2, 4, 6, 8, 10];
const deathsYr2_scale = [12, 35, 100, 500, 2000];
const deathsFull_scale = [12, 35, 100, 500, 2000];
const hospitalYr1_scale = [7, 10, 15, 25, 35];
const hospitalYr2_scale = [75, 200, 500, 2000, 6000];
const hospitalFull_scale = [75, 200, 500, 2000, 6000];
const lockdown_scale = [0.01, 0.02, 0.04, 0.06, 0.09]

// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------

var infectionCells = document.querySelectorAll('#infections-heatmap td');
var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');

var variableSelector = document.getElementById("heatmapVarSelector").value;
var domainSelector = document.getElementById("heatmapDomainSelector").value;


for(var i = 0, max = infectionCells.length; i < max; i++) {
    var node = infectionCells[i];

	eval('var variableOfInterest = node.dataset.' + variableSelector + domainSelector + ';');
	eval('var upperBound = node.dataset.' + variableSelector + domainSelector + 'Upper;');
	eval('var lowerBound = node.dataset.' + variableSelector + domainSelector + 'Lower;');
	eval('var scale =' + variableSelector + domainSelector + '_scale;');

    node.innerHTML = variableOfInterest;
	node.innerHTML += "<span class='cell-tooltip'>" +
	"<div class='tooltip-row'><span>Upper bound: </span><span>"+ upperBound + "</span></div>" +
	"<div class='tooltip-row'><span>Lower bound: </span><span>"+ lowerBound + "</span></div>" +
	"</span>"

    // check for value and colour accordingly
    if (variableOfInterest <= scale[0]) {
        node.style.backgroundColor = "#69B34C";
        } else if (variableOfInterest > scale[0] && variableOfInterest <= scale[1]) {
        node.style.backgroundColor = "#ACB334";
	} else if (variableOfInterest > scale[1] && variableOfInterest <= scale[2]) {
        node.style.backgroundColor = "#FAB733";
	} else if (variableOfInterest > scale[2] && variableOfInterest <= scale[3]) {
        node.style.backgroundColor = "#FF8E15";
	} else if (variableOfInterest > scale[3] && variableOfInterest <= scale[4]) {
        node.style.backgroundColor = "#FF4E11";
        node.style.color = "#fff";
	} else {
        node.style.backgroundColor = "#FF0D0D";
        node.style.color = "#fff";
	}
}

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
    if (lockdownVal <= scale[0]) {
        node.style.backgroundColor = "#69B34C";
	} else if (lockdownVal > scale[0] && lockdownVal <= scale[1]) {
        node.style.backgroundColor = "#ACB334";
	} else if (lockdownVal > scale[1] && lockdownVal <= scale[2]) {
        node.style.backgroundColor = "#FAB733";
	} else if (lockdownVal > scale[2] && lockdownVal <= scale[3]) {
        node.style.backgroundColor = "#FF8E15";
	} else if (lockdownVal > scale[3] && lockdownVal <= scale[4]) {
        node.style.backgroundColor = "#FF4E11";
        node.style.color = "#fff";
	} else {
        node.style.backgroundColor = "#FF0D0D";
        node.style.color = "#fff";
	}
}


// ------------------------------------------------------------
// Update heatmaps --------------------------------------------
// ------------------------------------------------------------

function updateHeatmap() {
	var variableSelector = document.getElementById("heatmapVarSelector").value;
	var domainSelector = document.getElementById("heatmapDomainSelector").value;

	var infectionCells = document.querySelectorAll('#infections-heatmap td');
	var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');

	eval('var scale =' + variableSelector + domainSelector + '_scale;');
	for(var i = 0, max = infectionCells.length; i < max; i++) {
		var node = infectionCells[i];

		eval('var variableOfInterest = node.dataset.' + variableSelector + domainSelector + ';');
		eval('var upperBound = node.dataset.' + variableSelector + domainSelector + 'Upper;');
		eval('var lowerBound = node.dataset.' + variableSelector + domainSelector + 'Lower;');
		eval('var scale =' + variableSelector + domainSelector + '_scale;');
	
		node.innerHTML = variableOfInterest;
		node.innerHTML += "<span class='cell-tooltip'>" +
		"<div class='tooltip-row'><span>Upper bound: </span><span>"+ upperBound + "</span></div>" +
		"<div class='tooltip-row'><span>Lower bound: </span><span>"+ lowerBound + "</span></div>" +
		"</span>"
	
		// check for value and colour accordingly
		if (variableOfInterest <= scale[0]) {
			node.style.backgroundColor = "#69B34C";
			node.style.color = "#000";
			} else if (variableOfInterest > scale[0] && variableOfInterest <= scale[1]) {
			node.style.backgroundColor = "#ACB334";
			node.style.color = "#000";
			} else if (variableOfInterest > scale[1] && variableOfInterest <= scale[2]) {
			node.style.backgroundColor = "#FAB733";
			node.style.color = "#000";
			} else if (variableOfInterest > scale[2] && variableOfInterest <= scale[3]) {
			node.style.backgroundColor = "#FF8E15";
			node.style.color = "#000";
			} else if (variableOfInterest > scale[3] && variableOfInterest <= scale[4]) {
			node.style.backgroundColor = "#FF4E11";
			node.style.color = "#fff";
			} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
			}
		}

	var scale = lockdown_scale;
	for(var i = 0, max = lockdownCells.length; i < max; i++) {
		var node = lockdownCells[i];

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
		if (lockdownVal <= scale[0]) {
			node.style.backgroundColor = "#69B34C";
			node.style.color = "#000";
			} else if (lockdownVal > scale[0] && lockdownVal <= scale[1]) {
			node.style.backgroundColor = "#ACB334";
			node.style.color = "#000";
			} else if (lockdownVal > scale[1] && lockdownVal <= scale[2]) {
			node.style.backgroundColor = "#FAB733";
			node.style.color = "#000";
			} else if (lockdownVal > scale[2] && lockdownVal <= scale[3]) {
			node.style.backgroundColor = "#FF8E15";
			node.style.color = "#000";
			} else if (lockdownVal > scale[3] && lockdownVal <= scale[4]) {
			node.style.backgroundColor = "#FF4E11";
			node.style.color = "#fff";
			} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
			}
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