setInterval(function getSelection(){
  if (window.getSelection().toString().length > 0) {
    document.onmousedown = function(){
      document.onmouseup = function(){
        var text = window.getSelection().toString(); 
        if (text.length > 0) {
          document.onmousedown = function(event){
            if (event.button == 2) {
              window.getSelection().removeAllRanges();
              window.open("http://www.baidu.com/s?wd=" + text);
            }
          }
        }                
      }
    }
  }
}, 3000);