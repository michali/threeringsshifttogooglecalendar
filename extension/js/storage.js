function Storage(){
	this.get = function(storedDataKey, action){
		chrome.storage.sync.get(storedDataKey, function(items) {
			action(items);
		});
	}
}