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

	$html .="<div class=\"grid_13\">";
	
	$html .="<br />";
	$html .="<h1>Current High School Student</h1>";

        $html .="<p>What field are you interested in?</p>";

</form name = "myform"> 

        $html .="<select name=\"select1\">";

        $html .="<option value=\"0\">Select Region</option>";

        $html .="<option value=\"1\">NORTH EAST</option>";

        $html .="<option value=\"2\">MID WEST</option>";

        $html .="<option value=\"3\">SOUTH</option>";

        $html .="<option value=\"4\">WEST</option>";

        $html .="</select>";

        $html .="<p>What type of school are you interested in?</p>";

        $html .="<select name=\"select2\" size=\"1\" style=\"width: 200px\" > ";

        $html .="<option value = \"0\"></option>;

        $html .="</select>";


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