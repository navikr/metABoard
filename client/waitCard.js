Template.waitCard.onRendered(function() {
    var waitCardInstance = this;
    waitCardInstance.$('.draggable').draggable({
    cursor: 'move',
    helper: 'clone'
    });
});//end of Template waitCard onRendered
