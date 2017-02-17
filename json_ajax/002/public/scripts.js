window.onload = whatever();

function whatever() {
	xhr = new XMLHttpRequest();
	xhr.open('GET', '/getstuff');
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		response = xhr.responseText;
		response = JSON.parse(response);
		debugger;
	}
	xhr.send();
}