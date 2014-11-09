function TabAccessor(){
    this.getUrl = function(){
        return chrome.tab.url;
    }
}