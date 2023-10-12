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
    }
});