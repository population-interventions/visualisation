---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Interactive",

	"title": "COVID-19 Pandemic Trade-offs: Version 3, August 2021",
	
	"description": "",
	
	"date": "2021-08-21",
	"date_updated": "2021-08-21",
	
	"slug": "pandemic-trade-offs-august-2021",
	
	"dependencies": {
		"katex": true,
		"d3": true,
		"vega": true
	},
	
	"hidden": true,
	"draft": true,
	
	"skipToLinks": [
		{
			"href": "#graph-container-ABM-v2",
			"text": "Infections",
			"image": "preview-ABM.png"
		},
		{
			"href": "#health-lockdown-heatmap",
			"text": "Health and lockdown heatmaps",
			"image": "preview-health-lockdown-heatmap.png"
		},
			{
			"href": "#risk-threshold-heatmap",
			"text": "Risk threshold heatmaps",
			"image": "preview-risk-threshold-heatmap.png"
		},
			{
			"href": "#graph-PMSLT-HALY",
			"text": "Other health consequences",
			"image": "preview-coming-soon.svg"
		},
		{
			"href": "#graph-economy",
			"text": "Economic consequences",
			"image": "preview-coming-soon.svg"
		},
		{
			"href": "/pandemic-trade-offs-detail-august-2021/",
			"text": "Model Details",
			"image": "preview-strategies.svg",
			"external": true
		}
	],

	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/) and [Hassan Andrabi](https://twitter.com/hrs_andrabi).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."

}
---

This tool allows you to explore how COVID-19 policy responses (restrictions, vaccination roll-out, and border opening) impact future SARS-CoV-2 infection, hospitalization and mortality rates,  and the probability of lockdowns.  (Additional outputs on health-adjusted life years and economic impacts (health expenditure, GDP loss) for these latest analyses is coming soon). 
A co-published article at Pursuit explains the model assumptions more fully, and gives our interpretation and policy recommendations. 

We use the State of Victoria as the case study, but the findings can be broadly applied to other states and territories in Australia, New Zealand and other South Eastern Asian and Oceanic countries that are using an elimination strategy – then opening the borders. The findings may also be generalized further to countries that have not used an elimination strategy, but looking how to manage borders at varying levels of within-country immunity (be that through vaccination and / or natural infection).

This tool allows you to explore what happens in both the year of increasing vaccination coverage before the borders are open, and then in the year after borders are open. By “borders open”, we mean when the majority of in-bound travelers are allowed quarantine-free arrival – but there will always be a need for arrivals from some countries that have high infection rates, or new variants of concern, to go to formal managed quarantine (presumably at purpose-built facilities). Indeed, this Trade-offs tool can assist decide what that threshold might be to direct high-risk arrivals to formal quarantine.

You will see 240 scenarios, for combinations of policy settings, vaccination coverage achieved over 12 months, expected vaccinated but infected arrivals per day in the second year, and the reproductive rate of the virus. For more information on these input variables, view our <a href="/pandemic-trade-offs-detail-august-2021/" target="_blank" rel="noopener noreferrer">model details</a> page.

<a href="https://pursuit.unimelb.edu.au/articles/what-s-the-right-covid-19-risk-to-live-with" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Read the explanatory article</a><br /><br />

---

## Infections

A basic measure of COVID-19 policy success is the extent to which it keeps the number of new infections manageable.

To model this, we ran 100 simulations of how the SARS-CoV-2 virus might spread through a population of 6 million people, for each of 240 different scenarios. The graph below shows the median (or average) daily infections across the 100 simulations of each scenario, along with a 90% uncertainty interval (the 5<sup>th</sup> and 95<sup>th</sup> percentiles).

Use the options to the left of (or below) the graph to explore how different scenarios affect the spread of the virus

{% import_graph "ABM-v2", slug %}

{% import_graph "lockdown", slug %}

In each of the 100 simulations, the model also tracks which stage of restrictions is in place each day (Stage 1 being near-normal, up to Stage 4 with strong stay at home orders, i.e. a hard lockdown), but this is not visible on the above graph. Click below to view all 100 simulations of each scenario, coloured by restriction stage in use depending on the policy setting (elimination, tight suppression, loose suppression, and extra loose suppression).

