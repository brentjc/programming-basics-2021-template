const books = [
    {
        author: "Glennon Doyle",
        title: "Untamed",
    },
    {
        author: "Ijeoma Oluo",
        title: "So you want to talk about race",
    },
    {
        author: "Erik Larson",
        title: "The splendid and the vile",
    },
    {
        author: "David Kessler",
        title: "Finding meaning: the sixth state of grieve",
    },
    {
        author: "Samantha Irby",
        title: "Wow, no thank you",
    },
];

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

function tableBooks(books) {
    let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Author";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Title";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = books[0];
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = books[1];

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);
}

console.log(tableBooks());