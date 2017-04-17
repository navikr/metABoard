Template.waitBoard.helpers({
  waitCards:function(){
    return Cards.find({stage:StageEnum.Wait, isDeleted: {$ne:true}}, {sort:{createdOn:-1}})  ;
  }
});//end of Template waitBoard helper

Template.waitBoard.onRendered(function() {
    var waitBoardInstance = this;
    waitBoardInstance.$('#waitingBoard').droppable({
    drop: function(evt, ui) {
      if(Meteor.user())
      {
          Session.set("CardId", ui.draggable.data('id'));
          Session.set("Stage",StageEnum.Wait);
          $("#cardDetailForm").modal('show');
          //Cards.update({_id:ui.draggable.data('id')},{$set:{stage:StageEnum.Wait}});
        }else {
        Bert.alert('Please login to make changes', 'danger');
        }
    }
    });
  });//end of Template waitBoard onRendered

  Template.waitBoard.events({
    "mousedown .draggable": function(event){
      if(event.button==2){
        var cardInstance=this;
        Session.set("DeleteCardId",this._id);
        $('.context').contextmenu();
        //console.log("right clicked on card");
      }
    }
  });
