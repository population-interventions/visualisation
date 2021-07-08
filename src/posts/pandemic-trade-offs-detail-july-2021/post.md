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
	
	"contributorDetails": "- The data visualisations and interface for this tool were developed by [Luke Thorburn](https://lukethorburn.com/cv/) and [Hassan Andrabi](https://twitter.com/hrs_andrabi).\n- The modelling was led by Dr [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson), assisted by Haifeng Zhao and Sachith Seneviratne. The original agent-based model was built by Dr [Jason Thompson](https://findanexpert.unimelb.edu.au/profile/769805-jason-thompson), assisted by Profs Rod McClure, [Mark Stevenson](https://findanexpert.unimelb.edu.au/profile/653385-mark-stevenson) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).  The integrated epidemiological and economic model (proportional multistate lifetable) is a collaboration between the University of Melbourne and the Institute of Health Metrics and Evaluation (University of Washington), with key contributions from: Prof Abie Flaxman and Mr James Collins (IHME); Drs [Rob Moss](https://findanexpert.unimelb.edu.au/profile/10215-rob-moss), [Nic Geard](https://findanexpert.unimelb.edu.au/profile/432264-nic-geard), [Patrick Andersen](https://findanexpert.unimelb.edu.au/profile/721168-patrick-andersen) and [Tim Wilson](https://findanexpert.unimelb.edu.au/profile/884197-tim-wilson) (University of Melbourne), assisted by all members of the Population Interventions Unit (Drs [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim) and [Laxman Bablani](https://findanexpert.unimelb.edu.au/profile/686318-laxman-bablani), and Profs [Vijaya Sundararajan](https://findanexpert.unimelb.edu.au/profile/26106-vijaya-sundararajan) and [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely)).\n- The determination of which diseases and conditions are impacted by COVID-19 restrictions, and with what magnitude, was undertaken by Dr [Driss Ait Ouakrim](https://findanexpert.unimelb.edu.au/profile/242956-driss-ait-ouakrim), Ms Ameera Katar, Mr Patrick Abraham, Dr [Natalie Carvalho](https://findanexpert.unimelb.edu.au/profile/531653-natalie-carvalho) and Prof [Nathan Grills](https://findanexpert.unimelb.edu.au/profile/356800-nathan-grills).\n - Overall leadership of the body of work was by Prof [Tony Blakely](https://findanexpert.unimelb.edu.au/profile/773939-tony-blakely).\n- Web hosting and technical support was provided by Grace Dong and Dr Melissa Makin. \n- We acknowledge a generous anonymous philanthropic grant, through Advancement, that enabled this project."
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


<h3>Vaccine Effectiveness Against Any Infection</h3>

Vaccine infection against any infection is what matters for transmission in the total population, and thence herd immunity and the dampening of spread.

**Pfizer (BNT162b2) vaccine effectiveness at reducing any infection**: Weighing up the evidence and trying to think ahead to vaccination effectiveness for the Delta variant, two doses among adults aged 16 to 60 year are likely to be 80% successful (with a 95% uncertainty ranging from 67% to 90%). The following studies were synthesised in our thinking:

* <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2034577">Polack, et al</a> reported in their RCT predominantly set in the United States that vaccine efficacy was 95% (95% credible interval, 90.3 to 97.6).
* <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00947-8/fulltext">Hass, et al</a> in their nation-wide study from Israel reported a vaccine effectiveness of 95.3% (95% CI 94.9 to 95.7%) after 2 doses.
* <a href="https://www.nature.com/articles/s41591-021-01410-w">Pritchard et al (2021)</a> from the UK estimated an effectiveness of (80%, 95% CI 74 to 85%; using OR in Suppl Table 6) after 2 vaccine doses in a sample evenly split between Alpha (B.1.1.7, 53%) and other variants (“S gene positive, plus 1 or 2 other genes”, 45%) (Suppl Table 3).
* <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01358-1/fulltext">Sheikh, et al (2021)</a> report effectiveness for all infections against the Delta variant in Scotland was 79% (75–82%, S gene-positive). Of note, against S gene-negative cases (Alpha, B.1.1.7) effectiveness was 92% (95% CI 90–93), which is higher than results from Pritchard, et al.

