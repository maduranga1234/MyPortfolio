const Cust_ID_Check = /^(C00-)[0-9]{3}$/;
const Cust_Name_Check = /^[A-Za-z ]{5,}$/;
const Cust_Address_Check = /^[A-Za-z0-9 ]{5,}$/;
const Contact_Number_Check = /^\d{10}$/;
const Email_Check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let custArray = new Array();
custArray.push({field: $("#id"), regEx: Cust_ID_Check});
custArray.push({field: $("#name"), regEx: Cust_Name_Check});
custArray.push({field: $("#address"), regEx: Cust_Address_Check});
custArray.push({field: $("#tp"), regEx: Contact_Number_Check});
custArray.push({field: $("#email"), regEx: Email_Check});


function clearCustomerInputFields() {
    $("#id,#name,#address,#tp,#email").val("");
    $("#id,#name,#address,#tp,#email").css("border", "1px solid #ced4da");
    $("#id").focus();
    setBtn();
}

setBtn();

function setBtn() {
    $("#CustDeletBTN").prop("disabled", true);
    $("#CustUpdateBTN").prop("disabled", true);

    if (checkAll()) {
        $("#CustSaveBTN").prop("disabled", false);
    } else {
        $("#CustSaveBTN").prop("disabled", true);
    }

    let id = $("#id").val();
    if (searchCustomer(id) == undefined) {
        $("#CustDeletBTN").prop("disabled", true);
        $("#CustUpdateBTN").prop("disabled", true);
    } else {
        $("#CustDeletBTN").prop("disabled", false);
        $("#CustUpdateBTN").prop("disabled", false);
    }

}

$("#id,#name,#address,#tp,#email").on("keydown keyup", function (e) {
    let indexNo = custArray.indexOf(custArray.find((c) => c.field.attr("id") == e.target.id));

    if (e.key == "Tab") {
        e.preventDefault();
    }

    checkValidations(custArray[indexNo]);

    setBtn();

    if (e.key == "Enter") {

        if (e.target.id != custArray[custArray.length - 1].field.attr("id")) {
            if (checkValidations(custArray[indexNo])) {
                custArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(custArray[indexNo])) {
                saveCustomer();
            }
        }
    }
});


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "2px solid white");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "2px solid white");
        }
    }

}

function checkAll() {
    for (let i = 0; i < custArray.length; i++) {
        if (!checkValidations(custArray[i])) return false;
    }
    return true;
}