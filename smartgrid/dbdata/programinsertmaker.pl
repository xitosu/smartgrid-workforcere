# programinsertmaker.pl, A program that takes excel.csv files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);


while (<INFILE>)
{
    chomp @values; #yummy!
    
    @values = split('\t', $_); #splits by tabs
    print "INSERT into programs(program_id,degree_name,degree_description,course_id) ";
    print "values('";
    print "$values[0]"; #gets Program ID
	print "','";
    print "$values[1]"; #gets Degree Name
	print "','";
    print "$values[2]"; #gets Degree Description
	print "','";
    print "$values[3]"; #gets Course ID
    print"'); \n";
}

close (INFILE);