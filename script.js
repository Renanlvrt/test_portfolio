// ====================================================================
// RENAN LAVIROTTE - PORTFOLIO JAVASCRIPT
// Pure vanilla JavaScript with Three.js for 3D heart
// ====================================================================

// ============ TYPEWRITER EFFECT ============
const phrases = [
    "Building Technology That Saves Lives",
    "MEng Computer Science @ Durham",
    "Artificial Heart R&D Engineer",
    "Track & Field Team Captain",
    "Python • JavaScript • C • Assembly"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
        typewriterElement.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 80);
    } else if (isDeleting && charIndex > 0) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 50);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => { isDeleting = true; typeWriter(); }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter when page loads
setTimeout(typeWriter, 1000);

// ============ 3D HEART ANIMATION (Three.js) ============
const canvas = document.getElementById('heartCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

renderer.setSize(300, 300);
camera.position.z = 5;

// Create heart shape
const heartShape = new THREE.Shape();
heartShape.moveTo(0, 0);
heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);

const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
};

const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
const material = new THREE.MeshStandardMaterial({
    color: 0xEC4899,
    metalness: 0.3,
    roughness: 0.4,
    emissive: 0xEC4899,
    emissiveIntensity: 0.2
});

const heart = new THREE.Mesh(geometry, material);
scene.add(heart);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(10, 10, 10);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
pointLight2.position.set(-10, -10, -10);
scene.add(pointLight2);

// Animation loop
function animateHeart() {
    requestAnimationFrame(animateHeart);

    const time = Date.now() * 0.001;

    // Heartbeat effect
    const scale = 1 + Math.sin(time * 2.5) * 0.1 + Math.sin(time * 5) * 0.05;
    heart.scale.set(scale, scale, scale);

    // Gentle rotation
    heart.rotation.y = time * 0.2;

    renderer.render(scene, camera);
}

animateHeart();

// ============ PARTICLE SYSTEM ============
const particlesCanvas = document.getElementById('particles');
const ctx = particlesCanvas.getContext('2d');

function resizeParticles() {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
}

resizeParticles();
window.addEventListener('resize', resizeParticles);

const particles = [];
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = particlesCanvas.width;
        if (particle.x > particlesCanvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = particlesCanvas.height;
        if (particle.y > particlesCanvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`;
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

// ============ PROJECT DATA (FROM CV) ============
const projects = [
    {
        id: "artificial-heart",
        title: "Artificial Heart R&D",
        tagline: "Vienna Finals Selection - Medical Innovation",
        description: "Contributing to critical R&D initiatives within a 40-member engineering team selected for Vienna Finals hackathon, supporting design, prototyping, and testing of Total Artificial Heart systems for heart failure patients.",
        image: "Images/IMG_7703.jpg",
        technologies: ["CAD", "Prototyping", "Medical Engineering", "Systems Design"],
        teamSize: "40-member team",
        year: "Oct 2025 - Present",
        impact: "64M+ Patients"
    },
    {
        id: "vr-ibm",
        title: "VR Game with IBM AI Integration",
        tagline: "Adaptive Learning Through Immersive Technology",
        description: "Orchestrated a complex VR application combining 5-person team efforts across design, mechanics, and AI integration. Implemented IBM Granite AI API to deliver real-time adaptive feedback and conditional reasoning through interactive quizzes.",
        image: "Images/high school logo.PNG",
        technologies: ["Unity", "VR", "IBM Granite AI", "C#", "API Integration"],
        teamSize: "5-person team",
        year: "Sept 2025 - Ongoing",
        impact: "4 AI Modules"
    },
    {
        id: "robotics",
        title: "Autonomous Obstacle-Avoidance Robot",
        tagline: "Self-Navigating System with Real-Time Scanning",
        description: "Built an autonomous robot capable of obstacle avoidance using sensors and Python. Integrated servo motor controlled sensors that achieve real-time scanning of a 180-degree field, improving movement precision and environmental awareness.",
        image: "Images/arduino robot.jpg",
        technologies: ["Python", "Servo Motors", "Sensors", "Arduino"],
        teamSize: "Personal Project",
        year: "July 2025 - Sept 2025",
        impact: "50+ Tests"
    },
    {
        id: "track-field-website",
        title: "Track & Field Web Application",
        tagline: "Full-Stack Real-Time Data Platform",
        description: "Developed a full-stack Track & Field web app with JavaScript and RESTful APIs, enabling advanced athlete/sport search and real-time data retrieval. Designed robust GET/POST requests reducing server-side bugs by 85%.",
        image: "Images/track and field.JPG",
        technologies: ["JavaScript", "REST API", "Full-Stack", "Mobile-Responsive"],
        teamSize: "Personal Project",
        year: "Feb 2025 - April 2025",
        impact: "85% Bug Reduction"
    },
    {
        id: "discrete-math",
        title: "Discrete Mathematics Research",
        tagline: "Mathematical Partitions Theory",
        description: "Conducted research on mathematical partitions with a team of 5 mathematicians, proving key theorems and deriving new formulas through rigorous analysis. Produced a detailed 10-page report documenting proof strategies.",
        image: "Images/high school logo.PNG",
        technologies: ["Mathematical Proof", "Research", "LaTeX", "Theorem Proving"],
        teamSize: "5-person team",
        year: "March 2025 - May 2025",
        impact: "10-Page Report"
    }
];

// Load projects into grid
const projectsGrid = document.getElementById('projectsGrid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card fade-in';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" 
             onerror="this.style.background='linear-gradient(135deg, #0EA5E9, #EC4899)'; this.src='';">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tagline">${project.tagline}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-meta">
                <span>${project.teamSize}</span>
                <span>${project.year}</span>
                <span>${project.impact}</span>
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send to Web3Forms or your backend
    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #0EA5E9; font-size: 16px; font-weight: bold;');
console.log('%c💼 Built by Renan Lavirotte', 'color: #EC4899; font-size: 14px;');
