var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
floatAge = parseFloat(prompt("enter your age in years"));
alert("your current age in years="+ floatAge);
floatDays = parseFloat(floatAge * 365.25);
alert("your age in days = "+ floatDays);
intFortnights = parseInt(floatDays/14);
alert("your age in fortnights="+ intFortnights);
floatMonths = parseFloat(floatAge * 12);
alert("your age in months = "+ floatMonths);
intWeeks = parseInt(floatDays/7);
alert("your age in week="+ intWeeks);

