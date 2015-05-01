window.addEventListener('load', function() {

	var clicker = document.querySelector('#clicker');

	clicker.addEventListener('click', function(event) {
		alert('hey! you clicked!!!')
	});

	var mouser = document.querySelector('#mouser');

	mouser.addEventListener('mouseover', function(event) {
		mouser.style.backgroundColor = 'yellow';
	});
	mouser.addEventListener('mouseout', function(event) {
		mouser.style.backgroundColor = 'green';
	});

	var form = document.querySelector('form');

	form.addEventListener('submit', function(event) {
		event.preventDefault()
		var formValue = document.querySelector("input").value;

		alert('you inputted ' + formValue)
	});

	var ul = document.querySelector('ul');

	ul.addEventListener('click', function(event) {
		alert(event.target.innerHTML);
	});
});














