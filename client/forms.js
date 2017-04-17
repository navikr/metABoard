//Add User Form Event
Template.createUser.events({
  'click .js-create-user': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var username = $('[name=userName]').val();
        Meteor.call('createUserAccounts', email,username,password, function(err,response){
        if(err) {	console.log(err);
  				  Bert.alert('Unable to add User! '+ err.reason, 'danger');
            $("#user-add-form").modal('hide');
          }else{
  			console.log("success");
      Bert.alert('User successfully created', 'success');
      $("#user-add-form").modal('hide');
      $("#user-add-form").find('input').val('');
      }
    });
  }
});

Template.ImportCards.events({
  'change .js-import-cards':function(event,tmpl){
    console.log("Importing File: " + tmpl.find('input[type=file]').files[0].name);
    if (!tmpl.find('input[type=file]').files.length)
			{
				Bert.alert('Please choose at least one file to parse.','info');
			}
      var config=buildparseConfig();
			$('#ImportCards').parse({
				config: config,
				before: function(file, inputElem)
				{
					//start = now();
					console.log("Parsing file...", file);
				},
				error: function(err, file)
				{
					//console.log("ERROR:", err, file);
          $("#cards-import-form").modal('hide');
					Bert.alert('Error importing cards: check the csv delimiter is ','' +err, 'error');
				},
				complete: function()
				{
					//end = now();
          $("#cards-import-form").modal('hide');
			   Bert.alert('Cards imported successfully', 'success');
				}
			});
      return false;
  }
});

Template.card_add_form.events({
    'submit .js-add-card': function(event){
      if(Meteor.user())
      {
        console.log("Adding Card");
        if(!InsertCard(event.target.case.value,event.target.customer.value,Meteor.user()._id,StageEnum.Progress))
        {
        Bert.alert('Case Number Already Exist', 'danger');
        event.preventDefault();
      }
    }//end of If
    }
  });//end of Template card_add_form
//Card dragging events
  Template.cardDetailForm.events({
    "submit .js-add-cardDetails": function(event){
       if (Meteor.user()) {
         id=Session.get("CardId");
         stage=Session.get("Stage");
         var card=Cards.find({_id:id}).fetch()[0];
         var currentDate=new Date();
         getDuration(currentDate,card.switchDate);
         var progressHour=  Session.get("HoursDifference");
         var progressMin=  Session.get("MinDifference");
         var progressSec=  Session.get("SecDifference");
          if (card.stage==StageEnum.Progress) {

            Cards.update({_id:id},{$set:{progMin:(+progressMin+ (+card.progMin))}});
            Cards.update({_id:id},{$set:{progHour:(+progressHour+(+card.progHour))}});
            Cards.update({_id:id},{$set:{progMin:(+progressSec+(+card.progSec))}});
              console.log("Progress time for this ticket is" + progressHour +" "+progressMin+" "+progressSec);
            }
         else if (card.stage==StageEnum.Help) {
           Cards.update({_id:id},{$set:{helpMin:(+progressMin+(+card.helpMin))}});
           Cards.update({_id:id},{$set:{helpHour:(+progressHour+(+card.helpHour))}});
           Cards.update({_id:id},{$set:{helpSec:(+progressSec+(+card.helpSec))}});
         }
         else if(card.stage==StageEnum.Wait)
         {
           Cards.update({_id:id},{$set:{waitMin:(+progressMin+(+card.waitMin))}});
           Cards.update({_id:id},{$set:{waitHour:(+progressHour+(+card.waitHour))}});
           Cards.update({_id:id},{$set:{waitSec:(+progressSec+(+card.waitSec))}});
         }
         var cardOwner=document.getElementById("cardOwner");
         var cardOwnerAlias=cardOwner.options[cardOwner.selectedIndex].text;
        // console.log("Card Owner Selected is" + cardOwnerAlias);
         Cards.update({_id:id},{$set:{switchDate:currentDate}});
         Cards.update({_id:id},{$set:{stage:stage}});
         Cards.update({_id:id},{$set:{owner:cardOwnerAlias}});
         cardOwner.selectedIndex=0;
       }
    }
  });
  //Carddrag helpers
  Template.cardDetailForm.helpers({
    CardDetail: function(){
      var id= Session.get("CardId");
      return  Cards.find({_id:id});
    },
    GetUser: function(user_id){
      var user=Meteor.users.findOne({_id:user_id});
      if(user)
      {
      return user.username;
      }
      else{
      return "anonymous";
      }
    }

  });
