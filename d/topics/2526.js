var data={"title":"Calculator: Blood ethanol concentration estimation","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"BloodEthanolConc_form\" id=\"BloodEthanolConc_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"BloodEthanolConc_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Blood ethanol concentration estimation\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">Bloodethanolconcentration = (Volumeingested * Concentrationingested * 0.8) / (Weight * 0.6)</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Volume ingested</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Volume_ingested_param\" size=\"6\" value=\"\" onblur=\"BloodEthanolConc_fx(); minMaxCheck();\" onchange=\"BloodEthanolConc_fx();\" /></td>\n<td align=\"left\" width=\"160\" valign=\"top\"> <select name=\"Volume_ingested_unit\" onchange=\"BloodEthanolConc_fx();\" style=\"width:150px;\" class=\"medCalcFontSelect\">\n<option value=\"1000|0|L\">L</option>\n<option value=\"10|0|cL\">cL</option>\n<option value=\"1|0|mL\" selected=\"selected\">mL</option>\n<option value=\"28.413075|0|ounce (UK)\">ounce (UK)</option>\n<option value=\"29.57352956|0|ounce (US)\">ounce (US)</option>\n<option value=\"568.2615|0|pint (UK)\">pint (UK)</option>\n<option value=\"473.176473|0|pint (US)\">pint (US)</option>\n<option value=\"1136.523|0|quart (UK)\">quart (UK)</option>\n<option value=\"946.352946|0|quart (US)\">quart (US)</option>\n<option value=\"14.78677|0|tablespoon (US)\">tablespoon (US)</option>\n<option value=\"15|0|tablespoon (metric)\">tablespoon (metric)</option>\n<option value=\"4.928922|0|teaspoon (US)\">teaspoon (US)</option>\n<option value=\"5|0|teaspoon (metric)\">teaspoon (metric)</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Concentration ingested</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Concentration_ingested_param\" size=\"6\" value=\"\" onblur=\"BloodEthanolConc_fx(); minMaxCheck();\" onchange=\"BloodEthanolConc_fx();\" /></td>\n<td align=\"left\" width=\"160\" valign=\"top\"> <select name=\"Concentration_ingested_unit\" onchange=\"BloodEthanolConc_fx();\" style=\"width:150px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|Percent ethanol\" selected=\"selected\">Percent ethanol</option>\n<option value=\"0.571|0|proof (UK/Australia)\">proof (UK/Australia)</option>\n<option value=\"0.5|0|proof (US)\">proof (US)</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Weight</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Weight_param\" size=\"6\" value=\"\" onblur=\"BloodEthanolConc_fx(); minMaxCheck();\" onchange=\"BloodEthanolConc_fx();\" /></td>\n<td align=\"left\" width=\"160\" valign=\"top\"> <select name=\"Weight_unit\" onchange=\"BloodEthanolConc_fx();\" style=\"width:150px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|kg\" selected=\"selected\">kg</option>\n<option value=\"0.45359237|0|lb\">lb</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Blood ethanol concentration</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Blood_ethanol_concentration_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<select name=\"Blood_ethanol_concentration_unit\" onchange=\"BloodEthanolConc_fx();\" style=\"width:150px;\" class=\"medCalcFontSelect\">\n<option value=\"100|0|g/L\">g/L</option>\n<option value=\"1000|0|g/dL\">g/dL</option>\n<option value=\"1|0|mg/dL\" selected=\"selected\">mg/dL</option>\n<option value=\"100|0|mg/mL\">mg/mL</option>\n<option value=\"4.505|0|mmol/L\">mmol/L</option>\n</select>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal precision:</span>\n<select name=\"decpts\" onchange=\"BloodEthanolConc_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option>1</option>\n<option selected=\"selected\">2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div><br />&nbsp;<br />\n<div id=\"calc_hints\">\n\n<br />&nbsp;<br /><span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>0.8 g/mL is the specific gravity of ethanol and 0.6 is the volume of distribution of ethanol.</li>\n<li>In the United States (US), <b>percent ethanol</b> of beverages is <b>proof</b>/2 while in the United Kingdom (UK) and Australia, <b>percent ethanol</b> of beverages is <b>proof</b>/1.75.</li>\n<li>For example, 80 proof vodka is 40 percent ethanol in the US, but is 46 percent ethanol in the UK or Australia. Use the pull-down unit selector to choose the appropriate <b>Concentration ingested</b> unit.</li>\n<li>A swallow in a toddler is about 5 mL (1 teaspoon).</li>\n</ul>\n<br />&nbsp;<br />\n<span class=\"medCalcFontOneBold\"><br />&nbsp;<br />\n</span>\n<span class=\"medCalcFontOneBold\">Ethanol content in beverages, medications, and household products</span>\n<br />&nbsp;<br /><center><table border=\"1\" cellpadding=\"4\" width=\"50%\" class=\"medCalcFontOne\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#cccccc\" align=\"center\"><b>Item</b></td><td bgcolor=\"#cccccc\" align=\"center\"><b>Percent ethanol content by volume</b></td></tr>\n<tr><td align=\"left\"><b>Beverage<sup>*</sup></b></td><td align=\"center\">&nbsp;</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nonalcoholic beer</td><td align=\"center\">0.32</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beer</td><td align=\"center\">3.2 to 14</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wine</td><td align=\"center\">8 to 22</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liquor</td><td align=\"center\">20 to 95</td></tr>\n<tr><td align=\"left\"><b>Medications</b></td><td align=\"center\">&nbsp;</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cold/allergy</td><td align=\"center\">5 to 16</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cough medicine</td><td align=\"center\">2 to 25</td></tr>\n<tr><td align=\"left\"><b>Household products</b></td><td align=\"center\">&nbsp;</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aftershave lotion</td><td align=\"center\">15 to 80</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Glass cleaners</td><td align=\"center\">10</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mouthwashes</td><td align=\"center\">15 to 25</td></tr>\n<tr><td align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfumes/colognes</td><td align=\"center\">25 to 95</td></tr>\n</table></center><br />&nbsp;<br />\n<span class=\"medCalcFontOne\">\nReproduced with permission from: Kleinschmidt KC. Ethanol. In: Haddad and Winchester's Clinical Management of Poisoning and Drug Overdose, 4th ed, Shannon MW, Borron SW, Burns\nMJ (Eds), Saunders Elsevier, Philadelphia 2007. Illustration used with permission of Elsevier\nInc. All rights reserved. Copyright &copy;2005 Elsevier Inc.\n<br />&nbsp;<br />\n*Typical content for beer, wine, and liquor is 5, 14, and 40 percent, respectively.</span> \n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 13473 Version 5.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction BloodEthanolConc_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 2000);\n\nwith(document.BloodEthanolConc_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Volume_ingested_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Volume_ingested_unit.options[Volume_ingested_unit.selectedIndex].value.split('|');\nVolume_ingested = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Concentration_ingested_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Concentration_ingested_unit.options[Concentration_ingested_unit.selectedIndex].value.split('|');\nConcentration_ingested = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Weight_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Weight_unit.options[Weight_unit.selectedIndex].value.split('|');\nWeight = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\ndp = decpts.options[decpts.selectedIndex].text;\nBlood_ethanol_concentration =  (Volume_ingested * Concentration_ingested * 0.8) / (Weight * 0.6);\n\nunit_parts = Blood_ethanol_concentration_unit.options[Blood_ethanol_concentration_unit.selectedIndex].value.split('|');\nif (doCalc) Blood_ethanol_concentration_param.value = fixDP((Blood_ethanol_concentration - parseFloat(unit_parts[1])) / parseFloat(unit_parts[0]), dp);\n\n\n\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.BloodEthanolConc_form){\n\nif (Volume_ingested_param.value && isNaN(Volume_ingested_param.value)){ clrValue(Volume_ingested_param); alertNaN('Volume ingested'); }\nif (Concentration_ingested_param.value && isNaN(Concentration_ingested_param.value)){ clrValue(Concentration_ingested_param); alertNaN('Concentration ingested'); }\nif (Concentration_ingested_param.value && Concentration_ingested < 0) {\nConcentration_ingested = 0;\nclrValue(Concentration_ingested_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Concentration ingested is 0 Percent ethanol.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Concentration_ingested_param.value && Concentration_ingested > 100) {\nclrValue(Concentration_ingested_param);\nclrResults();\nConcentration_ingested = 0;\ndoCalc = false;\n alert(\"The maximum value for Concentration ingested is 100 Percent ethanol.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Weight_param.value && isNaN(Weight_param.value)){ clrValue(Weight_param); alertNaN('Weight'); }\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.BloodEthanolConc_form){\n\nBlood_ethanol_concentration_param.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n"}