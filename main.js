var date = new Date();
var day = date.getDate()
var month = date.getMonth()+1;
var year  = date.getFullYear();

var cDay = document.getElementById("c_day");
var cMonth = document.getElementById("c_month");
var cYear = document.getElementById("c_year");

cDay.value = day;
cMonth.value = month;
cYear.value = year;



var bDay = document.getElementById("b_day");
var bMonth = document.getElementById("b_month");
var bYear = document.getElementById("b_year");

var y,m,d;

function cal(){
	var c_day = Number(cDay.value);
	var c_month = Number(cMonth.value);
	var c_year = Number(cYear.value);

	var b_day = Number(bDay.value);
	var b_month = Number(bMonth.value);
	var b_year = Number(bYear.value);

	y = c_year - b_year;

	if (c_month < b_month){
		c_month = (c_month) + (12);
		y = y-1;
		m = c_month - b_month;
	}
	else{
		m = c_month -b_month;

	}

	if (c_day < b_day){
		c_day = (c_day) + (30);
		m = m-1;
		d = c_day - b_day;
	}
	else{
		d = c_day - b_day;
	}
	
	var printAge = document.getElementById("age");
	printAge.innerText = y+"years;"+m+"months;"+d+"days";
}