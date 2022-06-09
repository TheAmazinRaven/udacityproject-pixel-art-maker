// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();


    // retrieve the input height and input width
    const text = document.getElementById('formInput').value;


    // create grid

    // based on inputHeight, create rows in the table

    // based on inputWidth, create the cells in each row

    const tableElm = document.getElementById("myTable");
    document.createElement('tr');
    tableElm.appendChild(trElm);

    const numRows = 5;
    const numCols = 10;

    for (let i = 0; i < numRows; i++) {
        const trElm = tableElm.insertRow();

        for (let j = 0; j < numCols; j++) {
            const tdElem = trElm.insertCell();

            tdElem.addEventListener('click', function(event){
                const colorValue = document.getElementById('colorPicker').value;
                console.log(colorValue);
            });
        }
    }


    const tdElem = document.createElement('td');
    trElm.appendChild(tdElem);
});

// const submitBtn = document.querySelector('input[type="submit"]');
// submitBtn.addEventListener('click', function(event){


// });


function makeGrid(event) {

// Your code goes here!

// const tableElm = document.getElementById();
// const trElm = tableElm.insertRow();
// trElm.insertCell();
// const tdElem = trElm.insertCell();
// tdElem.innerText = "Cell Created";

// for (let i = 0; i < 5; i++) {
//     const trElm = tableElm.insertRow();

//     for (let j = 0; j < 3; j++) {
//         const tdElem = trElm.insertCell();
//     }
// }

}
