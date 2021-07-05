// ============================================================================== //
// ============================================================================== //
// DEFINE DATA ================================================================== //
// ============================================================================== //

// This is just made-up data for demonstration purposes. You will need to import it
// from a CSV or JSON file. 

var data = [
	{ str: 'ME_ME_LS', vu: 50, vk: 1, nCases: 34, pcLockdown: .23},
	{ str: 'ME_ME_LS', vu: 60, vk: 1, nCases: 62, pcLockdown: .53},
	{ str: 'ME_ME_LS', vu: 70, vk: 1, nCases: 18, pcLockdown: .23},
	{ str: 'ME_ME_LS', vu: 80, vk: 1, nCases: 56, pcLockdown: .87},
	{ str: 'ME_TS_LS', vu: 50, vk: 1, nCases: 22, pcLockdown: .34},
	{ str: 'ME_TS_LS', vu: 60, vk: 1, nCases: 48, pcLockdown: .65},
	{ str: 'ME_TS_LS', vu: 70, vk: 1, nCases: 34, pcLockdown: .12},
	{ str: 'ME_TS_LS', vu: 80, vk: 1, nCases: 90, pcLockdown: .52},
	{ str: 'ME_ME_LS', vu: 50, vk: 0, nCases: 67, pcLockdown: .23},
	{ str: 'ME_ME_LS', vu: 60, vk: 0, nCases: 24, pcLockdown: .53},
	{ str: 'ME_ME_LS', vu: 70, vk: 0, nCases: 45, pcLockdown: .23},
	{ str: 'ME_ME_LS', vu: 80, vk: 0, nCases: 40, pcLockdown: .87},
	{ str: 'ME_TS_LS', vu: 50, vk: 0, nCases: 47, pcLockdown: .34},
	{ str: 'ME_TS_LS', vu: 60, vk: 0, nCases: 19, pcLockdown: .65},
	{ str: 'ME_TS_LS', vu: 70, vk: 0, nCases: 27, pcLockdown: .12},
	{ str: 'ME_TS_LS', vu: 80, vk: 0, nCases: 38, pcLockdown: .52},

];

// ============================================================================== //
// ============================================================================== //
// SETUP ======================================================================== //
// ============================================================================== //

var colVars = [
		{ var: 'str', vals: ['ME_ME_LS', 'ME_TS_LS'] }
	],
	rowVars = [
		{ var: 'vu',  vals: [ 50, 60, 70, 80 ] },
		{ var: 'vk',  vals: [ 0, 1 ] }
	];

var heatmapVar = 'nCases';


// ============================================================================== //
// ============================================================================== //
// UTILITIES ==================================================================== //
// ============================================================================== //

var table = d3.select("#fig-heatmap"),
	scale,
	thead,
	tbody;

function pow(n) {
	if (n === 0) { 
		return 1; 
	} else { 
		return Math.pow(2, n) * pow( n - 1 ); 
	}
}

function makeHeaderCols(colVar) {

	let nVars = colVars.length,
		idx = colVars.map(d => d.var).indexOf(colVar),
		nRepeat = pow(idx),
		nEach = 1;

	for (let i = idx + 1; i < colVars.length; i++) {
		nEach = nEach * colVars[i].vals.length;
	}

	let cols = [{
		val: '',
		width: rowVars.length
	}];

	for (let i = 0; i < nRepeat; i++) {
		for (let j = 0; j < colVars[idx].vals.length; j++) {
			cols.push({
				val: colVars[idx].vals[j],
				width: nEach
			})
		}
	}

	return cols;
}

function iterateIndices(idxs) {
	let i = idxs.length - 1;
	for (i; i >= 0; i--) {
		if (idxs[i].idx < idxs[i].vals.length - 1) {
			idxs[i].idx++;
			break;
		} else if (idxs[i].idx == idxs[i].vals.length - 1) {
			idxs[i].idx = 0;
		}
	}
	return idxs;
}

