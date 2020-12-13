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

}