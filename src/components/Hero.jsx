import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById('threejs-container-ANIMATION_1');
    if (container && window.THREE) {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      const geometry = new window.THREE.IcosahedronGeometry(2, 1);
      const material = new window.THREE.MeshPhongMaterial({
        color: 0x06B6D4,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      const sphere = new window.THREE.Mesh(geometry, material);
      scene.add(sphere);

      const particlesGeometry = new window.THREE.BufferGeometry();
      const particlesCount = 500;
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }
      particlesGeometry.setAttribute('position', new window.THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new window.THREE.PointsMaterial({
        size: 0.02,
        color: 0xA855F7
      });
      const particlesMesh = new window.THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      const light = new window.THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 2);
      scene.add(light);
      scene.add(new window.THREE.AmbientLight(0x404040));

      camera.position.z = 5;
      let mouseX = 0;
      let mouseY = 0;
      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) - 0.5;
        mouseY = (event.clientY / window.innerHeight) - 0.5;
      };
      window.addEventListener('mousemove', handleMouseMove);

      let animationId;
      function animate() {
        animationId = requestAnimationFrame(animate);
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
        particlesMesh.rotation.y += 0.001;
        sphere.position.x += (mouseX * 2 - sphere.position.x) * 0.05;
        sphere.position.y += (-mouseY * 2 - sphere.position.y) * 0.05;
        renderer.render(scene, camera);
      }
      animate();

      const handleResize = () => {
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationId);
        container.innerHTML = '';
      };
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-transparent -z-10" style={{ display: 'block' }}>
        <div id="threejs-container-ANIMATION_1" style={{ width: '100%', height: '100%' }}></div>
      </div>

      <section className="relative min-h-[100svh] py-32 lg:py-0 flex items-center justify-center overflow-x-hidden">
        <div className="relative z-10 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="font-label-mono text-label-mono text-secondary uppercase tracking-[0.2em] block mb-4">Hi, I'm Bhupendra Patil</span>
              <h1 className="font-display text-display text-on-surface leading-none mb-6">
                Full-Stack <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Developer</span>
              </h1>
            </div>
            <div className="glass-panel p-8 rounded-xl max-w-xl">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Building high-performance web applications with a focus on modern architectures, scalable backends, and pixel-perfect user experiences. Turning complex problems into elegant code.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <a href="/assets/pdf/Bhupendra__Patil__Resume.pdf" download="Bhupendra_Patil_Resume.pdf" className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold px-8 py-4 rounded-lg flex items-center gap-2 transition-all neon-glow-primary active:scale-95">
                <span className="material-symbols-outlined">download</span> Download Resume
              </a>
              <a href="/assets/pdf/Bhupendra__Patil__Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-secondary text-secondary font-bold px-8 py-4 rounded-lg hover:bg-secondary/10 transition-all active:scale-95 flex items-center justify-center">
                View Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl animate-pulse"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] rotate-3 transition-transform hover:rotate-0 duration-500 group">
                <img className="w-full h-full object-cover scale-100 transition-all duration-500 group-hover:scale-105" src="/assets/Bhupendra.webp" alt="Bhupendra Patil Profile" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 md:bottom-10 inset-x-0 w-full flex flex-col items-center justify-center gap-2 animate-bounce opacity-50 pointer-events-none">
          <span className="font-label-mono text-label-mono">Scroll</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
