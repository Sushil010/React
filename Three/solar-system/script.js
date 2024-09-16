import * as THREE from 'three';
import {OrbitControls} from "jsm/controls/OrbitControls.js"

const w=window.innerWidth
const h=window.innerHeight

// scene
const scene=new THREE.Scene()


// camera
const fov=45
const aspect=w/h
const near=0.1
const far=100
const camera=new THREE.PerspectiveCamera(fov,aspect,near,far)
camera.position.z=90
scene.add(camera)


//MATERIALS PORTION
const sun=new THREE.SphereGeometry(3,16,16)
const material=new THREE.MeshStandardMaterial({
    color:'#FFA500',
    emissive: '#FFA500', //provides own glow 
    emissiveIntensity: 20
})

const mesh=new THREE.Mesh(sun,material)
scene.add(mesh)


const earth=new THREE.SphereGeometry(1,16,16)
const earthmaterial=new THREE.MeshStandardMaterial({
    color:'#FFFFFF',
    emissive:'#FFFFF',
    emissiveIntensity: 10
})

const earthmesh=new THREE.Mesh(earth,earthmaterial)

scene.add(earthmesh)
earthmesh.position.x = 10;





//Light addition

// const sunlight= new THREE.PointLight('#FFA500',10)
// sunlight.position.set(0,0,0)
// scene.add(sunlight)

const light=new THREE.AmbientLight("#ffffff",3)
scene.add(light)



//Renderer
const renderer=new THREE.WebGLRenderer({antialias:true})
renderer.setSize(w,h)
document.body.appendChild(renderer.domElement)


//Orbit controls
const Orbit=new OrbitControls(camera,renderer.domElement)
Orbit.enableDamping=true;
Orbit.dampingFactor=0.03;


//wiremesh
//sun wiremesh
const wire= new THREE.MeshStandardMaterial({
    color:'#000000',
    wireframe:true
})
const wired=new THREE.Mesh(sun,wire)
mesh.add(wired)

//earth wiremesh
const earthwire= new THREE.MeshStandardMaterial({
    color:'#000000',
    wireframe:true
})
const earthwired=new THREE.Mesh(earth,earthwire)
earthmesh.add(earthwired)


const orbitalRadius = 50;  // Distance from the sun in scene units
const orbitalPeriod = 80;  // Time it takes to complete one orbit (scaled for animation speed)
const angularSpeed = (2 * Math.PI) / orbitalPeriod;  // Angular speed in radians per unit time

function updateEarthPosition(time) {
    const angle = angularSpeed * time;  // Angle = angular speed * time
    earthmesh.position.x = Math.cos(angle) * orbitalRadius;
    earthmesh.position.z = Math.sin(angle) * orbitalRadius;
}








function animate(t=0){
    requestAnimationFrame(animate)
    mesh.rotation.y=t*0.0001
    updateEarthPosition(t * 0.001);  // Scaled time for visual speed
    
    // Rotate the Sun
    // mesh.rotation.y = t * 0.0001;
    renderer.render(scene,camera)

}

animate()
