Template.reports.events({
  "click .js-report-href-clicked": function(event, template){
    if(event.target.id=="velocity"){
      document.getElementById("velocity").parentNode.class="active";
       Session.set("reportSection","velocity");
    }else if(event.target.id=="overview")
    {
      document.getElementById("overview").parentNode.class="active";
       Session.set("reportSection","reportsOverview");
    }else if(event.target.id=="engagementReport")
    {
      document.getElementById("engagementReport").parentNode.class="active";
       Session.set("reportSection","engagementReport");
    }

  }
});
Template.reports.helpers({
  templateName: function()
  {
    Session.setDefault("reportSection","reportsOverview");
    return Session.get("reportSection");
  }
});
