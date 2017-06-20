chrome.contextMenus.create({
  title: "Markdown 用のリンクを作成する",
  onclick: function(info, tab) {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = "[" + tab.title + "](" + tab.url + ")";
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
