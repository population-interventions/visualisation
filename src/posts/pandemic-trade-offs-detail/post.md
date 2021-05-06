---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Details",
	
	"title": "Model Details",
	"date": "2021-03-13",
	"date_updated": "2021-03-31",
	"slug": "pandemic-trade-offs-detail",
	"description": "This page describes the details of the modelling that is presented on the <a href='/pandemic-trade-offs' target='_blank' rel='noopener noreferrer'>COVID-19 Pandemic Trade-offs</a> page.",
	"katex": true,
	"hidden": true,
	"draft": false,
	"d3": true,
	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."
}
---

We have pre-run 648 scenarios:

- through an agent-based model to estimate SARS-CoV-2 infection rates;
- then run each of these scenarios through an integrated epidemiological and economic model to estimate health loss (in health-adjusted life years or HALYs), health expenditure and GDP costs, with the proportion of times each scenario is optimal from either a health or partial-societal perspective. At the moment, this modelling also includes unintended health consequences of restrictions (including lockdowns) through road traffic injury, depression, anxiety, self-harm, and intimate partner violence. Coming soon, it will also include the effects of changes in physical activity.

The 648 scenarios are for combinations of vaccine coverage, vaccine efficacy at **transmission** (different from usually reported vaccine efficacy at stopping serious illness), policy response for restrictions (aggressive and moderate elimination, tight and loose suppression), and whether these restrictions are relaxed as vaccination coverage increase. (Coming soon will be extra scenarios for how international borders are opened; at the moment, this is included as a parameter behind the scenes that sees the daily expected incursions of SARS-CoV-2 cases increasing from 0.008 per day in Phase 1a to 0.512 per day in Phase 3 of the vaccination rollout, each with wide uncertainty. This, therefore, approximates a relaxing of borders as vaccination coverage increases. But in the future we will provide user options for border incursions.)

The modelling is specified for Victoria, Australia. But the modelling should apply to any state or Territory in Australia, or New Zealand.

### Findings

The agent-based modelling presented at this site finds the following (in approximate order of importance):

- Things we do not have immediate control over:
	- The reproductive rate (R0) for the circulating virus matters enormously.  If a more infectious strain dominates (as is unfortunately likely) and gains a foothold in the community, social restrictions will be necessary in addition to vaccination to control outbreaks.
	- Vaccine uptake and effectiveness of the vaccine at reducing transmission are&mdash;unsurprisingly&mdash;important.
- Things we can control:
	- Pivoting to a loose suppression strategy, or relaxing the thresholds for when stage 3 or 4 lockdowns are applied, appears unwise until well into Phase 2 (vaccinating all adults) or Phase 3 (vaccinating children).
	- Maximising vaccine coverage will assist dampening transmission.  Even if herd immunity is not achieved (e.g. if R0 of circulating variants is high, and vaccine effectiveness at reducing transmission is non-ideal), maximizing vaccine uptake will mean social restrictions can be relaxed even if not removed. 

As always, we are all still learning about SARS-CoV-2 and vaccines. We have made every effort to include up to date evidence in our modelling, and we will continue to improve it as new information arises.

### Track Record

The most recent modelling presented on this site has **not yet been peer-reviewed**, but builds on a strong platform:
    
