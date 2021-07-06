var infectionCells = document.querySelectorAll('#infections-heatmap td');
var lockdownCells = document.querySelectorAll('#lockdown-heatmap td');

for(var i = 0, max = infectionCells.length; i < max; i++) {
    var node = infectionCells[i];

    node.innerHTML = node.dataset.infectYr1;

    // get data values from table cells
    var infectionsYr1 = node.dataset.infectYr1; 
    var infectionsYr2 = node.dataset.infectYr2; 

    // check for 'one' and assign this table cell's background color accordingly 
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
	} else {
        node.style.backgroundColor = "#FF0D0D";
        node.style.color = "#fff";
	}
}

for(var i = 0, max = lockdownCells.length; i < max; i++) {
    var node = lockdownCells[i];

    node.innerHTML = node.dataset.lockdownYr1;

    // get data values from table cells
    var lockdownYr1 = node.dataset.lockdownYr1; 
    var lockdownYr2 = node.dataset.lockdownYr2; 

    // check for 'one' and assign this table cell's background color accordingly 
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
	} else {
        node.style.backgroundColor = "#FF0D0D";
        node.style.color = "#fff";
	}
}