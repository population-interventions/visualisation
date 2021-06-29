---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Interactive",
	
	"title": "COVID-19 Pandemic Trade-offs",
	"description": "A tool for exploring how COVID-19 policy responses (restrictions, vaccination roll-out, and border opening) impact future SARS-CoV-2 infection rates, health impacts (in health-adjusted life years) and economic impacts (health expenditure, GDP loss). ",
	
	"date": "2021-03-11",
	"date_updated": "2021-03-31",
	
	"slug": "pandemic-trade-offs-v2",
	
	"dependencies": {
		"katex": true,
		"d3": true,
		"vega": true
	},
	
	"hidden": true,
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
			"image": "preview-PMSLT-HALY.svg"
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

	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."

}
---

This tool allows you to explore how SARS-CoV-2 infection rates, health impacts (in health-adjusted life years) and economic impacts (health expenditure and GDP loss) vary by

- which <a href="/pandemic-trade-offs-detail#strategies" target="_blank">strategy</a> society pursues (aggressive elimination, moderate elimination, tight suppression or loose suppression), and
- whether that strategy is held steady over time, or <a href="/pandemic-trade-offs-detail#strategy-relaxation" target="_blank">relaxed</a> as vaccination coverage increases.

In addition to these strategy choices, you can also set values for what you think might be the vaccine uptake, the efficacy of the vaccines at reducing transmission, and the unmitigated reproduction rate of the virus strains in circulation.

<div class="youtube"><iframe width='500' height='294' src="https://www.youtube.com/embed/RHoRjxIH_io?&theme=dark&autohide=2&modestbranding=1&rel=0"frameborder="0"></iframe></div>

<a href="/posts/pandemic-trade-offs/LaunchSlides.pdf" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">View the slides from the launch presentation</a><br /><br />
<a href="/posts/pandemic-trade-offs/Walkthrough.pdf" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Read a walk-through</a>

---

## Infections

A basic measure of whether a COVID-19 policy response is successful is the extent to which it keeps the number of new infections manageable.

To model this, we ran 100 simulations of how the SARS-CoV-2 virus might spread through a population of 6 million people, for each of 648 different scenarios. The graph below shows the median daily infections across the 100 simulations of each scenario, along with a 90% uncertainty interval (the 5<sup>th</sup> and 95<sup>th</sup> percentiles).

Use the options to the left of (or below) the graph to explore how different scenarios affect the spread of the virus.

{% import_graph "ABM-v2", slug %}

In each of the 100 simulations, the model also tracks which stage of restrictions is in place each day, but this is not visible on the above graph. Click below to view all 100 simulations of each scenario, coloured by restriction stage.

<a href="/pandemic-trade-offs-ABM-v2/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">Explore all 100 simulations</a>

<a href="/pandemic-trade-offs-ABM/" class="img-link"><img src="/posts/pandemic-trade-offs/preview-full-ABM.jpg" width="600" /></a>

If you are interested in the details of the model, these are included on a separate page.

<a href="/pandemic-trade-offs-detail/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">View modelling details</a>

In particular, you might be interested to know:

