setInterval(function(){

   chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
       alert("测试");
 });


},1000);