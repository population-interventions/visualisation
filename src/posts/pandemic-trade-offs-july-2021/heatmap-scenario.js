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

	if (displayVarSelector ==  "lockdownYr2") {
		node.innerHTML = Math.round(displayVar*100)  + "%"
	};

	infectPass = (Math.round(infectVal) <= maxInfections ? true : false)
	deathsPass = (Math.round(deathsVal) <= maxDeaths ? true : false)
	hospitalPass = (Math.round(hospitalVal) <= maxHospital ? true : false)
	lockdownPass = (lockdownVal <= maxLockdown ? true : false) 

	// creating tooltip
	node.innerHTML += "<span class='cell-tooltip'>" +
	"<div class='tooltip-row " + (infectPass ? "scenario-success" : "scenario-failure") + "'><span>Infections / day: </span><span>"+ infectVal + "</span></div>" +
	"<div class='tooltip-row " + (deathsPass ? "scenario-success" : "scenario-failure") + "'><span>Deaths / year: </span><span>"+ deathsVal + "</span></div>" +
	"<div class='tooltip-row " + (hospitalPass ? "scenario-success" : "scenario-failure") + "'><span>Hospitalisations / year: </span><span>"+ hospitalVal + "</span></div>" +
	"<div class='tooltip-row " + (lockdownPass ? "scenario-success" : "scenario-failure") + "'><span>Lockdown %: </span><span>"+ Math.round(lockdownVal) + "</span></div>" +
	"</span>"
	 
    // check for value and colour accordingly
    if (infectPass && deathsPass && hospitalPass && lockdownPass)  {
        node.style.backgroundColor = "#41af4c";
		node.style.color = "#fff";
	} else {
        node.style.backgroundColor = "#e34545";
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

		infectPass = (Math.round(infectVal) <= maxInfections ? true : false)
		deathsPass = (Math.round(deathsVal) <= maxDeaths ? true : false)
		hospitalPass = (Math.round(hospitalVal) <= maxHospital ? true : false)
		lockdownPass = (lockdownVal <= maxLockdown ? true : false) 
	
		eval('var displayVar = node.dataset.' + displayVarSelector + ';');
		node.innerHTML = displayVar;

		if (displayVarSelector ==  "lockdownYr2") {
			node.innerHTML = Math.round(displayVar*100)  + "%"
		};
	
		// creating tooltip
		node.innerHTML += "<span class='cell-tooltip'>" +
		"<div class='tooltip-row " + (infectPass ? "scenario-success" : "scenario-failure") + "'><span>Infections / day: </span><span>"+ infectVal + "</span></div>" +
		"<div class='tooltip-row " + (deathsPass ? "scenario-success" : "scenario-failure") + "'><span>Deaths / year: </span><span>"+ deathsVal + "</span></div>" +
		"<div class='tooltip-row " + (hospitalPass ? "scenario-success" : "scenario-failure") + "'><span>Hospitalisations / year: </span><span>"+ hospitalVal + "</span></div>" +
		"<div class='tooltip-row " + (lockdownPass ? "scenario-success" : "scenario-failure") + "'><span>Lockdown %: </span><span>"+ Math.round(lockdownVal) + "</span></div>" +
		"</span>"
		
		// check for value and colour accordingly
		if (infectPass && deathsPass && hospitalPass && lockdownPass)  {
			node.style.backgroundColor = "#41af4c";
			node.style.color = "#fff";
		} else {
			node.style.backgroundColor = "#e34545";
			node.style.color = "#fff";
		}
	}
};




// ------------------------------------------------------------
// Tooltip positioning ----------------------------------------
// ------------------------------------------------------------
document.getElementById("scenario-heatmap").addEventListener("mousemove", e => {
	// e = Mouse move event.
	var rect = document.getElementById("scenario-heatmap").getBoundingClientRect();
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
