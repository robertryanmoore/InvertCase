var contextMenuItem = {
    "id": "invertCase",
    "title": "Invert",
    "contexts": ["selection"]
};

function invertText(selectedText){

    var returnText = "";

    for(var i=0; i < selectedText.length; i++){
        if(/[a-z]/.test(selectedText.charAt(i))){
            returnText = returnText + selectedText.charAt(i).toUpperCase();
        }
        if(/[A-Z]/.test(selectedText.charAt(i))){
             returnText = returnText + selectedText.charAt(i).toLowerCase();
         }
         if(/[^a-zA-Z]/.test(selectedText.charAt(i))){
            returnText = returnText + selectedText.charAt(i);
        }
    }
    return returnText;
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
   if(clickData.menuItemId === "invertCase" && clickData.selectionText){
        var selectedText = clickData.selectionText  //program crashes if we access clickData.selectionText without putting it in a var
        console.log(selectedText);
        var replacementText = invertText(selectedText);
        console.log(replacementText);

        chrome.storage.local.set({'invertedText': replacementText});

        chrome.tabs.executeScript({file: 'content.js'});
        

    }});
    