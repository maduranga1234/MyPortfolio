// customer side


let selectElement = document.getElementById("inputState");

customerDB.forEach(function(customer) {
    let option = document.createElement("option");
    option.value = customer.id;
    option.textContent = customer.id;
    selectElement.appendChild(option);
});

selectElement.addEventListener("change", function () {
    let selectedId = selectElement.value;
    let selectedCustomer = customerDB.find(function(customer) {
        return customer.id === selectedId;
    });
    if (selectedCustomer) {
        alert(selectedCustomer.id);
        $("#Custid").val(selectedCustomer.id);
        $("#Custname").val(selectedCustomer.name);

    }
});


// item side

let selectItemElement = document.getElementById("inputState1");

itemDB.forEach(function(item) {
    let option = document.createElement("option");
    option.value = item.code;
    option.textContent = item.code;
    selectItemElement.appendChild(option);
});


let itemCodetoOrder;
let itemNametoOrder;
let itemPricetoOrder;

selectItemElement.addEventListener("change", function () {
    let selectedId = selectItemElement.value;
    let selectedItem = itemDB.find(function(item) {
        return item.code === selectedId;
    });
    if (selectedItem) {
        alert(selectedItem.code);
        $("#OrderitemName").val(selectedItem.name);
        $("#OrderUnitprice").val(selectedItem.unitPrice);
        $("#qtyH").val(selectedItem.qtyOnHand);
        $("#qlity").val(selectedItem.qlity);


        itemCodetoOrder = selectedItem.code;
        itemNametoOrder = selectedItem.description;
        itemPricetoOrder = selectedItem.unitPrice;
    }
});










// item side
//
// let selectItemElement = document.getElementById("IteminputState");
// let itemCode;
// let itemName;
//
// itemDB.forEach(function(item) {
//     let option = document.createElement("option");
//     option.value = item.code;
//     option.textContent = item.code;
//     selectItemElement.appendChild(option);
// });
//
// let itemCodetoOrder;
// let itemNametoOrder;
// let itemPricetoOrder;
// let ChoiceElementOrder = document.getElementById("ChoiceQTYOrder");
// const defaultArrayToOrder = [];
// selectItemElement.addEventListener("change", function () {
//     let selectedId = selectItemElement.value;
//     let selectedItem = itemDB.find(function(item) {
//         return item.code === selectedId;
//     });
//     if (selectedItem) {
//         CheckQTY(selectedItem.qtyOnHand);
//         $("#ItemIdSetOrder").val(selectedItem.code);
//         $("#ItemNameSetOrder").val(selectedItem.description);
//         $("#ItemPriceSetOrder").val(selectedItem.unitPrice);
//         $("#ItemQTYSetOrder").val(selectedItem.qtyOnHand);
//
//         itemCodetoOrder = selectedItem.code;
//         itemNametoOrder = selectedItem.description;
//         itemPricetoOrder = selectedItem.unitPrice;
//     }
// });

function getAllItemTOOrder() {
    let newItemtoOrder = Object.assign({}, itemToOrder);
    let totalItemPrice = itemPricetoOrder * ChoiceElementOrder.value;
    let existingItemIndex = defaultArrayToOrder.findIndex(item => item.itemCode === itemCodetoOrder);
    if (existingItemIndex !== -1) {
        defaultArrayToOrder[existingItemIndex].itemQTYChoice = ChoiceElementOrder.value;
        defaultArrayToOrder[existingItemIndex].totalPrice = totalItemPrice;
    } else {
        newItemtoOrder.itemCode = itemCodetoOrder;
        newItemtoOrder.itemName = itemNametoOrder;
        newItemtoOrder.itemPrice = itemPricetoOrder;
        newItemtoOrder.itemQTYChoice = ChoiceElementOrder.value;
        newItemtoOrder.totalPrice = totalItemPrice;
        defaultArrayToOrder.push(newItemtoOrder);
    }
    getAllItemSetTableArray();
}

function getAllItemSetTableArray() {
    $("#TBodyOrder").empty()
    for (let i = 0; i < defaultArrayToOrder.length; i++) {
        let id = defaultArrayToOrder[i].itemCode;
        let name = defaultArrayToOrder[i].itemName;
        let price = defaultArrayToOrder[i].itemPrice;
        let QTY = defaultArrayToOrder[i].itemQTYChoice;
        let total = defaultArrayToOrder[i].totalPrice;
        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${QTY}</td>
                     <td>${total}</td>
                    </tr>`;
        $("#TBodyOrder").append(row);
        calculateTotalPrice();
    }
}

//purchase order
let totalPriceSum2;
function calculateTotalPrice() {
    let totalPriceSum = 0;
    for (let i = 0; i < defaultArrayToOrder.length; i++) {
        totalPriceSum += defaultArrayToOrder[i].totalPrice;
    }
    document.getElementById("lableTotPrice").innerHTML = totalPriceSum;
    document.getElementById("lableSubTotal").innerHTML = totalPriceSum;
    totalPriceSum2=totalPriceSum;
}

let inputCash = document.getElementById("inputCash");
let cashLOwMasse = document.getElementById("cashShow");

inputCash.addEventListener("keyup", function () {
    inputCashCheck();
});

// discount
let discount = document.getElementById("discount");
discount.addEventListener("keyup", function (){
    let discountValue = discount.value;
    let discountAmount = (discountValue / 100) * totalPriceSum2;
    let discountedPrice = totalPriceSum2 - discountAmount;
    document.getElementById("lableSubTotal").innerHTML = discountedPrice;
    let balance = inputCash.value-discountedPrice;
    $("#BalanceInput").val(balance);
});

