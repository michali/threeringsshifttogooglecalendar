Three Rings shift to Google Calendar Chrome Extension
==========
An extension to export the logged-on user's shifts to Google Calendar.

If you volunteer for an organisation that uses the Three Rings platform to manage duty rotas, this will add an icon next to your booked shifts. Clicking on it will take you to Google Calendar's create-an-event-page with the subject and start and end times filled out.

Three Rings already supports exporting shifts. However, this is currently done by exporting an iCalendar data file from your shifts page. This is good if you have booked many shifts up front as you can then import all of them to Google Calendar or Outlook at once. You can also add a separate calendar to Google that is always in sync. This extension adds extra convenience if you've booked one or two shifts and want to export them into your main calendar without downloading an iCalendar file and then reuploading it to Google Calendar.

Installing
-----
To access development releases, simply download or clone this repo and load as an unpacked extension.

Unpacked Extension
-----
* Download the code and unzip the file.
* Go to chrome://extensions or select Chrome Menu > Settings > Extensions.
* Enable the developer mode at the top right.
* Click Load unpacked extension and select the location where you unzipped the downloaded file.

Issues
-----
No known issues at this time. If you find any please let us know using the issue tracker. The extension navigates the DOM and extracts dates using the names and name formats of existing style sheet ID and class names in the Rota tab of the site. If any of these changes the icon will stop appearing or the export-a-shift link will be broken and a new release will have to be made.

Also, different charities have different visual themes. If these themes come with different class names and HTML layouts, the extension may break, so in that sense it's got some road to go. If that happens with you, let me know.

Not done
-----
* At this point, the extension is not intelligent enough to detect that you have a double or a triple shift, so you need to export each part of such a shift in a row.
* If you export and import the iCalendar file from your shifts page, the calendar event's subject will be populated with the type of shift in relation to the time of day (day shift, late shift, night shift etc) and the name of your shift partner if you're booking the slot second. The extension doesn't do that but it provides a default subject for the shift event which you can override via the Options page.
