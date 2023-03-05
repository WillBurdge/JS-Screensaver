const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 55;
for (let i = 0; i < numParticles; i++) {
    const size = Math.random() * 200 + 10;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const dx = Math.random() * 2 - 1;
    const dy = Math.random() * 2 - 1;
    const color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
    particles.push({ x, y, dx, dy, size, color });
}

function animate() {
    requestAnimationFrame(animate);
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.closePath();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) {
            p.dx = -p.dx;
        }
        if (p.y < 0 || p.y > canvas.height) {
            p.dy = -p.dy;
        }
    }
}

animate();