- [What are the phases?](/pandemic-trade-offs-detail#phases)
- [How do the strategies work?](/pandemic-trade-offs-detail#strategies)


---

## Unintended consequences

Imposing restrictions on society can help limit the spread of SARS-CoV-2, but it also causes unintended health and economic consequences.

### Health impacts

Research [suggests](https://www.medrxiv.org/content/10.1101/2021.03.16.21253759v1) that 'lockdowns' (i.e. Stage 3 and 4 restrictions) increase anxiety, depression, self-harm, and intimate partner violence, but also decrease road traffic injuries. In order to compare these health outcomes on a common scale, we use health-adjusted life years, or HALYs.

#### HALYs

Health adjusted life years (HALYS) are life years remaining to be lived, in a given time period or over each person’s remaining lifetime, weighted by [1 minus morbidity]. The morbidity is that due to COVID-19, other diseases included in the model, and the background expected morbidity for each sex and age group.

The HALY changes (compared with 'No COVID-19' scenario) are output for:

- Both the direct SARS-CoV-2 impacts (mostly premature mortality, but also morbidity among those people not dying of SARS-CoV-2), AND estimated HALYs due to changes in diseases resulting indirectly from COVID-19 policy responses (i.e. time in stages 3 and 4 or lockdown), including: road traffic injury; self-harm; anxiety; and depression.
- Coming soon, we will also include changes in the risk factor 'intimate partner violence' that leads to further changes in depression, and also changes in inter-personal violence harm.
- In future modelling, we aim to also include the long-run health impacts of reduced physical activity.  Impacts of Stage 3 and 4 restrictions (lockdowns) on delayed cancer screening and presentation for other non-communicable diseases (e.g. cardiovascular disease) was beyond our scope.
- Only changes that occur during the year simulated, with the exception of deaths for which lost future HALYs are also counted.

Below are the expected health impacts of each strategy according to our model.

<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" id="svg-definitions-PMSLT-HALY">
	<defs>
		<pattern id="HALY-pattern-black" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
			<line x1="0" y="0" x2="0" y2="6" stroke="#000000" stroke-width="10" />
		</pattern>
		<pattern id="HALY-pattern-Anxiety" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
			<line x1="0" y="0" x2="0" y2="6" stroke="#e65f4a" stroke-width="10" />
		</pattern>
		<pattern id="HALY-pattern-Depression" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
			<line x1="0" y="0" x2="0" y2="6" stroke="#fdbc71" stroke-width="10" />
		</pattern>
		<pattern id="HALY-pattern-Self-Harm" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
			<line x1="0" y="0" x2="0" y2="6" stroke="#fbf8b0" stroke-width="10" />
		</pattern>
		<pattern id="HALY-pattern-COVID-19" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
			<line x1="0" y="0" x2="0" y2="6" stroke="#bbe4a2" stroke-width="10" />
		</pattern>
		<pattern id="HALY-pattern-Road-Traffic-Injury" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
			<line x1="0" y="0" x2="0" y2="6" stroke="#5cabad" stroke-width="10" />
		</pattern>
	</defs>
</svg>

{% import_graph "PMSLT-HALY", slug %}

### Economic impacts

Below (coming soon) are the estimated health expenditure consequences of SARS-CoV-2 cases in the health system, and changes in health expenditure for the other diseases impacted by stage 3 and 4 lockdowns.  Also shown will be the GDP impacts, estimated using Treasury estimates of the GDP consequences of stages of lockdown multiplied by the percentage of time spent in each stage for each modelled scenario.  

{% import_graph "economy", slug %}

## Which policy is optimal?

Below (coming soon) will be an analysis of which of the four policy responses (aggressive elimination, moderate elimination, tight or loose suppression) is optimal using a cost effectiveness approach called 'net monetary benefit'.  This approach is from either a health-system only perspective&mdash;which assumes healthcare expenditure is the only relevant financial cost&mdash;or a partial societal perspective, which includes GDP losses.  The graph will show the probability that each policy response is 'optimal' (i.e. has the highest net monetary benefit – or with COVID-19 the least net monetary loss) for varying 'willingness to pay' for a HALY. 

From a health system perspective, if we were deciding whether a new drug was cost-effective, our threshold is as a rule of thumb about $60,000 per HALY (i.e. roughly a country’s GDP per capita per HALY).  From a partial societal perspective, there are not really such rules of thumb – although often revealed willingness to pay per HALY is higher (hence we include up to $500,000 on the x-axis).  For this type of analysis, the standard (that we follow) is a lifetime perspective (i.e. all changes in HALYs and health expenditure (and additionally GDP for the partial societal perspective) for the remainder of the population’s lifespan), each discounted at 3% per year.

{% import_graph "PMSLT-prob", slug %}

To learn more about this modelling, please see the Model Details page.

<a href="/pandemic-trade-offs-detail/" class="button-small with-arrow">View model details</a>