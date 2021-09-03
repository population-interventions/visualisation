---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Details",
	
	"title": "Model Details",
	"description": "This page describes the details of the modelling that is presented on the <a href='/pandemic-trade-offs-august-2021' target='_blank' rel='noopener noreferrer'>COVID-19 Pandemic Trade-offs</a> page.",
	
	"date": "2021-07-04",
	"date_updated": "2021-07-07",
	
	"slug": "pandemic-trade-offs-detail-august-2021",
	
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

A *strategy* is a set of rules for determining when to move between different stages. Our model considers four strategies: elimination, tight suppression, loose suppression and bare suppression.

Mouse-over the following graphic to explore the rules associated with each strategy. (It works best on a desktop or laptop screen.) You will see that the rules for moving between stages usually depend on the '7-day average'—this is the average number of new cases detected each day over the past week.

{% import_content "fig-strategies", slug %}

Note that:

- The numbers for moving between stages shown for moderate elimination are daily average counts in a population the size of Victoria (6.6 million); all other strategy thresholds are expressed as average daily rates per million, over the last seven days.
- In addition to the triggers presented on the above graphic, there is also a minimum time enforced between each easing or tightening of restrictions under each strategy. For full details, please see [this document](/posts/pandemic-trade-offs-detail/doc-strategies.pdf).


---

<h2 id="effectiveness">Vaccination</h2>

The model starts on 1 August 2021, with a calibrated percentage of the population already vaccinated. Subsequent vaccinations occur at a rate that achieves the user-selected vaccine coverage option by late March 2021 (when borders open in our model). So, for example, if the user selects 90% of the population vaccinated, including children, the rate of vaccine roll out is much quicker than for 70% coverage of adults only. The priority order of who is vaccinated is as per Australian (and most country) recommendations: vulnerable populations and the elderly first, then cascading down age groups. We assume 60+ year olds are vaccinated with AstraZeneca, 25% of 16 to 59 year olds with AstraZeneca, and others with Pfizer.

<h3 id="lag">Vaccine Lag Time</h3>

Partial vaccine efficacy (50% of full vaccine efficacy) takes effect 10 days after the first dose, and full vaccine efficacy 10 days after the second dose. Dosing interval for AstraZeneca is 12 weeks, and 3 weeks for Pfizer. We assume that everyone getting one dose also gets their second dose. We do not include booster options, but we will likely do so in future iterations of modelling.

---

<h2 id="effectiveness">Vaccine Effectiveness</h2>


<h3>Vaccine Effectiveness Against Any Infection</h3>

Vaccine effectiveness against any infection is what matters for transmission in the total population, and hence partial (full unobtainable) herd immunity and the dampening of spread.

**Pfizer (BNT162b2) vaccine effectiveness at reducing any infection**: Weighing up the evidence and trying to think ahead to vaccination effectiveness for the Delta variant, two doses among adults aged 16 to 60 year are likely to be 80% successful (with a 95% uncertainty ranging from 67% to 90%). The following studies were synthesised in our thinking:

* <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2034577">Polack, et al</a> reported in their RCT predominantly set in the United States that vaccine efficacy was 95% (95% credible interval, 90.3 to 97.6).
* <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00947-8/fulltext">Hass, et al</a> in their nation-wide study from Israel reported a vaccine effectiveness of 95.3% (95% CI 94.9 to 95.7%) after 2 doses.
* <a href="https://www.nature.com/articles/s41591-021-01410-w">Pritchard et al (2021)</a> from the UK estimated an effectiveness of (80%, 95% CI 74 to 85%; using OR in Suppl Table 6) after 2 vaccine doses in a sample evenly split between Alpha (B.1.1.7, 53%) and other variants (“S gene positive, plus 1 or 2 other genes”, 45%) (Suppl Table 3).
* <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01358-1/fulltext">Sheikh, et al (2021)</a> report effectiveness for all infections against the Delta variant in Scotland was 79% (75–82%, S gene-positive). Of note, against S gene-negative cases (Alpha, B.1.1.7) effectiveness was 92% (95% CI 90–93), which is higher than results from Pritchard, et al.

**AstraZeneca (ChAdOx1 nCoV-19) vaccine effectiveness at reducing any infection**: For the 60+ year estimates, again weighing up the evidence and trying to think ahead to Delta, we estimate vaccine effectiveness for two doses against any transmission to be 60% (95% uncertainty interval: 42% to 78%). The following studies were synthesised in our thinking:

