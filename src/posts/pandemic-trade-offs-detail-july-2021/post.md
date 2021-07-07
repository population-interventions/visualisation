---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Details",
	
	"title": "Model Details",
	"description": "This page describes the details of the modelling that is presented on the <a href='/pandemic-trade-offs' target='_blank' rel='noopener noreferrer'>COVID-19 Pandemic Trade-offs</a> page.",
	
	"date": "2021-07-04",
	"date_updated": "2021-07-07",
	
	"slug": "pandemic-trade-offs-detail-july-2021",
	
	"dependencies": {
		"katex": true,
		"d3": true,
		"vega": true
	},
	
	"hidden": true,
	"draft": false,
	
	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."
}
---

<h2 id="stages">Stages</h2>

A *stage* is a level of restrictions that can be imposed on society at any given time. There are five stages (1, 1b, 2, 3, 4) which correspond to the stages used in Victoria, Australia during 2020.

A representative sample of the restrictions associated with each stage are given in the following table.

{% import_content "fig-stages", slug %}

The full details of the stages can be found in [this PDF](/posts/pandemic-trade-offs-detail/Stages.pdf).

---

<h2 id="strategies">Strategies</h2>

A *strategy* is a set of rules for determining when to move between different stages. Our model considers four strategies: aggressive elimination, moderate elimination, tight suppression, loose suppression and bare suppression.

Mouse-over the following graphic to explore the rules associated with each strategy. (It works best on a desktop or laptop screen.)

{% import_content "fig-strategies", slug %}

Note that, in addition to the triggers presented on the above graphic, there is also a minimum time enforced between each easing or tightening of restrictions under each strategy. For full details, please see [this document](/posts/pandemic-trade-offs-detail/doc-strategies.pdf).


---

<h2 id="effectiveness">Vaccination</h2>

Vaccination occurs at a rate over 1 year necessary to achieve the vaccine coverage option – so for 90% of the population vaccinated, including children, the rate of vaccine roll out is much quicker than for 50% coverage of adults only.  The priority order of who is vaccinated is a per Australian (and most country) recommendations: vulnerable populations and the elderly first, then cascading down age groups.  For simplicity, we assume 60+ year olds are vaccinated with Astra Zeneca, and others with Pfizer.

<h3 id="lag">Vaccine Lag time</h3>

The vaccine only takes effect three weeks after vaccination. We do not model the effect of (say) just one dose of vaccine, but assume the everyone who is vaccinated receives two doses. 

---

<h2 id="effectiveness">Vaccine Effectiveness</h2>

Vaccine effectiveness at reducing TRANSMISSION is modelled through three mechanisms:

<ol style="list-style-type: lower-alpha;">
<li>The reduction in risk of a vaccinated person (compared to an unvaccinated person) being infected from an infected unvaccinated person.</li>
<li>The reduction in duration of infectiousness of an infected vaccinated person (compared to an infected unvaccinated person).</li>
<li>The reduction in peak infectivity of an infected vaccinated person (compared to an infected unvaccinated person).</li>
</ol>

Most research so far on reduction in transmission focuses only on mechanism a). But as vaccination coverage increases, mechanisms b) and c) will become increasingly important.  In our agent-based model, we capture the effects of mechanisms b) and c) as a ‘triangle’.

For now, when the user selects (say) a 75% reduction in transmission, this is operationalized as a 37% reduction for each of the three mechanisms (i.e. 1 – (1-37%)^3 = 75%). 

Note that this means that a relatively poor efficacy for mechanisms a) alone (i.e. a 37% reduction in risk for a vaccinated person getting infected from an infected unvaccinated person) can still lead to a reasonably good total reduction in transmissibility of 75% if the reduction in duration and peak infectivity are among vaccinated persons who get infected is also 37% each.  

By extension, the seemingly optimistic reduction in total transmission of 90% is achieved by (only) a 54% reduction for each of mechanisms a), b) and c). 



---

<h2 id="arrivals">Vaccinated Infected Arrivals</h2>

One of the parameters our model depends on is the average number of infected travellers arriving each day. The calculator below allows you to estimate this parameter as a function of more intuitive quantities: the number of travellers, and the prevalence of vaccinations and circulating virus in their countries of origin.

{% import_content "fig-incursion-calc", slug %}

For example, using the Institute of Health Metrics and Evaluation estimations of infections per day by country accessed 5 July 2021), assuming 50% vaccination rates in those countries, assuming all travellers are vaccinated, and PCR tested three days per arrival, and 4250 arrivals per day to Victoria (half pre-COVID amounts), then:

- **0.2 vaccinated but infected arrivals per day** equates to 4250 people a day coming from origin countries with an infection rate of 5 per 100,000 per day. This is equivalent to the rate in Thailand in early July 2021.
- **1.0 arrivals per day​​** equates to 25 infections per 100,000 per day in the origin countries. This is equivalent to the rate in USA and India, or half the rate in the UK, in early July 2021.
- **5 arrivals per day** equates to 125 infections per 100,000 per day in the origin countries. This is equivalent to half the rate in Mexico in early July 2021.
- **25 arrivals per day** equates to 600 infections per 100,000 day in the origin countries. This is equivalent to the highest rates in the world in early July 2021 (e.g. central Asia, Southern Africa).


