function addCalendarImage(addToCalendarLink) {
		var image = loadAddToCalendarImage();
		addToCalendarLink.appendChild(image);
}

function loadAddToCalendarImage(){
	var image = document.createElement('img');
	image.setAttribute('src', chrome.extension.getURL('images/googlecalendar.png'));
	return image;
}

function getShiftCalendarDates(shift) {
	var startDate = new Date(shift.startYear, shift.startMonth - 1, shift.startDay, shift.startHour, 0, 0, 0);
	var endDate = new Date(shift.startYear, shift.startMonth - 1, shift.startDay, shift.endHour, 0, 0, 0);

	if (shiftEndsOnNextCalendarDay(startDate, endDate)) {
		endDate = endDate.addDays(1);
	}

	if (shiftTakesPlaceOnCalendarDayAfterCurrentRotaDay(shift)) {
		startDate = startDate.addDays(1);
		endDate = endDate.addDays(1);
	}
	return {startDate: startDate, endDate: endDate};
}

function createAddToGoogleCalendarLink(shift, storage) {
	var addToCalendarLink = document.createElement('a');
	addToCalendarLink.setAttribute('title', 'Add to Google Calendar');
	var shiftCalendarDates = getShiftCalendarDates(shift);
	storage.get({eventSubject: ''}, function (items) {
		var event = new GoogleCalendarEvent(shiftCalendarDates.startDate, shiftCalendarDates.endDate, items.eventSubject);
		addToCalendarLink.setAttribute('href', event.toLink());
	});

	return addToCalendarLink;
}

function shiftTakesPlaceOnCalendarDayAfterCurrentRotaDay(shift) {
	return shift.firstShiftOfDayStartHour > shift.startHour;
}

function shiftEndsOnNextCalendarDay(startDate, endDate){
	return endDate.valueOf() < startDate.valueOf()
}

