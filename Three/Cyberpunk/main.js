import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js'
import gsap from 'gsap'

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


//scene
const scene = new THREE.Scene()

//camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 5

//renderer
const renderer = new THREE.WebGLRenderer(
    {canvas: document.querySelector('#canvas'),
    antialias: true,
    }
)


renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.outputEncoding = THREE.sRGBEncoding



let model;
//HDRI
const rgbeLoader = new RGBELoader()
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloppenheim_01_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping
    // scene.background = texture
    scene.environment = texture
})

//GLTF model
const loader = new GLTFLoader()
loader.load(
    './DamagedHelmet.gltf',
    (gltf) => {
        model = gltf.scene
        scene.add(model)
    },
    (progress) => {
        console.log((progress.loaded / progress.total * 100) + '% loaded')
    },
    (error) => {
        console.error('An error happened', error)
    }
)

// Post-processing
const composer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const rgbShiftPass = new ShaderPass(RGBShiftShader)
rgbShiftPass.uniforms['amount'].value = 0.0035
composer.addPass(rgbShiftPass)


//mousemove event
window.addEventListener('mousemove', (event) => {
    const rotationX = (event.clientX / window.innerWidth - 0.5)* Math.PI * .3
    const rotationY = (event.clientY / window.innerHeight - 0.5)* Math.PI * .3
    gsap.to(model.rotation, {
        x: rotationY,
        y: rotationX,
        duration: 0.5,
        ease: "power2.out"
    });

})


//animation
function animate(){
    window.requestAnimationFrame(animate)
    
    
    composer.render()
}

animate()

//resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    composer.setSize(window.innerWidth, window.innerHeight)
})