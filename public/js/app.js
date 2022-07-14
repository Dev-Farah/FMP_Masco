// Logo
function logoColor(condition, element) {
    if (condition == 'lightgrey') {
        element.src = "./images/Logo-Grey.png";
    } else {
        element.src = "./images/Logo-green.png";
    }
}

// Modal
var modalImg = document.getElementById("modalImg");
var modalProductName = document.getElementById("modalProductName");
var modalProductDetails = document.getElementById("modalProductDetails");
var modalProductPrice = document.getElementById("modalProductPrice");
var modalProductPrice1 = document.getElementById("modalProductPrice1");
var modalProductPrice2 = document.getElementById("modalProductPrice2");
var modalProductPrice3 = document.getElementById("modalProductPrice3");
var modalProductPrice4 = document.getElementById("modalProductPrice4");
var modalProductBand = document.getElementById("modalProductBand");
var modalProductDisplay = document.getElementById("modalProductDisplay");
var modalProductBattery = document.getElementById("modalProductBattery");
var modalProductColor = document.getElementById("modalProductColor");
var modalProductRam = document.getElementById("modalProductRam");
var modalProductRom = document.getElementById("modalProductRom");

function openAppleModal(img, prodName, prodDetails, prodPrice1, prodPrice2, prodPrice3, prodPrice4) {
    modalImg.src = img;
    modalProductName.innerHTML = prodName;
    modalProductDetails.innerHTML = prodDetails;
    modalProductPrice1.innerHTML = prodPrice1;
    modalProductPrice2.innerHTML = prodPrice2;
    modalProductPrice3.innerHTML = prodPrice3;
    modalProductPrice4.innerHTML = prodPrice4;
}

function openNokiaModal(img, prodName, prodDetails, prodPrice, prodBand, prodDisplay, prodColor) {
    modalImg.src = img;
    modalProductName.innerHTML = prodName;
    modalProductDetails.innerHTML = prodDetails;
    modalProductPrice.innerHTML = prodPrice;
    modalProductBand.innerHTML = prodBand;
    modalProductDisplay.innerHTML = prodDisplay;
    modalProductColor.innerHTML = prodColor;
}

function openOppoModal(img, prodName, prodDetails, prodPrice, prodRam, prodRom, prodBattery, prodColor) {
    modalImg.src = img;
    modalProductName.innerHTML = prodName;
    modalProductDetails.innerHTML = prodDetails;
    modalProductPrice.innerHTML = prodPrice;
    modalProductRam.innerHTML = prodRam;
    modalProductRom.innerHTML = prodRom;
    modalProductBattery.innerHTML = prodBattery;
    modalProductColor.innerHTML = prodColor;
}

function openOppoIotProdModal(img, prodName, prodDetails, prodPrice, prodColor) {
    modalImg.src = img;
    modalProductName.innerHTML = prodName;
    modalProductDetails.innerHTML = prodDetails;
    modalProductPrice.innerHTML = prodPrice;
    modalProductColor.innerHTML = prodColor;
    var pta = document.getElementById("pta");
    pta.style.display = "none";
    modalProductRam.style.display = "none";
    modalProductRom.style.display = "none";
    modalProductBattery.style.display = "none";

}

function openSamsungModal(img, prodName, prodPrice, prodPrice1, prodPrice2, prodDisplay, prodBattery) {
    modalImg.src = img;
    modalProductName.innerHTML = prodName;
    modalProductPrice.innerHTML = prodPrice;
    modalProductPrice1.innerHTML = prodPrice1;
    modalProductPrice2.innerHTML = prodPrice2;
    modalProductDisplay.innerHTML = prodDisplay;
    modalProductBattery.innerHTML = prodBattery;
}

function openVivoModal(img, prodName, prodDetails, prodPrice, prodRam, prodRom, prodDisplay, prodBattery) {
    modalImg.src = img;
    modalProductName.innerHTML = prodName;
    modalProductDetails.innerHTML = prodDetails;
    modalProductPrice.innerHTML = prodPrice;
    modalProductRam.innerHTML = prodRam;
    modalProductRom.innerHTML = prodRom;
    modalProductDisplay.innerHTML = prodDisplay;
    modalProductBattery.innerHTML = prodBattery;
}

// Auto typing
var typed = new Typed(".auto-type", {
    strings: ["Mushtaq Ali's Sons Co"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
}
);