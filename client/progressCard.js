Template.progressCard.onRendered(function() {
    var progressCardInstance = this;
  //console.log($(progressCardInstance.data._id));
    //Session.setDefault("CardId", progressCardInstance.data._id);
    progressCardInstance.$('.draggable').draggable({
    cursor: 'move',
    helper: 'clone'
    });
});//end of Template progressCard onRendered
