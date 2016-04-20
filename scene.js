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
		renderer = new THREE.WebGLRenderer();
	} else {
		renderer = new THREE.CanvasRenderer();
	}

	renderer.setSize( container.offsetWidth, container.offsetHeight);
	container.appendChild( renderer.domElement );

	var onRenderFcts= [];
	var scene	= new THREE.Scene();
	var camera	= new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.01, 1000 );
	camera.position.z = 1.5;

	 var light	= new THREE.DirectionalLight( 0xffffff, 1)
	 light.position.set(5,5,5)
	 light.target.position.set( 0, 0, 0 )

	scene.add(camera);
	scene.add( light );
//END SCENE

