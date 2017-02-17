window.onload = function() {
	var body = document.body;
	body.insertAdjacentHTML('afterbegin', '<div id="fnames"><a href="javascript:;" id="test">Click here for some stuff.</a><br></div>');
	body.insertAdjacentHTML('beforeend', '<p id="reset"><a href="javascript:;">Reset</a></p>')
	document.getElementById("test").addEventListener("click", buildPeoples);
	document.getElementById("reset").addEventListener("click", resetPage);
}

function buildPeoples() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/people');
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		response = xhr.responseText;
		response = JSON.parse(response);
		buildInfo(response);
	}
	xhr.send();
}

function buildInfo(response) {
	document.getElementById("fnames").innerHTML = "";
	var div1 = document.getElementById("fnames")
	for (x = 0; x < response.length; x++) {
		var whatever = Object.values(response[x]);
		div1.insertAdjacentHTML("afterbegin", "Name: " + whatever[0] + " " + whatever[1] + "<br>" +
			"Phone: " + whatever[2] + "<br>" + 
			"Address: " + whatever[3] + "<br>" +
			"City: " + whatever[4] + "<br>" +
			"State: " + whatever[5] + "<br>" +
			"ZIP: " + whatever[6] + "<br><br>");
	}
}

function resetPage() {
	window.location.href = "/";
}