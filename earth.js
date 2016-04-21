
//CREATE EARTH

var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
var material  = new THREE.MeshPhongMaterial()
var earthMesh = new THREE.Mesh(geometry, material);

var image = document.createElement('img');
image.src = 'img/earthmap1k.jpg';

earthMesh.material.map = new THREE.Texture(image);
earthMesh.material.map.needsUpdate = true;

var bumpmap = document.createElement('img');
bumpmap.src = 'img/earthbump1k.jpg';

earthMesh.material.bumpMap =  new THREE.Texture(bumpmap);
earthMesh.material.bumpScale = .1;

var specularmap = document.createElement('img');
specularmap.src = 'img/earthspec1k.jpg';

earthMesh.material.specularMap = new THREE.Texture(specularmap);
earthMesh.material.specular = new THREE.Color('grey');

scene.add(earthMesh);
//END EARTH

//Create stars:
//end stars

var graphmat = new THREE.MeshPhongMaterial();
var graphgeo = new THREE.SphereGeometry(.501,32,32);
var graphMesh = new THREE.Mesh(graphgeo,graphmat);
var targ;
function setTarget(sender,target)
{
	var all = document.getElementsByClassName("menubut");
	for(var i = 0; i < all.length; i++)
	{
		all[i].style.background = "#fff";
	}
	sender.style.background = "#4faf4f";
	if(targ == target)
	{
		target = "img/Clear.png";
		sender.style.background = "#fff";
	}
	targ = target;
	var image = document.createElement("img");
	image.src =target;
	graphMesh.material.map = new THREE.Texture(image);
	graphMesh.material.transparent = true;
	graphMesh.material.opacity= .85;
	graphMesh.material.needsUpdate = true;	
	graphMesh.material.map.needsUpdate = true;
	scene.add(graphMesh);
}

//Earths rotation AREA
//AREA START
var dx = 0;
var dy = 0;
var clicked = false;
var paused = false;
var pausebut = document.getElementById("pause");
pausebut.addEventListener("mousedown",function()
		{
			paused = !paused;
			if(!paused)
				pausebut.src = "img/pause.png";
			else
				pausebut.src = "img/play.png";
		});

setInterval(function()
		{
	if(clicked)
{
earthMesh.rotation.y += 1/16 * dx;
//these are actually inverted because 3d
earthMesh.rotation.x += 1/16 * dy;

graphMesh.rotation.y += 1/16 * dx;
//these are actually inverted because 3d
graphMesh.rotation.x += 1/16 * dy;
}
else if(!paused)
{

earthMesh.rotation.y += 1/128;
earthMesh.rotation.x -= 1/2048;
//these are actually inverted because 3d

graphMesh.rotation.y += 1/128;
graphMesh.rotation.x -= 1/2048;
//these are actually inverted because 3d
}
mesh.rotation.y += 1/8192;
renderer.render(scene,camera);
},50);

var offsetx = container.offsetLeft;
var offsety = container.offsetTop;
var width = container.offsetWidth;
var height = container.offsetHeight;
container.addEventListener('mousedown',function(e)
		{
		clicked = true;
		mousemovefunc(e);
		});
container.addEventListener('mouseup',function(e)
		{
		clicked = false;
		dx = 1/16;
		dy = 1/16;
		});
function mousemovefunc(e)
{
			var x = e.pageX - offsetx;
			var y = e.pageY - offsety;
			x = x - width/2;
			y = y - height/2;
			dx = x/width;
			dy = y/height;
}
container.addEventListener('mousemove',mousemovefunc);

//END AREA EARTH ROTATION
