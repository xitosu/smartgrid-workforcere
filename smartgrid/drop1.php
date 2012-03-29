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
<select name="states">
    <option value="0">Choose a state</option>
    <option value="1">NORTH EAST</option>
    <option value="2">MID WEST</option>
    <option value="3">SOUTH</option>
    <option value="4">WEST</option>
    <?php showOptionsDrop($states_arr, null, true); ?>
</select>
