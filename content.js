
//replaces hightlighted text, only works for content-editable divs, not inputs etc
function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}

chrome.storage.local.get('invertedText', function(result){
    var text = result.invertedText;
    replaceSelectedText(text);
  });