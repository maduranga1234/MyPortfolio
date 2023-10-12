getAllCustomers();

//Save Customer
$("#CustSaveBTN").click(function () {
    if (checkAll()){
        saveCustomer();
    }else{
        alert("Error");
    }
});

// Save Customer
function saveCustomer() {
    let customerID = $("#id").val();
    //check customer is exists or not?
    if (searchCustomer(customerID.trim()) == undefined) {

        let customerName = $("#name").val();
        let customerAddress = $("#address").val();
        let customerContact = $("#tp").val();
        let customerEmail = $("#email").val();

        let newCustomer = Object.assign({}, customer);

        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.contact = customerContact;
        newCustomer.email=customerEmail;

        customerDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomers();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

//delete Customer
$("#CustDeletBTN").click(function () {
    let id = $("#id").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }
});

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}


//update  Customer
$("#CustUpdateBTN").click(function () {
    let id = $("#id").val();
    updateCustomer(id);
    clearCustomerInputFields();
});

//clear textField
$("#CustClearBTN").click(function () {
    clearCustomerInputFields();

});

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No Customer find..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);

            let customerName = $("#name").val();
            let customerAddress = $("#address").val();
            let customerContact = $("#tp").val();
            let customerEmail = $("#email").val();


            customer.name = customerName;
            customer.address = customerAddress;
            customer.contact = customerContact;
            customer.email=customerEmail;

            getAllCustomers();
        }
    }
}


function getAllCustomers() {
    $("#tBdy").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let contact = customerDB[i].contact;
        let email = customerDB[i].email;


        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${contact}</td>
                     <td>${email}</td>
                    </tr>`;

        $("#tBdy").append(row);
        bindTrEvents();
    }
}

//click table .shire value textField
function bindTrEvents() {

    $(document).on('click', '#tBdy > tr', function () {
        let id = $(this).children(':nth-child(1)').text();
        let name = $(this).children(':nth-child(2)').text();
        let address = $(this).children(':nth-child(3)').text();
        let contact = $(this).children(':nth-child(4)').text();
        let email = $(this).children(':nth-child(5)').text();

        setTextFieldValues(id, name, address, contact ,email);
    });

    function setTextFieldValues(id, name, address, contact, email) {
        $("#id").val(id);
        $("#name").val(name);
        $("#address").val(address);
        $("#tp").val(contact);
        $("#email").val(email);

    }
}

//click table .shire value textField help..............
// $(document).on('click', '#CustomerTbl > tr', function() {
//     let id = $(this).children().eq(0).text();
//     let name = $(this).children().eq(1).text();
//     let address = $(this).children().eq(2).text();
//     let salary = $(this).children().eq(3).text();
//
//     setTextFieldValues(id,name,address,salary);
// });
//
// function setTextFieldValues(id, name, address, salary) {
//     $("#id").val(id);
//     $("#CustomertxtName").val(name);
//     $("#CustomertxtAddress").val(address);
//     $("#CustomertxtSalary").val(salary);
// }