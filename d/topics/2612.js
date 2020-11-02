var data={"title":"Calculator: Gestational age from Estimated Date of Delivery (EDD)","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"GestationalAgeFromEDD_form\" id=\"GestationalAgeFromEDD_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"GestationalAgeFromEDD_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n\nCalculator: Gestational age from Estimated Date of Delivery (EDD)\n</span></td></tr></table><br />&nbsp;<br />\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\"><span class=\"medCalcFontOneBold\">Current date</span></td>\n<td align=\"left\" colspan=\"2\" nowrap=\"nowrap\">\n&nbsp;&nbsp;<select name=\"current_month\" class=\"medCalcFontSelect\" onchange=\"setTimeout(function() {GestationalAgeFromEDD_fx();}, 100);\">\n<option value=\"0\">Jan</option>\n<option value=\"1\">Feb</option>\n<option value=\"2\">Mar</option>\n<option value=\"3\">Apr</option>\n<option value=\"4\">May</option>\n<option value=\"5\">Jun</option>\n<option value=\"6\">Jul</option>\n<option value=\"7\">Aug</option>\n<option value=\"8\">Sep</option>\n<option value=\"9\">Oct</option>\n<option value=\"10\">Nov</option>\n<option value=\"11\">Dec</option>\n<option value=\"-1\" selected=\"selected\">MM</option>\n</select>\n<select name=\"current_date\" class=\"medCalcFontSelect\" onchange=\"setTimeout(function() {GestationalAgeFromEDD_fx();}, 100);\">\n<option value=\"1\">1</option>\n<option value=\"2\">2</option>\n<option value=\"3\">3</option>\n<option value=\"4\">4</option>\n<option value=\"5\">5</option>\n<option value=\"6\">6</option>\n<option value=\"7\">7</option>\n<option value=\"8\">8</option>\n<option value=\"9\">9</option>\n<option value=\"10\">10</option>\n<option value=\"11\">11</option>\n<option value=\"12\">12</option>\n<option value=\"13\">13</option>\n<option value=\"14\">14</option>\n<option value=\"15\">15</option>\n<option value=\"16\">16</option>\n<option value=\"17\">17</option>\n<option value=\"18\">18</option>\n<option value=\"19\">19</option>\n<option value=\"20\">20</option>\n<option value=\"21\">21</option>\n<option value=\"22\">22</option>\n<option value=\"23\">23</option>\n<option value=\"24\">24</option>\n<option value=\"25\">25</option>\n<option value=\"26\">26</option>\n<option value=\"27\">27</option>\n<option value=\"28\">28</option>\n<option value=\"29\">29</option>\n<option value=\"30\">30</option>\n<option value=\"31\">31</option>\n<option value=\"-1\" selected=\"selected\">DD</option>\n</select>\n<select name=\"current_year\" class=\"medCalcFontSelect\" onchange=\"setTimeout(function() {GestationalAgeFromEDD_fx();}, 100);\">\n<option value=\"2009\">2009</option>\n<option value=\"2010\">2010</option>\n<option value=\"2011\">2011</option>\n<option value=\"2012\">2012</option>\n<option value=\"2013\">2013</option>\n<option value=\"2014\">2014</option>\n<option value=\"2015\">2015</option>\n<option value=\"2016\">2016</option>\n<option value=\"2017\">2017</option>\n<option value=\"2018\">2018</option>\n<option value=\"2019\">2019</option>\n<option value=\"2020\">2020</option>\n<option value=\"2021\">2021</option>\n<option value=\"2022\">2022</option>\n<option value=\"2023\">2023</option>\n<option value=\"2024\">2024</option>\n<option value=\"2025\">2025</option>\n<option value=\"2026\">2026</option>\n<option value=\"2027\">2027</option>\n<option value=\"2028\">2028</option>\n<option value=\"2029\">2029</option>\n<option value=\"2030\">2030</option>\n<option value=\"-1\" selected=\"selected\">YYYY</option>\n</select>\n</td></tr>\n\n<tr><td align=\"right\"><span class=\"medCalcFontOneBold\">Estimated date of delivery</span></td>\n<td align=\"left\" colspan=\"2\" nowrap=\"nowrap\">\n&nbsp;&nbsp;<select name=\"edd_month\" class=\"medCalcFontSelect\" onchange=\"setTimeout(function() {GestationalAgeFromEDD_fx();}, 100);\">\n<option value=\"0\">Jan</option>\n<option value=\"1\">Feb</option>\n<option value=\"2\">Mar</option>\n<option value=\"3\">Apr</option>\n<option value=\"4\">May</option>\n<option value=\"5\">Jun</option>\n<option value=\"6\">Jul</option>\n<option value=\"7\">Aug</option>\n<option value=\"8\">Sep</option>\n<option value=\"9\">Oct</option>\n<option value=\"10\">Nov</option>\n<option value=\"11\">Dec</option>\n<option value=\"-1\" selected=\"selected\">MM</option>\n</select>\n<select name=\"edd_date\" class=\"medCalcFontSelect\" onchange=\"setTimeout(function() {GestationalAgeFromEDD_fx();}, 100);\">\n<option value=\"1\">1</option>\n<option value=\"2\">2</option>\n<option value=\"3\">3</option>\n<option value=\"4\">4</option>\n<option value=\"5\">5</option>\n<option value=\"6\">6</option>\n<option value=\"7\">7</option>\n<option value=\"8\">8</option>\n<option value=\"9\">9</option>\n<option value=\"10\">10</option>\n<option value=\"11\">11</option>\n<option value=\"12\">12</option>\n<option value=\"13\">13</option>\n<option value=\"14\">14</option>\n<option value=\"15\">15</option>\n<option value=\"16\">16</option>\n<option value=\"17\">17</option>\n<option value=\"18\">18</option>\n<option value=\"19\">19</option>\n<option value=\"20\">20</option>\n<option value=\"21\">21</option>\n<option value=\"22\">22</option>\n<option value=\"23\">23</option>\n<option value=\"24\">24</option>\n<option value=\"25\">25</option>\n<option value=\"26\">26</option>\n<option value=\"27\">27</option>\n<option value=\"28\">28</option>\n<option value=\"29\">29</option>\n<option value=\"30\">30</option>\n<option value=\"31\">31</option>\n<option value=\"-1\" selected=\"selected\">DD</option>\n</select>\n<select name=\"edd_year\" class=\"medCalcFontSelect\" onchange=\"setTimeout(function() {GestationalAgeFromEDD_fx();}, 100);\">\n<option value=\"2009\">2009</option>\n<option value=\"2010\">2010</option>\n<option value=\"2011\">2011</option>\n<option value=\"2012\">2012</option>\n<option value=\"2013\">2013</option>\n<option value=\"2014\">2014</option>\n<option value=\"2015\">2015</option>\n<option value=\"2016\">2016</option>\n<option value=\"2017\">2017</option>\n<option value=\"2018\">2018</option>\n<option value=\"2019\">2019</option>\n<option value=\"2020\">2020</option>\n<option value=\"2021\">2021</option>\n<option value=\"2022\">2022</option>\n<option value=\"2023\">2023</option>\n<option value=\"2024\">2024</option>\n<option value=\"2025\">2025</option>\n<option value=\"2026\">2026</option>\n<option value=\"2027\">2027</option>\n<option value=\"2028\">2028</option>\n<option value=\"2029\">2029</option>\n<option value=\"2030\">2030</option>\n<option value=\"-1\" selected=\"selected\">YYYY</option>\n</select>\n</td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Results:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Current gestational age by EDD</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"gest_edd\" size=\"16\" maxlength=\"16\" onfocus=\"blur();\" /></td>\n</tr>\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div>\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Mul T, Mongelli M, Gardosi J. A comparative analysis of second-trimester ultrasound dating formulae in pregnancies conceived with artificial reproductive techniques. <i>Ultrasound Obstet Gynecol</i>. 1996 Dec;8(6):397-402.</span></li>\n<li><span class=\"medCalcFontRef\">Westerway SC, Davison A, Cowell S. Ultrasonic fetal measurements: new Australian standards for the new millennium. <i> Aust N Z J Obstet Gynaecol</i>. 2000 Aug;40(3):297-302.</span></li>\n<li><span class=\"medCalcFontRef\">Altman DG, Chitty LS. New charts for ultrasound dating of pregnancy. <i>Ultrasound Obstet Gynecol</i>. 1997 Sep;10(3):174-91.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n\n\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 13503 Version 9.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;\n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');\ndoCalc = false;\nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\n\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = '';\n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = '';\nvar xmltxt = '';\nvar xmlresult = '';\nvar htmtxt = '';\nvar postNow = false;\n\nfunction GestationalAgeFromEDD_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.GestationalAgeFromEDD_form){\n\n\ndoCalc = true;\ndp = 0;\nmonthname = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');\nedd_time = new Date;\ncurrent_time = new Date;\nvar current_month_value = parseFloat(current_month.options[current_month.selectedIndex].value);\nvar current_date_value = parseFloat(current_date.options[current_date.selectedIndex].value);\nvar current_year_value = parseFloat(current_year.options[current_year.selectedIndex].value);\nif (((current_month_value == 1) && (current_date_value > 28) && ((current_year_value % 4) > 0)) ||  ((current_month_value == 1) && (current_date_value > 29) && ((current_year_value % 4) == 0)) ||  (((current_month_value == 8) || (current_month_value == 3) || (current_month_value == 5) || (current_month_value == 10)) && (current_date_value > 30))){  alert('Date entry error'); current_year.selectedIndex = current_year.options.length - 1; current_month.selectedIndex = 12; current_date.selectedIndex = 31;  current_month_value = -1; current_date_value = -1; current_year_value = -1; }\nvar edd_month_value = parseFloat(edd_month.options[edd_month.selectedIndex].value);\nvar edd_date_value = parseFloat(edd_date.options[edd_date.selectedIndex].value);\nvar edd_year_value = parseFloat(edd_year.options[edd_year.selectedIndex].value);\nif (((edd_month_value == 1) && (edd_date_value > 28) && ((edd_year_value % 4) > 0)) ||  ((edd_month_value == 1) && (edd_date_value > 29) && ((edd_year_value % 4) == 0)) ||  (((edd_month_value == 8) || (edd_month_value == 3) || (edd_month_value == 5) || (edd_month_value == 10)) && (edd_date_value > 30))){  alert('Date entry error'); edd_year.selectedIndex = edd_year.options.length - 1; edd_month.selectedIndex = 12; edd_date.selectedIndex = 31;  edd_month_value = -1; edd_date_value = -1; edd_year_value = -1; };\nif ((current_year_value >= 0) && (current_month_value >= 0) && (current_date_value >= 0) && (edd_year_value >= 0) && (edd_month_value >= 0) && (edd_date_value >= 0)){\ncurrent_time.setFullYear(current_year_value);\ncurrent_time.setMonth(current_month_value, current_date_value);\ncurrent_time.setHours(12);\nedd_time.setFullYear(edd_year_value);\nedd_time.setMonth(edd_month_value, edd_date_value);\nedd_time.setHours(12);\ngeddmillis = current_time.getTime() - edd_time.getTime() + 24192000000;\ngeddweeks = fixDP(geddmillis / 604800000, 1);\ngeddweeksfloor = Math.floor(geddweeks);\ngedddays =  Math.round(7 * (geddweeks - geddweeksfloor));\ndaystxt = ' days';\nif (gedddays == 1) daystxt = ' day';\ngest_edd.value = geddweeksfloor + ' weeks' + ' ' + gedddays + daystxt;\n}\nelse { gest_edd.value = ''; }\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.GestationalAgeFromEDD_form){\n\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.GestationalAgeFromEDD_form){\n\ngest_edd.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n\n/* <![CDATA[ */\n\nwith(document.GestationalAgeFromEDD_form){\ntodaydatetime = new Date;\ntodaymonth = todaydatetime.getMonth();\ntodaydate = todaydatetime.getDate();\ntodayfullyear = todaydatetime.getFullYear();\n\n}\n/* ]]> */\n"}