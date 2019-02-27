var table = document.createElement('table');
table.id = "tb"
flag = false;
var array = [];

function Show() // It will create the elements of table.
{
    if (flag == false) {
        th = document.createElement('th');
        a = document.createTextNode("Date");
        head2 = document.createElement('th');
        b = document.createTextNode("Description")
        var trr = document.createElement("tr")
        th.appendChild(a);
        head2.appendChild(b);
        trr.appendChild(th)
        trr.appendChild(head2);
        table.appendChild(trr);
        div = document.createElement("div");
        date = document.createElement("input");
        date.type = "date";
        date.value = "time";
        date.id = "dt";
        var text = document.createElement("input");
        text.type = "text";
        text.placeholder = "description";
        text.id = "des";
        var button = document.createElement("button");
        button.textContent = "Add"
        button.onclick = function () {
            Add();
        }
        var button1 = document.createElement("button");
        button1.textContent = "Clear"
        button1.onclick = function () {
            remove();
        }
        div.appendChild(date);
        div.appendChild(text);
        div.appendChild(button);
        div.appendChild(button1);
        document.body.appendChild(div)
        div.style.marginLeft = "200px"
    }
    flag = true;
}

function Add() {  // It will create the  elements of table
    table.border = 1;
    var tr = document.createElement('tr');
    var desc = document.createElement('td');
    var date = document.createElement('td');
    var getdate = document.getElementById('dt').value;
    var getdesc = document.getElementById('des').value;
    var btn = document.createElement("button");
    btn.textContent = "remove"
    btn.onclick = function () {
        deleteRow(tr);
    }
    date.append(getdate);
    desc.append(getdesc);
    tr.appendChild(date);
    tr.appendChild(desc);
    tr.appendChild(btn);
    table.appendChild(tr);
    document.body.appendChild(table)
    table.style.marginLeft = "200px";
    array.push({ "date": getdate, "description": getdesc, "ID": 1 })
    console.log(array)
}
function remove() {   // It will clear the textboxs
    document.getElementById('dt').value = "";
    document.getElementById('des').value = "";
}


function deleteRow(tr) {
    document.getElementById('tb').deleteRow(tr);
}