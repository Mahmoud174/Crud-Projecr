var inps = document.getElementsByClassName("form-control");
var productName = document.getElementById("productNameInp");
    var productPrice = document.getElementById("productPriceInp");
    var productCategory = document.getElementById("productCategoryInp");
    var productDesc = document.getElementById("productDescInp");
var productsContainer ;

if(localStorage.getItem("myData") == null)
{
    productsContainer  = [];   
}
else
{
    productsContainer = JSON.parse( localStorage.getItem("myData"));
    displayProducts();

}

function SearchProtuct(term)
{
var temp="";
for(var i = 0; i<productsContainer.length;i++)
{
if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()))
{
temp +=`<div class="col-md-3">
        <div class="product mb-3">
                <img src="images/3.jpg" class="img-fluid">
                <h5>`+productsContainer[i].name+`<span class="badge ml-3 badge-primary">`+productsContainer[i].category+`</span>  </h5>
                <h6 class="border p-1 border-primary text-center">`+productsContainer[i].price+`</h6>
                <p>`+productsContainer[i].desc+`</p>`;

                if(productsContainer[i].onSale == true)
                {
                    temp += '<div class="sale">Sale</div>';                    
                }

             temp +=  `<button onclick="deleteProduct()" class="btn btn-sm btn-outline-danger">delete</button>
                <button onclick="updateProduct()" class="btn btn-sm btn-outline-info">update</button>

            </div>
    </div>`;



}

}
document.getElementById("productsRow").innerHTML = temp;
}

function addProduct()
{
    var radioButtons  = document.getElementsByName("onsale");
    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productCategory = document.getElementById("productCategoryInp").value;
    var productDesc = document.getElementById("productDescInp").value;
    var onSale ;

    if(radioButtons[0].checked == true)
    {
        onSale = true;
    }
    else
    {
        onSale = false;
    }


    var product = 
    {
        name: productName  ,
        price:productPrice,
        category:productCategory,
        desc:productDesc,
        onSale: onSale
    }
    productsContainer.push(product);

    clearform();
        

    localStorage.setItem("myData" , JSON.stringify(productsContainer))
    displayProducts();
    SearchProtuct();
   
}

function displayProducts()
{
    var temp = "";

    for(var i= 0 ; i < productsContainer.length ; i++)
    {
        temp +=`<div class="col-md-3">
        <div class="product mb-3">
                <img src="images/3.jpg" class="img-fluid">
                <h5>`+productsContainer[i].name+`<span class="badge ml-3 badge-primary">`+productsContainer[i].category+`</span>  </h5>
                <h6 class="border p-1 border-primary text-center">`+productsContainer[i].price+`</h6>
                <p>`+productsContainer[i].desc+`</p>`;

                if(productsContainer[i].onSale == true)
                {
                    temp += '<div class="sale">Sale</div>';                    
                }

             temp +=  `<button onclick="deleteProduct(`+i+`)" class="btn btn-sm btn-outline-danger">delete</button>
                <button onclick="updateProduct(`+i+`)" class="btn btn-sm btn-outline-info">update</button>

            </div>
    </div>`;
    }


    document.getElementById("productsRow").innerHTML = temp;
}


function deleteProduct(index)
{

var deleted = productsContainer.splice(index,1);
localStorage.setItem("myData",JSON.stringify(productsContainer));
displayProducts();

}

function clearform()
{
    for(var i =0 ; i<inps.length ;  i++ )
    {
        inps[i].value = "";
    
    }

}
function updateProduct(index)
{
   productName.value=productsContainer[index].name;
   productPrice.value=productsContainer[index].price;
   productCategory.value=productsContainer[index].category;
   productDesc.value=productsContainer[index].desc;
   
}


