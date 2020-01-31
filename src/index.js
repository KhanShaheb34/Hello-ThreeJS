"use-strict";

// Requiring the package
const THREE = require("three");

// Instinciating the scene
var scene = new THREE.Scene();
// The camera
var camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ration
  0.1, // close point
  1000 // far point
);

// Instinciating the webgl renderer
var renderer = new THREE.WebGLRenderer();
// Renderer size
renderer.setSize(window.innerWidth, window.innerHeight);
// Adding the renderer to the body
document.body.appendChild(renderer.domElement);

// Creating a cube
// the geometry of the cube
var cubeGeometry = new THREE.BoxGeometry();
// material of the cubes
var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// generating the cube
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// Adding the cube to the scene
scene.add(cube);

// Creating a Line
// material of the line
var lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
// geometry of the line
var points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
var lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// generating the line
var line = new THREE.Line(lineGeometry, lineMaterial);
// Adding the line to the scene
scene.add(line);

// Setting the camera position
camera.position.z = 5;

// Checking the mouse position
mouse = new THREE.Vector2();
document.addEventListener("mousemove", onDocumentMouseMove, false);
document.addEventListener("mousedown", onMouseDown, false);
// Event for mouse movement
function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
// Event for mouse down
function onMouseDown(event) {
  console.log(mouse.x + " " + mouse.y);
}

// The Game loop
function animate() {
  // requesting the next frame
  requestAnimationFrame(animate);
  // changing camera position and looking position
  camera.position.set(mouse.x * 20, mouse.y * 20, 10);
  camera.lookAt(0, 0, 0);
  // rendering the scene
  renderer.render(scene, camera);
}
// calling the gameloop function
animate();
