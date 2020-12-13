//inputer();
var d = document;

function addRow()
{
    var tbody = d.getElementById('tab1');
    var button = d.getElementById('button');
    var row = d.createElement("TR");

    tbody.appendChild(row);
    //tbody.insertBefore(row, button);

    var td1 = d.createElement("TD");
    var td2 = d.createElement("TD");
    var td3 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    //inputer();
}

function inputer(){

var tds = document.querySelectorAll('td');

for (var i = 0; i < tds.length; i++) {
	tds[i].addEventListener('click', function func() {
		var input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		var td = this;
		input.addEventListener('blur', function() {
			td.innerHTML = this.value;
			td.addEventListener('click', func);
		});
		
		this.removeEventListener('click', func);
	});
}
}

var tds = document.querySelectorAll('td');

for (var i = 0; i < tds.length; i++) {
	tds[i].addEventListener('click', function func() {
		var input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		var td = this;
		input.addEventListener('blur', function() {
			td.innerHTML = this.value;
			td.addEventListener('click', func);
		});
		
		this.removeEventListener('click', func);
	});
}
