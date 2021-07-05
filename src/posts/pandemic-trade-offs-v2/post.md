---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Interactive",

	"title": "COVID-19 Pandemic Trade-offs: Version 2, July 2021, including border opening",
	
	"description": "A tool for exploring how COVID-19 policy responses (restrictions, vaccination roll-out, and border opening) impact future SARS-CoV-2 infection rates and the probability of lockdowns (health impacts (in health-adjusted life years) and economic impacts (health expenditure, GDP loss) coming soon). A co-published article at Pursuit explains the model assumptions more fully, and gives our interpretation. ",
	
	"date": "2021-07-04",
	"date_updated": "2021-07-04",
	
	"slug": "pandemic-trade-offs-v2",
	
	"dependencies": {
		"katex": true,
		"d3": true,
		"vega": true
	},
	
	"hidden": false,
	"draft": true,
	
	"skipToLinks": [
		{
			"href": "#graph-ABM",
			"text": "Infections",
			"image": "preview-ABM.svg"
		},
		{
			"href": "#graph-PMSLT-HALY",
			"text": "Health impacts",
			"image": "preview-coming-soon.svg"
		},
		{
			"href": "#graph-economy",
			"text": "Economic impacts",
			"image": "preview-coming-soon.svg"
		},
		{
			"href": "#graph-PMSLT-prob",
			"text": "What is optimal?",
			"image": "preview-coming-soon.svg"
		},
		{
			"href": "/pandemic-trade-offs-detail/",
			"text": "Model Details",
			"image": "preview-strategies.svg",
			"external": true
		}
	],

	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/) and [Hassan Andrabi](https://twitter.com/hrs_andrabi).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."

}
---

We use the State of Victoria as the case study, but the findings can be broadly applied to other states and territories in Australia, New Zealand and other South Eastern Asian and Oceanic countries that are using an elimination strategy – then opening the borders.  The findings can also perhaps be generalized further to countries that have not used an elimination strategy, but looking how to manage borders at varying levels of within-country immunity (be that through vaccination and / or natural infection).

This tool allows you to explore how SARS-CoV-2 infection rates and probability of lockdowns vary in both the year of increasing vaccination coverage before the borders are open, and then in the year after borders are open. By “borders open”, we mean when the majority of in-bound travelers are allowed quarantine-free arrival – but there will always be a possible need for arrivals from some countries that have high infection rates, or new variants of concern, to have to go to formal managed quarantine (presumably at purpose-built facilities). Indeed, this Trade-offs tool can assist decide what the threshold might be to direct high-risk arrivals to formal quarantine.

You will see XXX scenarios, for combinations of policy settings, vaccination coverage achieved over 12 months, expected vaccinated infecteds arriving per day and the reproductive rate of the virus. For more information on these input variables, view our <a href="/pandemic-trade-offs-detail/" target="_blank" rel="noopener noreferrer">model details</a> page.

<a href="/posts/pandemic-trade-offs/LaunchSlides.pdf" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Read the explanatory article</a><br /><br />
<a href="/posts/pandemic-trade-offs/Walkthrough.pdf" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Read a walk-through</a>

---

## Infections

A basic measure of whether a COVID-19 policy response is successful is the extent to which it keeps the number of new infections manageable.

To model this, we ran 100 simulations of how the SARS-CoV-2 virus might spread through a population of 6 million people, for each of XXX different scenarios. The graph below shows the median (or average) daily infections across the 100 simulations of each scenario, along with a 90% uncertainty interval (the 5<sup>th</sup> and 95<sup>th</sup> percentiles).

Use the options to the left of (or below) the graph to explore how different scenarios affect the spread of the virus

{% import_graph "ABM-v2", slug %}

In each of the 100 simulations, the model also tracks which stage of restrictions is in place each day, but this is not visible on the above graph. Click below to view all 100 simulations of each scenario, coloured by restriction stage.

<a href="/pandemic-trade-offs-ABM-v2/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Explore all 100 simulations</a>

<a href="/pandemic-trade-offs-ABM-v2/" class="img-link"><img src="/posts/pandemic-trade-offs/preview-full-ABM.jpg" width="600" /></a>

If you are interested in the details of the model, these are included on a separate page.

<a href="/pandemic-trade-offs-detail/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">View modelling details</a>

In particular, you might be interested to know:

- [What are the phases?](/pandemic-trade-offs-detail#phases)
- [How do the strategies work?](/pandemic-trade-offs-detail#strategies)


---
## Heatmaps
Below are two heatmaps showing the average infections per day, and proportion of time in stage 3 (soft lockdown) and stage 4 (hard lockdown) for all XXX scenarios.  Select whether you want to see these heatmaps for:
- the first year (before the borders open): when an infection escaping from quarantine has a probability of 4.5% per day); or 
- the second year (after the borders are open): when infections are still escaping from quarantine at a rate of 2.25% per day, and vaccinated infected arrivals occurring at the rate indicated for each scenario).

{% import_content "heatmap", slug %}

Below is an interactive heatmap, where you select the your ‘optimal scenario’ of both the maximum average infections per day you will tolerate and the maximum proportion of time in lockdown.  And (as above) select either year 1 or 2.

---

## Other Health Consequences

Deaths and hospitalizations from COVID-19 will be presented here soon for the above scenarios.  For deaths, the number depends on the proportion of infections arising among the unvaccinated compared to vaccinated.  As an approximation for now:
- Assume infection fatality ratio (IFR) before any vaccination of 0.5% in Australia.
- Assume an average vaccine effectiveness at reducing transmission risk of 70%
- Assume that the IFR among the vaccinated is 90% less than among the unvaccinated (i.e. 0.05%). 

Then an approximate estimate of the number of deaths in the year after the borders open (will not work in the year before borders open) is:

VC × Daily infection rate

That is, for a 70% vaccine coverage (of both adults and children), the number of SARS-CoV-2 deaths over the year for a daily average infection rate of 10 is XXX.
#### HALYs

To see the HALY losses (net allowing for direct SARS-CoV-2 impacts, and unintended impacts of lockdowns):
- please see version 1.0 of this tool, for scenarios up to when the borders open (but only with a maximal R) of 3.75, which Delta now exceeds)
- for this new version 2.0 tool, they will be posted here soon.

{% import_graph "PMSLT-HALY", slug %}

### Economic impacts

Below (coming soon) are the estimated health expenditure consequences of SARS-CoV-2 cases in the health system, and changes in health expenditure for the other diseases impacted by stage 3 and 4 lockdowns.  Also shown will be the GDP impacts, estimated using Treasury estimates of the GDP consequences of stages of lockdown multiplied by the percentage of time spent in each stage for each modelled scenario.  

{% import_graph "economy", slug %}


To learn more about this modelling, please see the Model Details page.

<a href="/pandemic-trade-offs-detail/" class="button-small with-arrow">View model details</a>