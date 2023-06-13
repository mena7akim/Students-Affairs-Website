

document.getElementById("mysearch").addEventListener("input",()=>{
        var searchValue = document.getElementById('mysearch').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/search_students/?searchValue=' + searchValue, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
    
                var tableBody = document.getElementById('tbody');
                while (tableBody.firstChild) {
                    tableBody.firstChild.remove();
                }
    
                response.forEach(function(item) {
                    var row = document.createElement('tr');
                    var idCol = document.createElement('td');
                    idCol.textContent = item.ID;
                    row.appendChild(idCol);
                    
                    var nameCol = document.createElement('td');
                    nameCol.textContent = item.name;
                    row.appendChild(nameCol);
                    
                    var levelCol = document.createElement('td');
                    levelCol.textContent = item.level;
                    row.appendChild(levelCol);
                       
                    var departmentCol = document.createElement('td');
                    departmentCol.textContent = item.department;
                    row.appendChild(departmentCol);
                    
                    var editCol = document.createElement('td');
                    editCol.className = 'table-col';
                    var editLink = document.createElement('a');
                    var editIcon = document.createElement('i');
                    editIcon.className = 'fa-regular fa-pen-to-square fa-lg';
                    editIcon.style.color = 'rgba(254, 95, 85)';
                    if(item.level == "3" || item.level == "4"){
                        editLink.href = 'department/' + item.ID;
                    }
                    editLink.appendChild(editIcon);
                    editCol.appendChild(editLink);
                    row.appendChild(editCol);
                    
                    tableBody.appendChild(row);
                });
            }
        };
        xhr.send();
    }
);

