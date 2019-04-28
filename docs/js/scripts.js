// Initialize Firebase
var config = {
	apiKey: "AIzaSyBzH2PR_5SSJuiSwkjWB_WLld4ORz4pZl8",
	authDomain: "bfranca-digital.firebaseapp.com",
	databaseURL: "https://bfranca-digital.firebaseio.com",
	projectId: "bfranca-digital",
	storageBucket: "bfranca-digital.appspot.com",
	messagingSenderId: "104393099303"
};
firebase.initializeApp(config);


// Get a reference to the database service
var database = firebase.database();
function saveLeads(name, email, date, ip, type) {

	var ref = database.ref('leads');
	var saveNewLead = ref.push();
	saveNewLead.set({
		name: name,
		email: email,
		currentDate: date,
		ip: ip,
		type: type
	});
}

form = document.getElementById('form-leads');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var name = form.querySelector('[name="name"]').value,
	email = form.querySelector('[name="email"]').value,
	ip = form.querySelector('[name="ip"]').value,
	type = '',
	date = new Date().toLocaleString();

	var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
	if (reg.test(email)){
		type = 'b2b';
	} else {
		type = 'b2c'
	}

	console.log('OK');

	saveLeads(name, email, date, ip, type);


})