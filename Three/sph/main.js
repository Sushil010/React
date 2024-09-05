import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import gsap from 'gsap'

//To make the canvas take all the space 

const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}


//to display anything we need scene camera and renderer.

//Room(scene), lights ,camera, objects or actors.
//scene is like a container which consists of everything like objects and cameras angle in this case.



//Portion1 making scene and objects.

    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(7,32,32);
    const material=new THREE.MeshStandardMaterial({ color: '#00ff83',
        roughness:0.5
     })

    //mesh is created by combining geometry and material it is made up of
    
    const mesh=new THREE.Mesh(geometry,material)

    //once mesh is created we got to add it to scene to picture it in our screen.

    scene.add(mesh)


//Portion 2 adding camera and lights
    //Perspectivecamera mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.


    const camera=new THREE.PerspectiveCamera(45,sizes.width/sizes.height)
    //first parameter is fov above and above 50 degree starts to create a distortion around the edges of image.

    
    camera.position.z=30
    //initially camera and sphere are on same position so move the z index of camera
    
    scene.add(camera)


    //Lights
    const light = new THREE.PointLight(0xffffff,100,100)
    light.position.set(0,10,10)

    //setting up x, y and z position of camera angle
    // light.intensity=1.25
    scene.add(light)



//Portion 3 renderer for displaying into screen

    //Renderer or WEBGL renderer for this a canvas is required.


    const canvas=document.querySelector('.webgl')
    const renderer=new THREE.WebGLRenderer({canvas})
    renderer.setSize(sizes.width,sizes.height)
    
    renderer.setPixelRatio(2)
    //for smootheness around edges
    renderer.render(scene,camera)






const controls=new OrbitControls(camera,canvas)
controls.enableDamping=true
controls.enablePan=false
controls.enableZoom=false
controls.autoRotate=true
controls.autoRotateSpeed=3



window.addEventListener('resize',()=>{
    sizes.width=window.innerWidth
    sizes.height=window.innerHeight

    //camera updation with resize
    //change property everywhere width and height is required
    camera.aspect=sizes.width/sizes.height

    //avoid squeeze effect while changing size
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width,sizes.height)
})



const loop=()=>{
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)
}

loop()


//gsap animation
//timiline initialization

const tl=gsap.timeline(
    {
        defaults:{
            duration:1
        }
    }
)



tl.fromTo(
    mesh.scale,{
        z:0,
        x:0,
        y:0
    },
    {
        z:1,
        x:1,
        y:1
    }
)


tl.fromTo(
    'nav',{
        y:'-200%'
    },
    {
        y:'0'
    }
)

tl.fromTo(
    'h1',{
        opacity:'0'
    },
    {
        opacity:'1'
    }
)


//mousedown holding mouse that is required to drag the sphere

let mousedown=false
let rgb=[]
window.addEventListener("mousedown",()=>(mousedown=true))
window.addEventListener("mouseup",()=>(mousedown=false))



window.addEventListener("mousemove",(e)=>{
    if(mousedown){
        rgb=[
            Math.round((e.pageX/sizes.width)*255),
            Math.round((e.pageY/sizes.height)*255),150
        ]

        let newColor=new THREE.Color(`rgb(${rgb.join(",")})`)
        gsap.to(mesh.material.color,{
            r:newColor.r,
            g:newColor.g,
            b:newColor.b
        })
    
    }



})