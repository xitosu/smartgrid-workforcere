# schoolinsertmaker.pl, A program that takes excel.csv files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);


while (<INFILE>)
{
    chomp @values; #yummy!
    
    @values = split('\t', $_); #splits by tabs
    print "INSERT into schools(school_name,school_region) ";
    print "values('";
    print "$values[0]"; #gets School Name
	print "','";
    print "$values[1]"; #gets School region
    print"'); \n";
}

close (INFILE);