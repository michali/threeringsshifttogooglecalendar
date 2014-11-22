function save_options() {
  var eventSubject = document.getElementById('eventSubject').value;
  chrome.storage.sync.set({
    eventSubject: eventSubject
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    eventSubject: 'Shift'
  }, function(items) {
    document.getElementById('eventSubject').value = items.eventSubject;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);