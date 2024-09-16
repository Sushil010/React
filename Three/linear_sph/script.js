import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"


//Renderer portion
    const renderer=new THREE.WebGLRenderer({antialias:true})
    //antialias is set true for making object edges smooth
    const w=window.innerWidth
    const h=window.innerHeight
    renderer.setSize(w,h)

    //creates a canvas --another way is to create canvas in html and query selector usage
    document.body.appendChild(renderer.domElement)

//Camera addition
    const fov=75
    const aspect=w/h
    const near=0.1
    const far=10
    const camera=new THREE.PerspectiveCamera(fov,aspect,near,far)
    camera.position.z=2





//Scene creation
    const scene=new THREE.Scene()




//Object addition:
const geometry=new THREE.IcosahedronGeometry(1,2)
const material=new THREE.MeshStandardMaterial({
    color:0xffffff,
    
})

const mesh=new THREE.Mesh(geometry,material)

scene.add(mesh)

const wire=new THREE.MeshBasicMaterial({
    color:0x000000,
    wireframe:true
})

const wireMesh=new THREE.Mesh(geometry,wire)
wireMesh.scale.setScalar(1.0001)
//instead of adding the wireframe only to parent sphere provide the whole wiremesh to the mesh component as child ana later all the component will be added to scene as a parent mesh
// scene.add(wireMesh)
mesh.add(wireMesh)


//Light addition
const light= new THREE.HemisphereLight(0x55dd16,0x8027cf);
scene.add(light)


//OrbitControl
const Orbit=new OrbitControls(camera,renderer.domElement)
// Orbit.enableDamping=true;
// Orbit.dampingFactor=0.03;




//Continuous rendering always after adding everything:
function animate(t=0){
    requestAnimationFrame(animate)
    // mesh.rotation.y=t*0.0001
    renderer.render(scene,camera)
    // Orbit.update()
}

animate()