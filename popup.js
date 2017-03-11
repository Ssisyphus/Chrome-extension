setInterval(function(){
	var date = document.getElementById("date");
	var mDate = new Date();
	date.innerHTML = mDate.getFullYear() + "年" + (mDate.getMonth() + 1) + "月" + mDate.getDate() + "日" + "星期" + mDate.getDay() + mDate.toLocaleTimeString();
},1000);