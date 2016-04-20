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
var xf = (1000/180)-2;
var yf = (500/85)/2;
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
				points.push({
					x:500+parseFloat(vals[6])*yf,
					y:250-parseFloat(vals[5])*xf,
					value:parseInt(vals[4])
					});
			}
			graph(points);
		}
		r.readAsText(file);
		});
var heatmap;
var upper = 500000;
function graph(data)
{
	var nuConfig = {
  radius: 1,
  maxOpacity: .5,
  minOpacity:0
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
	heatmap.setDataMax(upper);
	
});
