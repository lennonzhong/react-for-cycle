import "./../styles/reset.css";
import "./../styles/index.less";
import pic from './../images/box.jpg';
import texture from './../images/1.jpg'

var THREE = require('three');
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
class Index{
    constructor() {
        this.camera = null;
        this.renderer = null;
        this.scene = null;
        this.winRatio = null;
        this.init();
        this.initCamera();
        this.initRenderer();
        this.initControl();
        this.updateViews();

    }

    initControl() {
        new OrbitControls(this.camera, this.renderer.domElement);
    }

    updateViews() {
        let render = ()=> {
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(render);
        };
        render();
        
        window.addEventListener('resize', ()=>{
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        })
    }

    init() {
        let win_width = window.innerWidth;
        let win_height =  window.innerHeight;
        this.winRatio = win_width / win_height;
        
        this.initScene();
        this.addPlane({width:40, height: 40, widthSegments: 10,heightSegments:10, doubleSide: true});
        this.addBoxGeometry();

        this.addSpotLight();
    }

    addSpotLight() {
        var ambient = new THREE.AmbientLight(0xffffff);
        ambient.position.set(0,0,0);
        this.scene.add(ambient);
        // var bluePoint = new THREE.PointLight(0x0033ff, 1, 2000, 2);
        // bluePoint.position.set(0, 10, 10);
        // this.scene.add(bluePoint);
        // this.scene.add(new THREE.PointLightHelper(bluePoint, 1));
    }

    addPlane(params) {
        let plane = GeneratePlane(params);
        this.scene.add(plane);
    }
    addBoxGeometry() {
        let boxMesh = GenerateBox();
        boxMesh.position.set(10, 5, 0);
        boxMesh.rotation.x = -Math.PI / 2.4;

        setInterval(() => {
            boxMesh.rotation.z +=0.01;
        }, 10);
        this.scene.add(boxMesh);
    }

    initScene() {
        this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color( 0xcce0ff );
        // this.scene.fog = new THREE.Fog( "green", 80, 150);

        // 红色轴是X轴，绿色轴是Y轴，蓝色轴是Z轴
        var axisHelper = new THREE.AxisHelper(100);
        this.scene.add(axisHelper);
    }

    initCamera() {
        this.camera = new THREE.PerspectiveCamera(40, this.winRatio, 0.1, 1000);
        this.camera.position.set(0, 0,100);
        this.camera.lookAt(0,0,0);
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        this.renderer.setPixelRatio(this.winRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }
}


function GeneratePlane(material){
    let {width,height,widthSegments,heightSegments}  = material;
    // 四个参数 第一个参数是宽度， 第二个是高度， 第三个是宽度分段  第四个高度分段
    let geometry = new THREE.PlaneGeometry(width,height,widthSegments,heightSegments);
    
    let loader = new THREE.TextureLoader();
    let scenePic = loader.load(pic);
    // let meshMaterial = new THREE.MeshBasicMaterial({ map: scenePic})
    let meshMaterial = new THREE.MeshBasicMaterial({ map: scenePic})
    
    let plane = new THREE.Mesh(geometry, meshMaterial);
    plane.position.set(0,0,0);
    plane.rotation.x = -Math.PI / 2.4;
    return plane;
}

function GenerateBox() {
    var box = new THREE.CubeGeometry(10,10,10);
    var loader = new THREE.TextureLoader();
    var map = loader.load(texture);
    var material = new THREE.MeshBasicMaterial({map: map, side: THREE.DoubleSide});
    let boxMesh = new THREE.Mesh(box, material);
    return boxMesh;
}


export default new Index();