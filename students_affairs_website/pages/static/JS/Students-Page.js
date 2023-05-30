// Done by Abobakr
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let index = document.getElementById("page-index");

// Function that populates the table with data
let populateTable = (obj, ind) => {
    let tb = document.getElementById("tbody");
    let row = document.createElement("tr");

    let cell = document.createElement("td");
    cell.innerHTML = obj[0];
    row.appendChild(cell)
    cell = document.createElement("td");
    cell.innerHTML = obj[1];
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = obj[3];
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = obj[6];
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = obj[7];
    row.appendChild(cell);

    let statBtn = document.createElement("button");
    statBtn.classList.add("stat-btn");
    if (obj[8] === 'active') {
        statBtn.classList.add('active');
        statBtn.innerHTML = 'Active';
    } else {
        statBtn.classList.add('inactive');
        statBtn.innerHTML = 'Inactive';
    }
    statBtn.setAttribute('id', obj[0]);

    cell = document.createElement("td");
    cell.appendChild(statBtn);

    // Appending the rows of the table
    row.appendChild(cell);
    tb.appendChild(row);
};

getStudents(false);

$("#filter-form").submit(function (event) {
    event.preventDefault();
    getStudents(true);
});

let reset_btn = document.getElementById("reset-btn");
reset_btn.addEventListener("click", function () {
    getStudents(false);
})

function getStudents(filter) {
    let e = document.getElementById("dept");
    let depart = e.options[e.selectedIndex].value;
    e = document.getElementById("lvl");
    let level = e.options[e.selectedIndex].value;
    e = document.getElementById("stt");
    let status = e.options[e.selectedIndex].value;

    $.ajax({
        url: '/get_data/',
        method: 'GET',
        success: function (data) {
            if (filter === true) {
                let temp = [];
                for (let i = 0; i < data.length; ++i) {
                    if (data[i].level === level || !level) {
                        if (data[i].department === depart || !depart) {
                            if (data[i].status === status || !status) {
                                temp.push(data[i]);
                            }
                        }
                    }
                }
                data = temp;
            }
            const rowsPerPage = 3;
            const numPages = Math.ceil(data.length / rowsPerPage);
            let currentPage = 1;

            index.setAttribute("value", currentPage + "/" + numPages);

            let showRows = (studentList) => {
                tbody.innerHTML = "";

                let nextPage = () => {
                    // Increment the current page if it is not the last page
                    if (currentPage < numPages) {
                        currentPage++;
                        index.setAttribute("value", currentPage + "/" + numPages);
                        showRows(studentList);
                    }
                };
                let prevPage = () => {
                    // Decrement the current page if it is not the first page
                    if (currentPage > 1) {
                        currentPage--;
                        index.setAttribute("value", currentPage + "/" + numPages);
                        showRows(studentList);
                    }
                }

                next.onclick = nextPage;
                prev.onclick = prevPage;

                // Calculate the start and end indexes for the current page
                const startIndex = (currentPage - 1) * rowsPerPage;
                const endIndex = startIndex + rowsPerPage;

                // Loop through the rows for the current page and append them to the table
                for (let i = startIndex; i < endIndex && i <= studentList.length; i++) {
                    const obj = Object.values(studentList[i]);
                    populateTable(obj, i);
                }
            }
            showRows(data);
        },
        error: function (xhr, status, error) {
            console.log('An error occurred while fetching data: ' + error);
        }
    });
}