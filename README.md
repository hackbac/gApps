
Title: Expire Emails <br />
Description: Move Tagged Threads to trash after a certain number of days have passed<br />
<br />
Browse to ExpireEmails.gs. Then, select Run > onInstall<br />
Upon installation, three labels will be created in Gmail:
- Expires/Tomorrow
- Expires/Week
- Expires/30 Days
  <br />
Create filters to automatically tag emails with these labels.<br />
 For example: For emails with the <code>subject:"Today's Lunch"</code>, apply the label "Expires/Tomorrow" <br />
<br />
Every day at midnight, emails will be moved to the Trash: 
- Expires/Tomorrow after 1 day
- Expires/Week after 7 days
- Expires/30 Days after 30 days
