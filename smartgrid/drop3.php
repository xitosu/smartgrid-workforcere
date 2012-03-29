<?php


    function showOptionsDrop($array, $active, $echo=true){
        $string = '';

        foreach($array as $k => $v){
            $s = ($active == $k)? ' selected="selected"' : '';
            $string .= '<option value="'.$k.'"'.$s.'>'.$v.'</option>'."\n";
        }

        if($echo)   echo $string;
        else        return $string;
    }
?>
What type of school are you interested in?
      <select name= "school">
        <option value= "Select School">Select School</option>
        <option value= "University of California">University of California</option> ), 
        <option value= "California State University">California State University</option>
        <option value= "California Community College">California Community College</option>
      </select>