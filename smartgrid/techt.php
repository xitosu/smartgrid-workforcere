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
	
	$html .="<p>In the United States, vocational education varies from state to state. The majority of postsecondary technical and vocational training is provided by proprietary (privately owned) career schools. About 30 percent of all credentials in career training are provided by two-year community colleges, which also offer courses transferable to four-year universities; other programs are offered through military technical training government-operated adult education centers.[1] Several states operate their own institutes of technology which are on an equal accreditational footing with other state universities.</p>\n";
	
	$html .="<p>Historically, junior high schools and high schools have offered vocational courses such as home economics, wood and metal shop, typing, business courses, drafting and auto repair, though schools have put more emphasis on academics for all students because of standards based education reform. School to Work is a series of federal and state initiatives to link academics to work, sometimes including spending time during the day on a job site without pay.</p>\n\n";

	$html .= "</div>\n";
	echo $html;
}

?>