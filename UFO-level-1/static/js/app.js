
// from data.js
var tableData = data;

// 1. Write table into HTML
var tbody = d3.select("tbody");

tableData.forEach(function(sighting){
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

// 2. Create an event to filter by DATE 
var button = d3.select("#filter-btn");
var form = d3.select("#form");

form.on("submit",runEnter);
button.on("click",runEnter);

    // Call function to execute the event
function runEnter(){
    // remove existing data
    var td = d3.selectAll("td");
    td.remove();

    // get input data
    var inputElement = d3.select("#datetime-input");
    var inputDate = inputElement.property("value");
    console.log(inputDate);

    // get filtered table
    var filteredTable = tableData.filter(signting => signting.datetime === inputDate);
  
    // append new data into table
    var tbody = d3.select("tbody");
    filteredTable.forEach(function(sighting){
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });

    console.log(filteredTable);
};