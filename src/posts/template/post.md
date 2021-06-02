---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "Example",
	"type": "Interactive",
	
	"title": "Template Post",
	"description": "This page is just a template. Its purpose is to demonstrate the structure of how to create new posts and visualisations.",
	
	"date": "2021-05-30",
	"date_updated": "2021-05-30",
	
	"slug": "template",
	
	"dependencies": {
		"katex": false,
		"d3": false,
		"vega": true
	},
	
	"hidden": true,
	"draft": true,

	"contributorDetails": "Acknowledgements for the bottom of the post go here."
}
---

This is a template post.

All the text-based content of the post is written in Markdown, like this. Any of the usual features of markdown can be used, including [links](), **bold text**, *italicised text* and lists:

- List Item 1
- List Item 2
- List Item 3

If you want to include a graph specified using Vega, you should save the graph specification in the same folder as this `post.md` file. The name of the graph specification should be `graph-id.json`, where `id` is replaced with a short, readable identifier for that graph. You can then import the graph using the following 'shortcode', wherever you want the graph to appear in the post.

{% import_graph "example", slug %}

In the above example, the id of our graph is `example`, so we include "example" in quotes within the shortcode. Other than that, you shouldn't need to change anything with the shortcode.