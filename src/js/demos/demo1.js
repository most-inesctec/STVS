const THREE = require('three');
const Utils = require('../utils');
const Frame = require('../frame');
const { Object, ObjectState } = require('../object');
const { Translation, Orientation, Scale, Immutability, Unknown, Multiple, Rotation } = require('../transformation');

let timestamp = Date.now();

/* ----- OBJECT ----- */
let vertices = [];
vertices.push( new THREE.Vector2( 610, 320 ) );
vertices.push( new THREE.Vector2( 450, 300 ) );
vertices.push( new THREE.Vector2( 392, 392 ) );
vertices.push( new THREE.Vector2( 266, 438 ) );
vertices.push( new THREE.Vector2( 190, 570 ) );
vertices.push( new THREE.Vector2( 190, 600 ) );
vertices.push( new THREE.Vector2( 160, 620 ) );
vertices.push( new THREE.Vector2( 160, 650 ) );
vertices.push( new THREE.Vector2( 180, 640 ) );
vertices.push( new THREE.Vector2( 165, 680 ) );
vertices.push( new THREE.Vector2( 150, 670 ) );
vertices.push( new THREE.Vector2( 90, 737 ) );
vertices.push( new THREE.Vector2( 80, 795 ) );
vertices.push( new THREE.Vector2( 50, 835 ) );
vertices.push( new THREE.Vector2( 64, 870 ) );
vertices.push( new THREE.Vector2( 60, 945 ) );
vertices.push( new THREE.Vector2( 300, 945 ) );
vertices.push( new THREE.Vector2( 300, 743 ) );
vertices.push( new THREE.Vector2( 600, 473 ) );
vertices.push( new THREE.Vector2( 626, 425 ) );
vertices.push( new THREE.Vector2( 600, 370 ) );
vertices.push( new THREE.Vector2( 610, 320 ) );


/* ----- TRANSLATION ----- */
let objectTranslation = new Object();

let verticesTranslation1 = [];
vertices.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.add(new THREE.Vector2(50, 100));
    verticesTranslation1.push(newVertex);
});

let verticesTranslation2 = [];
verticesTranslation1.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.add(new THREE.Vector2(20, 50));
    verticesTranslation2.push(newVertex);
});

let statesTranslation = [
    new ObjectState(0, vertices),
    new ObjectState(1, verticesTranslation1),
    new ObjectState(2, verticesTranslation2)
];
objectTranslation.setStates(statesTranslation);

let translation = new Translation(new THREE.Vector2(70, 150));


/* ----- ORIENTATION ----- */
let objectOrientation = new Object();
let centroid = new THREE.Vector2(338, 622.5);

let verticesOrientation1 = [];
vertices.forEach(vertex => {
    //vertex.sub(centroid);
    //vertex.multiplyScalar(10);
    //vertex.add(centroid);
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.rotateAround(centroid, THREE.MathUtils.degToRad(20));
    verticesOrientation1.push(newVertex);
});

let verticesOrientation2 = [];
verticesOrientation1.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.rotateAround(centroid, THREE.MathUtils.degToRad(60));
    //newVertex.add(new THREE.Vector2(100, 200));
    verticesOrientation2.push(newVertex);
});

let statesOrientation = [
    new ObjectState(0, vertices),
    new ObjectState(1, verticesOrientation1),
    new ObjectState(2, verticesOrientation2)
];
objectOrientation.setStates(statesOrientation);

let orientation = new Orientation(THREE.MathUtils.degToRad(80));


/* ----- ROTATION ----- */
let objectRotation = new Object();
let pivot = new THREE.Vector2(100, 100);

let verticesRotation1 = [];
vertices.forEach(vertex => {
    //vertex.multiplyScalar(0.2);
    //vertex.multiplyScalar(10);
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.rotateAround(pivot, THREE.MathUtils.degToRad(20));
    verticesRotation1.push(newVertex);
});

let verticesRotation2 = [];
verticesRotation1.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    //newVertex.add(new THREE.Vector2(100, 200));
    newVertex.rotateAround(pivot, THREE.MathUtils.degToRad(30));
    verticesRotation2.push(newVertex);
});

let statesRotation = [
    new ObjectState(0, vertices),
    new ObjectState(1, verticesRotation1),
    new ObjectState(2, verticesRotation2)
];
objectRotation.setStates(statesRotation);

let rotation = new Rotation(pivot, THREE.MathUtils.degToRad(50));


/* ----- SCALE ----- */
let objectScale = new Object();

let verticesScale1 = [];
vertices.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.sub(centroid);
    newVertex.multiply(new THREE.Vector2(0.4, 0.7));
    newVertex.add(centroid);
    verticesScale1.push(newVertex);
});

let verticesScale2 = [];
verticesScale1.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    //newVertex.add(new THREE.Vector2(100, 200));
    newVertex.sub(centroid);
    newVertex.multiply(new THREE.Vector2(4, 3.5));
    newVertex.add(centroid);
    verticesScale2.push(newVertex);
});

let statesScale = [
    new ObjectState(0, vertices),
    new ObjectState(1, verticesScale1),
    new ObjectState(2, verticesScale2)
];
objectScale.setStates(statesScale);

let scale = new Scale(new THREE.Vector2(0.75*4, 2*0.5));


