---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Interactive",
	
	"title": "Full Simulation",
	"description": "This page contains a more detailed version of the Infections plot that is included on the <a href='/pandemic-trade-offs' target='_blank' rel='noopener noreferrer'>COVID-19 Pandemic Trade-offs</a> page.",
	"date": "2021-03-12",
	"date_updated": "2021-03-31",
	"slug": "pandemic-trade-offs-ABM",
	"katex": true,
	"hidden": true,
	"draft": false,
	"d3": true,

	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."
}
---

In the following graph, each line on the plot corresponds to one run of the model&mdash;one possible path that infection numbers could take under the selected scenario and policy response. The lines are coloured by the Stage of restrictions that are in place at any given time.

{% import_graph "ABM", slug %}

To learn more about this modelling, please see the Model Details page.

<a href="/pandemic-trade-offs-detail/" class="button-small with-arrow">View model details</a>