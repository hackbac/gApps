
Title: Expire Emails 
Description: Move Tagged Threads to trash after a certain number of days have passed

Browse to ExpireEmails.gs. Then, select Run > onInstall
Upon installation, three labels will be created in Gmail:
- Expires/Tomorrow
- Expires/Week
- Expires/30 Days
  
Create filters to automatically tag emails with these labels.
 For example: For emails with the <code>subject:"Today's Lunch"</code>, apply the label "Expires/Tomorrow" 

Every day at midnight, emails will be moved to the Trash: 
- Expires/Tomorrow after 1 day
- Expires/Week after 7 days
- Expires/30 Days after 30 days
