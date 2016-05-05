var inp = document.getElementById("csvload");
var CANWIDTH = 1000,CANHEIGHT=500
var xf = (CANWIDTH/180)/2;
var yf = (CANHEIGHT/85)/2;
$("#csvload").change(function()
		{
		var file = inp.files[0];
		var r = new FileReader();
		r.onload = function(e)
		{
			var data = e.target.result;	
			data = data.split('\n');
			var points = [];
			for(var i = 0; i < data.length; i++)
			{
				vals = data[i].split(',');
				var xval = (parseFloat(vals[6]));
				var yval = (parseFloat(vals[7]));
				var xyvals = new Array();
			       	//LatLonToUTMXY(xval,yval,0,xyvals); 
				points.push({
					x:CANWIDTH/2-xval*yf,
					y:CANHEIGHT/2-yval*xf
					});
			}
			graph(points);
		}
		r.readAsText(file);
		});
var heatmap;
var upper = 50;
function graph(data)
{
	var can = document.getElementById("cont");
	var ctx = can.getContext("2d");
	for(var i = 0; i < data.length; i++)
	{
		ctx.beginPath();
		ctx.arc(data[i].x,data[i].y,2,0,2*Math.PI);
		ctx.stroke();
	}
}
document.getElementById("but").addEventListener("click",function()
{
	document.getElementsByTagName("img")[0].src = document.getElementById("cont").getElementsByTagName("canvas")[0].toDataURL();	
});
