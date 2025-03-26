import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"


//Renderer portion
    const renderer=new THREE.WebGLRenderer({antialias:true})
    //antialias is set true for making object edges smooth
    const w=window.innerWidth
    const h=window.innerHeight
    renderer.setSize(w,h)

   
    document.body.appendChild(renderer.domElement)

//Camera addition
    const fov=75
    const aspect=w/h
    const near=0.1
    const far=100
    const camera=new THREE.PerspectiveCamera(fov,aspect,near,far)
    camera.position.z=40





//Scene creation
    const scene=new THREE.Scene()

    


//Object addition:
const loader=new THREE.TextureLoader()
const imagemap=loader.load("im.png")


const geometry = new THREE.CylinderGeometry(12,12,20,32,32,true)
const material=new THREE.MeshStandardMaterial(
    {map:imagemap,
     side:THREE.DoubleSide,
     emissive:true,
    //  opacity:0,
     transparent:true
    }
)
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)





//Light addition
const light= new THREE.AmbientLight(0xffffff,2.5);
scene.add(light)


//OrbitControl
const Orbit=new OrbitControls(camera,renderer.domElement)
Orbit.enableDamping=true;
Orbit.dampingFactor=0.03;

mesh.rotation.y=Math.PI/13
// mesh.rotation.z=Math.PI/4




function animate(t=0){
    requestAnimationFrame(animate)
    mesh.rotation.y+=0.05
    renderer.render(scene,camera)
    Orbit.update()
}

animate()