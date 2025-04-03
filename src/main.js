import './style.css';
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

// Initialize tsParticles
document.addEventListener('DOMContentLoaded', async function() {
  await loadSlim(tsParticles);
  
  await tsParticles.load("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#4f46e5"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4f46e5",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    polygon: {
      enable: true,
      type: "inline", // Options: "inline", "inside", "outside", "none"
      move: {
        radius: 10,
      },
      url: "path/to/your/polygon.svg", // Path to your SVG file
      scale: 1, // Scale of the polygon
      draw: {
        enable: true,
        stroke: {
          width: 1,
          color: "#ffffff",
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
  updateThemeIcon();
} else {
  // Use system preference if no saved preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    updateThemeIcon();
  }
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
  
  // Save preference
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  
  updateThemeIcon();
});

function updateThemeIcon() {
  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    
    // Update particles color for dark mode
    const container = tsParticles.domItem(0);
    if (container) {
      // Use the proper update methods
      container.options.color = {
        value: '#8f85ff'
      };
      
      if (container.options.particles) {
        container.options.particles.color = {
          value: '#8f85ff'
        };
        
        if (container.options.particles.links) {
          container.options.particles.links.color = '#8f85ff';
        }
      }
      
      // Refresh to apply changes
      container.refresh();
    }
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    
    // Update particles color for light mode
    const container = tsParticles.domItem(0);
    if (container) {
      // Use the proper update methods  
      container.options.color = {
        value: '#4f46e5'
      };
      
      if (container.options.particles) {
        container.options.particles.color = {
          value: '#4f46e5'
        };
        
        if (container.options.particles.links) {
          container.options.particles.links.color = '#4f46e5';
        }
      }
      
      // Refresh to apply changes
      container.refresh();
    }
  }
}

// Handle mobile navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // If on mobile, you could add code to close the menu here
  });
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Handle form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show a success message (in a real app)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
}

// Add animation to skill items when visible
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add a delay based on index for staggered animation
      setTimeout(() => {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}, {
  threshold: 0.1
});

skillItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  skillObserver.observe(item);
});

// Add scroll indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.className = 'scroll-indicator';
document.body.appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / maxScroll) * 100;
  
  scrollIndicator.style.width = `${scrollPercentage}%`;
});

// Add the CSS for the scroll indicator
const style = document.createElement('style');
style.textContent = `
  .scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background-color: var(--primary-color);
    z-index: 1001;
    width: 0%;
    transition: width 0.1s;
  }
`;
document.head.appendChild(style);