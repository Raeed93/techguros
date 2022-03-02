window.addEventListener("load", function(event) {
    var Name = document.getElementById("Name");
    var Family_Name = document.getElementById("Family_Name");
    var Age = document.getElementById("Age");
    var Gender = document.getElementById("Gender");
    var Email = document.getElementById("Email");
    var Phone = document.getElementById("Phone");
    var Postcode = document.getElementById("Postcode");
    var suburb = document.getElementById("suburb");
    var Street_Address = document.getElementById("Street_Address");
    var State = document.getElementById("State");
    var Skills = document.getElementById("Skills");

    var data = localStorage.getItem("data");
    var data2 = JSON.parse(data);

    Name.innerHTML = data2.fname;
    Family_Name.innerHTML = data2.lname;
    Age.innerHTML = data2.datePick;
    Gender.innerHTML =
        (data2.male === true && "male") ||
        (data2.otherR === true && "other") ||
        (data2.female === true && "female");
    Email.innerHTML = data2.email;
    Phone.innerHTML = data2.phone;
    Postcode.innerHTML = data2.postcode;
    suburb.innerHTML = data2.suburb;
    Street_Address.innerHTML = data2.addi;
    State.innerHTML = data2.State;
    Skills.innerHTML = `${(data2.HTML === true && "HTML") || ""}${
		(data2.CSS === true && ", CSS") || ""
	}${(data2.JavaScript === true && ", JavaScript") || ""}${
		(data2.MySQL === true && ", MySQL") || ""
	}${(data2.Other === true && ", Other") || ""}${
		(data2.comments !== "" && data2.comments) || ""
	}`;
});