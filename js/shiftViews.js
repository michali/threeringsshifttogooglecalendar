function WeekShiftView() {
	this.populateShiftDateTimeFromDocument = function(shiftNode) {
		var containerWithShiftDateTimeInfoId = shiftNode.parentNode.parentNode.parentNode.parentNode.id;
		var dateTimeElements = containerWithShiftDateTimeInfoId.match(numberPattern);

		this.startHour = dateTimeElements[0];
		this.endHour = dateTimeElements[2];
		this.year = dateTimeElements[4];
		this.month = dateTimeElements[5];
		this.day = dateTimeElements[6];
	}
}

var numberPattern = /\d+/g;

function NonWeekShiftView() {
	this.populateShiftDateTimeFromDocument = function(shiftNode) {
		var containerWithShiftInfo = shiftNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		var containerWithShiftTime = containerWithShiftInfo.getElementsByClassName("rota_item_time")[0];
		var timeElements = containerWithShiftTime.innerText.match(numberPattern);
		this.startHour = timeElements[0];
		this.endHour = timeElements[2];

		var rotaDayContainer = containerWithShiftTime.parentNode.parentNode;
		var rotaDayContainerId = rotaDayContainer.id;
		var dateElements = rotaDayContainerId.match(numberPattern);
		this.year = dateElements[0];
		this.month = dateElements[1];
		this.day = dateElements[2];
	}
}

function ViewFinder() {
	this.findView = function(url){
		var viewPattern = /style=\w+/;
		var viewParams = url.match(viewPattern);

		if (viewParams[0].endsWith("week")){
			return new WeekShiftView();
		}

		return new NonWeekShiftView();
	}
}