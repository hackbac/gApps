// Title: Expire Emails 
// Author: Brian Chong (code@hackbc.com)
// Description: Move Tagged Gmail Threads to trash after a certain number of days has passed

function expire() { 
  expireEmails('Expires/Tomorrow');
  expireEmails('Expires/Week',7);
  expireEmails('Expires/30 Days',30);
}

function expireEmails(ExpireLabelString,Days){ 
  
  var ExpireLabelSearch = GmailApp.search('before:' + modifiedDate(Days) + ' label:"' + ExpireLabelString + '"') ; 
  
  if (ExpireLabelSearch.length > 0) { 
    GmailApp.moveThreadsToTrash(ExpireLabelSearch);
  }
  
} 

function modifiedDate (Days) { 
  var dateObj = new Date(); 
  if (!Days) {Days = 0;}
  
  dateObj.setDate(dateObj.getDate() - Days); 
  
  return Utilities.formatDate(dateObj, "GMT", "yyyy/MM/dd");
} 

function onInstall() { 
  try { 
    // Create Labels
    GmailApp.createLabel('Expires'); 
    GmailApp.createLabel('Expires/Tomorrow'); 
    GmailApp.createLabel('Expires/Week'); 
    GmailApp.createLabel('Expires/30 Days'); 
    
    // Create Trigger to call expire() everyday
    createTrigger('expire');
    
  } catch (e) { 
    Browser.msgBox(e.message); 
  }
} 

function createTrigger(t) { 
  ScriptApp.newTrigger(t)
  .timeBased()
  .everyDays(1)
  .create();  
}
