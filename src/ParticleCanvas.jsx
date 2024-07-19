import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']; // Google logo colors
    const particlesArray = [];
    let hue = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 3; // Increase size range here
        this.baseSpeedX = (Math.random() - 0.5) * 1; // Base speed in X direction
        this.baseSpeedY = (Math.random() - 0.5) * 1; // Base speed in Y direction
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150; // Increased distance to make the attraction effect more noticeable

        if (distance < maxDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          const accelerationX = forceDirectionX * force * 2; // Increased force multiplier for stronger attraction
          const accelerationY = forceDirectionY * force * 2;

          this.speedX += accelerationX;
          this.speedY += accelerationY;
        } else {
          // Apply base speed if not attracted
          this.speedX = this.baseSpeedX;
          this.speedY = this.baseSpeedY;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.05;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesArray.length = 0;
      for (let i = 0; i < 200; i++) { // Increased number of particles for better effect
        particlesArray.push(new Particle());
      }
    };

    const handleResize = () => {
      resizeCanvas();
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle, index) => {
        particle.update(mouseX, mouseY);
        particle.draw();
        if (particle.size <= 0.2) {
          particlesArray.splice(index, 1);
          particlesArray.push(new Particle());
        }
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" style={{ display: 'block' }} />;
};

export default ParticleCanvas;
