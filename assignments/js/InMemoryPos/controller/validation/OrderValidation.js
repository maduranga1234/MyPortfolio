
let orderNumberCounter = 1;

function generateOrderID() {
    const orderID = `ORD-${String(orderNumberCounter).padStart(3, '0')}`;
    orderNumberCounter++;
    $("#oId").val(orderID);
}
generateOrderID();



//item section
let ChoiceElement = document.getElementById("OrderItemqty");
let labelElement = document.getElementById("countQty");
let qty2;

function CheckQTY(qty) {
    qty2=qty;
}

ChoiceElement.addEventListener("keyup", function () {
    let value = ChoiceElement.value;
    if (qty2 <= value) {
        $("#qtymassage").css({
            display: "block",
        });
        $("#OrderItemqty").css({
            border:"2px solid red"
        });
        $("#countQty").css({
            display: "block"
        });
        labelElement.textContent = qty2;
    }else {
        $("#qtymassage").css({
            display: "none"
        });
        $("#OrderItemqty").css({
            border:"0px solid white"
        });
        $("#countQty").css({
            display: "none"
        });
    }
});

function checkValidation() {
    var inputField = document.getElementById("OrderitemName");
    var inputValue = inputField.value.trim();
    var inputField2 = document.getElementById("Custname");
    var inputValue2 = inputField2.value.trim();
    var inputFieldDate = document.getElementById("date");
    var inputValueDate = inputFieldDate.value.trim();
    var inputFieldorder = document.getElementById("OrderItemqty");
    var inputValueorder = inputFieldorder.value.trim();
    if (inputValue === "" || inputValue2 === "" || inputValueDate === "" || inputValueorder === "") {
        if (inputValue === "") {
            $("#inputState1").css({
                border: "2px solid red"
            });

        } else {
            $("#inputState1").css({
                border: "0px solid white"
            });
        }
        if (inputValue2 === "") {
            $("#inputState").css({
                border: "2px solid red"
            });
        } else {
            $("#inputState").css({
                border: "0px solid white"
            });
        }
        if (inputValueDate === "") {
            $("#date").css({
                border: "2px solid red"
            });
        } else {
            $("#date").css({
                border: "0px solid white"
            });
        }
        if (inputValueorder === "") {
            $("#OrderItemqty").css({
                border: "2px solid red"
            });
        } else {
            $("#OrderItemqty").css({
                border: "0px solid white"
            });
        }
    } else {
        if (anonimusIn === 5) {

        } else {
            getAllItemTOOrder();
        }
        $("#inputState1").css({
            border:"0px solid white"
        });
        $("#inputState").css({
            border:"0px solid white"
        });
        $("#date").css({
            border:"0px solid white"
        });
        $("#OrderItemqty").css({
            border:"2px solid white"
        });
    }
}

$("#addToCart").click(function () {
    checkValidation();
});


function inputCashCheck() {
    let value = inputCash.value;
    let balance = inputCash.value-totalPriceSum2;
    if (totalPriceSum2 <= value) {
        $("#cashLOwMasse").css({
            display: "none"
        });
        $("#cash").css({
            border:"0px solid white"
        });
        $("#cashShow").css({
            display: "none"
        });
        $("#Balance").val(balance);
        discountPrice();
        // document.getElementById("BalanceInput").innerHTML = balance;
    }else {
        $("#cashLOwMasse").css({
            display: "block",
        });
        $("#cash").css({
            border:"2px solid red"
        });
        $("#cashShow").css({
            display: "block"
        });
        cashLOwMasse.textContent = totalPriceSum2;
    }
}

let anonimusIn;
$("#purchase").click(function () {
    let inputField = document.getElementById("cash");
    let inputValue = inputField.value.trim();

    let inputFieldDate = document.getElementById("Balance");
    let inputValueDate = inputFieldDate.value.trim();
    if (checkValidation() || inputValue === ""  || inputValueDate === "") {
        $("#cash").css({
            border:"2px solid red"
        });

        $("#Balance").css({
            border:"2px solid red"
        });
        anonimusIn = 5;
    } else {
        $("#cash").css({
            border:"0px solid white"
        });

        $("#Balance").css({
            border:"0px solid white"
        });
        allemtyset();
        anonimusIn = 1;
    }
});

function allemtyset() {
    $("#custIdSetOrder").val("");
    $("#custNameSetOrder").val("");
    $("#custAddressSetOrder").val("");
    $("#custSalarySetOrder").val("");
    $("#ItemIdSetOrder").val("");
    $("#ItemNameSetOrder").val("");
    $("#ItemPriceSetOrder").val("");
    $("#ItemQTYSetOrder").val("");

    $("#inputCash").val("");
    $("#discount").val("");
    $("#BalanceInput").val("");
    $("#date").val("");
    $("#CustominputState").val("");

    $("#IteminputState").val("");
    $("#lableTotPrice").val("");
    $("#lableSubTotal").val("");
}

