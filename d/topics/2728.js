var data={"title":"Calculator: Systemic vascular resistance in adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"SystemicVascRes_form\" id=\"SystemicVascRes_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"SystemicVascRes_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Systemic vascular resistance in adults\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"EBMcalc Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">SVR = 80 * ( Meanaorticpressure - Rightatrialpressure) / Systemicflow</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"EBMcalc Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Mean aortic pressure</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Mean_aortic_pressure_param\" size=\"6\" value=\"\" onblur=\"SystemicVascRes_fx(); minMaxCheck();\" onchange=\"SystemicVascRes_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Mean_aortic_pressure_unit\" onchange=\"SystemicVascRes_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.00750063755419211|0|Pascal\">Pascal</option>\n<option value=\"760.002100178515|0|atm\">atm</option>\n<option value=\"750.063755419211|0|bar\">bar</option>\n<option value=\"0.735561538478802|0|cmH2O\">cmH2O</option>\n<option value=\"10|0|cmHg\">cmHg</option>\n<option value=\"22.4199156928339|0|ftH2O\">ftH2O</option>\n<option value=\"0.735561538478802|0|g/sqcm\">g/sqcm</option>\n<option value=\"1.86832630773616|0|inH2O\">inH2O</option>\n<option value=\"25.4000840071406|0|inHg\">inHg</option>\n<option value=\"7.50063755419211|0|kPa\">kPa</option>\n<option value=\"0.750063755419211|0|mbar\">mbar</option>\n<option value=\"1|0|mmHg\" selected=\"selected\">mmHg</option>\n<option value=\"51.7150957831416|0|psi\">psi</option>\n<option value=\"1|0|torr\">torr</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Right atrial pressure</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Right_atrial_pressure_param\" size=\"6\" value=\"\" onblur=\"SystemicVascRes_fx(); minMaxCheck();\" onchange=\"SystemicVascRes_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Right_atrial_pressure_unit\" onchange=\"SystemicVascRes_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.00750063755419211|0|Pascal\">Pascal</option>\n<option value=\"760.002100178515|0|atm\">atm</option>\n<option value=\"750.063755419211|0|bar\">bar</option>\n<option value=\"0.735561538478802|0|cmH2O\">cmH2O</option>\n<option value=\"10|0|cmHg\">cmHg</option>\n<option value=\"22.4199156928339|0|ftH2O\">ftH2O</option>\n<option value=\"0.735561538478802|0|g/sqcm\">g/sqcm</option>\n<option value=\"1.86832630773616|0|inH2O\">inH2O</option>\n<option value=\"25.4000840071406|0|inHg\">inHg</option>\n<option value=\"7.50063755419211|0|kPa\">kPa</option>\n<option value=\"0.750063755419211|0|mbar\">mbar</option>\n<option value=\"1|0|mmHg\" selected=\"selected\">mmHg</option>\n<option value=\"51.7150957831416|0|psi\">psi</option>\n<option value=\"1|0|torr\">torr</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Systemic flow</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Systemic_flow_param\" size=\"6\" value=\"\" onblur=\"SystemicVascRes_fx(); minMaxCheck();\" onchange=\"SystemicVascRes_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Systemic_flow_unit\" onchange=\"SystemicVascRes_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|L/min\" selected=\"selected\">L/min</option>\n<option value=\"60|0|L/sec\">L/sec</option>\n<option value=\"1.666666667e-05|0|mL/hr\">mL/hr</option>\n<option value=\"0.001|0|mL/min\">mL/min</option>\n<option value=\"0.06|0|mL/sec\">mL/sec</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"EBMcalc Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">SVR</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"SVR_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\" align=\"left\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">dynes-sec-cm<sup>-5</sup></span>\n</span>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li><b>SVR</b>: systemic vascular resistance.</li>\n<li>In most cases <b>Systemic flow</b> is equivalent to the cardiac output.</li>\n<li>Normal <b>SVR</b> is approximately 1170 plus or minus 270 dynes-sec-cm<sup>-5</sup>.</li>\n<li>In most cases the <b>Mean aortic pressure</b> is equivalent to the mean arterial pressure, which can be obtained from most hemodynamic monitors.</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Baim D, ed. <i>Grossman's Cardiac Catheterization, Angiography, and Intervention</i>. Lipincott Williams &amp; Wilkins 7th Ed. 2006.</span></li>\n<li><span class=\"medCalcFontRef\">Barratt-Boyes BG, Wood EH. Cardiac output and related measurements and pressure values in the right heart and associated vessels,  together with an analysis of the hemo-dynamic response to the inhalation of high oxygen mixtures in healthy subjects. <i> J Lab Clin Med</i>. 1958 Jan;51(1):72-90.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 13460 Version 5.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction SystemicVascRes_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.SystemicVascRes_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Mean_aortic_pressure_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Mean_aortic_pressure_unit.options[Mean_aortic_pressure_unit.selectedIndex].value.split('|');\nMean_aortic_pressure = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Right_atrial_pressure_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Right_atrial_pressure_unit.options[Right_atrial_pressure_unit.selectedIndex].value.split('|');\nRight_atrial_pressure = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Systemic_flow_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Systemic_flow_unit.options[Systemic_flow_unit.selectedIndex].value.split('|');\nSystemic_flow = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\ndp = 0;\nSVR =  80 * ( Mean_aortic_pressure - Right_atrial_pressure) / Systemic_flow;\n\nif (doCalc) SVR_param.value = fixDP(SVR, dp);\n\n\n\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.SystemicVascRes_form){\n\nif (Mean_aortic_pressure_param.value && isNaN(Mean_aortic_pressure_param.value)){ clrValue(Mean_aortic_pressure_param); alertNaN('Mean aortic pressure'); }\nif (Right_atrial_pressure_param.value && isNaN(Right_atrial_pressure_param.value)){ clrValue(Right_atrial_pressure_param); alertNaN('Right atrial pressure'); }\nif (Systemic_flow_param.value && isNaN(Systemic_flow_param.value)){ clrValue(Systemic_flow_param); alertNaN('Systemic flow'); }\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.SystemicVascRes_form){\n\nSVR_param.value = '';\n\n\n}\n\n}\n\nvar Mean_aortic_pressure = null,\nRight_atrial_pressure = null,\nSystemic_flow = null,\nSVR = null,\nparam_value = null;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n"}