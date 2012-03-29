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
     What field are you interested in?
      <select name= "interested fields" class = "menu">
        <option value= "Select Field">Select Field</option>
        <option value= "Power Engineering">Power Engineering</option>        
        <option value= "Electrical Engineering">Electrical Engineering</option> 
      </select>
     