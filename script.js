// ===== ENHANCED PORTFOLIO JAVASCRIPT =====

// 1. SMOOTH SCROLLING NAVIGATION
function initSmoothScrolling() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 2. TYPING ANIMATION FOR HOMEPAGE
function initTypingAnimation() {
    const greetingElement = document.querySelector('.greeting');
    const nameElement = document.querySelector('.name-intro');
    
    if (greetingElement && nameElement) {
        const greetingText = "Hi, Welcome!";
        const nameText = "I'm Jeannette";
        
        // Clear existing text
        greetingElement.textContent = '';
        nameElement.innerHTML = '';
        
        // Type greeting first
        typeText(greetingElement, greetingText, 100, () => {
            // Then type name with highlight
            setTimeout(() => {
                nameElement.innerHTML = "I'm <span class='highlight'></span>";
                const highlightSpan = nameElement.querySelector('.highlight');
                typeText(highlightSpan, "Jeannette", 120);
            }, 500);
        });
    }
}

function typeText(element, text, speed, callback) {
    let i = 0;
    const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
}

// 3. ENHANCED GALLERY WITH MODAL
function initGalleryModal() {
    // Create modal HTML
    const modalHTML = `
        <div id="gallery-modal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img id="modal-img" src="" alt="">
                <div class="modal-info">
                    <h3 id="modal-title"></h3>
                    <p id="modal-description"></p>
                    <button id="modal-link" class="btn">Learn More</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles
    const modalStyles = `
        <style>
        .modal {
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            backdrop-filter: blur(5px);
        }
        .modal-content {
            position: relative;
            background: linear-gradient(135deg, #1f2937, #374151);
            margin: 5% auto;
            padding: 30px;
            border-radius: 16px;
            width: 80%;
            max-width: 600px;
            text-align: center;
            animation: modalSlideIn 0.3s ease-out;
        }
        @keyframes modalSlideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .close-modal {
            position: absolute;
            top: 15px;
            right: 25px;
            font-size: 30px;
            font-weight: bold;
            color: #00bfff;
            cursor: pointer;
        }
        .close-modal:hover {
            color: #fff;
        }
        #modal-img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin-bottom: 20px;
        }
        .modal-info h3 {
            color: #00bfff;
            margin-bottom: 10px;
        }
        .modal-info p {
            color: #ccc;
            margin-bottom: 20px;
        }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', modalStyles);
    
    // Modal functionality
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-modal');
    
    // Gallery click handlers
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const figure = this.closest('figure');
            const caption = figure ? figure.querySelector('figcaption') : null;
            
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalTitle.textContent = this.alt;
            modalDesc.textContent = caption ? caption.textContent : '';
            
            // Set link based on image
            if (this.alt.toLowerCase().includes('bts')) {
                modalLink.onclick = () => window.open('https://ibighit.com/bts/eng/', '_blank');
            } else if (this.alt.toLowerCase().includes('laufey')) {
                modalLink.onclick = () => window.open('https://www.laufeymusic.com/', '_blank');
            } else if (this.alt.toLowerCase().includes('hunter')) {
                modalLink.onclick = () => window.open('https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011', '_blank');
            } else {
                modalLink.style.display = 'none';
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', closeModalFunc);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModalFunc();
    });
    
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    });
}

// 4. CONTACT FORM ENHANCEMENT
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    const submitBtn = form.querySelector('button');
    
    // Add form validation
    function validateForm() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!name) {
            showNotification('Please enter your name', 'error');
            return false;
        }
        if (!email || !emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return false;
        }
        if (!message) {
            showNotification('Please enter a message', 'error');
            return false;
        }
        
        return true;
    }
    
    // Form submission
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate form submission
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully! Thank you for reaching out.', 'success');
                form.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 2000);
        }
    });
    
    // Input animations
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.borderLeft = '4px solid #00bfff';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.borderLeft = 'none';
        });
    });
}

// 5. NOTIFICATION SYSTEM
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const styles = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1001;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    notification.style.cssText = styles;
    
    // Add animation styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const animationStyles = document.createElement('style');
        animationStyles.id = 'notification-styles';
        animationStyles.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(animationStyles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 4000);
}

// 6. SCROLL ANIMATIONS
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}

// 7. NAVBAR SCROLL EFFECT
function initNavbarScrollEffect() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(17, 24, 39, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#111827';
            header.style.backdropFilter = 'none';
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    header.style.transition = 'all 0.3s ease-out';
}

// 8. ENHANCED ALERT FUNCTION (Replacement for alert.js)
function showAlert(name, url) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1002;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1f2937, #374151);
            padding: 30px;
            border-radius: 16px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            color: white;
            animation: modalSlideIn 0.3s ease-out;
        ">
            <h3 style="color: #00bfff; margin-bottom: 20px;">
                Wanna know more about ${name}?
            </h3>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="yes-btn" style="
                    background: #00bfff;
                    color: #000;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.3s ease;
                ">Yes, take me there!</button>
                <button id="no-btn" style="
                    background: transparent;
                    color: #00bfff;
                    border: 2px solid #00bfff;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.3s ease;
                ">Maybe later</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Button event listeners
    modal.querySelector('#yes-btn').addEventListener('click', () => {
        showNotification('Great! Taking you to their page!', 'success');
        setTimeout(() => {
            window.open(url, '_blank');
        }, 1000);
        closeModal();
    });
    
    modal.querySelector('#no-btn').addEventListener('click', () => {
        showNotification('Meh not cool :<', 'info');
        closeModal();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    function closeModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
    
    // Escape key to close
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// 9. BLOG POST READING TIME
function initReadingTime() {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        const text = article.textContent || article.innerText;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
        
        const timeElement = document.createElement('div');
        timeElement.style.cssText = `
            color: #00bfff;
            font-size: 14px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
        timeElement.innerHTML = `📖 ${readingTime} min read`;
        
        const h2 = article.querySelector('h2');
        if (h2) {
            h2.insertAdjacentElement('afterend', timeElement);
        }
    });
}

// 10. INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScrollEffect();
    initContactForm();
    initReadingTime();
    
    // Page-specific initializations
    if (document.querySelector('.greeting')) {
        setTimeout(initTypingAnimation, 500);
    }
    
    if (document.querySelector('.gallery')) {
        initGalleryModal();
    }
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to Jeannette\'s Portfolio! 🎉', 'success');
    }, 1000);
});

// 11. UTILITY FUNCTIONS
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Expose showAlert globally for gallery.html onclick events
window.showAlert = showAlert;