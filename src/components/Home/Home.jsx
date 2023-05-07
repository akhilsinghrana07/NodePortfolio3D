import React, { useEffect, useRef } from 'react'
import "./Home.css";
import * as THREE from "three";
import earthImage from "../../Images/earth2.jpg"
import earthBump from "../../Images/earthbump.jpg"
import galaxy from "../../Images/galaxy.jpg"
import cloud from "../../Images/earthCloud.png"
import About from "../About/About"; 
import Skill from "../Skill/Skill"; 
import Certificate from "../Certificate/Certificate"; 
const Home = () => {
  const headingRef = useRef();
  useEffect(()=>{
    
    const headingEl = document.createElement('h1');
    const headingE2 = document.createElement('h1');
    headingEl.innerText = 'Akhil Singh Rana';
    headingE2.innerText = 'Experience the future of programming in 3D Portfolio';
    // Position the heading on top of the canvas
    headingEl.style.position = 'absolute';
    headingEl.style.top = '800px';
    headingEl.style.left = '100px';
    headingEl.style.zIndex = '1';
    
    
    // Append the heading element to the container
    headingRef.current.appendChild(headingEl);
    headingE2.style.position = 'absolute';
    headingE2.style.top = '50px';
    headingE2.style.left = '200px';
    headingE2.style.zIndex = '1';
    
    headingRef.current.appendChild(headingE2);
    const textureLoader = new THREE.TextureLoader();

    const earthtexture = textureLoader.load(earthImage);
    const earthBumptext = textureLoader.load(earthBump);
    const galaxyTexture = textureLoader.load(galaxy);
    const earthCloud = textureLoader.load(cloud);
    // creating a scene
    const scene = new THREE.Scene();
    // creating a camera
    const camera = new THREE.PerspectiveCamera( 
      75, 
      window.innerWidth / window.innerHeight,
      0.1, 
      1000 
    );
    // creating renderer
    const canvas = document.querySelector('.homeCanvas')
    const renderer = new THREE.WebGLRenderer({canvas});
   
    // earth geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    // earth material
    const material = new THREE.MeshStandardMaterial({
      roughness: 1,
      metalness: 0,
      map: earthtexture,
      bumpMap: earthBumptext,
      bumpScale: 0.5
    });
    //earth mesh
     const earth = new THREE.Mesh(geometry, material);
     scene.add(earth);
    // cloud Geometry
    const cloudGeometry = new THREE.SphereGeometry(2.03, 32, 32);

    // cloud metarial
    const cloudMetarial = new THREE.MeshPhongMaterial({
    map: earthCloud,
    transparent: true,
    });

    // cloud mesh
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
    scene.add(cloudMesh);

    // galaxy geometry
    const galaxyGeometry = new THREE.SphereGeometry(80, 64, 64 ) 
    
    // galaxy material
    const galaxyMaterial = new THREE.MeshStandardMaterial({
      map: galaxyTexture,
      side: THREE.BackSide
    });
    const starMesh = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
    scene.add(starMesh);
    // lighting
    const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.set(8, 5, 5);
    scene.add(pointLight);
   
    //const controls = new OrbitControls(camera, renderer.domElement)
    // positioning the camera
    camera.position.z = 5;
    
    const animate = () =>{
      requestAnimationFrame(animate);
      // tilt the earth by 23.4 degrees
      earth.rotation.x = THREE.MathUtils.degToRad(23.4);
      earth.rotation.y -= 0.001
      starMesh.rotation.y +=0.003
      cloudMesh.rotation.y -= 0.001;
      //camera.rotation +=0.01
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera)
    }
    
    animate();
  },[])




  return (
    <div className='home' ref={headingRef}>
      
      <canvas className='homeCanvas'></canvas>
    
      <About />
      <Skill/>
      <Certificate/>
    </div>
  )
}

export default Home