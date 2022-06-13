function logoColor(condition, element) {
    if (condition == 'lightgrey') {
        element.src = "./images/Logo-grey.png";   
    } else {
        element.src = "./images/Logo-green.png";   
    }  
}

// Modal Function
var modalImg = document.getElementById("modalImg");
var modalProductName = document.getElementById("modalProductName");
var modalProductDetails = document.getElementById("modalProductDetails");
var modalProductPrice = document.getElementById("modalProductPrice");

function openModal(img, prodName, prodDetails, prodPrice) {
  modalImg.src = '../images/iPhone/iPhone 13 Pro/compare_iphone_13__fqzwhmfmroey_large.jpg';
  modalProductName.innerHTML = prodName;
  modalProductDetails.innerHTML = prodDetails;
  modalProductPrice.innerHTML = prodPrice;
}