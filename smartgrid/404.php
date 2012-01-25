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
	
	$html .="<br />";
	$html .="<br /><h1>404!  This Page Cannot Be Found!</h1>";
	
	$html .="<p>Oops!  It looks like you've stumbled across a bad link and a page that either has changed locations or can no longer be found!</p>\n";
	$html .="<p>Fear not!  We are always updating our site.  Please feel free to email $adminemail about which link seems to be missing, and we'd be more than happy to get back with you on any updates!</p>\n\n";
	$html .="<p>Otherwise, please feel free to hit the back button on your browser, or go back to our <a href=\"index.php\">home page</a>.</p>\n\n";
	$html .= "</div>\n";
	echo $html;
}

?>