---

<h2 id="reproduction">Reproduction Rate Calibration</h2>

For the ABM used in this tool, we have updated it from the ABM used in our [previous modelling](https://www.mja.com.au/journal/2020/213/8/probability-6-week-lockdown-victoria-commencing-9-july-2020-achieving) (e.g. for the Victorian RoadMap).  Key updates include:

- altering the two dimensional distance the agents move in (to improve scaling of the model);
- improving how the super spreader function works;
- re-parametrisation of contact tracing; and
- the inclusion of vaccinations, as outlined above.

We therefore re-calibrated the model by 'tuning' the global transmissibility parameter that&mdash;essentially&mdash;sets how infective each person is during a contact with another person. We first set this global transmissibility parameter to a level that achieved an \\(R_0\\) of 2.5, 3.125 and 3.75 for the three different scenarios of baseline infectiousness of SARS-CoV-2 (i.e. the wild type variant with \\(R_0\\) of 2.5, increasing to 3.75 for variants of concern).  Then we ensured that for the \\(R_0 = 2.5\\) scenario that Stage 4 restrictions achieved the daily percentage reduction in infections observed in Victoria coming out of its second wave (with stage 4 restrictions) of 7 to 8% per day.  Next, we ensured that in the \\(R_0\\) of 2.5 scenario, Stage 3 achieved an effective reproductive rate of less than 1.0 and Stage 2 of greater than 1.0 – each approximately equi-distant below and above an effective reproductive rate of 1.0.

Below is a graph of the effective reproductive rate by Stage of restrictions, in the absence of vaccination, for the three \\(R_0\\) scenarios of 2.5, 3.125 and 3.75.

{% import_graph "calibration", slug %}

For Delta and new variants, we then calibrated the global transmissibility parameter to achieve Ro of 5.0 and 6.0.

Contact tracing really matters.  Indeed, it is the most important adjunct to vaccination in allowing us to open the borders at a level of vaccination that is less than 90% (the approximate level of vaccination we need to achieve herd immunity without any other measures). We have put extensive effort into calibrating contact tracing in the model so that:

* For a virus of R0 of 2.5, 48.4% of unvaccinated infected people in the community do not infect anyone, yet 20.3% of infected people cause 72.1% of the next generation of infections (i.e. we include much heterogeneity across agents in their infectiousness and mobility – fitting evidence from early in the pandemic)
* Contact tracing at low case numbers (an average of 1 per day) finds 90% of infected contacts (both upstream and downstream) within 3 days.  At an average of 5 cases per day, this deteriorates to a 70% detection rate.

If contact tracing is not functioning this well, then the number of infections for each scenario will be greater.

Mask wearing outside the home is set at 15%, 35% and 50%  in the non-lockdown stages, 1, 1b and 2. This approximates use of masks in public transport and other high risk settings. In Stages 3 and 4 it is 60% and 85% outside the home, respectively.



## Assumptions and Limitations

### Agent-based model

Simulating the impact of COVID-19 policy responses is challenging.  Our ABM has been extensively investigated by ourselves and others for errors, conceptual rigour, parameterization and such like – and therefore we believe has face validity.  It has also successfully predicted that elimination is achievable, and predicted well the exit of Victoria from its second wave, i.e. to the extent possible, it is calibrated.

However, our ABM is 'just' a simplified representation of reality, and will not be perfect.  It is designed to represent multiple scenarios, including varying stages of social restrictions and vaccination coverage and vaccine efficacy.

Regarding vaccine efficacy, the efficacy that matters most for the ABM is the reduction in transmissibility.  Data is incomplete on this.  We modelled it as three parameters: X = percentage reduction in chance of vaccinated person being infected from unvaccinated infected person; Y = percentage reduction in duration of infection for vaccinated person who becomes infected; and Z = percentage reduction in infectivity for vaccinated person who becomes infected.  The transmissibility parameter you select as a user is the combination of all three, and conceptually is the reduction of transmissibility of SARS-CoV-2 between two vaccinated people (one infected, one susceptible), compared to transmissibility between two non-vaccinated people. Given your selection of this transmissibility variable (say you pick 75% reduction), the model calculates X, Y and Z for you (assumed the same, namely 1 – (1-75%)^(1/3) = 37%).  The exact values of X, Y and Z for each vaccine for each SARS-CoV-2 variant are not yet known.  However, based on evidence so far, 37% (and therefore a reduction in transmissibility of 75%) seems conservative – it may be higher still.

Other important aspects of the model include the contact tracing function, compliance with quarantine, changes in behaviour of non-essential workers, and many other parameters that you can read more about elsewhere.

Should you have any concerns about our model assumptions and specifications, we would welcome your suggestions for improvements or alternative specifications.  For the latter, if simple to run, we will attempt to do them for you – please email <a href="mailto:population-interventions@unimelb.edu.au">population-interventions@unimelb.edu.au</a>.