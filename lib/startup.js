Cards = new Mongo.Collection("Cards");
console.log("Total Cards Count: " + Cards.find().count());
Reports = new Mongo.Collection("Reports");
console.log("Total Reports Count: " +Reports.find().count());

StageEnum={
  Progress:0,
  Help:1,
  Wait:2
}
if(Meteor.isClient){
    Meteor.startup(function(){
        Hooks.init();
    });
}
