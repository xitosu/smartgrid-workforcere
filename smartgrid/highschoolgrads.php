<?
include_once "support_functions.php";

//gets the header function (support_functions.php)
getHeader();

//navigation (support_functions.php)
getNav();

//sidebar (support_functions.php)
getSide();

//content goes here now
indexContent();

//get the footer
getFooter();

function indexContent() {
//adding a comment
	$html = "";

	$html = "<style type="text/css">";

	$html = ".hiddenMenu {display: none;}";

	$html = ".visibleMenu {display: inline;}";

	$html = "</style>";

	$html .="<div class=\"grid_13\">";
	
	$html .="<br />";
	$html .="<h1>Current High School Student</h1>";

<form action=" " method="post" enctype="multipart/form-data">

        $html .="<label for=\"select region\">Select Region </label>";

        $html .="<select name=\"category\" id=\"region\" style=\"width: 200px\" onchange=\"showDiv(this.value);\">";

        $html .="<option value=\" \">Select Region</option>";

        $html .="<option value=\"1\">NORTH EAST</option>";

        $html .="<option value=\"2\">MID WEST</option>";

        $html .="<option value=\"3\">SOUTH</option>";

        $html .="<option value=\"4\">WEST</option>";

        $html .="</select>";

        $html .="<p id=\"1\" class=\"hiddenMenu\">";

        $html .="<label for=\"select_school\">Select NORTH EAST region schools </label>

        $html .="<select name=\"subjectCategory\" style=\"width: 200px\" id=\"select school\">";

        $html .="<option value=\" \">Select School</option>";

        $html .="<option value=\"UC\">University of California</option>";

        $html .="<option value=\"CSU\">California State University</option>";

        $html .="<option value=\"CCC\">California Community College</option>";

        $html .="</select>";

        $html .="</p>";

        $html .="<p id=\"2\" class=\"hiddenMenu\">";

        $html .="<label for=\"select_school\">Select MID WEST region schools </label>

        $html .="<select name=\"subjectCategory\" style=\"width: 200px\" id=\"select school\">";

        $html .="<option value=\" \">Select School</option>";

        $html .="<option value=\"UC\">University of California</option>";

        $html .="<option value=\"CSU\">California State University</option>";

        $html .="<option value=\"CCC\">California Community College</option>";

        $html .="</select>";

        $html .="</p>";

        $html .="<p id=\"3\" class=\"hiddenMenu\">";

        $html .="<label for=\"select_school\">Select SOUTH region schools </label>

        $html .="<select name=\"subjectCategory\" style=\"width: 200px\" id=\"select school\">";

        $html .="<option value=\" \">Select School</option>";

        $html .="<option value=\"UC\">University of California</option>";

        $html .="<option value=\"CSU\">California State University</option>";

        $html .="<option value=\"CCC\">California Community College</option>";

        $html .="</select>";

        $html .="</p>";

        $html .="<p id=\"1\" class=\"hiddenMenu\">";

        $html .="<label for=\"select_school\">Select WEST region schools </label>

        $html .="<select name=\"subjectCategory\" style=\"width: 200px\" id=\"select school\">";

        $html .="<option value=\" \">Select School</option>";

        $html .="<option value=\"UC\">University of California</option>";

        $html .="<option value=\"CSU\">California State University</option>";

        $html .="<option value=\"CCC\">California Community College</option>";

        $html .="</select>";

        $html .="</p>";

        $html .="<p>What field are you interested in?</p>";

        $html .="<select name=\"interested fields\" class =\"menu\">";

        $html .="<option value=\"Select Field\">Select Field</option>";

        $html .="<option value=\"Power Engineering\">Power Engineering</option>";

        $html .="<option value=\"Electrical Engineering\">Electrical Engineering</option> ";

        $html .="</select>";

	$html .= "</div>\n";

	echo $html;
}

?>
