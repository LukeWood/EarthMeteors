/*$.ajax({
	type: "GET",
	url: "data/flights.txt",
        dataType: "text/csv",
        success: function (data) {
	data = data.split('\n');
	var points = [];
	for(var i = 0; i < data.length; i++)
	{
		vals = data[i].split(',');
		alert(vals[0]);
		points.push({
			x:parseInt(vals[1]),
			y:parseInt(vals[2]),
			value:50
			});
	}
	graph(points);
                     }
                });*/
var inp = document.getElementById("csvload");
var CANWIDTH = 3000,CANHEIGHT=1500
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
				var xval = (parseFloat(vals[1]));
				var yval = (parseFloat(vals[2]));
				var xyvals = new Array();
			       	//LatLonToUTMXY(xval,yval,0,xyvals); 
				points.push({
					x:CANWIDTH/2-yval*yf,
					y:CANHEIGHT/2-xval*xf,
					value:1
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
	var nuConfig = {
  radius: .01,
  maxOpacity: 1,
  minOpacity:0,
  /*gradient: {
	  '.8':'white',
	  '.84':'blue', // for gradient color customization
	  '.87': 'green',
    	'.9': 'yellow',
   	 '.95': 'red'
  }*/
};
	heatmap = h337.create({container:document.getElementById("cont")});
	heatmap.configure(nuConfig);
	var dset = {
		data:data	
	}
	heatmap.setData(dset);
	heatmap.setDataMax(upper);
}
document.getElementById("but").addEventListener("click",function()
{
	document.getElementsByTagName("img")[0].src = document.getElementById("cont").getElementsByTagName("canvas")[0].toDataURL();	
});
