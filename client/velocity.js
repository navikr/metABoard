var donutData = [
    {
        value: 300,
        color:"#9DE09D",
        highlight: "#9DE09D",
        label: "Progress Case"
    },
    {
        value: 50,
        color: "#ffc",
        highlight: "#ffc",
        label: "Help Case"
    },
    {
        value: 100,
        color: "#DAABEC",
        highlight: "#DAABEC",
        label: "Wait Case"
    }
];

function getDonutData()
{
  /*console.log("Progress Count" +Cards.find({stage:StageEnum.Progress}).fetch().length);
  console.log("Wait Count" +Cards.find({stage:StageEnum.Wait}).fetch().length);
  console.log("Help Count" +Cards.find({stage:StageEnum.Help}).fetch().length);*/
  donutData[0].value=Cards.find({stage:StageEnum.Progress, isDeleted: {$ne:true}}).fetch().length;
  donutData[1].value=Cards.find({stage:StageEnum.Help, isDeleted: {$ne:true}}).fetch().length;
  donutData[2].value=Cards.find({stage:StageEnum.Wait, isDeleted: {$ne:true}}).fetch().length;
}
Template.velocity.onRendered(function(){
   //Get the context of the canvas element we want to select
   var ctx = document.getElementById("boardFragmentChart").getContext("2d");
  // var ctx1 = document.getElementById("teamEngagementChart").getContext("2d");
   getDonutData();
   var myDoughnutChart = new Chart(ctx).Doughnut(donutData,{
 animateScale: true,segmentStrokeWidth:1});
  //var engagementChart = new Chart(ctx1).Bar(engagementData);
 });

 Template.velocity.helpers({
   TotalCount: function(){
     return Cards.find({isDeleted: {$ne:true}}).fetch().length;
   }
 });
