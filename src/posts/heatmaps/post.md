---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "Example",
	"type": "Interactive",
	
	"title": "Heatmap Demo",
	"description": "This page is a demonstration of how to generate HTML table heatmaps using d3.",
	
	"date": "2021-07-05",
	"date_updated": "2021-07-05",
	
	"slug": "heatmaps",
	
	"dependencies": {
		"katex": false,
		"d3": true,
		"vega": false
	},
	
	"hidden": true,
	"draft": true,

	"contributorDetails": "Acknowledgements for the bottom of the post go here."
}
---

{% import_content "fig-heatmap", slug %}