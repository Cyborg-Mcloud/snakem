var foni=new Image();
foni.src="back.jpg";




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


var can=document.getElementById("mycan");
var ctx=can.getContext("2d");

function MainFunc()
	{
	can.width = can.width;	
	ctx.drawImage(foni,0,0);
	setTimeout("MainFunc()",50);
	}

MainFunc();


 function fail(error) 
	{
    console.log(error.code);
    }