* The RCT of interest is from <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00628-0/fulltext">Emary et al (2021)</a> who report a vaccine efficacy of (66.5% (95% CI 37.1%, 82.1%) for Alpha, and 80.7% (69.2%, 87.9%) for wild-type and other variants (little evidence of heterogeneity) for all infections 14 days after the 2nd vaccine dose in the UK.
* <a href="https://www.nature.com/articles/s41591-021-01410-w">Pritchard et al (2021)</a> undertook a large cohort study, also in the UK, providing a vaccine effectiveness estimate, after 2 vaccine doses, of (79%, 95% CI 65 to 88%; using OR in Suppl Table 6). The sample received 2 vaccine doses and was evenly split between Alpha (B.1.1.7, 53%) and other variants (“S gene positive, plus 1 or 2 other genes”, 45%) (Suppl Table 3).
* <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01358-1/fulltext">Sheikh, et al (2021)</a> report that AZ effectiveness for all infections against the Delta variant in Scotland was 60% (53–66%, S gene-positive). Of note, against S gene-negative cases (Alpha, B.1.1.7) effectiveness was 73% (95% CI 66–78), which is compatible with results from Pritchard, et al.


**Vaccine effectiveness at reducing transmission in those infected**: Of the 20% (Pfizer) and 40% (AstraZeneca) still at risk of being infected, likely mildly, their chance of passing the pre-Delta variants of the virus on reduces by <a href="https://www.nejm.org/doi/full/10.1056/NEJMc2107717">50%</a> compared to the unvaccinated infecteds. However, there is concern that this does not apply to Delta, as virus excretion is just as high among vaccinated infecteds as among unvaccinated infecteds – although some early data suggests lower (albeit imprecise) attack rates where the index case is vaccinated. Given this uncertainty, we randomly draw this vaccine efficacy for onward transmission from a beta distribution.


<h3>Vaccine Effectiveness Against Mortality and Hospitalisation</h3>

Vaccine effectiveness against hospitalisation and mortality are very uncertain. Moreover, in our modelling we apply a vaccine efficacy conditional on already having been infected.  Thus, if *VE<sub>H</sub>* is the vaccine efficacy in the total population for reducing hospitalisation rates, then:

<p style="text-align: center; font-style: italic;">
VE<sub>H</sub> = 1 * (1 - VE<sub>Inf</sub>) * (1 - VE<sub>H | Inf</sub>)
</p>

Where:
* *VE<sub>Inf</sub>* is the vaccine efficacy against transmission (60% for AstraZeneca and 80% for Pfizer);
* *VE<sub>H | Inf</sub>* is the vaccine efficacy against hospitalisation among the infected

Given these relationships, we want coherence with the *VE<sub>M | Inf</sub>* being greater than the *VE<sub>H | Inf</sub>* (i.e. vaccine efficacy for mortality once infected should be better than vaccine efficacy for hospitalisation once infected, as we know vaccination shifts the severity distribution.)  
So the ‘trick’ here is to review the studies on *VE<sub>H</sub>*  and *VE<sub>M</sub>*  (as studies are not really published on *VE<sub>H | Inf</sub>* and *VE<sub>M | Inf</sub>*), and select the values that both agree with this literature and meet our coherence criteria.


Regarding the empirical research: 

* For hospitalisation there are 3 studies for Pfizer and one for AstraZeneca. For Pfizer, <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00677-2/fulltext">Vasielou</a>, found a vaccine effect against hospital admissions among those receiving a first dose to be 91% (95% CI 85–94) (Table 2). Among those aged 80 years and older vaccine effect was 88% (95% CI 76–94), (Table 3, indicating little age differences, although perhaps greater uncertainty). <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2101765">Dagan</a> in their nationwide Israeli Pfizer results after two doses found a vaccine effectiveness of 87% (55-100); <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00947-8/fulltext">Hass, et al</a> reported that Pfizer vaccine effectiveness after 2 doses was 97.2% (96.8-97.5) with no differential by age. For AstraZeneca <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00677-2/fulltext">Vasielou, et al</a> found a vaccine effectiveness against COVID-19 hospital admissions after a first dose was 88% (75–94; Table 2). Among those aged 80 years and older, vaccine effectiveness was 81% (60–91; Table 3), again indicating little age effect but greater uncertainty.
* For mortality, the studies are few and none are available for AstraZeneca or the Delta variant. The lower estimates (and the wide uncertainty interval) we used for the model reflect the uncertainty regarding Delta and its risk of mortality. <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2101765">Dagan</a> in their nationwide Israeli results for Pfizer vaccination post 1st dose 84% (44-100) for death. <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00947-8/fulltext">Hass, et al</a> reported that Pfizer vaccine effectiveness after 2 doses for death, ages 16-44 was 100%, for 45-64years was 95.8% (92.6-97.6%), for >=65years was 96.9%(96.0-97.6).