**AstraZeneca (ChAdOx1 nCoV-19) vaccine effectiveness at reducing any infection**: For the 60+ year estimates, again weighing up the evidence and trying to think ahead to Delta, we estimate vaccine effectiveness for two doses against any transmission to be 60% (95% uncertainty interval 42% to 78%). The following studies were synthesised in our thinking:

* The RCT of interest is from <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00628-0/fulltext">Emary et al (2021)</a> who report a vaccine efficacy of (66.5% (95% CI 37.1%, 82.1%) for Alpha, and 80.7% (69.2%, 87.9%) for wild-type and other variants (little evidence of heterogeneity) for all infections 14 days after the 2nd vaccine dose in the UK.
* <a href="https://www.nature.com/articles/s41591-021-01410-w">Pritchard et al (2021)</a> undertook a large cohort study, also in the UK, providing a vaccine effectiveness estimate, after 2 vaccine doses, of (79%, 95% CI 65 to 88%; using OR in Suppl Table 6). The sample received 2 vaccine doses and was evenly split between Alpha (B.1.1.7, 53%) and other variants (“S gene positive, plus 1 or 2 other genes”, 45%) (Suppl Table 3).
* <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01358-1/fulltext">Sheikh, et al (2021)</a> report that AZ effectiveness for all infections against the Delta variant in Scotland was 60% (53–66%, S gene-positive). Of note, against S gene-negative cases (Alpha, B.1.1.7) effectiveness was 73% (95% CI 66–78), which is compatible with results from Pritchard, et al.


**Vaccine effectiveness at reducing transmission in those infected**: Of the 20% (Pfizer) and 40%  (AstrZeneca) still at risk of being infected, likely mildly, their chance of passing the virus on reduces by <a href="https://www.nejm.org/doi/full/10.1056/NEJMc2107717">50%</a> compared to the unvaccinated.


<h3>Vaccine Effectiveness Against Mortality and Hospitalisation</h3>

Vaccine effectiveness against hospitalization and mortality are very uncertain. For this launch, we used 85% (95% uncertainty interval 64% to 96%) and 80% (61% to 93%) for Pfizer and AstraZeneca, respectively, for hospitalization and 90% (74% to 98%) and 87.5% (74% to 96%), respectively, for mortality.

* For hospitalization there are 3 studies for Pfizer and one for AstraZeneca. For Pfizer, <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00677-2/fulltext">Vasielou</a>, found a vaccine effect against hospital admissions among those receiving a first dose to be 91% (95% CI 85–94) (table 2). Among those aged 80 years and older vaccine effect was 88% (95% CI 76–94), (table 3, indicating little age differences, although perhaps greater uncertainty). <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2101765">Dagan</a> in their nationwide Israeli Pfizer results after two doses found a vaccine effectiveness of 87% (55-100); <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00947-8/fulltext">Hass, et al</a> reported that Pfizer vaccine effectiveness after 2 doses was 97.2% (96.8-97.5) with no differential by age. For AstraZeneca <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00677-2/fulltext">Vasielou, et al</a> found a vaccine effectiveness against COVID-19 hospital admissions after a first dose was 88% (75–94; table 2). Among those aged 80 years and older, vaccine effectiveness was 81% (60–91; table 3), again indicating little age effect but greater uncertainty.
* For mortality, the studies are few and none are available for AstraZeneca or the Delta variant. The lower estimates (and the wide uncertainty interval) we used for the model reflect the uncertainty regarding Delta and its risk of mortality. <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2101765">Dagan</a> in their nationwide Israeli results for Pfizer vaccination post 1st dose 84% (44-100) for death. <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00947-8/fulltext">Hass, et al</a> reported that Pfizer vaccine effectiveness after 2 doses for death, ages 16-44 was 100%, for 45-64years was 95.8% (92.6-97.6%), for >=65years was 96.9%(96.0-97.6).
* Our hospitalization and mortality estimates are likely to have an uncertainty range of ¼ to 4 times what we give as a ‘best estimate’ (also factoring in uncertainty about the virulence of Delta and future variants compared to wild type, data about which we used to parameterize infection fatality risks and hospitalization rates for the unvaccinated).



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

Should you have any concerns about our model assumptions and specifications, we would welcome your suggestions for improvements or alternative specifications.  For the latter, if simple to run, we will attempt to do them for you – please email <a href="mailto:population-interventions@unimelb.edu.au">population-interventions@unimelb.edu.au</a>.