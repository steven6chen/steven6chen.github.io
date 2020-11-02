var data={"title":"Calculator: Albumin-bilirubin (ALBI) grade estimate of survival of adults with hepatocellular carcinoma","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"ALBI_form\" id=\"ALBI_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"ALBI_fx();\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Albumin-bilirubin (ALBI) grade estimate of survival of adults with hepatocellular carcinoma\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"EBMcalc Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">ALBIscore = (log(Bilirubin[mcmol/L]) * 0.66) - (Albumin[g/L] * 0.085)</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"EBMcalc Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Bilirubin</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Bilirubin_param\" size=\"6\" value=\"\" onblur=\"ALBI_fx(); minMaxCheck();\" onchange=\"ALBI_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Bilirubin_unit\" onchange=\"ALBI_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mcmol/L_Bili\" selected=\"selected\">mcmol/L</option>\n<option value=\"17.1|0|mg%_Bili\">mg%</option>\n<option value=\"17.1|0|mg/dL_Bili\">mg/dL</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Albumin</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Albumin_param\" size=\"6\" value=\"\" onblur=\"ALBI_fx(); minMaxCheck();\" onchange=\"ALBI_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Albumin_unit\" onchange=\"ALBI_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|g/L_Alb\" selected=\"selected\">g/L</option>\n<option value=\"10|0|g/dL_Alb\">g/dL</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"EBMcalc Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">ALBI score</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"ALBI_score_param\" size=\"6\" onfocus=\"blur();\" /></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal precision &nbsp;</span>\n<select name=\"decpts\" onchange=\"ALBI_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option>1</option>\n<option selected=\"selected\">2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\n ALBI interpretation\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr bgcolor=\"#ffffff\">\n<td align=\"center\"><span class=\"medCalcFontOneBold\">ALBI score</span></td>\n<td align=\"center\"><span class=\"medCalcFontOneBold\">ALBI grade</span></td>\n<td align=\"center\"><span class=\"medCalcFontOneBold\">Median survival in months (newly-diagnosed HCC patients)*</span></td>\n<td align=\"center\"><span class=\"medCalcFontOneBold\">Median survival in months (treated with sorafenib)**</span></td>\n</tr>\n<tr id=\"rr1_1\"><td align=\"center\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\"> &le; -2.6</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">A1</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">85.6</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">12.7</span></td>\n</tr>\n<tr id=\"rr1_2\"><td align=\"center\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\"> &gt; -2.6 and &le; -1.39</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">A2</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">46.5</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">7.2</span></td>\n</tr>\n<tr id=\"rr1_3\"><td align=\"center\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\"> &gt; -1.39</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">A3</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">15.5</span></td>\n<td align=\"center\"><span class=\"medCalcFontOne\">3.6</span></td>\n</tr>\n\n</table>\n</center>\n<br />&nbsp;<br />\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li><b>HCC</b>: Hepatocellular carcinoma.</li>\n<li>* Median survival for all HCC patients including those who later had potentially curative surgery; results from  initial Japanese training set from which the ALBI model was derived.</li>\n<li>** Median survival for HCC patients with unresectable or relapsed incurable disease; based on data from clinical trials of sorafenib in HCC.</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Johnson PJ, Berhane S, Kagebayashi C, et. al. Assessment of Liver Function in Patients With Hepatocellular  Carcinoma: A New Evidence-Based Approach-The ALBI Grade. <i>J Clin Oncol</i>. 2015 Feb 20;33(6):550-8.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 100996 Version 2.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction ALBI_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.ALBI_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Bilirubin_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Bilirubin_unit.options[Bilirubin_unit.selectedIndex].value.split('|');\nBilirubin = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Albumin_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Albumin_unit.options[Albumin_unit.selectedIndex].value.split('|');\nAlbumin = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\ndp = decpts.options[decpts.selectedIndex].text;\nALBI_score =  (log(Bilirubin) * 0.66) - (Albumin * 0.085);\n\nif (doCalc) ALBI_score_param.value = fixDP(ALBI_score, dp);\n\n\n\n\nif (doCalc){\nrrclr();\nif (ALBI_score <= -2.6){ document.getElementById('rr1_1').bgColor = '#cccccc';\n}\nif ((ALBI_score > -2.6) && (ALBI_score <= -1.39)){ document.getElementById('rr1_2').bgColor = '#cccccc';\n}\nif (ALBI_score > -1.39){ document.getElementById('rr1_3').bgColor = '#cccccc';\n}\n\n\n}\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.ALBI_form){\n\nif (Bilirubin_param.value && isNaN(Bilirubin_param.value)){ clrValue(Bilirubin_param); alertNaN('Bilirubin'); }\nif (Bilirubin_param.value && Bilirubin < 1) {\nBilirubin = 0;\nclrValue(Bilirubin_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Bilirubin is 1 mcmol/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Bilirubin_param.value && Bilirubin > 100) {\nclrValue(Bilirubin_param);\nclrResults();\nBilirubin = 0;\ndoCalc = false;\n alert(\"The maximum value for Bilirubin is 100 mcmol/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Albumin_param.value && isNaN(Albumin_param.value)){ clrValue(Albumin_param); alertNaN('Albumin'); }\nif (Albumin_param.value && Albumin < 0) {\nAlbumin = 0;\nclrValue(Albumin_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Albumin is 0 g/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Albumin_param.value && Albumin > 55) {\nclrValue(Albumin_param);\nclrResults();\nAlbumin = 0;\ndoCalc = false;\n alert(\"The maximum value for Albumin is 55 g/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.ALBI_form){\n\nALBI_score_param.value = '';\n\nrrclr();\n\n}\n\n}\n\nvar Bilirubin = null,\nAlbumin = null,\nALBI_score = null,\nparam_value = null;\n\n\n\n\n\n\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = '';\ndocument.getElementById('rr1_2').bgColor = '';\ndocument.getElementById('rr1_3').bgColor = '';\n}\n\n\n\n\n/* ]]> */\n"}