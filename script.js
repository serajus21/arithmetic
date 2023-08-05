//variables
let n1, n2, sumR, subR, multR, divR;
let result = document.getElementById("output");

//input
function input()
{
    n1 = parseFloat(document.getElementById("v1").value);
    n2 = parseFloat(document.getElementById("v2").value);
}

//functions
function sum() {sumR=n1+n2; result.innerHTML="The summation result is: "+sumR;}
function sub() {subR=n1-n2; result.innerHTML="The substraction result is: "+subR;}
function mult() {multR=n1*n2; result.innerHTML="The multiplication result is: "+multR;}
function div() {divR=n1/n2; result.innerHTML="The division result is: "+divR;}