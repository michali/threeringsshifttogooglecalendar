function GoogleCalendarEvent(startDateTime, endDateTime, subject){
	this.startDateTime = startDateTime;
	this.endDateTime = endDateTime;
	this.subject = subject;
	this.toLink = function(){
		return 'http://www.google.com/calendar/event?action=TEMPLATE&dates=' + startDateTime.toIsoStringNoHyphensColonsMiliseconds() + encodeURIComponent('/') + endDateTime.toIsoStringNoHyphensColonsMiliseconds() + '&sprop=' + encodeURIComponent('website:http://www.3r.org.uk') + '&text=' + encodeURIComponent(subject);
	}
}

