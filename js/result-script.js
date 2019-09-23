function renderInfoResult() {
  console.log('result');
  // clearContent();
    // CONTAINS THE EMAIL TO FIND/VALIDATE
    var emailInput  = document.getElementById("email-result").value;

    // where the data will be render
    // var parentDiv   = document.getElementById("container-json-data");
    var nameContainer       = document.getElementById("Name");
    var ageContainer        = document.getElementById("Age");
    var notesContainer      = document.getElementById("Notes");
    var addressContainer    = document.getElementById("Address");
    var emailContainer      = document.getElementById("Email");
    var phonesContainer     = document.getElementById("Phones");
    var relativesContainer  = document.getElementById("Relatives");

    var name;
    // var age;
    var notes;
    var address;
    var email;
    var phoneNumbers;
    var relatives;
    var phoneItem;
    var relativeItem;

    //console.log(emailInput);
    // personal info array by email
    var personalInfo;

    if(ValidateEmail(emailInput))
    {
        //Congratulations: Your email is valid
        console.log('AK7 Email valido');

        validEmail();
        for (var i = 0; i < jsonData.data.length; i++)
        {
            if (jsonData.data[i].email == emailInput)
            {
                document.getElementById("email-result").style.border = "0.17em solid #F6BC25";
                personalInfo = jsonData.data[i];
                // showResultPage();
                // console.log('result');
                // document.getElementById("email").value = "hola";
                // console.log(document.getElementById("email").value);
            }else
            {
                //console.log('NO COINCIDE');
                //no hay conicidencias en la base de datos
                emailError();
            }
        }
        //

        if (personalInfo) {
            hidePopUpEmailNotFound();
            console.log('Correct Email Input DB');

            // DELETE ALL OLD CONTENT BY ID TO CREATE THEM AGIAN
            var nameResult = document.getElementById('nameIndex');
            nameResult.parentNode.removeChild(nameResult);

            var notesResult = document.getElementById('notesIndex');
            notesResult.parentNode.removeChild(notesResult);

            var addressResult = document.getElementById('addressIndex');
            addressResult.parentNode.removeChild(addressResult);

            var emailResult = document.getElementById('emailIndex');
            emailResult.parentNode.removeChild(emailResult);

            var phoneNumbersResult = document.getElementById('phoneNumbersIndex');
            phoneNumbersResult.parentNode.removeChild(phoneNumbersResult);

            var relativesResult = document.getElementById('relativesIndex');
            relativesResult.parentNode.removeChild(relativesResult);


            //CREATE THEM AGAIN
            name                = document.createElement('h2');
            name.id             = "nameIndex";
            // var age             = document.createElement('a');
            // age.id              = "idIndex";
            notes               = document.createElement('p');
            notes.id            = "notesIndex";
            address             = document.createElement('p');
            address.id          = "addressIndex";
            email               = document.createElement('a');
            email.id            = "emailIndex";
            phoneNumbers        = document.createElement('ul');
            phoneNumbers.id     = "phoneNumbersIndex";
            relatives           = document.createElement('ul');
            relatives.id        = "relativesIndex";

            name.textContent    = personalInfo.name + ", " +  personalInfo.age;
            // age.textContent     = personalInfo.age;
            notes.textContent   = personalInfo.notes;
            address.textContent = personalInfo.address;
            email.textContent   = personalInfo.email;

            // iterative phoneNumbers
            for (var j = 0; j < personalInfo.phoneNumbers.length; j++) {
                var phoneItem   = document.createElement('li');
                phoneItem.id    = "phoneItemIndex";

                phoneItem.textContent = personalInfo.phoneNumbers[j].phone;
                phoneNumbers.appendChild(phoneItem);
            }

            // iterative relatives
            for (var j = 0; j < personalInfo.relatives.length; j++) {
                var relativeItem  = document.createElement('li');
                relativeItem.id   = "relativeItemIndex";

                relativeItem.textContent = personalInfo.relatives[j].name;
                relatives.appendChild(relativeItem);
            }

            nameContainer.appendChild(name);
            // ageContainer.appendChild(age);
            notesContainer.appendChild(notes);
            addressContainer.appendChild(address);
            emailContainer.appendChild(email);
            phonesContainer.appendChild(phoneNumbers);
            relativesContainer.appendChild(relatives);


        }
    }else
    {
        //Show an error when the email is invalid
        //console.log('Correo invalido: poner en rojo');
        hidePopUpEmailNotFound();
        invalidEmail();

    }
}

