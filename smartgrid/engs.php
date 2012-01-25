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
	$html = "";

	$html .="<div class=\"grid_13\">";
	
	$html .="<br />";
	$html .="<h1>Vocational Training</h1>";
	
	$html .="<p>Engineering is the discipline, art, skill and profession of acquiring and applying scientific, mathematical, economic, social, and practical knowledge, in order to design and build structures, machines, devices, systems, materials and processes.</p>\n";
	
	$html .="<p>One who practices engineering is called an engineer, and those licensed to do so may have more formal designations such as Professional Engineer, Chartered Engineer, Incorporated Engineer, Ingenieur or European Engineer. The broad discipline of engineering encompasses a range of more specialized sub disciplines, each with a more specific emphasis on certain fields of application and particular areas of technology.</p>\n\n";

	$html .= "</div>\n";
	echo $html;
}

?>