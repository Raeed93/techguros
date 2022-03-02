//  ONLOAD FUNCTION ==============================
$(document).ready(function() {
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        minDate: new Date(1941, 29 - 1, 25),
    });
});
//  ONLOAD FUNCTION ==============================

//  DATE PICKER CLICK EVENT ==============================
$("#datepicker").on("click", function(e) {
    e.preventDefault();
    $(this).attr("autocomplete", "off");
});
//  DATE PICKER ERROR
var datepicker_error = document.getElementById("datepicker_error");
//  DATE PICKER CLICK EVENT ==============================

//  DATE PICKER CHANGE EVENT / VALIDATION ==============================
var datePick;
$("#datepicker").on("change", function(ev) {
    datePick = $(this).val();
    let datePickArr = datePick.split("-");
    if (Number(datePickArr[2]) > 2006) {
        datepicker_error.innerHTML = "minimum age should be 15";
    } else {
        datepicker_error.innerHTML = "";
    }
});
//  DATE PICKER CHANGE EVENT / VALIDATION ==============================

//  VARIABLES ==============================
var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var addi = document.getElementById("addi");
var suburb = document.getElementById("suburb");
var State = document.getElementById("State");
var postcode = document.getElementById("postcode");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var comments = document.getElementById("comments");
var HTML = document.getElementById("HTML");
var CSS = document.getElementById("CSS");
var JavaScript = document.getElementById("JavaScript");
var PHP = document.getElementById("PHP");
var MySQL = document.getElementById("MySQL");
var Other = document.getElementById("Other");
var male = document.getElementById("male");
var female = document.getElementById("female");
var otherR = document.getElementById("other");
var btn_sub = document.getElementById("btn_sub");
var btn_sub2 = document.getElementById("btn_sub2");

var postcode_error = document.getElementById("postcode_error");
//  VARIABLES ==============================

//  COMMENT VALIDATION ==============================
$("#Other").on("click", function(e) {
    if (Other.checked == true) {
        comments.setAttribute("required", "required");
    } else {
        comments.removeAttribute("required");
    }
});
//  COMMENT VALIDATION ==============================

//  FORM SUBMIT FUNCTION ==============================
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});
//  FORM SUBMIT FUNCTION ==============================

//  FORM SUBMIT FUNCTION VALIDATIONS ==============================
function validate() {
    var errMsg;

    var fname_trim = fname.value.trim();
    var lname_trim = lname.value.trim();
    var addi_trim = addi.value.trim();
    var suburb_trim = suburb.value.trim();
    var State_trim = State.value.trim();
    var postcode_trim = postcode.value.trim();
    var email_trim = email.value.trim();
    var phone_trim = phone.value.trim();
    var comments_trim = comments.value.trim();

    let postcodeArr = postcode.value.split("");

    //  POSTCODE VALIDATION ==============================
    if (State.value == "Vic") {
        if (postcodeArr[0] != 3 && postcodeArr[0] != 8) {
            postcode_error.innerHTML = "postcode should start from 3 or 8";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "NSW") {
        if (postcodeArr[0] != 1 && postcodeArr[0] != 2) {
            postcode_error.innerHTML = "postcode should start from 1 or 2";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "QLD") {
        if (postcodeArr[0] != 4 && postcodeArr[0] != 9) {
            postcode_error.innerHTML = "postcode should start from 4 or 9";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "NT") {
        if (postcodeArr[0] != 9) {
            postcode_error.innerHTML = "postcode should start from 0";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "WA") {
        if (postcodeArr[0] != 6) {
            postcode_error.innerHTML = "postcode should start from 6";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "SA") {
        if (postcodeArr[0] != 5) {
            postcode_error.innerHTML = "postcode should start from 5";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "TAS") {
        if (postcodeArr[0] != 7) {
            postcode_error.innerHTML = "postcode should start from 7";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    } else if (State.value == "ACT") {
        if (postcodeArr[0] != 0) {
            postcode_error.innerHTML = "postcode should start from 0";
            errMsg = false;
        } else {
            postcode_error.innerHTML = "";
            errMsg = true;
        }
    }
    //  POSTCODE VALIDATION ==============================

    //  STORING DATA TO SESSION / LOCAL STORAGE ==============================
    if (errMsg === true) {
        let data = {
            fname: fname_trim,
            lname: lname_trim,
            addi: addi_trim,
            suburb: suburb_trim,
            State: State_trim,
            datePick: datePick,
            postcode: postcode_trim,
            email: email_trim,
            phone: phone_trim,
            comments: comments_trim,
            HTML: HTML.checked,
            CSS: CSS.checked,
            JavaScript: JavaScript.checked,
            PHP: PHP.checked,
            MySQL: MySQL.checked,
            Other: Other.checked,
            male: male.checked,
            female: female.checked,
            otherR: otherR.checked,
        };

        localStorage.setItem("data", JSON.stringify(data));

        btn_sub.style.display = "none";
        btn_sub2.style.display = "block";
    }
    //  STORING DATA TO SESSION / LOCAL STORAGE ==============================
}
//  FORM SUBMIT FUNCTION VALIDATIONS ==============================