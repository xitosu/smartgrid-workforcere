# mysqlMaker.pl, A program that takes CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);


while (<INFILE>)
{
    chomp;
    
    @values = split('\t', $_); #splits by tabs
    print "(School_number,school_name,school_description,school_image,school_region) ";
    print "$values[0],"; #gets the School Number
    print "$values[1],"; #gets School Name
    print "$values[2],"; #gets School Description
    print "$values[3],"; #gets School Image
    print "$values[4]"; #gets School Region
    print"); \n";
}

close (INFILE);