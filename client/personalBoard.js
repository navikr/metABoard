/*$(document).ready(function(){
	$(".trigger").click(function(){
		$(".pbpanel").toggle("fast");
		$(this).toggleClass("pbactive");

		return false;
	});
});*/

Template.personalBoard.events({
'click .js-pboard-tab-clicked':function(event)
{
  //var selector = event.target;
    //  $(selector).toggleClass('in');
    console.log(event.target.getAttribute('class'));
    if(event.target.parentNode.parentNode.classList.length>2)
    {
    event.target.parentNode.parentNode.classList.remove('sideways');
    event.target.parentNode.parentNode.classList.remove('tabs-left');
}else {
    event.target.parentNode.parentNode.classList.add('sideways');
    event.target.parentNode.parentNode.classList.add('tabs-left');
}
    event.preventDefault();
}
});
