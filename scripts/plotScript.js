// plot options
var options = {
    series: {
        lines: { show: true},
        points: { show: true}      
    } 
}
// line data
var datasets = {
    "line2016": {
        label: "2016",
        data:[[0,30],[3,12],[5,20],[7,24],[9,30],[12,24]]
    },
    "line2017": {
        label: "2017",
        data:[[0,29],[2,15],[5,17],[8,28],[9,28],[12,20]]
    }
}
// plotting the lines
$.plot("#placeholder", [datasets["line2016"].data, datasets["line2017"].data], options);