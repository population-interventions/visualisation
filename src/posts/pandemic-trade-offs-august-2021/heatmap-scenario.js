var scenarioCells = document.querySelectorAll('#scenario-heatmap td');
var maxInfections = document.getElementById("infection-slider").value;
var maxLockdown = document.getElementById("lockdown-slider").value;
var maxDeaths = document.getElementById("death-slider").value;
var maxHospital = document.getElementById("hospitalisation-slider").value;
var maxICU = document.getElementById("icu-slider").value;
var displayVarSelector = document.getElementById("heatmapScenarioDisplayVarSelector").value;
var minStageSelector = document.getElementById("heatmapScenarioMinStageSelector").value;


// ------------------------------------------------------------
// Initialise heatmaps ----------------------------------------
// ------------------------------------------------------------
for(var i = 0, max = scenarioCells.length; i < max; i++) {
    var node = scenarioCells[i];

    // get data values from table cells
	eval('var infectVal = node.dataset.infect' + minStageSelector + 'Yr2;');
	eval('var lockdownVal = node.dataset.lockdown' + minStageSelector + 'Yr2 * 100;');
	eval('var deathsVal = node.dataset.deaths' + minStageSelector + 'Yr2;');
	eval('var hospitalVal = node.dataset.hospital' + minStageSelector + 'Yr2;');
	eval('var icuVal = node.dataset.icu' + minStageSelector + 'Yr2;');

	eval('var displayVar = node.dataset.' + displayVarSelector + minStageSelector + 'Yr2;');
	node.innerHTML = Number(displayVar).toLocaleString();

	if (displayVarSelector ==  "lockdownYr2") {
		node.innerHTML = Math.round(displayVar*100)  + "%"
	};

	infectPass = (Math.round(infectVal) <= maxInfections ? true : false)
	deathsPass = (Math.round(deathsVal) <= maxDeaths ? true : false)
	hospitalPass = (Math.round(hospitalVal) <= maxHospital ? true : false)
	icuPass = (Math.round(icuVal) <= maxICU ? true : false)
	lockdownPass = (lockdownVal <= maxLockdown ? true : false) 

	// creating tooltip
	node.innerHTML += "<span class='cell-tooltip'>" +
	"<div class='tooltip-key " + (infectPass ? "scenario-success" : "scenario-failure") + "'>Infections / day: </div><div class='tooltip-value "+ (infectPass ? "scenario-success'>" : "scenario-failure'>") + infectVal + "</div>" +
	"<div class='tooltip-key " + (hospitalPass ? "scenario-success" : "scenario-failure") + "'>Hospitalisations / year: </div><div class='tooltip-value "+ (hospitalPass ? "scenario-success'>" : "scenario-failure'>") + hospitalVal + "</div>" +
	"<div class='tooltip-key " + (icuPass ? "scenario-success" : "scenario-failure") + "'>ICU admissions / year: </div><div class='tooltip-value "+ (icuPass ? "scenario-success'>" : "scenario-failure'>") + icuVal + "</div>" +
	"<div class='tooltip-key " + (deathsPass ? "scenario-success" : "scenario-failure") + "'>Deaths / year: </div><div class='tooltip-value "+ (deathsPass ? "scenario-success'>" : "scenario-failure'>") + deathsVal + "</div>" +
	"<div class='tooltip-key " + (lockdownPass ? "scenario-success" : "scenario-failure") + "'>Lockdown %: </div><div class='tooltip-value "+ (lockdownPass ? "scenario-success'>" : "scenario-failure'>") + Math.round(lockdownVal) + "</div>" +
	"</div>"
	 
    // check for value and colour accordingly
    if (infectPass && deathsPass && hospitalPass && lockdownPass && icuPass)  {
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
	var maxICU = document.getElementById("icu-slider").value;
	var displayVarSelector = document.getElementById("heatmapScenarioDisplayVarSelector").value;
	var minStageSelector = document.getElementById("heatmapScenarioMinStageSelector").value;
	
	for(var i = 0, max = scenarioCells.length; i < max; i++) {
		var node = scenarioCells[i];

		// get data values from table cells
		eval('var infectVal = node.dataset.infect' + minStageSelector + 'Yr2;');
		eval('var lockdownVal = node.dataset.lockdown' + minStageSelector + 'Yr2 * 100;');
		eval('var deathsVal = node.dataset.deaths' + minStageSelector + 'Yr2;');
		eval('var hospitalVal = node.dataset.hospital' + minStageSelector + 'Yr2;');
		eval('var icuVal = node.dataset.icu' + minStageSelector + 'Yr2;');
	

		infectPass = (Math.round(infectVal) <= maxInfections ? true : false)
		deathsPass = (Math.round(deathsVal) <= maxDeaths ? true : false)
		hospitalPass = (Math.round(hospitalVal) <= maxHospital ? true : false)
		icuPass = (Math.round(icuVal) <= maxICU ? true : false)
		lockdownPass = (lockdownVal <= maxLockdown ? true : false) 

	
		eval('var displayVar = node.dataset.' + displayVarSelector + minStageSelector + 'Yr2;');
		node.innerHTML = displayVar;

		if (displayVarSelector ==  "lockdownYr2") {
			node.innerHTML = Math.round(displayVar*100)  + "%"
		};
	
		// creating tooltip
		node.innerHTML += "<span class='cell-tooltip'>" +
		"<div class='tooltip-key " + (infectPass ? "scenario-success" : "scenario-failure") + "'>Infections / day: </div><div class='tooltip-value "+ (infectPass ? "scenario-success'>" : "scenario-failure'>") + infectVal + "</div>" +
		"<div class='tooltip-key " + (hospitalPass ? "scenario-success" : "scenario-failure") + "'>Hospitalisations / year: </div><div class='tooltip-value "+ (hospitalPass ? "scenario-success'>" : "scenario-failure'>") + hospitalVal + "</div>" +
		"<div class='tooltip-key " + (icuPass ? "scenario-success" : "scenario-failure") + "'>ICU admissions / year: </div><div class='tooltip-value "+ (icuPass ? "scenario-success'>" : "scenario-failure'>") + icuVal + "</div>" +
		"<div class='tooltip-key " + (deathsPass ? "scenario-success" : "scenario-failure") + "'>Deaths / year: </div><div class='tooltip-value "+ (deathsPass ? "scenario-success'>" : "scenario-failure'>") + deathsVal + "</div>" +
		"<div class='tooltip-key " + (lockdownPass ? "scenario-success" : "scenario-failure") + "'>Lockdown %: </div><div class='tooltip-value "+ (lockdownPass ? "scenario-success'>" : "scenario-failure'>") + Math.round(lockdownVal) + "</div>" +
		"</div>"
		
		// check for value and colour accordingly
		if (infectPass && deathsPass && hospitalPass && lockdownPass && icuPass)  {
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
