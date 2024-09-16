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
const loader=new THREE.TextureLoader()
const earthmap=loader.load("color.jpg")
const nighttext=loader.load("earth_light.jpg")
const cloudey=loader.load("earthcloudmap.jpg")

const geometry=new THREE.IcosahedronGeometry(1,12)
const material=new THREE.MeshStandardMaterial({
    map: earthmap,
    emissiveMap:nighttext,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 1.0, 
        
})

const mesh=new THREE.Mesh(geometry,material)

scene.add(mesh)



const clouds=new THREE.IcosahedronGeometry(1.01,12)
const laud_material=new THREE.MeshStandardMaterial({
    map: cloudey,
    transparent:true,
    opacity:0.5
   
        
})

const cloudmesh=new THREE.Mesh(clouds,laud_material)

scene.add(cloudmesh)




//Light addition
const light= new THREE.HemisphereLight();
scene.add(light)


//OrbitControl
const Orbit=new OrbitControls(camera,renderer.domElement)
Orbit.enableDamping=true;
Orbit.dampingFactor=0.03;




//Continuous rendering always after adding everything:
function animate(t=0){
    requestAnimationFrame(animate)
    mesh.rotation.y+=0.001
    cloudmesh.rotation.y+=0.004
    renderer.render(scene,camera)
    Orbit.update()
}

animate()