<?
include_once "support_functions.php";

//gets the header function (support_functions.php)
getHeader();

//navigation (support_functions.php)
getNav();

//sidebar (support_functions.php)
getSide();

//content goes here now; for now it is HTML but later we can format it into PHP if we want.
ucContent();

getFooter();

function ucContent(){
    $html = "";
	$html .= "<div class=\"grid_13 homepage\">\n";
	$html .= "<h1>California State University</h1>\n";
	$html .= "<p></p>\n";
	$html .= "	<form id=\"schoolForm\" class=\"grid_14\">\n";
	$html .= "		<select id=\"schools\" onchange=\"addClasses()\">\n";
	$html .= "			<option name=\"select\" id=\"select\">Select a School</option>\n";
	$html .= "			<option name=\"chanis\" id=\"chanis\">CSU Channel Islands</option>\n";
	$html .= "			<option name=\"chico\" id=\"chico\">CSU Chico</option>\n";
	$html .= "			<option name=\"domhill\" id=\"domhill\">CSU Dominguez Hills</option>\n";
	$html .= "			<option name=\"ebay\" id=\"ebay\">CSU East Bay</option>\n";
	$html .= "			<option name=\"fresno\" id=\"fresno\">CSU Fresno</option>\n";
	$html .= "			<option name=\"fullerton\" id=\"fullerton\">CSU Fullerton</option>\n";
	$html .= "			<option name=\"humboldt\" id=\"humboldt\">CSU Humboldt</option>\n";
	$html .= "			<option name=\"lbeach\" id=\"lbeach\">CSU Long Beach</option>\n";
	$html .= "			<option name=\"csula\" id=\"csula\">CSU Los Angeles</option>\n";
	$html .= "		</select>\n";
	$html .= "	</form>\n";
		
	$html .= "<div class=\"grid_13\" id=\"resultsdiv\">\n";
	
	$html .= "</div>\n";
	
	$html .= "</div>\n";
	
	$html .= "<!-- close the main content area -->\n";
	
	echo $html;
}
?>