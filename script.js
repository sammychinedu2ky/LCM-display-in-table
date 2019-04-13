function smallestCommons(arr) {
    let number = 2;
    let holder = 0;
    let multiple = [];
    // let start = Math.min(...arr);
    // let stop = Math.max(...arr);
    // if (start < 0) start = 1
    // 	var newAr = Array.from({
    // 		length: (stop - start) / 1 + 1
    // 	}, (item, i) => start + (i * 1));
    let newAr = arr
    while (arr.some(item => item != 1)) {

        if (arr.some(item => item % number == 0)) {
            //console.log("number is " + number + " arr is " + arr)
            let tbody = document.createElement("tbody")
            let row = document.createElement("tr");
            let column1 = document.createElement("td");
            let column2 = document.createElement("td");
            column1.textContent = number;
            //console.log(column1.textContent)
            column2.textContent = arr.join(", ");
            column2.style.border = "none";
            column1.classList.add("c1");
            column2.classList.add("c2")
            row.appendChild(column1);
            row.appendChild(column2);

            //console.log(table)
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
    //console.log(column1.textContent)
    column2.textContent = arr.join(", ");
    column2.style.border = "none";
    column1.classList.add("c1");
    column2.classList.add("c2")
    row.appendChild(column1);
    row.appendChild(column2);
    table.appendChild(tbody).appendChild(row)
    // console.log("arr is " + arr);

    p.innerHTML = "<span>Therefore the LCM of " + newAr + " is equal to " + multiple.join("*") + " = " + (multiple.reduce((a, b) => a * b)) + "</span>"
    return (multiple.reduce((a, b) => a * b))
}
let table = document.getElementsByTagName("table")[0];
let body = document.getElementsByTagName("body");
let insert = document.querySelector("#insert");
let button = document.querySelector("#button");
let form = document.querySelector("form")
let div = document.querySelector("div")
let p = document.querySelector("p")
button.addEventListener("click", () => {
    let values = insert.value;
    let newValues = values.match(/\d{1,2}/g).splice(0, 5);
    // console.log(newValues)
    smallestCommons(newValues);
    form.style.display = "none"
    div.style.display = "flex"



})