const THREE = require('three');
const { Object, ObjectState } = require('./object');

/**
 * Abstract class for an object transformation in a frame
 */
class Transformation {
    constructor() { }

    static getName() { throw "Abstract method getName not implemented" }

    //getDetails() { throw "Abstract method getDetails not implemented" }
    setupScene(scene, object) { throw "Abstract method render not implemented" }

    setupSceneCamera(scene, boundingBox) {
        // Setup camera to fit geometry
        let boundingBoxCenter = new THREE.Vector3(); 
        let boundingBoxSize = new THREE.Vector3();
        boundingBox.getCenter(boundingBoxCenter);
        boundingBox.getSize(boundingBoxSize);

        let cameraPlaneOffset = 0.1 * Math.max(boundingBoxSize.x, boundingBoxSize.y);
        let cameraLeft = Math.min(boundingBox.min.x, boundingBoxCenter.x - boundingBoxSize.y / 2) - cameraPlaneOffset;
        let cameraRight = Math.max(boundingBox.max.x, boundingBoxCenter.x + boundingBoxSize.y / 2) + cameraPlaneOffset;
        let cameraBottom = Math.min(boundingBox.min.y, boundingBoxCenter.y - boundingBoxSize.x / 2) - cameraPlaneOffset;
        let cameraTop = Math.max(boundingBox.max.y, boundingBoxCenter.y + boundingBoxSize.x / 2) + cameraPlaneOffset;

        let camera = new THREE.OrthographicCamera(cameraLeft, cameraRight, cameraTop, cameraBottom, 0, 1);
        
        // Save objects inside scene
        scene.userData.camera = camera;
    }
}

class Translation extends Transformation {
    constructor(translationVector) {
        super();
        this.translationVector = translationVector;
    }

    static getName() { return "Translation" }

    setupScene(scene, object) {
        let boundingBox = null;

        // Loop object states
        for(let i = 0; i < object.states.length; i++) {
            let state = object.states[i];

            // Setup shape, geometry, material and mesh
            let shape = new THREE.Shape( state.vertices );
            console.log(shape);
            let geometry = new THREE.ShapeBufferGeometry( shape );
            geometry.computeBoundingBox();
            boundingBox = geometry.boundingBox; // TODO: INCLUDE ALL THE STATES
            let color = new THREE.Color().setHSL(i / object.states.length, 1, 0.75)
            let mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide, transparent: true, opacity: 1 } ) );
            scene.add( mesh );

            // Setup lines
            let points = shape.getPoints();
            let geometryPoints = new THREE.BufferGeometry().setFromPoints( points );
            let line = new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
            scene.add( line );
        }

        this.setupSceneCamera(scene, boundingBox);
    }
}

module.exports = {
    Transformation : Transformation,
    Translation : Translation
}
