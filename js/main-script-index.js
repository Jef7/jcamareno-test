function renderInfoIndex() {
	// CONTAINS THE EMAIL TO FIND/VALIDATE
	var emailInputIndex    = document.getElementById("email-index").value;

	// where the data will be render
	var nameContainer      = document.getElementById("Name");
	var ageContainer       = document.getElementById("Age");
	var notesContainer     = document.getElementById("Notes");
	var addressContainer   = document.getElementById("Address");
	var emailContainer     = document.getElementById("Email");
	var phonesContainer    = document.getElementById("Phones");
	var relativesContainer = document.getElementById("Relatives");

	// personal info array by email
	var personalInfo;

	if (ValidateEmailIndex(emailInputIndex)) {
		//Congratulations: Your email is valid
		validEmailIndex();
		personalInfo = JSON.parse(localStorage.getItem(emailInputIndex));

		if (personalInfo) {
			document.getElementById("email-index").style.border = "0.17em solid #F6BC25";
			showResultPage();
		} else {
			for (var i = 0; i < jsonData.data.length; i++) {
				if (jsonData.data[i].email == emailInputIndex) {
					document.getElementById("email-index").style.border = "0.17em solid #F6BC25";
					personalInfo = jsonData.data[i];
					showResultPage();
				} else {
					//Email not found on DB
					emailErrorIndex();
				}
			}
		}

		if (personalInfo) {
			hidePopUpEmailNotFoundIndex();

			var name             = document.createElement('h2');
			name.id              = "nameIndex";
			var notes            = document.createElement('p');
			notes.id             = "notesIndex";
			var address          = document.createElement('p');
			address.id           = "addressIndex";
			var email            = document.createElement('a');
			email.id             = "emailIndex";
			var phoneNumbers     = document.createElement('ul');
			phoneNumbers.id      = "phoneNumbersIndex";
			var relatives        = document.createElement('ul');
			relatives.id         = "relativesIndex";

			name.textContent     = personalInfo.name + ", " + personalInfo.age;
			notes.textContent    = personalInfo.notes;
			address.textContent  = personalInfo.address;
			email.textContent    = personalInfo.email;

			// iterative phoneNumbers
			if (personalInfo.phoneNumbers) {
				for (var j = 0; j < personalInfo.phoneNumbers.length; j++) {
					var phoneItem    = document.createElement('li');
					phoneItem.id     = "phoneItemIndex";

					phoneItem.textContent = personalInfo.phoneNumbers[j].phone;
					phoneNumbers.appendChild(phoneItem);
				}
			}

			// iterative relatives
			if (personalInfo.relatives) {
				for (var j = 0; j < personalInfo.relatives.length; j++) {
					var relativeItem = document.createElement('li');
					relativeItem.id  = "relativeItemIndex";

					relativeItem.textContent = personalInfo.relatives[j].name;
					relatives.appendChild(relativeItem);
				}
			}

			//localStorage
			localStorage.setItem(emailInputIndex, JSON.stringify(personalInfo));

			nameContainer.appendChild(name);
			notesContainer.appendChild(notes);
			addressContainer.appendChild(address);
			emailContainer.appendChild(email);
			phonesContainer.appendChild(phoneNumbers);
			relativesContainer.appendChild(relatives);
		}
	} else {
		//Show an error when the email is invalid
		hidePopUpEmailNotFoundIndex();
		invalidEmailIndex();
	}
}

//Invalid email
function invalidEmailIndex() {
	document.getElementById("email-index").style.border = "0.17em solid #DC0015";
	var popup = document.getElementById("popup-invalid-email-index");
	popup.classList.toggle("show");
	document.getElementById("popup-invalid-email-index").style.backgroundColor = "#DC0015";
	document.getElementById("popup-invalid-email-index").style.visibility = "visible";
}

function validEmailIndex() {
	document.getElementById("popup-invalid-email-index").style.visibility = "hidden";
}

function hidePopUpEmailNotFoundIndex() {
	document.getElementById("popup-not-found-index").style.visibility = "hidden";
}

//Email not found
function emailErrorIndex() {
	var popup = document.getElementById("popup-not-found-index");
	popup.classList.toggle("show");
	document.getElementById("popup-not-found-index").style.visibility = "visible";
}

// Validate email format
function ValidateEmailIndex(inputText) {
	// REGEX for email format
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (inputText.match(mailformat)) {
		return true;
	} else {
		return false;
	}
}

function showResultPage() {
	//show result page
	document.getElementById("body-result").style.display = "block";
	document.getElementById("body-try-again").style.display = "block";

	//hide index page
	document.getElementById("header-index").style.display = "none";
	document.getElementById("body-index").style.display = "none";
}

//json data base
var jsonData = {
	"data": [{
			"name": "Nickole Beatrice Smith",
			"address": "398 Pleasant Pine Cir. Harrington, DE 19123",
			"email": "nicobes@gmail.com",
			"age": 45,
			"notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
			"phoneNumbers": [{
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
			"relatives": [{
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
			"phoneNumbers": [{
				"phone": "(512) 842-2124"
			}],
			"relatives": [{
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
			"relatives": [{
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
			"phoneNumbers": [{
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
