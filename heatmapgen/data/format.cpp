#include <fstream>
#include <string>
#include <stdio.h>
using namespace std;
int main()
{
	//Country,City,AccentCity,Region,Population,Latitude,Longitude
	ifstream in("worldcitiespop.txt");
	ofstream out("cities.txt");
	string str;
	int cval = 0;
	while(!(in.eof()))
	{
		getline(in,str,',');
		cval++;
		out<<str;
		if(cval != 6)
		{
			out<<',';
			cval++;
		}
		else
		{
			out<<'\n';
			cval = 0;
		}
	}
	in.close();
	out.close();
	in.open("cities.txt");
	out.open("cities2.txt");
	int lvals = 0;
	while(!(in.eof()))
	{
	string temp;
	getline(in,temp);
	if(lvals == 0)
		out<<temp<<'\n';
	lvals++;
	if(lvals == 20)
		lvals =0;
	}
}
