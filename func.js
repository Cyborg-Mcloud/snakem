var myid=495;
var mydir=1;

var foni=new Image();
foni.src="back.png";

function kdown(cdir)
	{
	mydir=cdir;
	}


function onBackKeyDown() 
	{
	}

function onVolumeDown()
	{
	}

function onVolumeUp()
	{
	}

function onDeviceReady() 
	{


	checkConnection();

	document.addEventListener("pause", onPause, false);
	document.addEventListener("backbutton", onBackKeyDown, false);
	document.addEventListener("volumedownbutton", onVolumeDown, false);
	document.addEventListener("volumeupbutton", onVolumeUp, false);
	document.addEventListener("resume", onResume, false);
	checkIfFileExists("locdata.txt");

	if (dataex==0)	{WriteData();}	

	ReadData();

	}
// ------------------------
var inpause=0;
function onPause()
	{
	WriteData();
	inpause=1;
	}

function onResume() 
	{
	inpause=0;
	}




function MainFunc()
	{

		get_snakes();
	setTimeout("MainFunc()",100);
	}


function startme()
	{
	MainFunc();
	}

 function fail(error) 
	{
    console.log(error.code);
    }


var snake_id=new Array();
var snake_body=new Array();
var snake_name=new Array();
var snake_fbid=new Array();
var snake_old_id=new Array();


var colors=new Array();
 colors[0]="#f05223";
 colors[1]="#1a6733";
 colors[2]="#1d8ecd";
 colors[3]="#844a9d";
 colors[4]="#89171b";


var divhttp;
var c_recv;
var rabbit=":";

if (window.XMLHttpRequest) {divhttp=new XMLHttpRequest();}
else if (window.ActiveXObject) {divhttp=new ActiveXObject('Microsoft.XMLHTTP');}
else {alert('Your browser does not support XMLHTTP!');}

var namehttp;
var n_recv;

if (window.XMLHttpRequest) {namehttp=new XMLHttpRequest();}
else if (window.ActiveXObject) {namehttp=new ActiveXObject('Microsoft.XMLHTTP');}
else {alert('Your browser does not support XMLHTTP!');}

divhttp.onreadystatechange=div_recv;

namehttp.onreadystatechange=name_recv;

function div_recv()
	{
	if (divhttp.readyState==4 && divhttp.status==200)
		{
		c_recv=divhttp.responseText;
		if (c_recv!="")
			{

			kc=c_recv.split("#");
			rabbit=kc[0].replace(";","");
			c_recv=kc[1];

			a=c_recv.split("]");
			for (i=0;i<a.length ;i++ )
				{
				if (a[i]!="")
					{
					b=a[i].split("|");
					snake_id[i]=b[0];
					if (snake_id[i]!=snake_old_id[i])
						{
						req_name(snake_id[i]);

						}
					snake_body[i]=b[1];
					}				
				}
			draw_snakes();
			//document.getElementById("infodiv").innerHTML=c_recv;		
			}
		}
	}

	
function name_recv()
	{
	if (namehttp.readyState==4 && namehttp.status==200)
		{
		n_recv=namehttp.responseText;
		if (n_recv!="")
			{
			a=n_recv.split("|");
			if (a[0]=="NAME")
				{
				b=a[1].split(":");
				snake_name[b[0]]=b[1];
				snake_fbid[b[0]]=b[2];
				for (i=0;i<snake_id.length ;i++ )
					{
					if (snake_id[i]==b[0])
						{
						snake_old_id[i]=snake_id[i];
						document.getElementById("nameplate"+i).innerHTML="<table width=120px><tr><td valign=middle><img src='http://graph.facebook.com/"+snake_fbid[snake_id[i]]+"/picture?width=35&height=35' height=35px></td><td valign=middle style='font-size:12px; font-weight:bold; color:white; font-family:arial;'>"+snake_name[snake_id[i]]+"</td></tr></table>";
						i=snake_id.length;
						}
					}
				}

			}

		}
	}

function req_name(snid)
	{
	url='http://design.ge/snake/names.php?id='+snid;
	namehttp.open('GET',url,true);
	namehttp.send(null);
	}


function get_snakes()
	{
		
	url='http://design.ge/snake/game.php?me='+myid+'&mydir='+mydir;

	divhttp.open('GET',url,true);
	divhttp.send(null);
	}

function draw_snakes()
	{
	can.width=can.width;
	for (i=0;i<5;i++ )
		{
		ctx.fillStyle = colors[i];
		if (typeof snake_body[i] != "undefined")
			{
		
			k=snake_body[i].split(";");
			for (ii=0;ii<k.length-1 ;ii++ )
				{
				d=k[ii].split(":");
				ctx.fillRect(d[0]*20,d[1]*20,20,20);
				}
			}
		}

	d=rabbit.split(":");


	ctx.fillStyle = "red";

	ctx.fillRect(d[0]*20,d[1]*20,20,20);
	ctx.stroke(); 	
	}


