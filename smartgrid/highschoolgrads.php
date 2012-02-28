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
	
	$html .="<p>Engineering is the discipline, art, skill and profession of acquiring and applying scientific, mathematical, economic, social, and practical knowledge, in order to design and build structures, machines, devices, systems, materials and processes.</p>\n";
	
	$html .="<p>One who practices engineering is called an engineer, and those licensed to do so may have more formal designations such as Professional Engineer, Chartered Engineer, Incorporated Engineer, Ingenieur or European Engineer. The broad discipline of engineering encompasses a range of more specialized sub disciplines, each with a more specific emphasis on certain fields of application and particular areas of technology.</p>\n\n";

	$html .= "</div>\n";
  
        $html .="<div class=\"grid_14\">";

        $html .="<p>What field are you interested in?</p>";

        $html .="<select name="states">";

        $html .="<option value="0">Choose a state</option>";

        $html .="<option value="1">NORTH EAST</option>";

        $html .="<option value="2">MID WEST</option>";

        $html .="<option value="3">SOUTH</option>";

        $html .="<option value="4">WEST</option>";

        $html .="</select>";

	$html .= "</div>\n";

        $html .="<div class=\"grid_15\">";

        $html .="<p>What field are you interested in?</p>";

        $html .="<select name= "interested fields" class = "menu">";

        $html .="<option value= "Select Field">Select Field</option>";

        $html .="<option value= "Power Engineering">Power Engineering</option>";

        $html .="<option value= "Electrical Engineering">Electrical Engineering</option> ";

        $html .="</select>";

	$html .= "</div>\n";

        $html .="<div class=\"grid_16\">";

        $html .="<p>What type of school are you interested in?</p>";

        $html .="<select name= "school">";

        $html .="<option value= "Select School">Select School</option>";

        $html .="<option value= "University of California">University of California</option>";

        $html .="<option value= "California State University">California State University</option>";

        $html .="<option value= "California Community College">California Community College</option>";

        $html .="</select>";

	$html .= "</div>\n";

	echo $html;
}

?>