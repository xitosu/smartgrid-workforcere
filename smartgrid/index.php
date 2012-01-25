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
	$html .="<div>";	
	$html .="<img src=\"images/welcome.png\" alt=\"welcome\" />";
	
	$html .= "<div class=\"homepage\">\n";
	
	$html .= "<div class=\"grid_3 homelink vocation\">\n";
	$html .="<a href=\"vocational.php\">Vocational Training</a>";
	$html .= "</div>\n";
	$html .= "<div class=\"grid_3 homelink techt\">\n";
	$html .="<a href=\"techt.php\">Technical Training</a>";
	$html .= "</div>\n";
	$html .= "<div class=\"grid_3 homelink engs\">\n";
	$html .="<a href=\"engs.php\">Recent Engineering Graduates</a>";
	$html .= "</div>\n";
	$html .= "<div class=\"grid_3 homelink hsgrad\">\n";
	$html .="<a href=\"highschoolgrads.php\">Recent High School Graduates</a>";
	$html .= "</div>\n";
	$html .="<div class=\"clear\"></div></div>";
	
	$html .="<br />";
	$html .="<h1>What Is Smart Grid?</h1>";
	
	$html .="<p>Imagine a world where everything runs off of efficiency.  A world where electricity isn't wasted,
		where your appliances smartly budget the amount of power that they will need, thus saving not only you, 
		but your community money and power.</p>\n";
	$html .="<p>Current technology cannot meet this need.  In fact, with our current system, power plants are
		running just a few hundred hours per year, and emit extra pollution just to meet the demands for this power.
		  How should this be alleviated?  <strong><em>Smart grid</em></strong> sytems are systems designed with this  
		  type of efficiency in mind - and you can be part of this.</p>\n\n";
	$html .="<p>Whether you have already received a degree or are completely new to the idea of smart grid technology,  
		this site is dedicated to providing you with the information you need in order to guide your course toward
		  the goal of working with smart grid technology.  From the above menu, you can either select the sector you  
		  currently work in, or the institution you are interested in pursuing your studies at.</p>\n\n";
	$html .= "</div>\n";
	echo $html;
}

?>