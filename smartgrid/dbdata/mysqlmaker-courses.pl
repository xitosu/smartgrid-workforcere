# mysqlMaker-courses.pl, A program that takes excel.CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);

while (<INFILE>)
{
    chomp @values; #yummy!
    @values = split('\t', $_); #splits by tabs
<<<<<<< HEAD
    print "INSERT INTO course(course_number,school_number,course_title,course_description,course_active,course_type) ";
    print "values(";
    print "'$values[0]',"; #gets Course Number
    print "'$values[1]',"; #gets School Number
    print "$values[2],"; #gets Course Title
    print "$values[3],"; #gets Course Description
    print "'$values[4]',"; #gets Course Active
    print "$values[5]"; #Course Type
    print"); \n";
=======
    print "INSERT INTO smartgrid.courses(school_number,course_title,course_description,course_active,course_type) ";
    print "values(";
    print "'$values[0]',"; #get course number
    print "'$values[1]',"; #gets School Number
    print "\'$values[2]\',"; #gets Course Title
    print "\'$values[3]\',"; #gets Course Description
    print "'$values[4]',"; #gets Course Active
    print ");\n";
>>>>>>> origin/master
}

close (INFILE);