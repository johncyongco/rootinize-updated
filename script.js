// Rootinize - Premium AI Automation Agency
// Enhanced with smooth animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            if (navLinks) {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(10, 10, 15, 0.95)';
                navLinks.style.backdropFilter = 'blur(20px)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                navLinks.style.zIndex = '1000';
                navLinks.style.gap = '1.5rem';
            }
            
            // Toggle CTA button
            if (navCta) {
                navCta.style.display = navCta.style.display === 'block' ? 'none' : 'block';
                navCta.style.marginTop = '1.5rem';
                navCta.style.width = '100%';
                navCta.style.textAlign = 'center';
            }
            
            // Change icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = isExpanded ? 'fas fa-bars' : 'fas fa-times';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
                    menuToggle.click();
                }
                
                // Calculate position with navbar offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .work-card, .benefit-card, .testimonial-card, .faq-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Trust items animation
    const trustItems = document.querySelectorAll('.trust-item');
    trustItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.forEach(stat => {
                        const target = parseInt(stat.textContent);
                        const suffix = stat.textContent.replace(/[0-9]/g, '');
                        animateCounter(stat, target, suffix);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        statsObserver.observe(document.querySelector('.hero-stats'));
    }
    
    // Counter animation function
    function animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 30);
    }
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.backgroundPosition = `center ${rate}px`;
        }
        
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrolled > 50) {
                navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.9)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        }
    });
    
    // Add loading animation to buttons on click
    const buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                const originalText = this.innerHTML;
                this.innerHTML = '<span class="loading-dots"><span></span><span></span><span></span></span>';
                this.style.pointerEvents = 'none';
                
                // Simulate API call
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.textContent = 'Request sent successfully!';
                    successMsg.style.position = 'fixed';
                    successMsg.style.top = '20px';
                    successMsg.style.right = '20px';
                    successMsg.style.background = 'linear-gradient(135deg, #8b5cf6, #6d28d9)';
                    successMsg.style.color = 'white';
                    successMsg.style.padding = '1rem 1.5rem';
                    successMsg.style.borderRadius = '8px';
                    successMsg.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.2)';
                    successMsg.style.zIndex = '9999';
                    successMsg.style.fontWeight = '500';
                    successMsg.style.animation = 'fadeInUp 0.3s ease';
                    
                    document.body.appendChild(successMsg);
                    
                    setTimeout(() => {
                        successMsg.style.animation = 'fadeInUp 0.3s ease reverse';
                        setTimeout(() => {
                            document.body.removeChild(successMsg);
                        }, 300);
                    }, 3000);
                }, 1500);
            }
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
            menuToggle.click();
        }
        
        // Tab key navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add focus styles for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            if (document.body.classList.contains('keyboard-navigation')) {
                this.style.outline = '2px solid #8b5cf6';
                this.style.outlineOffset = '2px';
            }
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Initialize animations on load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Add CSS for loaded state
    const style = document.createElement('style');
    style.textContent = `
        body.loaded .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .keyboard-navigation a:focus,
        .keyboard-navigation button:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation textarea:focus,
        .keyboard-navigation select:focus {
            outline: 2px solid #8b5cf6 !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Rootinize Premium AI Automation Agency initialized');
});