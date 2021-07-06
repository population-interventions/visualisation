var scenarioCells = document.querySelectorAll('#scenario-heatmap td');
var maxInfections = document.getElementById("infection-slider").value;
var maxLockdown = document.getElementById("lockdown-slider").value;
var maxDeaths = document.getElementById("death-slider").value;
var maxHospital = document.getElementById("hospitalisation-slider").value;
var domainSelector = document.getElementById("heatmapScenarioDomainSelector").value;

// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------
for(var i = 0, max = scenarioCells.length; i < max; i++) {
    var node = scenarioCells[i];

    // get data values from table cells
	eval('var infectVal = node.dataset.infect' + domainSelector + ';');
	eval('var lockdownVal = node.dataset.lockdown' + domainSelector + ';');
	eval('var deathsVal = node.dataset.deaths' + domainSelector + ';');
	eval('var hospitalVal = node.dataset.hospital' + domainSelector + ';');
	var lockdownVal = lockdownVal * 100
	 
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
	var domainSelector = document.getElementById("heatmapScenarioDomainSelector").value;
	
	for(var i = 0, max = scenarioCells.length; i < max; i++) {
		var node = scenarioCells[i];

		// get data values from table cells
		eval('var infectVal = node.dataset.infect' + domainSelector + ';');
		eval('var lockdownVal = node.dataset.lockdown' + domainSelector + ';');
		eval('var deathsVal = node.dataset.deaths' + domainSelector + ';');
		eval('var hospitalVal = node.dataset.hospital' + domainSelector + ';');	
		var lockdownVal = lockdownVal * 100
		
		// check for value and colour accordingly
		if (Math.round(infectVal) <= maxInfections && lockdownVal <= maxLockdown && Math.round(deathsVal) <= maxDeaths && Math.round(hospitalVal) <= maxHospital)  {
			node.style.backgroundColor = "#69B34C";
		} else {
			node.style.backgroundColor = "#FF0D0D";
			node.style.color = "#fff";
		}
	}
};
	
