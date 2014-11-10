function addToCalendarOption(){
	var myShifts = documentAccessor.getElementsByClassName("rota_shift_slot rota_shift_filled_self saved");
	for (var i = 0, len = myShifts.length; i < len; i++) {
		if (myShifts[i].getElementsByTagName('img').length > 0) continue;
		var shiftView = viewFinder.findView(myShifts[i]);
		var addToCalendarLink = createAddToGoogleCalendarLink(shiftView, storage);
		addCalendarImage(addToCalendarLink);
		myShifts[i].appendChild(addToCalendarLink);
	}
}

var documentAccessor = new DocumentAccessor();
var url = documentAccessor.getUrl();
var viewFinder = new ViewFinder(url);
var storage = new Storage();

document.addEventListener('DOMNodeInserted', addToCalendarOption);
addToCalendarOption();
