var scenarioCells = document.querySelectorAll('#scenario-heatmap td');
var maxInfections = document.getElementById("infection-slider").value;
var maxLockdown = document.getElementById("lockdown-slider").value;
var maxDeaths = document.getElementById("death-slider").value;
var maxHospital = document.getElementById("hospitalisation-slider").value;
var displayVarSelector = document.getElementById("heatmapScenarioDisplayVarSelector").value;


// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------
for(var i = 0, max = scenarioCells.length; i < max; i++) {
    var node = scenarioCells[i];

    // get data values from table cells
	var infectVal = node.dataset.infectYr2
	var lockdownVal = node.dataset.lockdownYr2 * 100
	var deathsVal = node.dataset.deathsYr2
	var hospitalVal = node.dataset.hospitalYr2

	eval('var displayVar = node.dataset.' + displayVarSelector + ';');
	node.innerHTML = displayVar;
	 
    // check for value and colour accordingly
    if (Math.round(infectVal) <= maxInfections && lockdownVal <= maxLockdown && Math.round(deathsVal) <= maxDeaths && Math.round(hospitalVal) <= maxHospital) {
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
	var maxDeaths = document.getElementById("death-slider").value;
	var maxHospital = document.getElementById("hospitalisation-slider").value;
	var displayVarSelector = document.getElementById("heatmapScenarioDisplayVarSelector").value;
	
	for(var i = 0, max = scenarioCells.length; i < max; i++) {
		var node = scenarioCells[i];

		// get data values from table cells
		var infectVal = node.dataset.infectYr2
		var lockdownVal = node.dataset.lockdownYr2 * 100
		var deathsVal = node.dataset.deathsYr2
		var hospitalVal = node.dataset.hospitalYr2
	
		eval('var displayVar = node.dataset.' + displayVarSelector + ';');
		node.innerHTML = displayVar;
		
		// check for value and colour accordingly
		if (Math.round(infectVal) <= maxInfections && lockdownVal <= maxLockdown && Math.round(deathsVal) <= maxDeaths && Math.round(hospitalVal) <= maxHospital)  {
			node.style.backgroundColor = "#69B34C";
		} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
		}
	}
};
	