Therefore, we settled on the VE estimates in the table below:

{% import_content "fig-vaccine-efficacy", slug %}

---

<h2 id="arrivals">Vaccinated Infected Arrivals</h2>

One of the parameters our model depends on is the average number of infected travellers arriving each day. The calculator below allows you to estimate this parameter as a function of more intuitive quantities: the number of travellers, and the prevalence of vaccinations and circulating virus in their countries of origin.

{% import_content "fig-incursion-calc", slug %}

For example, using the Institute of Health Metrics and Evaluation (IHME) estimations of infections per day by country (accessed 5 July 2021), assuming 50% vaccination rates in those countries, assuming all travellers are vaccinated, and PCR tested three days per arrival, and 4250 arrivals per day to Victoria (half pre-COVID amounts), then:

- **0.2 vaccinated but infected arrivals per day** equates to 4250 people a day coming from origin countries with an infection rate of 5 per 100,000 per day. This is equivalent to the rate in Thailand in early July 2021.
- **1.0 arrivals per day​​** equates to 25 infections per 100,000 per day in the origin countries. This is equivalent to the rate in USA and India, or half the rate in the UK, in early July 2021.
- **5 arrivals per day** equates to 125 infections per 100,000 per day in the origin countries. This is equivalent to half the rate in Mexico in early July 2021.
- **25 arrivals per day** equates to 600 infections per 100,000 day in the origin countries. This is equivalent to the highest rates in the world in early July 2021 (e.g. central Asia, Southern Africa).


---

<h2 id="reproduction">Reproduction Rate Calibration</h2>

The \\(R_0\\)  of the ABM is primarily calibrated by tuning the base chance of a susceptible agent becoming infected per interaction with an infected agent. This parameter, called 'global transmissibility', is then multiplied by factors to reflect the particular circumstances of each interaction, such as the vaccination status of both agents, whether they are wearing masks, the infected agent’s incubation period, and heterogeneity for susceptibility and transmissibility . To measure the \\(R_0\\)  we create a scenario with no vaccination, no lockdowns, and no other public health responses. We then seed this scenario with one case and record the number of secondary infections. This scenario is repeated several thousand times to generate an average \\(R_0\\) .
 
Additional parameters had previously been used to calibrate previous iterations of the model, primarily to calibrate the \\(R_{\text{eff}}\\)  of various stages of lockdown at \\(R_0\\)  2.5 These parameters include travel radius, population density, the the rate of super sprading behaviour, and the density of congregation locations. These additional parameters reflect characteristics of the region that SARS-CoV-2 is spreading in, rather than the virulence of the variant itself, so we have not modified them for this iteration of modelling. By leaving these parameters unchanged we are able to use the calibration carried out for earlier modelling. In March we were looking at \\(R_0\\)  2.5 so we calibrated the \\(R_{\text{eff}}\\)  of the various stages of lockdown to match the \\(R_{\text{eff}}\\)  observed during the Victorian second wave in August 2020. For stage 4 we calibrated to a 7-8% reduction of cases per day. Stages 2 and 3 were calibrated to straddle \\(R_{\text{eff}}\\)  1.0.

{% import_graph "calibration", slug %}

The pattern of transmission in real world outbreaks is highly skewed. Essentially, many people cause no secondary infections, while a small proportion of people tend to be responsible for the majority of the next generation of cases. To reflect, the model contains variation among agents for parameters such as infectivity, travel radius, and frequency of super spreading behaviour. In the model with R0 2.5, under our no intervention, no vaccine, scenario, 48% of infected people in the community do not infect anyone, and 20% of infected people cause 71% of the next generation of infections. These values will shift with the higher R0s of the current model, however the underlying variation in behaviour is still present.

The percentage of population wearing masks outside their home is set at 15%, 35% and 50% in the non-lockdown stages, 1, 1b and 2, respectively. This approximates use of masks in public transport and other high risk settings. In Stages 3 and 4, the percentage of population wearing masks outside their home is 60% and 85%, respectively.

Should you have any concerns about our model assumptions and specifications, we would welcome your suggestions for improvements or alternative specifications.  For the latter, if simple to run, we will attempt to do them for you – please email <a href="mailto:population-interventions@unimelb.edu.au">population-interventions@unimelb.edu.au</a>.