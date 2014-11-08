Three Rings shift to Google Calendar Chrome Extension
==========
An extension to export the logged-on user's shifts to Google Calendar.
If you volunteer for an organisation that uses the Three Rings platform to manage duty rotas, this will add an icon next to your booked shifts. Clicking on it will take you to Google Calendar's create-an-event-page with the subject and start and end times filled out.

Installing
-----
To access development releases, simply download or clone this repo and load as an unpacked extension.

Unpacked Extension
-----
* Download the code and unzip the file.
* Go to chrome://extensions or select Chrome Menu > Settings > Extensions.
* Enable the developer mode at top right.
* Click Load unpacked extension and select the location where you unzipped the downloaded file.

Issues
-----
No known issues at this time. If you find any issues please let us know using the issue tracker. The extension navigates the DOM and extracts dates using the names and name formats of existing style sheet ID and classes in the Rota tab of the site. If any of these changes the icon will stop appearing or the export-an-event link will be broken and a new release will have to be made.

Not done
-----
* At this point, the extension is not intelligent enough to detect that you have a double or a triple shift, so you need to export each part of such a shift in a row.