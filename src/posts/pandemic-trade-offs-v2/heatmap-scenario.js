var scenarioCells = document.querySelectorAll('#scenario-heatmap td');
var maxInfections = document.getElementById("infection-slider").value;
var maxLockdown = document.getElementById("lockdown-slider").value;


// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------
for(var i = 0, max = scenarioCells.length; i < max; i++) {
    var node = scenarioCells[i];

    // get data values from table cells
    var infectVal = node.dataset.infectYr1; 
    var lockdownVal = node.dataset.lockdownYr1 * 100;
	 
    // check for value and colour accordingly
    if (infectVal <= maxInfections && lockdownVal <= maxLockdown) {
        node.style.backgroundColor = "#69B34C";
	} else {
        node.style.backgroundColor = "#FF0D0D";
        node.style.color = "#fff";
	}
};

// ------------------------------------------------------------
// Update heatmaps --------------------------------------------
// ------------------------------------------------------------

function updateScenarioHeatmap() {
	var scenarioCells = document.querySelectorAll('#scenario-heatmap td');
	var maxInfections = document.getElementById("infection-slider").value;
	var maxLockdown = document.getElementById("lockdown-slider").value;
	
	for(var i = 0, max = lockdownCells.length; i < max; i++) {
		var node = lockdownCells[i];
		var node = scenarioCells[i];
		var infectVal = node.dataset.infectYr1; 
		var lockdownVal = node.dataset.lockdownYr1 * 100
		
		// check for value and colour accordingly
		if (infectVal <= maxInfections && lockdownVal <= maxLockdown) {
			node.style.backgroundColor = "#69B34C";
		} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
		}
	}
};
	
