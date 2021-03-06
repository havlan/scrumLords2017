var myList = [];
/**
 * Gets restricted info from Employee and creates a table
 * @function
 */
$.get('/getEmployeeRestricted', {}, function(req, res, data){
    myList = data.responseJSON;
    buildHtmlTable('#dbDataTable',myList);
    $("#dbDataTable").tablesorter();
    $("#cover").fadeOut(10); <!-- MÅ ligge etter det som tar legst å loade-->
});

/**
 * Builds a table given JSON data and an ID in HTML file
 * @function
 * @params {text} selector - id of table in HTML file you want to build,{JSONArray} list - an array with data to fill the table.
 */
function buildHtmlTable(selector,list) {
    var columns = addAllColumnHeaders(list, selector);
    var tbody = $('<tbody/>');
    for (var i = 0; i < list.length; i++) {
        var row$ = $('<tr id=' + i + '/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = list[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        // $(row$).setAttribute('id',"surprise maddafakka");
        $(selector).append(row$);
        $(tbody).append(row$);
    }
    $(selector).append(tbody);
}
/**
 * Adds columnheaders to table
 * @function
 * @params {text} selector - id of table in HTML file you want to build,{JSONArray} list - an array with data to fill the table.
 */
function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerThead$ = $('<thead/>');
    var headerTr$ = $('<tr/>');
    for (var i = 0; i < myList.length; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerThead$);
    $(headerThead$).append(headerTr$);
    return columnSet;
}
/**
 * Searches through table based on employee name
 * @function
 */
function searchNameFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("nameInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dbDataTable");
    tr = table.getElementsByTagName("tr");

    //Hide the rows that dont match the search
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
/**
 * Searches through table based on employee position
 * @function
 */
function searchPositionFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("positionInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dbDataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function showSuccessMessage() {
    var element = document.getElementById('successMessageBox');
    element.style.display = "block";
    setTimeout(function() {
        element.style.display = "none";
    }, 3000);
}
function showErrorMessage() {
    var element = document.getElementById('errorMessageBox');
    element.style.display = "block";
    setTimeout(function() {
        element.style.display = "none";
    }, 3000);
}

function showWarningMessage() {
    var element = document.getElementById('warningMessageBox');
    element.style.display = "block";
    setTimeout(function() {
        element.style.display = "none";
    }, 3000);
}