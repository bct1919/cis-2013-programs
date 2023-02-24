

var $ = function (id) 
{
    return document.getElementById(id);
}




var calculate = function()
{

var floatRentPrice, intRentPayments, floatTotalCost;
floatRentPrice = $("rent_price").value;
intRentPayment = $("rent_payments").value;
floatTotalCost = floatRentPrice * intRentPayments;
$("total_cost").value = floatTotalCost;
return floatTotalCost;
}

 
window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}