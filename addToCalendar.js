function addToCalendarOption(){
	var myShifts = document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
	for (var i = 0, len = myShifts.length; i < len; i++) {
		var addToCalendar = document.createElement('a');
		var image = document.createElement('img');
		image.setAttribute('src',chrome.extension.getURL('googlecalendar.png'));
		addToCalendar.appendChild(image);
		myShifts[i].appendChild(addToCalendar);
	}
}

if (document.readyState == "complete"){
	addToCalendarOption();
}