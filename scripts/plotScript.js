// plot data
var data =  [   
                { 
                    label: "Sales 2016",
                    data: [ [1, 3200], [2, 2200], [3, 1800], [4, 2000], [5, 3200], [6, 1200], [7, 1600], [8, 2000], [9, 2500], [10, 2000], [11, 2400], [12, 2500] ],
                    color: "red",
                },
                { 
                    label: "Sales 2017",
                    data: [ [1, 3000], [2, 2500], [3, 2200], [4, 1500], [5, 3000], [6, 2000], [7, 1700], [8, 2700], [9, 2300], [10, 2000], [11, 2100], [12, 1700] ],
                    color: "blue",
                }
            ]
// plot options
var options = {
    series: {
        //color: "red",
        lines: { show: true },
        points: { show: true }
    },
    grid: {
        clickable: true,
        hoverable: true
    }
}

// function for displaying the right lines for each selected checkbox
function handleCheckBoxes() {
    // get checkbox statusses and set the proper graph data for the checked checkboxes
    var toggled = [checkboxes[0].checked, checkboxes[1].checked];
    if (toggled[0] && toggled[1]){
        dataSet = data;
    }
    else if (!toggled[0] && toggled[1]){
        dataSet = [data[1]];
    }
    else if (toggled[0] && !toggled[1]){
        dataSet = [data[0]];
    }
    else {
        dataSet = [];
    }
    // update and draw the plot
    $.plot($("#placeholder"), dataSet, options);
};

// copy data sets and get the checkbox elements
dataSet = data;
checkboxes = $("input");

// initial drawing of the lines
$.plot($("#placeholder"), dataSet, options);

// adding event listeners to the checkboxes
checkboxes[0].addEventListener("click", handleCheckBoxes);
checkboxes[1].addEventListener("click", handleCheckBoxes);
