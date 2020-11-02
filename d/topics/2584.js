var data={"title":"Calculator: Crohn's disease activity index (CDAI) in adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"CDAI_form\" id=\"CDAI_form\" action=\"\" onsubmit=\"return false;\" onreset=\"rrclr(); \" onkeydown=\"document.CDAI_form.cctotal.value='';\" onkeyup=\"CDAI_fx();\">\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Crohn's disease activity index (CDAI) in adults\n</span></td></tr></table><br />&nbsp;<br />\n<div id=\"calc_main\">\n<div id=\"calc_input\">\n<center>\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Patient reported stool pattern</span></td></tr>\n\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\">  <input type=\"text\" name=\"cc1\" size=\"6\" value=\"\" onchange=\"CDAI_fx();\"  /></td>\n<td align=\"left\"> <span class=\"medCalcFontCCTab\"> Average number of liquid or soft stools per day over seven days (14 points per stool) </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc2\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Using diphenoxylate or loperimide for diarrhea (30 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Average abdominal pain rating over seven days </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">None (0 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Mild pain (35 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Moderate pain (70 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc3\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Severe pain (105 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">General well being each day over seven days </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Well (0 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Slightly below average (49 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Poor (98 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Very poor (147 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc4\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Terrible (196 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Complications</span></td></tr>\n\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc5\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Arthritis or arthralgia (20 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc6\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Iritis or uveitis (20 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc7\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Erythema nodosum, pyoderma gangrenosum, or aphthous stomatitis (20 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc8\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Anal fissure, fistula, or abcess (20 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc9\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Other fistula (20 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"checkbox\" name=\"cc10\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Temperature over 100&deg;F (37.8&deg;C) in the last week (20 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Finding of an abdominal mass </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc11\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">No mass (0 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc11\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Possible mass (20 points)</span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\"><input type=\"radio\" name=\"cc11\" onclick=\"CDAI_fx();\" /></td>\n<td align=\"left\"><span class=\"medCalcFontCCTab\">Definite mass (50 points)</span></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">Anemia and weight change</span></td></tr>\n\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\">  <input type=\"text\" name=\"cc12\" size=\"6\" value=\"\" onchange=\"CDAI_fx();\"  /></td>\n<td align=\"left\"> <span class=\"medCalcFontCCTab\"> Absolute deviation of hematocrit from 47 percent in males or 42 percent in females (6 points per percent deviation) </span></td></tr>\n<tr><td width=\"20\"><br /></td>\n<td align=\"right\">  <input type=\"text\" name=\"cc13\" size=\"6\" value=\"\" onchange=\"CDAI_fx();\"  /></td>\n<td align=\"left\"> <span class=\"medCalcFontCCTab\"> Percentage deviation from standard weight (1 point for each percent deviation) </span></td></tr>\n\n</table>\n</center>\n</div>\n<br />&nbsp;<br />\n<div id=\"calc_result\">\n<span class=\"medCalcFontCCTabBold\">\nTotal criteria point count:\n</span>\n<input type=\"text\" size=\"6\" name=\"cctotal\" onfocus=\"blur();\" /><br />&nbsp;<br />\n<center><input type=\"reset\" name=\"reset\" value=\"Reset form\" />    </center>\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\n CDAI Interpretation\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr id=\"rr1_1\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">0 to 149 points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Asymptomatic remission</span></td></tr>\n<tr id=\"rr1_2\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">150 to 220 points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Mildly to moderately active Crohn's disease</span></td></tr>\n<tr id=\"rr1_3\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">221 to 450 points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Moderately to severely active Crohn's disease</span></td></tr>\n<tr id=\"rr1_4\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">451 to 1100 points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Severely active to fulminant disease</span></td></tr>\n\n</table>\n</center>\n<br />&nbsp;<br />\n\n</div>\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>Patients requiring steroids to remain asymptomatic are not considered to be in remission, but are referred to as being \"steroid dependent.\"</li>\n<li>Absolute deviation of hematocrit is simply the difference in hematocrit from standard. A male patient with a hematocrit of 40 percent has an absolute deviation of 7.</li>\n<li>Percent deviation from standard weight is (1 - weight/standard weight) * 100, thus positive percent deviation represents weight loss, adding points to the CDAI.</li>\n<li>Please see appropriate UpToDate topic reviews for further information.</li>\n\n</ul>\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Best WR. Predicting the Crohn's disease activity index from the Harvey-Bradshaw Index. <i> Inflamm Bowel Dis</i>. 2006 Apr; 12:304-10.</span></li>\n<li><span class=\"medCalcFontRef\">Best WR, Becktel JM, Singleton JW, Kern F Jr. Development of a Crohn's disease activity index.  National Cooperative Crohn's Disease Study. <i>Gastroenterology</i>. 1976 Mar; 70:439-44.</span></li>\n\n</ol>\n</div>\n\n \n</form>\n\n\n\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 15646 Version 7.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\n\n\nvar calctxt = '';\nvar xmltxt = '';\nvar xmlresult = '';\nvar htmtxt = '';\nvar postNow = false;\n\n\nfunction CDAI_fx() {\nwith(document.CDAI_form){\n\nScore = 0.0;\ndoCalc = true;\n\n\nif (cc1.value && isNaN(cc1.value)){\ncc1.value = '';\nif (!postNow) alert(\"This field is improperly formatted.\\n\\nYou may only input the digits 0-9 and a decimal point.\");\ndoCalc = false;\n}\nelse{\nthisvalue = parseFloat(cc1.value);\nThisScore =  thisvalue * 14 + 0;\nScore =  Score + ThisScore;\n}\nif (cc2.checked){\nScore = Score + 30;\n}\nif (cc3[0].checked){\nScore = Score + 0; \n}\nif (cc3[1].checked){\nScore = Score + 35; \n}\nif (cc3[2].checked){\nScore = Score + 70; \n}\nif (cc3[3].checked){\nScore = Score + 105; \n}\nif (cc4[0].checked){\nScore = Score + 0; \n}\nif (cc4[1].checked){\nScore = Score + 49; \n}\nif (cc4[2].checked){\nScore = Score + 98; \n}\nif (cc4[3].checked){\nScore = Score + 147; \n}\nif (cc4[4].checked){\nScore = Score + 196; \n}\nif (cc5.checked){\nScore = Score + 20;\n}\nif (cc6.checked){\nScore = Score + 20;\n}\nif (cc7.checked){\nScore = Score + 20;\n}\nif (cc8.checked){\nScore = Score + 20;\n}\nif (cc9.checked){\nScore = Score + 20;\n}\nif (cc10.checked){\nScore = Score + 20;\n}\nif (cc11[0].checked){\nScore = Score + 0; \n}\nif (cc11[1].checked){\nScore = Score + 20; \n}\nif (cc11[2].checked){\nScore = Score + 50; \n}\n\nif (cc12.value && isNaN(cc12.value)){\ncc12.value = '';\nif (!postNow) alert(\"This field is improperly formatted.\\n\\nYou may only input the digits 0-9 and a decimal point.\");\ndoCalc = false;\n}\nelse{\nthisvalue = parseFloat(cc12.value);\nThisScore =  thisvalue * 6 + 0;\nScore =  Score + ThisScore;\n}\n\nif (cc13.value && isNaN(cc13.value)){\ncc13.value = '';\nif (!postNow) alert(\"This field is improperly formatted.\\n\\nYou may only input the digits 0-9 and a decimal point.\");\ndoCalc = false;\n}\nelse{\nthisvalue = parseFloat(cc13.value);\nThisScore =  thisvalue * 1 + 0;\nScore =  Score + ThisScore;\n}\nif (doCalc){\ncctotal.value = Score;\nif (cctotal.value == 'NaN') cctotal.value = '';\n}\nelse{\nScore = null;\ncctotal.value = '';\nif (typeof rrclr == 'function') { rrclr(); };\ndocument.CDAI_form.cctotal.value = '';\n}\n\nif (doCalc){\nrrclr();\nif ((Score >= 0) && (Score <= 149)){ document.getElementById('rr1_1').bgColor = '#cccccc';\n}\nif ((Score >= 150) && (Score <= 220)){ document.getElementById('rr1_2').bgColor = '#cccccc';\n}\nif ((Score >= 221) && (Score <= 450)){ document.getElementById('rr1_3').bgColor = '#cccccc';\n}\nif ((Score >= 451) && (Score <= 1100)){ document.getElementById('rr1_4').bgColor = '#cccccc';\n}\n\n\n}\n}\n}\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = '';\ndocument.getElementById('rr1_2').bgColor = '';\ndocument.getElementById('rr1_3').bgColor = '';\ndocument.getElementById('rr1_4').bgColor = '';\n}\n\n\n\n\n/* ]]> */\n\n/* <![CDATA[ */\n\n\n\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\n\nfunction clrResults(){\nScore = null;\ndocument.CDAI_form.cctotal.value = '';\nif (typeof rrclr == 'function') { rrclr(); };\n}\n\nCDAI_fx();\n\n/* ]]> */\n"}