var productCon = [];
var R = document.getElementsByName("onsale");
var I = document.getElementsByClassName("form-control");
function checkProtect() {
   var productName =document.getElementById("productNameInp").value;
   var B =document.getElementById("productPriceInp").value;
   var C =document.getElementById("productCatInp").value;
   var D =document.getElementById("productDescInp").value;
   var E = false;
   if (R[0].checked == true)
   {
       E = true;
   }
   var product = 
   {
       name: productName,
       price: B,
       cat: C,
       desc: D,
       onsale: E
   }
   productCon.push(product);
   console.log(productCon);
   Add();
   display();
}
function Add(){
  for( var i = 0 ; i < I.length ; i++ )
{
    I[i].value = "";
}

}
function display(){
var temp = "";
for(var i = 0 ; i<productCon.length ; i++)
{
temp +=`<div class="col-md-3">
<div class="product">
<img src="images/asset 0.png"class="img-fluid">
<h4> product name</h4>
<h5 class="text-muted">price : 5000 <span class="badge badge-info">mobile</span> </h5>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
     porro dignissimos praesentium inventore cum beatae distinctio amet,
     asperiores doloremque ea cumque quis sequi perspiciatis velit architecto obcaecati. Expedita, in itaque.</p>
   <div class="sale"> sale</div> 
   </div>
   </div>`;


}
document.getElementById("rr").innerHTML = temp;
}


