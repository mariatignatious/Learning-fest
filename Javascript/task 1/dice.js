function dice()
{
    var number=Math.floor(Math.random() * 6) + 1;
    return number;
}
function printNumber(num){
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = num;
}
var button = document.getElementById('button');
button.onclick=function()
{
    var result=dice();
    printNumber(result);
}