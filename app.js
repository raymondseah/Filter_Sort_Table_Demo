console.log("linked")

var myArray = [
    { 'name': 'Michael', 'age': '30', 'birthdate': '11/10/1989' },
    { 'name': 'Mila', 'age': '32', 'birthdate': '10/1/1989' },
    { 'name': 'Paul', 'age': '29', 'birthdate': '10/14/1990' },
    { 'name': 'Dennis', 'age': '25', 'birthdate': '11/29/1993' },
    { 'name': 'Tim', 'age': '27', 'birthdate': '3/12/1991' },
    { 'name': 'Erik', 'age': '24', 'birthdate': '10/31/1995' },
]

////////////////////////////
////////////////////////////
//Populate Rows with array of data

//call createTable Function
createTable(myArray)

function createTable(data) {

    let table = document.getElementById('tableToBePopulated')

    table.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let newRow =
            `
        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].age}</td>
            <td>${data[i].birthdate}</td>
        </tr>

        `
        table.innerHTML += newRow
    }
}

////////////////////////////
////////////////////////////
//Sorting via click header

//Add click event to trigger sort function
let headerItems = document.getElementsByClassName('col')
for (n = 0; n < headerItems.length; n++) {
    headerItems[n].addEventListener('click', item(n))
}
//capture iteration of index from 0 to 2
function item(n) {
    return function () {
        console.log(n)
        //call function with iteration from 0 to 2, depended on array data displayed in header
        sortTable(n)
    }
}

//Sort logic taken from W3School
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

////////////////////////////
////////////////////////////

//Filter via input
let searchInput = document.getElementById('search-input')

searchInput.addEventListener('keyup', function() {
    //input key value
    let value = searchInput.value
    console.log(value)
    console.log(myArray)
    //return filerDownData
    var filteredDownData = searchTable(value, myArray)
    console.log(filteredDownData)
    createTable(filteredDownData)

})





function searchTable(value, data) {
    var filteredData = []

    for (i = 0 ; i < data.length; i ++) {
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()

        if(name.includes(value)) {
            filteredData.push(data[i])
        }
    }

    return filteredData
}