function combinationsExhausted(idxs) {
	let isExhausted = true;
	for (let i = 0; i < idxs.length; i++) {
		if (idxs[i].idx < idxs[i].vals.length - 1) {
			isExhausted = false;
		}
	}
	return isExhausted;
}

function makeRowSpecs(vars) {

	let rowSpec = [];

	rowVars = rowVars.map(d => {
		d.idx = 0;
		return d;
	})

	let idxs = rowVars;
	for (idxs; !combinationsExhausted(idxs); idxs = iterateIndices(idxs)) {
		rowSpec.push(JSON.parse(JSON.stringify(idxs.map(d => {
			d.val = d.vals[d.idx];
			return d;
		}))))
	}
	rowSpec.push(JSON.parse(JSON.stringify(idxs.map(d => {
		d.val = d.vals[d.idx];
		return d;
	}))))

	return rowSpec;
}

function lookup(data, idxs) {

	for (let i = 0; i < idxs.length; i++) {
		data = data.filter(d => d[idxs[i].var] == idxs[i].vals[idxs[i].idx]);
	}

	if (data.length > 0) {
		return data[0][heatmapVar];
	} else {
		return '';
	}

}

function makeRows(rowSpec) {

	let cells = [];

	// Row headers.

	for (let i = 0; i < rowSpec.length; i++) {
		
		let rowSpan = 1;
		for (let j = i + 1; j < rowVars.length; j++) {
			rowSpan = rowSpan * rowVars[j].vals.length;
		}
		
		if (i == rowSpec.length - 1) {
			cells.push({
				val: rowSpec[i].val,
				height: rowSpan,
				isHeader: true
			})
		} else if (i < rowSpec.length - 1) {
			if (rowSpec.slice(i+1, rowSpec.length).every(d => d.idx == 0)) {
				cells.push({
					val: rowSpec[i].val,
					height: rowSpan,
					isHeader: true
				})
			}
		}
	}

	// Row content.

	colVars = colVars.map(d => {
		d.idx = 0;
		return d;
	})

	let idxs = colVars;
	for (idxs; !combinationsExhausted(idxs); idxs = iterateIndices(idxs)) {
		cells.push({
			val: lookup(data, [...idxs, ...rowSpec]),
			height: 1,
			isHeader: false
		})
	}
	cells.push({
		val: lookup(data, [...idxs, ...rowSpec]),
		height: 1,
		isHeader: false
	})

	return cells;
}

// ============================================================================== //
// ============================================================================== //
// DRAW ========================================================================= //
// ============================================================================== //

function draw() {
	
	// Define colour scale.

	let heatmapVals = data.map(d => d[heatmapVar]),
		max = Math.max(...heatmapVals),
		min = Math.min(...heatmapVals);
	scale = d3.scaleSequential(d3.interpolateRdYlGn)
		.domain([max, min]);

	// Create table header.

	thead = table.append("thead")
		.attr("class","some-custom-class") // If you need it...
			.selectAll("tr")
			.data(colVars)
			.enter()
			.append("tr")
			.attr("class", "some-other-class")
				.selectAll("td")
				.data(d => makeHeaderCols(d.var))
				.enter()
				.append("td")
				.attr("colspan", d => d.width)
				.text(d => d.val);


	// Create table rows.
	tbody = table.append("tbody")
		.attr("class", "some-custom-class")
			.selectAll("tr")
			.data(makeRowSpecs(rowVars))
			.enter()
			.append("tr")
			.attr("class", "some-other-class")
				.selectAll("td")
				.data(d => makeRows(d))
				.enter()
				.append("td")
				.attr("rowspan", d => d.height)
				.style("background-color", d => {
					if (d.isHeader) {
						return 'transparent';
					} else {
						return scale( d.val );
					}
				})
				.text(d => d.val);

}

draw();

// ============================================================================== //
// ============================================================================== //
// REDRAW ======================================================================= //
// ============================================================================== //

function redraw() {
	document.querySelector('#fig-heatmap').innerHTML = '';
	draw();
}