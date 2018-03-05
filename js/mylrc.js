//写成函数的形式大家可能会更好理解一点
var n1 = 0;
var j = 0;
function parseLyric(text) {
	text = text.replace(/\]\[/g,'] [');
	var arr=text.match(/(\[\d{2}:\d{2}\.\d{2}\])(.[^\[\]]*)?/g);
	var time=[],txt=[];
	for(var i=0;i<arr.length;i++){
	/^(\[\d{2}:\d{2}\.\d{2}\])(.[^\[\]]*)?$/.exec(arr[i]);
	time.push(RegExp.$1);
	txt.push(RegExp.$2);
	}
	var x = document.getElementById("audio");
	var p = x.currentTime;
	var pt = parseInt(p);
	//document.getElementById("pid").innerHTML=time[pt];
	
	
	var n = time[n1] + "";
	var a = n.slice(2,3);
	
	var b = parseInt(a);
	var c = n.slice(4,6);
	
	var d = parseInt(c);
	var f = b*60 + d;
	
	if(pt==f){
		/*var jk = txt[j]+"";
		if(txt.length!=j){
			jk=jk.substring(0,jk.length-4);
			document.getElementById("lrcfont").innerHTML=jk;
		}else{
			document.getElementById("lrcfont").innerHTML=txt[j];
		}*/
		document.getElementById("lrcfont").innerHTML=txt[j];
		
		jk="";
		n1 =n1+1;
		j =j+1;
	}
	n = "";
	a = "";
	b = 0;
	c = "";
	d = 0;;
	f = 0;
	if(txt.length==j){
		n1=0;
		j=0;
		document.getElementById("lrcfont").innerHTML="";
	}
}
   


