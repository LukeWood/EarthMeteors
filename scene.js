//CREATE SCENE
	var container = document.getElementById("container");
	var renderer;
	function webglAvailable() {
		try {
			var canvas = document.createElement( 'canvas' );
			return !!( window.WebGLRenderingContext && (
				canvas.getContext( 'webgl' ) ||
				canvas.getContext( 'experimental-webgl' ) )
			);
		} catch ( e ) {
			return false;
		}
	}

	if ( webglAvailable() ) {
		renderer = new THREE.WebGLRenderer({ alpha:true });
	} else {
		renderer = new THREE.CanvasRenderer({alpha: true});
	}

	renderer.setSize( container.offsetWidth, container.offsetHeight);
	container.appendChild( renderer.domElement );
	renderer.setClearColor(0x000000,0);
	var onRenderFcts= [];
	var scene	= new THREE.Scene();
	var camera	= new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.01, 1000 );
	camera.position.z = 1.5;

	var light = new THREE.DirectionalLight( 0xffffff, 1)
	light.position.set(5,5,5)
	light.target.position.set( 0, 0, 0 )
	var light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
	scene.add( light2 );
	scene.add(camera);
	scene.add( light );
//END SCENE

var stargeo = new THREE.SphereGeometry(20,32,32);

var starmat = new THREE.MeshBasicMaterial();
var mesh = new THREE.Mesh(stargeo,starmat);

var stars = document.createElement('img');
stars.src = 'img/stars.png';
mesh.material.map = new THREE.Texture(stars);
mesh.material.side = THREE.BackSide;
mesh.material.map.needsUpdate = true;
scene.add(mesh);
