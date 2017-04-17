var engagementData = {
    labels: ["Saurabh", "Venkat", "Fabrizio", "Maurizio", "Sai", "Piyush", "Julia"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(157,224,157,1)",
            strokeColor: "rgba(157,224,157,0.8)",
            highlightFill: "rgba(157,224,157,0.75)",
            highlightStroke: "rgba(157,224,157,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(255,255,204,1)",
            strokeColor: "rgba(255,255,204,0.8)",
            highlightFill: "rgba(255,255,204,0.75)",
            highlightStroke: "rgba(255,255,204,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
            label: "My third dataset",
            fillColor: "rgba(218,171,236,1)",
            strokeColor: "rgba(218,171,236,0.8)",
            highlightFill: "rgba(218,171,236,0.75)",
            highlightStroke: "rgba(218,171,236,1)",
            data: [60, 99, 40, 58, 26, 75, 44]
        }
    ]
};
Template.engagementReport.onRendered(function(){
   //Get the context of the canvas element we want to select
    var ctx1 = document.getElementById("teamEngagementChart").getContext("2d");
    var engagementChart = new Chart(ctx1).Bar(engagementData, {scaleGridLineColor : "rgba(51,51,51,.05)"});
 });
 getEngagementData=function()
 {
    
 }