- Peer-reviewed Medical Journal of Australia paper on the probability of lock down achieving elimination using the ABM ([Journal](https://www.mja.com.au/journal/2020/213/8/probability-6-week-lockdown-victoria-commencing-9-july-2020-achieving), [PDF](https://www.mja.com.au/system/files/issues/213_08/mja250786.pdf))
- Documentation of the ABM at Github ([Link](https://github.com/JTHooker/COVIDModel))
- Comments on the ABM at The Pursuit ([Link](https://pursuit.unimelb.edu.au/articles/modelling-victoria-s-escape-from-covid-19))
- An overview of the proportional multistate lifetable model we use to estimate health and cost impacts ([Journal](https://academic.oup.com/ije/article-abstract/49/5/1624/5920732), [PDF](/posts/pandemic-trade-offs-detail/PMSLT.pdf))
- An analysis of the relative health and cost impacts of various policy response strategies in Victoria, pre-vaccination (aggressive and moderate elimination, tight and loose suppression) ([Preprint](https://www.medrxiv.org/content/10.1101/2021.01.11.21249630v2.full-text), [PDF](https://www.medrxiv.org/content/10.1101/2021.01.11.21249630v2.full.pdf), Under Review)
- A just completed analysis of the unintended health consequences of COVID-19 restrictions including lockdowns ([Preprint](https://www.medrxiv.org/content/10.1101/2021.03.16.21253759v1), [PDF](https://www.medrxiv.org/content/10.1101/2021.03.16.21253759v1.full.pdf), Under Review)


The remainder of this page describes some of the most important components of this modelling work.


---

<h2 id="stages">Stages</h2>

A *stage* is a level of restrictions that can be imposed on society at any given time. There are five stages (1, 1b, 2, 3, 4) which correspond to the stages used in Victoria, Australia during 2020.

A representative sample of the restrictions associated with each stage are given in the following table.

{% import_content "fig-stages", slug %}

The full details of the stages can be found in [this PDF](/posts/pandemic-trade-offs-detail/Stages.pdf).

---

<h2 id="strategies">Strategies</h2>

A *strategy* is a set of rules for determining when to move between different stages. Our model considers four strategies: aggressive elimination, moderate elimination, tight suppression and loose suppression.

Mouse-over the following graphic to explore the rules associated with each strategy. (It works best on a desktop or laptop screen.)

{% import_content "fig-strategies", slug %}

Note that, in addition to the triggers presented on the above graphic, there is also a minimum time enforced between each easing or tightening of restrictions under each strategy. For full details, please see [this document](/posts/pandemic-trade-offs-detail/doc-strategies.pdf).

<h3 id="strategy-relaxation">Strategy Relaxation</h3>

As more people become vaccinated, society may decide to tolerate higher levels of SARS-CoV-2 circulating in the community. If *strategy relaxation* is turned on, the thresholds for moving to higher stages of restrictions are increased with each phase of the vaccine rollout. Specifically, in the thresholds in Phase 2a are multiplied by a factor of 2, in Phase 2b by a factor of 4, and in Phase 3 by a factor of 8. 

---

<h2 id="phases">Vaccination Phases</h2>

The term *phases* refer to different time frames within the vaccine roll-out. The phases used in our model are lifted directly from the [Australian national roll-out strategy](https://www.health.gov.au/resources/publications/covid-19-vaccination-australias-covid-19-vaccine-national-roll-out-strategy), seen below.

<div class="fig outset-4">
	<a href="https://www.health.gov.au/resources/publications/covid-19-vaccination-australias-covid-19-vaccine-national-roll-out-strategy"><img src="/posts/pandemic-trade-offs-detail/img-gov-vaccine-phases.jpg" /></a>
</div>

The table below gives the numbers of Australians by age, comorbidity, Indigeneity and occupation/setting, in each Phase of the vaccination rollout. We have used this timeline in our modelling, although as of late-March 2021, the Australian roll-out is behind this schedule.

{% import_content "fig-vaccine-phases", slug %}

---

<h3 id="uptake">Vaccine Uptake</h3>

Everyone in a vaccination phase is offered a vaccine on one of the days of the phase. Each person either accepts or rejects the vaccine when offered, as determined by Vaccine Uptake parameter. This ensures a steady rate of vaccination throughout the phase, and that everyone who wants vaccination in each phase is vaccinated by the end of it.

The graph below shows the expected percentage of the population who are vaccinated at each point in the vaccine rollout, for three different possible vaccine acceptance rates.

{% import_graph "uptake", slug %}

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

<h2 id="reproduction">Reproduction Rate Calibration</h2>

For the ABM used in this tool, we have updated it from the ABM used in our [previous modelling](https://www.mja.com.au/journal/2020/213/8/probability-6-week-lockdown-victoria-commencing-9-july-2020-achieving) (e.g. for the Victorian RoadMap).  Key updates include:

- altering the two dimensional distance the agents move in (to improve scaling of the model);
- improving how the super spreader function works;
- re-parametrisation of contact tracing; and
- the inclusion of vaccinations, as outlined above.

We therefore re-calibrated the model (by 'tuning' the global transmissibility parameter that&mdash;essentially&mdash;sets how infective each person is during a contact with another person. We first set this global transmissibility parameter to a level that achieved an \\(R_0\\) of 2.5, 3.125 and 3.75 for the three different scenarios of baseline infectiousness of SARS-CoV-2 (i.e. the wild type variant with \\(R_0\\) of 2.5, increasing to 3.75 for variants of concern).  Then we ensured that for the \\(R_0 = 2.5\\) scenario that Stage 4 restrictions achieved the daily percentage reduction in infections observed in Victoria coming out of its second wave (with stage 4 restrictions) of 7 to 8% per day.  Next, we ensured that in the \\(R_0\\) of 2.5 scenario, Stage 3 achieved an effective reproductive rate of less than 1.0 and Stage 2 of greater than 1.0 – each approximately equi-distant below and above an effective reproductive rate of 1.0.

Below is a graph of the effective reproductive rate by Stage of restrictions, in the absence of vaccination, for the three \\(R_0\\) scenarios of 2.5, 3.125 and 3.75.

{% import_graph "calibration", slug %}

## Assumptions and Limitations

### Agent-based model

Simulating the impact of COVID-19 policy responses is challenging.  Our ABM has been extensively investigated by ourselves and others for errors, conceptual rigour, parameterization and such like – and therefore we believe has face validity.  It has also successfully predicted that elimination is achievable, and predicted well the exit of Victoria from its second wave, i.e. to the extent possible, it is calibrated.

However, our ABM is 'just' a simplified representation of reality, and will not be perfect.  It is designed to represent multiple scenarios, including varying stages of social restrictions and vaccination coverage and vaccine efficacy.

Regarding vaccine efficacy, the efficacy that matters most for the ABM is the reduction in transmissibility.  Data is incomplete on this.  We modelled it as three parameters: X = percentage reduction in chance of vaccinated person being infected from unvaccinated infected person; Y = percentage reduction in duration of infection for vaccinated person who becomes infected; and Z = percentage reduction in infectivity for vaccinated person who becomes infected.  The transmissibility parameter you select as a user is the combination of all three, and conceptually is the reduction of transmissibility of SARS-CoV-2 between two vaccinated people (one infected, one susceptible), compared to transmissibility between two non-vaccinated people. Given your selection of this transmissibility variable (say you pick 75% reduction), the model calculates X, Y and Z for you (assumed the same, namely 1 – (1-75%)^(1/3) = 37%).  The exact values of X, Y and Z for each vaccine for each SARS-CoV-2 variant are not yet known.  However, based on evidence so far, 37% (and therefore a reduction in transmissibility of 75%) seems conservative – it may be higher still.

Other important aspects of the model include the contact tracing function, compliance with quarantine, changes in behaviour of non-essential workers, and many other parameters that you can read more about elsewhere.

Should you have any concerns about our model assumptions and specifications, we would welcome your suggestions for improvements or alternative specifications.  For the latter, if simple to run, we will attempt to do them for you – please email <a href="mailto:population-interventions@unimelb.edu.au">population-interventions@unimelb.edu.au</a>.