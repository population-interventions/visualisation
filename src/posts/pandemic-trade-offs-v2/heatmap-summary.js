var infectionCells = document.querySelectorAll('#infections-heatmap td');
var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');

// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------
for(var i = 0, max = infectionCells.length; i < max; i++) {
    var node = infectionCells[i];

    node.innerHTML = node.dataset.infectYr1;

    // get data values from table cells
    var infectionsYr1 = node.dataset.infectYr1; 
    var infectionsYr2 = node.dataset.infectYr2; 

    // check for value and colour accordingly
    if (infectionsYr1 <= 3) {
        node.style.backgroundColor = "#69B34C";
        } else if (infectionsYr1 > 3 && infectionsYr1 <= 6) {
        node.style.backgroundColor = "#ACB334";
	} else if (infectionsYr1 > 6 && infectionsYr1 <= 12) {
        node.style.backgroundColor = "#FAB733";
	} else if (infectionsYr1 > 12 && infectionsYr1 <= 25) {
        node.style.backgroundColor = "#FF8E15";
	} else if (infectionsYr1 > 25 && infectionsYr1 <= 100) {
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

function updateHeatmapDomain() {
	var domainSelector = document.getElementById("heatmapDomainSelector");
	var domain = domainSelector.value;

	var infectionCells = document.querySelectorAll('#infections-heatmap td');
	var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');

	for(var i = 0, max = infectionCells.length; i < max; i++) {
		var node = infectionCells[i];
		if (domain == 1) {
				var infectVal = node.dataset.infectYr1
		} else if (domain == 2) {
				var infectVal = node.dataset.infectYr2
		} else {
				var infectVal = node.dataset.infectFull
		}
	
		node.innerHTML = infectVal;
	
		// check for value and colour accordingly
		if (infectVal <= 3) {
			node.style.backgroundColor = "#69B34C";
			node.style.color = "#000";
			} else if (infectVal > 3 && infectVal <= 6) {
			node.style.backgroundColor = "#ACB334";
			node.style.color = "#000";
			} else if (infectVal > 6 && infectVal <= 12) {
			node.style.backgroundColor = "#FAB733";
			node.style.color = "#000";
			} else if (infectVal > 12 && infectVal <= 25) {
			node.style.backgroundColor = "#FF8E15";
			node.style.color = "#000";
			} else if (infectVal > 25 && infectVal <= 100) {
			node.style.backgroundColor = "#FF4E11";
			node.style.color = "#fff";
			} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
			}
		}

	for(var i = 0, max = lockdownCells.length; i < max; i++) {
		var node = lockdownCells[i];

		if (domain == 1) {
				var lockdownVal = node.dataset.lockdownYr1
		} else if (domain == 2) {
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