<a href="/pandemic-trade-offs-ABM-august-2021/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Explore all 100 simulations</a>

<a href="/pandemic-trade-offs-ABM-august-2021/" class="img-link"><img src="/posts/pandemic-trade-offs-august-2021/preview-full-ABM.jpg" width="600" /></a>

If you are interested in the details of the model, these are included on a separate page.

<a href="/pandemic-trade-offs-detail-august-2021/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">View modelling details</a>

In particular, you might be interested to know:

- [What are the phases?](/pandemic-trade-offs-detail#phases)
- [How do the strategies work?](/pandemic-trade-offs-detail#strategies)


---

## Heatmaps of infections, hospitalizations, deaths and time in lockdown
Below are two heatmaps. The first shows (depending on which option you select) the average daily infections, the yearly SARS-CoV-2 deaths and the yearly SARS-CoV-2 hospitalization (for a population the size and make-up of Victoria). The second heatmap shows  the proportion of time in stage 3 (soft lockdown) and stage 4 (hard lockdown) for all 240 scenarios. 

For both heatmaps, you also select whether you want to see:

- the first year (before the borders open): when an infection escaping from quarantine has a probability of 4.5% per day); or
- the second year (after the borders are open): when infections are still escaping from quarantine at a rate of 2.25% per day, and vaccinated infected arrivals occurring at the rate indicated for each scenario.

For both heatmaps, if you hover a cell you will be shown the 90% simulation interval, due to both stochastic uncertainty and input parameter uncertainty (e.g. about vaccination effectiveness). 

{% import_content "heatmap-summary", slug %}


---

## Interactive heatmap of settings that meet your risk threshold

Below is an interactive heatmap – just for the year after borders open –where you select your ‘risk threshold’ of the maximum average infections per day, maximum deaths in a year, maximum hospitalizations in a year, and maximum percentage of time in lockdown that you are willing to tolerate. 

The cells colored green are beneath your threshold (on all four criteria), and the settings you would use if you were in charge of a jurisdiction.  For example, vaccination coverage might have reached 70% for adults only by the time we have committed to opening the borders, and you fear the true R0 might be 6.0.  So you see which settings on ‘vaccinated but infected arrivals’ per day keeps you in the green, and set your jurisdictions border policy to match this.  That is, you allow a number and mix of international arrivals without quarantine that keeps you in the green, and arrivals from countries with higher risk still have to go to (purpose-built) quarantine facilities.

The estimated number of vaccinated but infected arrivals per day is not intuitive.  So we have built a calculator for you to enter numbers or arrivals from countries with a given infection rate, that gives you the expected vaccinated but infect arrivals.  We assume all such arrivals eligible for quarantine-free arrival must be vaccinated and PCR tested before travel.

{% import_content "heatmap-scenario", slug %}

---

## Other Health Consequences

### Health adjusted life years (HALYs)
Health adjusted life years (HALYs) for the 240 scenarios are coming soon – factoring in both the direct health consequences of SARS-CoV-2 (including long-COVID) and the indirect health consequences of lockdowns. For our previous estimates of HALYs lost by response strategy during the (as planned) vaccine rollout, go to our previous version of this tool, and see our paper in <a href="https://www.medrxiv.org/content/medrxiv/early/2021/01/13/2021.01.11.21249630.full.pdf">JAMA Health Forum</a>.

### Economic impacts

As with HALYs, the estimated health expenditure and GDP consequences of these 240 scenarios are coming soon.  In the meantime, see our previous estimates of cost impacts by response strategy during the (as planned) vaccine rollout at the <a href="/pandemic-trade-offs/">previous version of this tool</a>, and see our paper in <a href="https://www.medrxiv.org/content/medrxiv/early/2021/01/13/2021.01.11.21249630.full.pdf">JAMA Health Forum</a>.




To learn more about this modelling, please see the Model Details page.

<a href="/pandemic-trade-offs-detail-august-2021/" class="button-small with-arrow">View model details</a>