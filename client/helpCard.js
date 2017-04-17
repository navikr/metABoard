Template.helpCard.onRendered(function() {
    var helpBoardInstance = this;
    //console.log($(helpBoardInstance.data._id));
    //Session.setDefault("CardId", helpBoardInstance.data._id);
    helpBoardInstance.$('.draggable').draggable({
    cursor: 'move',
    helper: 'clone'
    });
});//end of Template helpCard onRendered
