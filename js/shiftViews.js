function WeekShiftView() {
	var shiftNode = document.getElementsByClassName('rota_shift_slot rota_shift_filled_self saved');
	//this.containerWithShiftDateTimeInfoId = shiftNode.parentNode.parentNode.parentNode.parentNode.id;
}

function FortnightShiftView() {

}

function MonthShiftView() {

}

function ViewFinder(tabAccessor) {
	this.findView = function(){
		if (tabAccessor.getViewFromQueryString() == "fortnight"){
			return new FortnightShiftView();
		}

		if (tabAccessor.getViewFromQueryString() == "month"){
			return new MonthShiftView();
		}

		return new WeekShiftView();
	}
}