//Invalid mail: border red #DC0015
function invalidEmail() {
  document.getElementById("email-result").style.border = "0.17em solid #DC0015";
  // document.getElementById("invalidEmail").style.visibility = "visible";
  var popup = document.getElementById("popup-invalid-email-result");
  popup.classList.toggle("show");
  document.getElementById("popup-invalid-email-result").style.backgroundColor = "#DC0015";
  document.getElementById("popup-invalid-email-result").style.visibility = "visible";
}

function validEmail() {
  document.getElementById("popup-invalid-email-result").style.visibility = "hidden";
}

function hidePopUpEmailNotFound() {
  document.getElementById("popup-not-found-result").style.visibility = "hidden";
}

//Email not found
function emailError() {
  var popup = document.getElementById("popup-not-found-result");
  popup.classList.toggle("show");
  document.getElementById("popup-not-found-result").style.visibility = "visible";
  console.log('No se encontro en la BD');
}

// Validate email format
function ValidateEmail(inputText)
{
    // REGEX for email format
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.match(mailformat))
    {
        return true;
    }else
    {
        return false;
    }
}


// function showResultPage() {
//   //show result page
//   document.getElementById("body-result").style.display    = "block";
//   document.getElementById("body-try-again").style.display = "block";
//
//   //hide index page
//   document.getElementById("header-index").style.display = "none";
//   document.getElementById("body-index").style.display = "none";
//
//   console.log('Resilt Page');
// }
//test email: amoury@gmail.com


//json data base
var jsonData = {
    "data": [
        {
            "name": "Nickole Beatrice Smith",
            "address": "398 Pleasant Pine Cir. Harrington, DE 19123",
            "email": "nicobes@gmail.com",
            "age": 45,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [
                {
                    "phone": "(302) 792-8434"
                },
                {
                    "phone": "(302) 792-1134"
                },
                {
                    "phone": "(302) 792-2234"
                },
                {
                    "phone": "(302) 792-3334"
                }
            ],
            "relatives": [
                {
                    "name": "Susan M Smith"
                },
                {
                    "name": "Malcolm W Smith"
                },
                {}
            ]
        },
        {
            "name": "Jacke Melyn Postre",
            "address": "128 Pleasant Pine Cir. Harrington, DE 48402",
            "email": "jackpost@gmail.com",
            "age": 23,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [
                {
                    "phone": "(512) 842-2124"
                }
            ],
            "relatives": [
                {
                    "name": "Jay M Postre"
                },
                {
                    "name": "May W Postre"
                }
            ]
        },
        {
            "name": "Louis K Patterson",
            "address": "333 Pleasant Pine Cir. Harrington, DE 11111",
            "email": "lpatterson@gmail.com",
            "age": 31,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [],
            "relatives": [
                {
                    "name": "Jay M Postre"
                },
                {
                    "name": "May W Postre"
                },
                {}
            ]
        },
        {
            "name": "Mickey K Mouse",
            "address": "443 Pleasant Pine Cir. Harrington, DE 12211",
            "email": "mmouse@gmail.com",
            "age": 21,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [
                {
                    "phone": "(444) 792-8434"
                },
                {
                    "phone": "(555) 792-1134"
                }
            ],
            "relatives": []
        },
        {
            "name": "Allan K Moury",
            "address": "312 Pleasant Pine Cir. Harrington, DE 11113",
            "email": "amoury@gmail.com",
            "age": 27,
            "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            "phoneNumbers": [],
            "relatives": []
        }
    ]
};
