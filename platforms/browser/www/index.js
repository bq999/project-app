/* 
Name: Bilal Qaiser
Student ID: c0692411
*/

computeLoan();

/* This is total of all menu price */

function computeLoan(){
  var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
  f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

  var tax=3.60; shipping=5.00;

  var q1 = document.getElementById('q1').value;
  var payment = q1 * a ;
  document.getElementById('payment').innerHTML = "Total: $"+payment.toFixed(2);

  var q2 = document.getElementById('q2').value;
  var payment2 = q2 * b ;
  document.getElementById('payment2').innerHTML = "Total: $"+payment2.toFixed(2);

  var q3 = document.getElementById('q3').value;
  var payment3 = q3 * c ;
  document.getElementById('payment3').innerHTML = "Total: $"+payment3.toFixed(2);

  var q4 = document.getElementById('q4').value;
  var payment4 = q4 * d ;
  document.getElementById('payment4').innerHTML = "Total: $"+payment4.toFixed(2);

  var q5 = document.getElementById('q5').value;
  var payment5 = q5 * e ;
  document.getElementById('payment5').innerHTML = "Total: $"+payment5.toFixed(2);

  var q6 = document.getElementById('q6').value;
  var payment6 = q6 * f ;
  document.getElementById('payment6').innerHTML = "Total: $"+payment6.toFixed(2);

  var q7 = document.getElementById('q7').value;
  var payment7 = q7 * g ;
  document.getElementById('payment7').innerHTML = "Total: $"+payment7.toFixed(2);

  var q8 = document.getElementById('q8').value;
  var payment8 = q8 * h ;
  document.getElementById('payment8').innerHTML = "Total: $"+payment8.toFixed(2);

  var q9 = document.getElementById('q9').value;
  var payment9 = q9 * i ;
  document.getElementById('payment9').innerHTML = "Total: $"+payment9.toFixed(2);

  var q10 = document.getElementById('q10').value;
  var payment10 = q10 * j ;
  document.getElementById('payment10').innerHTML = "Total: $"+payment10.toFixed(2);

  var q11 = document.getElementById('q11').value;
  var payment11 = q11 * k ;
  document.getElementById('payment11').innerHTML = "Total: $"+payment11.toFixed(2);


  var t1 = document.getElementById('total1').value;
  var total1 = payment + payment2 + payment3 + payment4 + payment5 + payment6 +
  payment7 + payment8 + payment9 + payment10 + payment11 ;
  document.getElementById('subtotal').innerHTML = "Subtotal: $"+total1.toFixed(2);
  document.getElementById('subtotal1').innerHTML = "$"+total1.toFixed(2);


  var t2 = document.getElementById('total2').value;
  var total2 = total1 + tax + shipping;
  document.getElementById('total').innerHTML = "Grand total: $"+total2.toFixed(2);
  document.getElementById('total1').innerHTML = "$"+total2.toFixed(2);


}


/* All button to select to add into table in overlay */

function order1(){

  var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
  f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

  var tax=3.60; shipping=5.00;

  var q1 = document.getElementById('q1').value;
  var payment = q1 * a ;

  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);


  var firstRow=document.getElementById("myTable").rows[1];
  var x=firstRow.insertCell(2);
  x.innerHTML=" ";

  var img = document.createElement('img');
  img.src = "img/basbousa.jpg";
  x.appendChild(img);


  cell1.innerHTML = "Basbousa";
  cell2.innerHTML = "$ " + a;
  cell3.innerHTML = q1;
  cell4.innerHTML = "$ " + payment;

  alert("Added!");
}



