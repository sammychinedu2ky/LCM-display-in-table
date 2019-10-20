/**
 * @Variables
 */ 

const $ = n => document.querySelector(n);
let table = $("table");
let insert = $("#insert");
let button = $("#button");
let form = $("form")
let div = $("div")
let p = $("p")

function smallestCommons(arr) {
    let number = 2;
    let multiple = [];
    let newAr = arr
    while (arr.some(item => item != 1)) {

        if (arr.some(item => item % number == 0)) {
            let tbody = document.createElement("tbody")
            let row = document.createElement("tr");
            let column1 = document.createElement("td");
            let column2 = document.createElement("td");
            column1.textContent = number;
            column2.textContent = arr.join(", ");
            column2.style.border = "none";
            column1.classList.add("c1");
            column2.classList.add("c2")
            row.appendChild(column1);
            row.appendChild(column2);

            table.appendChild(tbody).appendChild(row)
            arr = arr.map(item => {
                if (item % number == 0) {
                    return item / number
                } else return item
            });
            multiple.push(number)

        } else number++
    }
    let tbody = document.createElement("tbody")
    let row = document.createElement("tr");
    let column1 = document.createElement("td");
    let column2 = document.createElement("td");
    column1.textContent = 1;
    column2.textContent = arr.join(", ");
    column2.style.border = "none";
    column1.classList.add("c1");
    column2.classList.add("c2")
    row.appendChild(column1);
    row.appendChild(column2);
    table.appendChild(tbody).appendChild(row)

    p.innerHTML = `<span>Therefore the LCM of ${newAr} is equal to ${multiple.join("*")}  = ${(multiple.reduce((a, b) => a * b))}</span>`
    return (multiple.reduce((a, b) => a * b))
}


function findLCM(){
    let values = insert.value;
    let newValues = values.match(/\d{1,2}/g).splice(0, 5);
    smallestCommons(newValues);
    form.style.display = "none"
    div.style.display = "flex"
}
button.addEventListener("click", findLCM)
