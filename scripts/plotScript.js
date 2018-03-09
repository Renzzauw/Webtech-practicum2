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

dataSet = data;
checkboxes = $("input");

function handleCheckBoxes() {
    // get checkbox statusses
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
    $.plot($("#placeholder"), dataSet, options);
};
checkboxes[0].click( handleCheckBoxes );
checkboxes[1].click( handleCheckBoxes );


















/*
// plot options
var options = {
    bars: {
        show: true,
        barWidth: 0.6,
    }, 
    xaxis: {
        mode: "categories",
        tickLength: 0
    }
}
*/
/*
$(function() {

// line data

// plotting the lines
$.plot("#placeholder", data, {
    series: {
        bars: {
            show: true,
            barWidth: 0.6,
            align: "center"
        }
    },
    xaxis: {
        mode: "categories",
        tickLength: 0
    }
});


});
*/
