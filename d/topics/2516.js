var data={"title":"Calculator: Apgar score","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"ApgarScore_form\" id=\"ApgarScore_form\" action=\"\" onsubmit=\"return false;\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\nCalculator: Apgar score\n</span></td></tr></table><br />&nbsp;<br />\n<div id=\"calc_main\">\n<div id=\"calc_input\">\n<center>\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Strength and regularity of heart rate </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc1\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">100 beats/minute or more (2 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc1\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Less than 100 (1 point)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc1\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">None (0 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Lung maturity </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc2\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Regular breathing (2 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc2\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Irregular (1 point)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc2\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">None (0 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Muscle tone and movement </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Active (2 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Moderate (1 point)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Limp (0 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Skin color / oxygenation </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Pink (2 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Bluish extremeties (1 point)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Totally blue (0 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Reflex response to irritable stimuli </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc5\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Crying (2 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc5\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Whimpering (1 point)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc5\" onclick=\"ApgarScore_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Silence (0 points)</span></td></tr>\n\n</table>\n</center>\n</div>\n<br />&nbsp;<br />\n<div id=\"calc_result\">\n<span class=\"medCalcFontCCTabBold\">\nTotal Criteria Point Count:\n</span>\n<input type=\"text\" size=\"6\" name=\"cctotal\" onfocus=\"blur();\" /><br />&nbsp;<br />\n<center><input type=\"reset\" name=\"reset\" value=\"Reset Form\" />    </center>\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\nApgar Score\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr id=\"rr1_1\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">7-10 Points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Normal</span></td></tr>\n<tr id=\"rr1_2\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">0-6 Points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Distress</span></td></tr>\n\n</table>\n</center>\n\n</div>\n</div>\n<br />&nbsp;<br />\n<div id=\"calc_hints\">\n<span class=\"medCalcFontOne\">\n\n</span>\n \n</div>\n\n<br />&nbsp;<br />\n\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Apgar V. A proposal of a New Method of Evaluation of the Newborn Infant. <i>Current Researches in Anesthesia and Analgesia</i>. 1953, 32: 261-267.</span></li>\n<li><span class=\"medCalcFontRef\">Apgar V, Holaday DA, James LS, et. al. Evaluation of the newborn infant. <i>JAMA</i>. 1958, 168: 1985-1988.</span></li>\n<li><span class=\"medCalcFontRef\">Casey BM, McIntire DD, Leveno KJ. The continuing value of the Apgar score for the assessment of newborn infants. <i>N Engl J Med</i>. 2001 Feb 15;344(7):467-71.</span></li>\n\n</ol>\n</div>\n\n\n\n</form>\n\n\n\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 13501 Version 3.0</div></div>","outline":null,"javascript":"\n<!--\n\nvar calctxt = '';\nvar xmltxt = '';\nvar htmtxt = '';\n\n\nfunction ApgarScore_fx() {\nwith(document.ApgarScore_form){\n\nScore = 0.0;\ndoCalc = true;\n\nif (cc1[0].checked){\nScore = Score + 2;\n}\nif (cc1[1].checked){\nScore = Score + 1;\n}\nif (cc1[2].checked){\nScore = Score + 0;\n}\nif (cc2[0].checked){\nScore = Score + 2;\n}\nif (cc2[1].checked){\nScore = Score + 1;\n}\nif (cc2[2].checked){\nScore = Score + 0;\n}\nif (cc3[0].checked){\nScore = Score + 2;\n}\nif (cc3[1].checked){\nScore = Score + 1;\n}\nif (cc3[2].checked){\nScore = Score + 0;\n}\nif (cc4[0].checked){\nScore = Score + 2;\n}\nif (cc4[1].checked){\nScore = Score + 1;\n}\nif (cc4[2].checked){\nScore = Score + 0;\n}\nif (cc5[0].checked){\nScore = Score + 2;\n}\nif (cc5[1].checked){\nScore = Score + 1;\n}\nif (cc5[2].checked){\nScore = Score + 0;\n}\ncctotal.value = Score;\n\nif (doCalc){\nrrclr();\nif ((Score >= 7) && (Score <= 10)){ document.getElementById('rr1_1').bgColor = '#cccccc';\n}\nif ((Score >= 0) && (Score <= 6)){ document.getElementById('rr1_2').bgColor = '#cccccc';\n}\n\n}\n}\n}\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = \"\";\ndocument.getElementById('rr1_2').bgColor = \"\";\n}\n\n\n//-->\n\n<!--\n\n;\nApgarScore_fx();\n//-->\n"}