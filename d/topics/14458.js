var data={"title":"Proof, p-values, and hypothesis testing","body":"<div id=\"topicContent\" class=\"utdArticleSection utdStyle\"><div id=\"topicTitle\">Proof, p-values, and hypothesis testing</div><dl id=\"topicContributors\"><dt><span> </span>Author:</dt><dd><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/contributors\" class=\"contributor contributor_credentials\">David M Rind, MD</a></dd><dt><span> </span>Section Editor:</dt><dd><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/contributors\" class=\"contributor contributor_credentials\">Joann G Elmore, MD, MPH</a></dd><dt><span> </span>Deputy Editor:</dt><dd><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/contributors\" class=\"contributor contributor_credentials\">Carrie Armsby, MD, MPH</a></dd></dl><p class=\"disclosureLink\"><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/contributor-disclosure\" class=\"contributor contributor_credentials\">Contributor Disclosures</a></p><div id=\"reviewProcess\"><span>All topics are updated as new evidence becomes available and our <a href=\"https://www.uptodate.com/home/editorial-policy\" target=\"_blank\" class=\"policy policy_editorialpolicy\">peer review process</a> is complete.</span></div><div id=\"literatureReviewDate\"><span class=\"emphasis\">Literature review current through:</span>&#160;Feb 2018.&#160;&#124;&#160;<span class=\"emphasis\">This topic last updated:</span>&#160;Jan 24, 2018.</div><div id=\"topicWhatsNewContainer\"></div><div id=\"topicText\"><p class=\"headingAnchor\" id=\"H1\"><span class=\"h1\">INTRODUCTION</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>The concepts around biostatistics are frequently confusing to clinicians. The meaning of a p-value in particular is commonly misunderstood and yet is central to the way most clinicians interpret the results of scientific studies [<a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/abstract/1,2\" class=\"abstract_t\">1,2</a>].</p><p>This review will discuss the correct interpretation of p-values and confidence intervals, the idea of proof, and the understanding of power calculations in negative studies. A general discussion of the meaning of biostatistical terms is found elsewhere. (See <a href=\"topic.htm?path=glossary-of-common-biostatistical-and-epidemiological-terms\" class=\"medical medical_review\">&quot;Glossary of common biostatistical and epidemiological terms&quot;</a>.)</p><p class=\"headingAnchor\" id=\"H2\"><span class=\"h1\">PROOF</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>In scientific and medical endeavors, a common question to be addressed is &quot;what constitutes proof?&quot; How do we decide when the evidence for or against a hypothesis is adequate to consider the matter proven?</p><p>Certain methodologies of clinical trials are considered &quot;stronger&quot; than other methodologies. For instance, randomized clinical trials are generally considered better evidence than case control studies. Proof, however, never exists in a single trial result or a single piece of evidence. Proof is a human concept having to do with the rational thought process. Information may be sufficient to allow one person to consider something proven where another will not.</p><p>As an example, there is no evidence from clinical trials in humans that cigarette smoking causes lung cancer. However, evidence from epidemiologic studies overwhelmingly shows a relationship between smoking and lung cancer. A dose-response relationship in these studies and evidence from animal studies provide strong support for the relationship having biologic plausibility and being causal (ie, smoking is not just associated with lung cancer but is a cause of lung cancer). Most people consider it proven that smoking causes lung cancer despite the absence of clinical trials in humans.</p><p>In contrast, there are randomized trials of homeopathic preparations (essentially extremely diluted preparations that on average will have no molecules of any of the original &quot;therapeutic&quot; substance remaining) that are claimed to have &quot;proven&quot; the effectiveness of the substance. Although these studies may have achieved a p-value less than 0.05 (see <a href=\"#H7\" class=\"local\">'P-values'</a> below), a much higher statistical standard of proof may be appropriate given the implausibility of the underlying hypothesis.</p><p>Thus, when discussing whether an issue in medicine has been proven, disproven, or remains uncertain, it is important to remember that no single statistic or value will provide the answer.</p><p class=\"headingAnchor\" id=\"H3\"><span class=\"h1\">STATISTICAL TESTS AND THE NULL HYPOTHESIS</span></p><p class=\"headingAnchor\" id=\"H4\"><span class=\"h2\">Samples</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>Statistical testing is generally performed to deal with the problem of random variation in samples. Because of random variation, a sample is likely to differ in various ways from the population from which it was selected. Statistical testing is used to estimate the effects of random variation in samples and to predict how likely it is that the results in the sample accurately reflect what would be seen in the entire population. In general, the size of the sample, but not the size of the population, matters when considering random variation.</p><p>As an example, if three people from a population of 1000 are randomly selected and given a drug for high blood pressure, the results in those three people are unlikely to accurately reflect what would be seen in the entire population. In contrast, if 500 people were randomly selected, the results would likely reflect the underlying population with relatively good accuracy whether selected from a group of 1000 or 1,000,000 people.</p><p class=\"headingAnchor\" id=\"H5\"><span class=\"h2\">Null hypothesis</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>When statistical tests are used in research, it is generally to decide whether or not to reject the &quot;null hypothesis.&quot; The null hypothesis is the hypothesis that will be statistically assumed until some level of statistical evidence is reached to allow a decision to reject it. Although this notion feels awkward, it is needed to allow statistical tests to perform as expected, and understanding it is required for understanding the use of p-values in hypothesis testing (see <a href=\"#H7\" class=\"local\">'P-values'</a> below). Generally, the null hypothesis is the theory that the exposure or intervention that is being studied is not associated with the outcome of interest. Thus, if a certain level of statistical significance is reached the null hypothesis will be rejected, otherwise the null hypothesis will not be rejected.</p><p>As an example, consider a study looking at the effect of beta blockade on mortality in heart failure. The null hypothesis would be that beta blockade has no different effect on mortality from placebo. Even if beta blockers really have no effect on mortality, because of random variation in the actual study, the mortality rates in patients receiving beta blockers will likely not be the same as in patients receiving placebo. Thus, some method is needed to decide how different is &quot;different enough&quot; to reject this null hypothesis and conclude that the null hypothesis is probably false. Statistical tests are used for this purpose.</p><p class=\"headingAnchor\" id=\"H6\"><span class=\"h1\">EXPLANATION FOR THE RESULTS OF A STUDY</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>Whether a study has a positive or negative result, one or more of the following four possible explanations will explain the outcome:</p><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>Truth &ndash; The conclusion of the study may accurately reflect the answer to the underlying question that was being asked.</p><p/><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>Bias &ndash; There may be one or more errors in the way the study was performed that distorted the results and affected the conclusions.</p><p/><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>Confounding &ndash; There may be one or more variables that are associated both with the exposure being studied and also with the outcome of interest that affected the results of the study.</p><p/><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>Chance &ndash; Random variations that occurred within the sample of the population being studied may lead to erroneous conclusions. If random chance leads to a mistaken conclusion that there was an effect, the mistake is called a type 1 error (alpha error); if random chance leads to a mistaken conclusion that there was no effect, the mistake is called a type 2 error (beta error).</p><p/><p class=\"headingAnchor\" id=\"H7\"><span class=\"h1\">P-VALUES</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>Once data are gathered from a study, statistical testing is performed on the results. A statistical test looks at the likelihood that a certain result would have occurred given some assumptions about the underlying population being studied. The statistical test calculated from the underlying data and the assumptions is generally translated into a p-value.</p><p>A p-value is a measure of the effect of chance within a study. It is <strong>not</strong> the probability that the result of the study is true or correct. Instead, it is the probability that if the null hypothesis (see <a href=\"#H5\" class=\"local\">'Null hypothesis'</a> above) were true, and if the results were not affected by bias or confounding, that we would have seen a result as extreme or more extreme than the one seen in the study.</p><p>Thus, if we perform a methodologically perfect study of the effect of beta blockers on mortality in heart failure, find a relative risk for death of 0.75 in treated patients, and the p-value is 0.03, that means that if there were no effect of beta blockers we would have expected to get a relative risk &le;0.75 only 3 percent of the time. The p-value says nothing directly about the probabilities that we are actually interested in: the probability that beta blockers actually work or the probability that the relative risk is really 0.75. Those probabilities are never knowable from a single study. If the prior probability (the probability before the study was performed) that beta blockers affect mortality was very low, then even after the study was performed and resulted in a p-value of 0.03, the likelihood that beta blockers affect mortality would be much lower than 97 percent. In contrast, if the prior probability was very high (perhaps because of evidence from other studies or biologic plausibility), then the probability that beta blockers affect mortality after the above study was performed would be higher than 97 percent.</p><p class=\"headingAnchor\" id=\"H8\"><span class=\"h1\">CONFIDENCE INTERVALS</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>Confidence intervals are a way to show the range of values that could be considered reasonably likely after statistics are performed on gathered data. Similar to the issue with p-values discussed above, and despite their name, confidence intervals cannot be used to directly infer how confident one should be in a result. As in the discussion above, consider a study that finds that patients treated with beta blockers have a relative risk of mortality of 0.75 with a 95 percent confidence interval (CI) from 0.7 to 0.8. Even if the study is methodologically correct, this does <strong>not</strong> mean that there is only a 5 percent chance that the real relative risk is below 0.7 or above 0.8. Instead it means that in correctly performed studies we would expect the CI to surround the true value for the relative risk 95 percent of the time. The difference between these two views, as is discussed above, is that the actual likelihood that the relative risk is between 0.7 and 0.8 depends upon the prior likelihood (before the study was performed) that the relative risk was in that range. If it were very unlikely prior to the study, then the likelihood after the study would not be 95 percent despite the apparent meaning of the term &quot;confidence interval.&quot;</p><p>However, because it may be very difficult to know the prior probability, confidence intervals are often interpreted as representing a range of believable values. This is particularly useful in deciding whether a study had adequate numbers of patients to answer a question. As an example, if the above CI for the relative risk ranged from 0.5 to 1.12, the study might have been reported as &quot;negative&quot; when in reality the study was simply too small to answer the clinical question. A reduction in mortality of 50 percent would clearly be clinically meaningful, and an increase in mortality of 12 percent would likely also be meaningful. If, instead, the relative risk in the study were 0.99 with a CI from 0.97 to 1.01, it would probably be felt that it was unlikely that the real relative risk would be so high or low as to be clinically important.</p><p>Again, though, the interpretation of confidence intervals, like the interpretation of p-values, depends upon a consideration of the totality of evidence for or against a hypothesis.</p><p class=\"headingAnchor\" id=\"H9\"><span class=\"h1\">STATISTICAL SIGNIFICANCE</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>The choice of a specific cutoff point for a p-value or degree of confidence for a confidence interval is arbitrary. Although a p-value of 0.05 (and the corresponding choice of a 95 percent confidence interval) is conventional, there is no particular reason why a p-value of 0.02 and a corresponding 98 percent confidence interval could not be the standard for calling a result &quot;statistically significant.&quot;</p><p>However, although the choice is arbitrary, if we use p-values to decide the statistical significance of a result, some choice is required and it must be adhered to so as to achieve the desired result of having the rate of studies that show positive results due to chance alone be predictable. If we want to know that the rate of such erroneous positive results is 5 percent, we must treat both 0.001 and 0.05 as results that are statistically significant. We must also then state that a result with a p-value of 0.06 is not statistically significant.</p><p>Although the result where the p-value is 0.001 is less likely to be due to chance (all other things being equal) than one where it is 0.05, and a result with a p-value of 0.06 is only slightly more likely to be due to chance than where it was 0.05, if we try to use these numbers in any way other than as falling on one side or the other of a bright line (arbitrarily p = 0.05), we will no longer be able to say with certainty what percentage of studies that had statistically significant results was really the result of type 1 errors.</p><p>Despite this loss of predictability, it is common and common sense to take very small p-values as stronger evidence in support of a hypothesis than p-values close to 0.05.</p><p class=\"headingAnchor\" id=\"H10\"><span class=\"h1\">POWER IN A NEGATIVE STUDY</span><span class=\"headingEndMark\">&#160;&#8212;&#160;</span>Power is the statistical probability of avoiding a type 2 error in a study (see <a href=\"#H6\" class=\"local\">'Explanation for the results of a study'</a> above). That is, it is the probability that a study will not mistakenly accept the null hypothesis and conclude that there was no effect or difference when there really was one.</p><p>Whenever a study finds no statistically significant difference, the issue of whether there was &quot;adequate power&quot; is raised, since one possible explanation for the result was that a small sample size <span class=\"nowrap\">and/or</span> random chance led to a failure to detect a difference that really existed. This issue feels particularly pressing when the point estimate found in the study appears clinically important. In the above hypothetical study, a relative risk for mortality of 0.75 with a 95% CI of 0.5-1.12 would not be statistically significant; however, the point estimate of a 25 percent reduction in mortality would clearly be clinically meaningful if true.</p><p>It is possible to calculate the power a study has to find a given result (for instance a 25 percent reduction in mortality) given a particular sample size (and also given the underlying variation in the population). Power calculations are useful in the design of studies to decide whether a study is large enough to have a reasonable chance of finding a positive result or to calculate the number of patients required to achieve a certain power.</p><p>However, when papers try to deal with the issue of &quot;adequate power&quot; after a negative study result by performing a power calculation using the point estimate found in the study, the result is meaningless. The power in such a calculation will <strong>always</strong> be less than 50 percent [<a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/abstract/3\" class=\"abstract_t\">3</a>]. Instead, as discussed above, the way to decide after the fact whether a negative study had sufficient power is to look at the confidence intervals and see whether clinically important values exist within the range of the statistically likely values represented by the confidence interval. (See <a href=\"#H8\" class=\"local\">'Confidence intervals'</a> above.)</p><p class=\"headingAnchor\" id=\"H11\"><span class=\"h1\">SUMMARY</span></p><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>Proof is a human concept and never comes from a single piece of evidence or a statistical test. (See <a href=\"#H2\" class=\"local\">'Proof'</a> above.)</p><p/><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>In any study, the possible explanations for the result seen are: truth, bias, confounding, and chance. (See <a href=\"#H6\" class=\"local\">'Explanation for the results of a study'</a> above.)</p><p/><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>A p-value is not a direct measure of the likelihood that a given result from a study is correct, even if the study is methodologically flawless. (See <a href=\"#H7\" class=\"local\">'P-values'</a> above.)</p><p/><p class=\"bulletIndent1\"><span class=\"glyph\">&#9679;</span>After finding a negative result in a study, look at the confidence interval to decide if the study had adequate power; do not look at power calculations to decide this. (See <a href=\"#H8\" class=\"local\">'Confidence intervals'</a> above.)</p></div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"references\" class=\"headingAnchor\"><h1>REFERENCES</h1><ol id=\"reference\"><li><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/abstract/1\" class=\"nounderline abstract_t\">Davidoff F. Standing statistics right side up. Ann Intern Med 1999; 130:1019.</a></li><li><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/abstract/2\" class=\"nounderline abstract_t\">Goodman SN. Toward evidence-based medical statistics. 1: The P value fallacy. Ann Intern Med 1999; 130:995.</a></li><li><a href=\"https://www.uptodate.com/contents/proof-p-values-and-hypothesis-testing/abstract/3\" class=\"nounderline abstract_t\">Goodman SN, Berlin JA. The use of predicted confidence intervals when planning experiments and the misuse of power when interpreting results. Ann Intern Med 1994; 121:200.</a></li></ol></div><div id=\"topicVersionRevision\">Topic 2777 Version 17.0</div></div>","outline":"<div id=\"outlineSections\"><h2>Topic Outline</h2><ul id=\"innerOutline\"><li class=\"sr-button\"><a href=\"#H11\"><span>SUMMARY</span></a></li><li><a href=\"#H1\" id=\"outline-link-H1\">INTRODUCTION</a></li><li><a href=\"#H2\" id=\"outline-link-H2\">PROOF</a></li><li><a href=\"#H3\" id=\"outline-link-H3\">STATISTICAL TESTS AND THE NULL HYPOTHESIS</a><ul><li><a href=\"#H4\" id=\"outline-link-H4\">Samples</a></li><li><a href=\"#H5\" id=\"outline-link-H5\">Null hypothesis</a></li></ul></li><li><a href=\"#H6\" id=\"outline-link-H6\">EXPLANATION FOR THE RESULTS OF A STUDY</a></li><li><a href=\"#H7\" id=\"outline-link-H7\">P-VALUES</a></li><li><a href=\"#H8\" id=\"outline-link-H8\">CONFIDENCE INTERVALS</a></li><li><a href=\"#H9\" id=\"outline-link-H9\">STATISTICAL SIGNIFICANCE</a></li><li><a href=\"#H10\" id=\"outline-link-H10\">POWER IN A NEGATIVE STUDY</a></li><li><a href=\"#H11\" id=\"outline-link-H11\">SUMMARY</a></li><li><a href=\"#references\">REFERENCES</a></li></ul></div><div><h2>RELATED TOPICS</h2><div id=\"outlineTopics\"><ul><li class=\"plainItem\"><a href=\"topic.htm?path=glossary-of-common-biostatistical-and-epidemiological-terms\" class=\"medical medical_review\">Glossary of common biostatistical and epidemiological terms</a></li></ul></div></div>","javascript":null}