document.getElementById("filter").onclick = () => {
  let filterSection = document.getElementById("form");
  if (filterSection.style.display == "flex") {
    filterSection.style.display = "none";
  } else {
    filterSection.style.display = "flex";
  }
};

$(document).ready(function() {
    // Handle form submission
    $('#form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the selected filter values
        var department = $('#department').val();
        var level = $('#level').val();
        var sort = $('#sort').val();

        // Create an AJAX request
        $.ajax({
            url: '/filter-data/',  // URL to your filter view function
            type: 'GET',
            data: {
                department: department,
                level: level,
                sort: sort
            },
            success: function(response) {
                // Update the content with the filtered results
                $('#filtered-results').html(response);
            },
            error: function(xhr, textStatus, error) {
                console.log(error);
            }
        });
    });
});