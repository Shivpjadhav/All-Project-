// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Page Transition
    const pageTransition = document.querySelector('.page-transition');
    
    // Show transition on page load
    pageTransition.classList.add('active');
    
    // Hide transition after page loads
    setTimeout(() => {
      pageTransition.classList.remove('active');
    }, 500);
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
    
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      // Save preference to localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Typing Effect
    if (document.querySelector('.typing')) {
      const options = {
        strings: ['Full-Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 1500
      };
      
      const Typed = window.Typed; // Declare Typed variable
      new Typed('.typing', options);
    }
    
    // Tilt Effect
    if (document.querySelector('.tilt-effect')) {
      const VanillaTilt = window.VanillaTilt; // Declare VanillaTilt variable
      VanillaTilt.init(document.querySelectorAll('.tilt-effect'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    }
    
    // Particles Background
    if (document.getElementById('particles-js')) {
      const particlesJS = window.particlesJS; // Declare particlesJS variable
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#4f46e5'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#4f46e5',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
    
    // Skill Progress Bars Animation
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
      progressBars.forEach(progress => {
        const width = progress.getAttribute('data-width');
        progress.style.width = width + '%';
      });
    }
    
    // Skills Category Tabs
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillGroups = document.querySelectorAll('.skills-group');
    
    skillCategories.forEach(category => {
      category.addEventListener('click', () => {
        // Remove active class from all categories
        skillCategories.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked category
        category.classList.add('active');
        
        // Show corresponding skill group
        const categoryName = category.getAttribute('data-category');
        
        skillGroups.forEach(group => {
          if (group.getAttribute('data-category') === categoryName) {
            group.classList.add('active');
            
            // Animate progress bars when tab is active
            setTimeout(animateProgressBars, 100);
          } else {
            group.classList.remove('active');
          }
        });
      });
    });
    
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          card.classList.add('fade-out');
          
          setTimeout(() => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
            
            setTimeout(() => {
              card.classList.remove('fade-out');
            }, 50);
          }, 300);
        });
      });
    });
    
    // Testimonial Slider
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    let currentSlide = 0;
    
    function goToSlide(index) {
      testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
      
      // Update dots
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      testimonialDots[index].classList.add('active');
      
      currentSlide = index;
    }
    
    // Next button
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        goToSlide(currentSlide);
      });
    }
    
    // Previous button
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        goToSlide(currentSlide);
      });
    }
    
    // Dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });
    
    // Auto slide
    setInterval(() => {
      if (testimonialSlides.length > 1) {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        goToSlide(currentSlide);
      }
    }, 5000);
    
    // Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log({ name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Show page transition
          pageTransition.classList.add('active');
          
          setTimeout(() => {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
            
            // Hide page transition
            setTimeout(() => {
              pageTransition.classList.remove('active');
            }, 300);
          }, 300);
        }
      });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      // Show page transition
      pageTransition.classList.add('active');
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Hide page transition
        setTimeout(() => {
          pageTransition.classList.remove('active');
        }, 300);
      }, 300);
    });
    
    // Scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes based on element type
          if (entry.target.classList.contains('skill-card')) {
            entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.05}s`;
            entry.target.classList.add('animate');
          } else if (entry.target.classList.contains('project-card')) {
            entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1}s`;
            entry.target.classList.add('animate');
          } else if (entry.target.classList.contains('timeline-item')) {
            entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1}s`;
            entry.target.classList.add('animate');
          } else if (entry.target.classList.contains('reveal-text')) {
            entry.target.style.animationDelay = `${0.1}s`;
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.add('animate');
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card, .timeline-item, .reveal-text, .education-card').forEach(element => {
      observer.observe(element);
    });
    
    // Animate progress bars when skills section is in view
    const skillsSection = document.querySelector('.skills');
    
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
          skillsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }
    
    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .animate {
        animation: fadeIn 0.5s ease forwards;
      }
      
      .skill-card.animate {
        animation: fadeIn 0.5s ease forwards;
      }
      
      .project-card.animate {
        animation: fadeIn 0.5s ease forwards;
      }
      
      .timeline-item.animate {
        animation: fadeInLeft 0.5s ease forwards;
      }
      
      .reveal-text.animate::after {
        animation: reveal 0.5s ease forwards;
      }
      
      .hamburger.active span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      
      .hamburger.active span:nth-child(2) {
        opacity: 0;
      }
      
      .hamburger.active span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
      
      .btn-effect:hover {
        animation: pulse 1s infinite;
      }
    `;
    document.head.appendChild(style);
  });