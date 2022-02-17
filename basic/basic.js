import * as THREE from '../libs/three.module.js';

class App {
    constructor(){
        const divContainer = document.getElementById('webgl-container');
        this._divContainer = divContainer;
        const renderer = new THREE.WebGLRenderer({ antialias: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

