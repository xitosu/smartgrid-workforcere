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
	
	$html .="<p>Vocational education may be classified as teaching procedural knowledge. This can be contrasted with declarative knowledge, as used in education in a usually broader scientific field, which might concentrate on theory and abstract conceptual knowledge, characteristic of tertiary education. Vocational education can be at the secondary or post-secondary level and can interact with the apprenticeship system. Increasingly, vocational education can be recognised in terms of recognition of prior learning and partial academic credit towards tertiary education (e.g., at a university) as credit; however, it is rarely considered in its own form to fall under the traditional definition of higher education.</p>\n";
	
	$html .="<p>Up until the end of the twentieth century, vocational education focused on specific trades such as, for example, those of automobile mechanic or welder, and it was therefore associated with the activities of lower social classes. As a consequence, it carries some social stigma. Vocational education is related to the age-old apprenticeship system of learning.</p>\n\n";
	$html .="<p>However, as the labor market becomes more specialized and economies demand higher levels of skill, governments and businesses are increasingly investing in the future of vocational education through publicly funded training organizations and subsidized apprenticeship or traineeship initiatives for businesses. At the post-secondary level vocational education is typically provided by an institute of technology, or by a local community college.</p>\n\n";
	$html .= "</div>\n";
	echo $html;
}

?>