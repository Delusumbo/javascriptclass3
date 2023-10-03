let first = document.getElementById("first");
let second = document.getElementById("second");
function validatingForm() {
	var username = document.getElementById("username").value;

	var password = document.getElementById("password").value;

	const hasUppercase = /[A-Z]/.test(password);

	const hasLowercase = /[a-z]/.test(password);

	const hasNumber = /\d/.test(password);

	const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

	if (username == "" && password == "") {
		document.getElementById("allError").innerHTML = "Username and Password is required";
		return false;
	} else {
		document.getElementById("allError").style.display = "none";
	}

	if (username == "") {
		document.getElementById("error").innerHTML = "Username is required";
		return false;
	} else {
		document.getElementById("error").style.display = "none";
	}

	if (password == "") {
		document.getElementById("passwordError").innerHTML = "Password is required";
		return false;
	} else if (!hasUppercase) {
		document.getElementById("passwordError").innerHTML = "Password must contain Uppercase";
		return false;
	} else if (!hasLowercase) {
		document.getElementById("passwordError").innerHTML = "Password must contain Lowercase";
		return false;
	} else if (!hasNumber) {
		document.getElementById("passwordError").innerHTML = "Password must contain Number";
		return false;
	} else if (!hasSpecialCharacter) {
		document.getElementById("passwordError").innerHTML = "Password must contain Special Character";
		return false;
	} else if (password.length < 8) {
		document.getElementById("passwordError").innerHTML = "Password must be more than 8";
		return false;
	} else if (password.length > 15) {
		document.getElementById("passwordError").innerHTML = "Password must not be more than 15";
		return false;
	} else {
		document.getElementById("error").style.display = "none";
	}

	
	first.style.display = "none";
	second.style.display = "block";
}

function forgotForm() {
	var email = document.getElementById("email").value;

	const hasAtSymbol = /@/.test(email);

	const hasDotCom = /\.com$/.test(email);

	if (email == "") {
		document.getElementById("emailError").innerHTML = "Email is required";
		return false;
	} else if (!hasAtSymbol) {
		document.getElementById("emailError").innerHTML = "Invalid Email";
		return false;
	} else if (!hasDotCom) {
		document.getElementById("emailError").innerHTML = "Invalid Email";
		return false;
	}

	// else{
	//     document.getElementById('emailEerror').style.display = 'none';
	// }
	else {
		window.location = "reset.html";
	}
}

function resetForm() {
	var password = document.getElementById("password").value;

	var confirmPassword = document.getElementById("confirmPassword").value;

	const hasUppercase = /[A-Z]/.test(password);

	const hasLowercase = /[a-z]/.test(password);

	const hasNumber = /\d/.test(password);

	const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

	if (password == "") {
		document.getElementById("passwordError").innerHTML = "Password is required";
		return false;
	} else if (!hasUppercase) {
		document.getElementById("passwordError").innerHTML = "Password must contain Uppercase";
		return false;
	} else if (!hasLowercase) {
		document.getElementById("passwordError").innerHTML = "Password must contain Lowercase";
		return false;
	} else if (!hasNumber) {
		document.getElementById("passwordError").innerHTML = "Password must contain Number";
		return false;
	} else if (!hasSpecialCharacter) {
		document.getElementById("passwordError").innerHTML = "Password must contain Special Character";
		return false;
	} else if (password.length < 8) {
		document.getElementById("passwordError").innerHTML = "Password must be more than 8";
		return false;
	} else if (password.length > 15) {
		document.getElementById("passwordError").innerHTML = "Password must not be more than 15";
		return false;
	}

	if (confirmPassword == "") {
		document.getElementById("passwordError").innerHTML = "Confirm Password required";
		return false;
	} else {
		document.getElementById("passwordError").innerHTML = "Password correct";
	}

	if (confirmPassword != password) {
		document.getElementById("confirmError").innerHTML = "Passwords do not match";
		document.getElementById("passwordError").style.display = "none";

		return false;
	} else {
		window.location = "form.html";

		return false;
	}
}

function place() {
    document.getElementById('second').style.display = "none";
    document.getElementById("first").style.display = "block";
}
