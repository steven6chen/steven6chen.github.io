var data={"title":"Calculator: Mayo chronic myelomonocytic leukemia (CMML) prognostic model in adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"CMML_Prognosis_form\" id=\"CMML_Prognosis_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"CMML_Prognosis_fx();\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Mayo chronic myelomonocytic leukemia (CMML) prognostic model in adults\n</span></td></tr></table><br />&nbsp;<br />\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"EBMcalc Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">White blood cell count</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"White_blood_cell_count_param\" size=\"6\" value=\"\" onblur=\"CMML_Prognosis_fx(); minMaxCheck();\" onchange=\"CMML_Prognosis_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"White_blood_cell_count_unit\" onchange=\"CMML_Prognosis_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1000|0|cells x 10^9/L\">cells x 10^9/L</option>\n<option value=\"1|0|cells/microL\" selected=\"selected\">cells/microL</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Percent monocytes</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Percent_monocytes_param\" size=\"6\" value=\"\" onblur=\"CMML_Prognosis_fx(); minMaxCheck();\" onchange=\"CMML_Prognosis_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">%</span>\n</span> </td></tr>\n\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Circulating immature cells</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Circulating_immature_cells_radio\" value=\"No|0\" onclick=\"CMML_Prognosis_fx();\" /> No (0)</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Circulating_immature_cells_radio\" value=\"Yes (Defined as: Myeloblasts, myelocytes, metamyelocytes, and/or promyelocytes)|1\" onclick=\"CMML_Prognosis_fx();\" /> Yes (Defined as: Myeloblasts, myelocytes, metamyelocytes, and/or promyelocytes) (1)</span></td></tr>\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Decreased hemoglobin</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Decreased_hemoglobin_radio\" value=\"No|0\" onclick=\"CMML_Prognosis_fx();\" /> No (0)</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Decreased_hemoglobin_radio\" value=\"Yes (&lt;10 g/dL [&lt;100 g/L])|1\" onclick=\"CMML_Prognosis_fx();\" /> Yes (&lt;10 g/dL [&lt;100 g/L]) (1)</span></td></tr>\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Decreased platelets</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Decreased_platelets_radio\"  onclick=\"CMML_Prognosis_fx();\" /> No (0)</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Decreased_platelets_radio\"  onclick=\"CMML_Prognosis_fx();\" /> Yes (&lt;100 x 10<sup>3</sup>/microliter [&lt;100 x 10<sup>9</sup>/L]) (1)</span></td></tr>\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Results:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"EBMcalc Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Absolute monocyte count</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Absolute_monocyte_count_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\" align=\"left\"><span class=\"medCalcFontOne\">\n<select name=\"Absolute_monocyte_count_unit\" onchange=\"CMML_Prognosis_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1000|0|cells x 10^9/L\">cells x 10^9/L</option>\n<option value=\"1|0|cells/microL\" selected=\"selected\">cells/microL</option>\n</select>\n</span></td>\n</tr>\n\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Score</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Score_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\" align=\"left\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">points</span>\n</span>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal precision &nbsp;</span>\n<select name=\"decpts\" onchange=\"CMML_Prognosis_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option selected=\"selected\">1</option>\n<option>2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\n CMML prognosis score interpretation\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr id=\"rr1_1\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">0 points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Low risk; 32 months median survival</span></td></tr>\n<tr id=\"rr1_2\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">1 point:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Intermediate risk; 18.5 months median survival</span></td></tr>\n<tr id=\"rr1_3\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">2 to 4 points:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">High risk; 10 months median survival</span></td></tr>\n\n</table>\n</center>\n<br />&nbsp;<br />\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li><b>Absolute monocyte counts</b> &gt;10,000/microL [&gt;10 x 10<sup>9</sup>/L]  contribute one point to the CMML prognosis score.</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n<span class=\"medCalcFontOne\">\nEquation parameters, such as <b>Circulating immature cells</b>, have two or more discrete values that may be used in the calculation. The numbers in the parentheses, eg,  (0), represent the values that will be used.\n</span>\n<br />&nbsp;<br />\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Patnaik MM, Padron E, LaBorde RR, et. al. Mayo prognostic model for WHO-defined chronic myelomonocytic leukemia:  ASXL1 and spliceosome component mutations and outcomes. <i>Leukemia</i>. 2013 Jul;27(7):1504-10.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 97683 Version 6.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction CMML_Prognosis_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.CMML_Prognosis_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(White_blood_cell_count_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = White_blood_cell_count_unit.options[White_blood_cell_count_unit.selectedIndex].value.split('|');\nWhite_blood_cell_count = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Percent_monocytes_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nPercent_monocytes = param_value;\nrbchk = false;\nif (Circulating_immature_cells_radio[0].checked){ rbchk = true; Circulating_immature_cells = 0;  }\nif (Circulating_immature_cells_radio[1].checked){ rbchk = true; Circulating_immature_cells = 1;  }\nif (!rbchk) doCalc = false;\nrbchk = false;\nif (Decreased_hemoglobin_radio[0].checked){ rbchk = true; Decreased_hemoglobin = 0;  }\nif (Decreased_hemoglobin_radio[1].checked){ rbchk = true; Decreased_hemoglobin = 1;  }\nif (!rbchk) doCalc = false;\nrbchk = false;\nif (Decreased_platelets_radio[0].checked){ rbchk = true; Decreased_platelets = 0;  }\nif (Decreased_platelets_radio[1].checked){ rbchk = true; Decreased_platelets = 1;  }\nif (!rbchk) doCalc = false;\ndp = decpts.options[decpts.selectedIndex].text;\nAbsolute_monocyte_count =  White_blood_cell_count * Percent_monocytes / 100;\n\nunit_parts = Absolute_monocyte_count_unit.options[Absolute_monocyte_count_unit.selectedIndex].value.split('|');\nif (doCalc) Absolute_monocyte_count_param.value = fixDP((Absolute_monocyte_count - parseFloat(unit_parts[1])) / parseFloat(unit_parts[0]), dp);\n\n\n\nScore =  Math.abs(Absolute_monocyte_count > 10000) + Circulating_immature_cells + Decreased_hemoglobin + Decreased_platelets;\n\nif (doCalc) Score_param.value = fixDP(Score, dp);\n\n\n\n\nif (doCalc){\nrrclr();\nif ((Score >= 0) && (Score <= 0)){ document.getElementById('rr1_1').bgColor = '#cccccc';\n}\nif ((Score >= 1) && (Score <= 1)){ document.getElementById('rr1_2').bgColor = '#cccccc';\n}\nif ((Score >= 2) && (Score <= 4)){ document.getElementById('rr1_3').bgColor = '#cccccc';\n}\n\n\n}\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.CMML_Prognosis_form){\n\nif (White_blood_cell_count_param.value && isNaN(White_blood_cell_count_param.value)){ clrValue(White_blood_cell_count_param); alertNaN('White blood cell count'); }\nif (Percent_monocytes_param.value && isNaN(Percent_monocytes_param.value)){ clrValue(Percent_monocytes_param); alertNaN('Percent monocytes'); }\nif (Percent_monocytes_param.value && Percent_monocytes < 0) {\nPercent_monocytes = 0;\nclrValue(Percent_monocytes_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Percent monocytes is 0 %.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Percent_monocytes_param.value && Percent_monocytes > 100) {\nclrValue(Percent_monocytes_param);\nclrResults();\nPercent_monocytes = 0;\ndoCalc = false;\n alert(\"The maximum value for Percent monocytes is 100 %.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.CMML_Prognosis_form){\n\nAbsolute_monocyte_count_param.value = '';\nScore_param.value = '';\n\nrrclr();\n\n}\n\n}\n\nvar White_blood_cell_count = null,\nPercent_monocytes = null,\nCirculating_immature_cells = null,\nDecreased_hemoglobin = null,\nDecreased_platelets = null,\nAbsolute_monocyte_count = null,\nScore = null,\nparam_value = null;\n\n\n\n\n\n\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = '';\ndocument.getElementById('rr1_2').bgColor = '';\ndocument.getElementById('rr1_3').bgColor = '';\n}\n\n\n\n\n/* ]]> */\n"}