/* ----- IMMUTABILITY ----- */
let objectImmutability = new Object();
objectImmutability.setStates([new ObjectState(0, vertices)]);

let immutability = new Immutability();


/* ----- UNKNOWN ----- */
let objectUnknown = new Object();

let verticesUnknown1 = [];
let shear1 = new THREE.Matrix4().makeShear(1,1,0);
vertices.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.applyMatrix3(shear1);
    verticesUnknown1.push(newVertex);
});

let verticesUnknown2 = [];
let shear2 = new THREE.Matrix4().makeShear(1,1,0);
verticesUnknown1.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.applyMatrix3(shear2);
    verticesUnknown2.push(newVertex);
});

let statesUnknown = [
    new ObjectState(0, vertices),
    new ObjectState(1, verticesUnknown1),
    new ObjectState(2, verticesUnknown2)
];
objectUnknown.setStates(statesUnknown);

let unknown = new Unknown();


/* ----- MULTIPLE ----- */
let objectMultiple = new Object();

let verticesMultiple1 = [];
vertices.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.rotateAround(centroid, THREE.MathUtils.degToRad(20));
    verticesMultiple1.push(newVertex);
});

let verticesMultiple2 = [];
verticesMultiple1.forEach(vertex => {
    let newVertex = new THREE.Vector2(vertex.x, vertex.y);
    newVertex.add(new THREE.Vector2(50, 100));
    verticesMultiple2.push(newVertex);
});

let statesMultiple = [
    new ObjectState(0, vertices),
    new ObjectState(1, verticesMultiple1),
    new ObjectState(2, verticesMultiple2)
];
objectMultiple.setStates(statesMultiple);

let multiple = new Multiple([new Translation(new THREE.Vector2(50, 100)), new Orientation(THREE.MathUtils.degToRad(20))]);


/* ----- FRAMES ----- */
let frames = [];

let frame0_0 = new Frame(objectScale, scale, timestamp, stepTime());                    frames.push(frame0_0);
let frame0_1 = new Frame(objectOrientation, orientation, timestamp, stepTime());        frames.push(frame0_1);
let frame0_2 = new Frame(objectTranslation, translation, timestamp, stepTime());        frames.push(frame0_2);
let frame0_3 = new Frame(objectUnknown, unknown, timestamp, stepTime());                frames.push(frame0_3);
let frame0_4 = new Frame(objectImmutability, immutability, timestamp, stepTime());      frames.push(frame0_4);
let frame0_5 = new Frame(objectMultiple, multiple, timestamp, stepTime());              frames.push(frame0_5);

let frame1_0 = new Frame(objectOrientation, orientation, timestamp, stepTime());        frame0_3.childFrames.push(frame1_0);
let frame1_1 = new Frame(objectScale, scale, timestamp, stepTime());                    frame0_3.childFrames.push(frame1_1);
let frame1_2 = new Frame(objectRotation, rotation, timestamp, stepTime());              frame0_3.childFrames.push(frame1_2);
let frame1_3 = new Frame(objectTranslation, translation, timestamp, stepTime());        frame0_3.childFrames.push(frame1_3);

let frame1_4 = new Frame(objectRotation, rotation, timestamp, stepTime());              frame0_2.childFrames.push(frame1_4);
let frame1_5 = new Frame(objectScale, scale, timestamp, stepTime());                    frame0_2.childFrames.push(frame1_5);
let frame1_6 = new Frame(objectTranslation, translation, timestamp, stepTime());        frame0_2.childFrames.push(frame1_6);
let frame1_7 = new Frame(objectOrientation, orientation, timestamp, stepTime());        frame0_2.childFrames.push(frame1_7);

let frame2_0 = new Frame(objectTranslation, translation, timestamp, stepTime());        frame1_0.childFrames.push(frame2_0);
let frame2_1 = new Frame(objectScale, scale, timestamp, stepTime());                    frame1_0.childFrames.push(frame2_1);
let frame2_2 = new Frame(objectOrientation, orientation, timestamp, stepTime());        frame1_0.childFrames.push(frame2_2);

let frame3_0 = new Frame(objectTranslation, translation, timestamp, stepTime());        frame2_0.childFrames.push(frame3_0);


function stepTime() {
    // Step a few milliseconds
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.MILLISECOND*2 + Utils.Milliseconds.MILLISECOND);

    // Step a few deciseconds
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.MILLISECOND*20 + Utils.Milliseconds.MILLISECOND);

    // Step a few centiseconds
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.MILLISECOND*200 + Utils.Milliseconds.MILLISECOND*10);

    // Step a few seconds
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.SECOND*5 + Utils.Milliseconds.SECOND/2);

    // Step a few minutes
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.MINUTE*5 + Utils.Milliseconds.MINUTE/2);

    // Step a few hours
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.HOUR*3 + Utils.Milliseconds.HOUR/2);

    // Step a few days
    timestamp += Math.ceil(Math.random() * Utils.Milliseconds.DAY*5 + Utils.Milliseconds.DAY/2);

    // Step a few months
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.MONTH*3 + Utils.Milliseconds.MONTH/2);

    // Step a few years
    //timestamp += Math.ceil(Math.random() * Utils.Milliseconds.YEAR*5 + Utils.Milliseconds.YEAR/2);

    return timestamp;
}


module.exports = frames;
