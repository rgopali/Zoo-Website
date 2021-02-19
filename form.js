//displays the questions in the array and then 
// stores answer in array to be diplayed later
// submit button goes to th.html
var i = 0;
var myFormData = [];   //declare an array
function myform() {
 
    var  text, fLen,  box;
    document.getElementById('start').style.display = 'none'; 
    document.getElementById('next').style.display = 'block';   
    form_questions = ["1. Did you like todays vist?",
                      "2. What didn't you like?",
                      "3. What could we do better?",
                       "4. Are you staitisfied with our cleanliness?",
                      "4. Will you come again?"              
                     ];
    fLen = form_questions.length;
    console.log(fLen);
    text = form_questions[i];
    button_value =  document.getElementById("start").value;

       if(button_value == "start") {
            document.getElementById("question").innerHTML = text; 
            box = "<input type=text id=q"+i
            box +=">"
            document.getElementById("textbox").innerHTML = box; 
            document.getElementById("start").value = "void";

       } else {
            //get the value of an element by it's id
            idname="q"+i;
            var value1 = document.getElementById("q"+i).value;  
                console.log("What question was just asked? "+idname);
                console.log ("The value in array of the answer: "+value1);
                console.log ("What is the value of i? "+i);
            
            myFormData.push(value1);  //put to the array
            
            i=i+1;
                if(i > fLen-1){
                  console.log("value of fLen after log: "+fLen);
                  document.getElementById('next').style.display = 'none'; 
                  document.getElementById('textbox').style.display = 'none'; 
                  document.getElementById('results').style.display = 'block'; 
                }  
           text = form_questions[i];
           document.getElementById("question").innerHTML = text; 
           if (text == undefined) { 
               document.getElementById("question").innerHTML = "";
           }
            box = "<input type=text id=q"+i
            box +=">"
            document.getElementById("textbox").innerHTML = box; 
       } //end of else
} // end of myform

function display(){
    document.getElementById("answers").innerHTML = window.myFormData; 
    document.getElementById('sbutton').style.display = 'block';
 }



 function sc_product1() 
 { 
 
     var qty = document.getElementById("qty").value;
     console.log ("in the function");
     console.log (qty);
     var subTotal = 50.00 * qty;    
     
     //num.toFixed(2);
    
     var shipping = 50;
     var tax_d = subTotal * 0.08;
     var tax = tax_d.toFixed(2);
     var total = subTotal + tax_d + shipping;
     var total_i = total.toFixed(2);
     
     
     document.getElementById("subTotal").innerHTML = "Sub Total: " + "$" + subTotal;
     document.getElementById("shipping").innerHTML = "Shipping: " + "$" + shipping;
     document.getElementById("tax").innerHTML = "Tax: " + "$" + tax;
     document.getElementById("total").innerHTML = "Total: " + "$" + total_i;
     document.getElementById('results').style.display = 'block';
     
 }
 function sc_product2() 
 { 
 
     var qty = document.getElementById("qty2").value;
     console.log ("in the function");
     console.log (qty);
     var subTotal = 50.00 * qty;    
     
     //num.toFixed(2);
    
     var shipping = 50;
     var tax_d = subTotal * 0.08;
     var tax = tax_d.toFixed(2);
     var total = subTotal + tax_d + shipping;
     var total_i = total.toFixed(2);
     
     
     document.getElementById("subTotal").innerHTML = "Sub Total: " + "$" + subTotal;
     document.getElementById("shipping").innerHTML = "Shipping: " + "$" + shipping;
     document.getElementById("tax").innerHTML = "Tax: " + "$" + tax;
     document.getElementById("total").innerHTML = "Total: " + "$" + total_i;
     document.getElementById('results').style.display = 'block';
     
 }
 function sc_product3() 
 { 
 
     var qty = document.getElementById("qty3").value;
     console.log ("in the function");
     console.log (qty);
     var subTotal = 50.00 * qty;    
     
     //num.toFixed(2);
    
     var shipping = 50;
     var tax_d = subTotal * 0.08;
     var tax = tax_d.toFixed(2);
     var total = subTotal + tax_d + shipping;
     var total_i = total.toFixed(2);
     
     
     document.getElementById("subTotal").innerHTML = "Sub Total: " + "$" + subTotal;
     document.getElementById("shipping").innerHTML = "Shipping: " + "$" + shipping;
     document.getElementById("tax").innerHTML = "Tax: " + "$" + tax;
     document.getElementById("total").innerHTML = "Total: " + "$" + total_i;
     document.getElementById('results').style.display = 'block';
     
 }
 function sc_product4() 
 { 
 
     var qty = document.getElementById("qty4").value;
     console.log ("in the function");
     console.log (qty);
     var subTotal = 50.00 * qty;    
     
     //num.toFixed(2);
    
     var shipping = 50;
     var tax_d = subTotal * 0.08;
     var tax = tax_d.toFixed(2);
     var total = subTotal + tax_d + shipping;
     var total_i = total.toFixed(2);
     
     
     document.getElementById("subTotal").innerHTML = "Sub Total: " + "$" + subTotal;
     document.getElementById("shipping").innerHTML = "Shipping: " + "$" + shipping;
     document.getElementById("tax").innerHTML = "Tax: " + "$" + tax;
     document.getElementById("total").innerHTML = "Total: " + "$" + total_i;
     document.getElementById('results').style.display = 'block';
     
 }
 function sc_product5() 
 { 
 
     var qty = document.getElementById("qty5").value;
     console.log ("in the function");
     console.log (qty);
     var subTotal = 50.00 * qty;    
     
     //num.toFixed(2);
    
     var shipping = 50;
     var tax_d = subTotal * 0.08;
     var tax = tax_d.toFixed(2);
     var total = subTotal + tax_d + shipping;
     var total_i = total.toFixed(2);
     
     
     document.getElementById("subTotal").innerHTML = "Sub Total: " + "$" + subTotal;
     document.getElementById("shipping").innerHTML = "Shipping: " + "$" + shipping;
     document.getElementById("tax").innerHTML = "Tax: " + "$" + tax;
     document.getElementById("total").innerHTML = "Total: " + "$" + total_i;
     document.getElementById('results').style.display = 'block';
     
 }
 
 