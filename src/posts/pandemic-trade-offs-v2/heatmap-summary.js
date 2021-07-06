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

    node.innerHTML = variableOfInterest;

    // check for value and colour accordingly
    if (variableOfInterest <= 3) {
        node.style.backgroundColor = "#69B34C";
        } else if (variableOfInterest > 3 && variableOfInterest <= 9) {
        node.style.backgroundColor = "#ACB334";
	} else if (variableOfInterest > 9 && variableOfInterest <= 81) {
        node.style.backgroundColor = "#FAB733";
	} else if (variableOfInterest > 81 && variableOfInterest <= 243) {
        node.style.backgroundColor = "#FF8E15";
	} else if (variableOfInterest > 243 && variableOfInterest <= 729) {
        node.style.backgroundColor = "#FF4E11";
        node.style.color = "#fff";
	} else {
        node.style.backgroundColor = "#FF0D0D";
        node.style.color = "#fff";
	}
}

for(var i = 0, max = lockdownCells.length; i < max; i++) {
    var node = lockdownCells[i];

    node.innerHTML = Math.round(node.dataset.lockdownYr1*100) + "%";

    // get data values from table cells
    var lockdownYr1 = node.dataset.lockdownYr1; 
    var lockdownYr2 = node.dataset.lockdownYr2; 

    // check for value and colour accordingly
    if (lockdownYr1 == 0.0) {
        node.style.backgroundColor = "#69B34C";
	} else if (lockdownYr1 > 0.0 && lockdownYr1 <= 0.03) {
        node.style.backgroundColor = "#ACB334";
	} else if (lockdownYr1 > 0.03 && lockdownYr1 <= 0.05) {
        node.style.backgroundColor = "#FAB733";
	} else if (lockdownYr1 > 0.05 && lockdownYr1 <= 0.10) {
        node.style.backgroundColor = "#FF8E15";
	} else if (lockdownYr1 > 0.10 && lockdownYr1 <= 0.15) {
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


	for(var i = 0, max = infectionCells.length; i < max; i++) {
		var node = infectionCells[i];

		eval('var variableOfInterest = node.dataset.' + variableSelector + domainSelector + ';');
		node.innerHTML = variableOfInterest;
	
		// check for value and colour accordingly
		if (variableOfInterest <= 3) {
			node.style.backgroundColor = "#69B34C";
			node.style.color = "#000";
			} else if (variableOfInterest > 3 && variableOfInterest <= 9) {
			node.style.backgroundColor = "#ACB334";
			node.style.color = "#000";
			} else if (variableOfInterest > 9 && variableOfInterest <= 81) {
			node.style.backgroundColor = "#FAB733";
			node.style.color = "#000";
			} else if (variableOfInterest > 81 && variableOfInterest <= 243) {
			node.style.backgroundColor = "#FF8E15";
			node.style.color = "#000";
			} else if (variableOfInterest > 243 && variableOfInterest <= 729) {
			node.style.backgroundColor = "#FF4E11";
			node.style.color = "#fff";
			} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
			}
		}

	for(var i = 0, max = lockdownCells.length; i < max; i++) {
		var node = lockdownCells[i];

		if (domainSelector == "Yr1") {
				var lockdownVal = node.dataset.lockdownYr1
		} else if (domainSelector == "Yr2") {
				var lockdownVal = node.dataset.lockdownYr2
		} else {
				var lockdownVal = node.dataset.lockdownFull
		}

		node.innerHTML = Math.round(lockdownVal*100) + "%";

		// check for value and colour accordingly
		if (lockdownVal == 0.0) {
			node.style.backgroundColor = "#69B34C";
			node.style.color = "#000";
			} else if (lockdownVal > 0.0 && lockdownVal <= 0.03) {
			node.style.backgroundColor = "#ACB334";
			node.style.color = "#000";
			} else if (lockdownVal > 0.03 && lockdownVal <= 0.05) {
			node.style.backgroundColor = "#FAB733";
			node.style.color = "#000";
			} else if (lockdownVal > 0.05 && lockdownVal <= 0.10) {
			node.style.backgroundColor = "#FF8E15";
			node.style.color = "#000";
			} else if (lockdownVal > 0.10 && lockdownVal <= 0.15) {
			node.style.backgroundColor = "#FF4E11";
			node.style.color = "#fff";
			} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
			}
		}
}