function order2(){


  var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
  f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

  var q2 = document.getElementById('q2').value;
  var payment2 = q2 * b ;
  
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);


  var firstRow=document.getElementById("myTable").rows[1];
  var x=firstRow.insertCell(2);
  x.innerHTML=" ";

  var img = document.createElement('img');
  img.src = "img/katayef.jpg";
  x.appendChild(img);

  cell1.innerHTML = "Katayef";
  cell2.innerHTML = "$ " + b;
  cell3.innerHTML = q2;
  cell4.innerHTML = "$ " + payment2;

  alert("Added!");
  }



  function order3(){

    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q3 = document.getElementById('q3').value;
    var payment3 = q3 * c ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/kunafa.jpg";
    x.appendChild(img);

    cell1.innerHTML = "Kunfa";
    cell2.innerHTML = "$ " + c;
    cell3.innerHTML = q3;
    cell4.innerHTML = "$ " + payment3;
    alert("Added!");
  }


  function order4(){

    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q4 = document.getElementById('q4').value;
    var payment4 = q4 * d ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/maakroun.jpg";
    x.appendChild(img);

    cell1.innerHTML = "Maakroun";
    cell2.innerHTML = "$ " + d;
    cell3.innerHTML = q4;
    cell4.innerHTML = "$ " + payment4;
    alert("Added!");
}


  function order5(){

    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q5 = document.getElementById('q5').value;
    var payment5 = q5 * e ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/muhallabia.jpg";
    x.appendChild(img);

    cell1.innerHTML = "Muhallabia";
    cell2.innerHTML = "$ " + e;
    cell3.innerHTML = q5;
    cell4.innerHTML = "$ " + payment5;
    alert("Added!");
}


  function order6(){


    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q6 = document.getElementById('q6').value;
    var payment6 = q6 * f ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/othmaliye.jpg";
    x.appendChild(img);


    cell1.innerHTML = "Othmaliye";
    cell2.innerHTML = "$ " + f;
    cell3.innerHTML = q6;
    cell4.innerHTML = "$ " + payment6;
    alert("Added!");
}



  function order7(){

    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q7 = document.getElementById('q7').value;
    var payment7 = q7 * g ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/rangana.jpg";
    x.appendChild(img);


    cell1.innerHTML = "Rangana";
    cell2.innerHTML = "$ " + g;
    cell3.innerHTML = q7;
    cell4.innerHTML = "$ " + payment7;
    alert("Added!");
}


  function order8(){


    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q8 = document.getElementById('q8').value;
    var payment8 = q8 * h ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/zainab.jpg";
    x.appendChild(img);

    cell1.innerHTML = "Zainab";
    cell2.innerHTML = "$ " + h;
    cell3.innerHTML = q8;
    cell4.innerHTML = "$ " + payment8;
    alert("Added!");
}



  function order9(){


    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q9 = document.getElementById('q9').value;
    var payment9 = q9 * i ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/karak.jpg";
    x.appendChild(img);

    cell1.innerHTML = "Karak";
    cell2.innerHTML = "$ " + i;
    cell3.innerHTML = q9;
    cell4.innerHTML = "$ " + payment9;
    alert("Added!");
}


  function order10(){

    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q10 = document.getElementById('q10').value;
    var payment10 = q10 * j ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/coffee.jpg";
    x.appendChild(img);

    cell1.innerHTML = "Coffee";
    cell2.innerHTML = "$ " + j;
    cell3.innerHTML = q10;
    cell4.innerHTML = "$ " + payment10;
    alert("Added!");
}




  function order11(){

    var a = 10.99; b=20.99; c=15.99; d=10.99; e=14.99;
    f=8.99; g=9.99; h=5.99; i=3.99; j=2.99; k=1.99; 

    var q11 = document.getElementById('q11').value;
    var payment11 = q11 * k ;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var firstRow=document.getElementById("myTable").rows[1];
    var x=firstRow.insertCell(2);
    x.innerHTML=" ";

    var img = document.createElement('img');
    img.src = "img/qahwa.jpg";
    x.appendChild(img);


    cell1.innerHTML = "Qahwa";
    cell2.innerHTML = "$ " + k;
    cell3.innerHTML = q11;
    cell4.innerHTML = "$ " + payment11;
    alert("Added!");
}


