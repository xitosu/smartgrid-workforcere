# mysqlMaker-courses.pl, A program that takes excel.CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);


while (<INFILE>)
{
    chomp @values; #yummy!
    @values = split('\t', $_); #splits by tabs
    print "INSERT INTO course(course_number,school_number,course_title,course_description,course_active,course_region,course_type) ";
    print "values(";
    print "$values[0]"; #gets Course Number
	print "','";
    print "$values[1]"; #gets School Number
	print "','";
    print "$values[2]"; #gets Course Title
	print "','";
    print "$values[3]"; #gets Course Description
	print "','";
    print "$values[4]"; #gets Course Active
	print "','";
    print "$values[5]"; #Course Region
	print "','";
    print "$values[6]"; #Course Type
    print"); \n";
}

close (INFILE);