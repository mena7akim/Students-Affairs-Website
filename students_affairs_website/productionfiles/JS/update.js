document.getElementById("filter").onclick = () => {
  let filterSection = document.getElementById("filter-form");
  if (filterSection.style.display == "flex") {
    filterSection.style.display = "none";
  } else {
    filterSection.style.display = "flex";
  }
};


document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var department = document.getElementById('department').value;
    var level = document.getElementById('level').value;
    var sort = document.getElementById('sort').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/filter-data/?department=' + department + '&level=' + level + '&sort=' + sort, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            var tableBody = document.getElementById('studentsTable');
            while (tableBody.firstChild) {
                tableBody.firstChild.remove();
            }

            response.forEach(function(item) {
                var row = document.createElement('tr');
                row.className = 'table-row'; 
                var idCol = document.createElement('td');
                idCol.className = 'table-col';
                idCol.textContent = item.ID;
                row.appendChild(idCol);
                
                var nameCol = document.createElement('td');
                nameCol.className = 'name table-col';
                nameCol.textContent = item.name;
                row.appendChild(nameCol);
                
                var gpaCol = document.createElement('td');
                gpaCol.className = 'gpa table-col';
                gpaCol.textContent = item.GPA;
                row.appendChild(gpaCol);
                
                var levelCol = document.createElement('td');
                levelCol.className = 'level table-col';
                levelCol.textContent = item.level;
                row.appendChild(levelCol);
                
                var departmentCol = document.createElement('td');
                departmentCol.className = 'table-col';
                departmentCol.textContent = item.department;
                row.appendChild(departmentCol);
                
                var editCol = document.createElement('td');
                editCol.className = 'table-col';
                var editLink = document.createElement('a');
                editLink.href = 'edit/' + item.ID;
                var editIcon = document.createElement('i');
                editIcon.className = 'fa-regular fa-pen-to-square fa-lg';
                editIcon.style.color = 'rgba(254, 95, 85)';
                editLink.appendChild(editIcon);
                editCol.appendChild(editLink);
                row.appendChild(editCol);
                
                tableBody.appendChild(row);
            });
        }
    };
    xhr.send();
});
