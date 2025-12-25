// js/main.js
// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const bookSlotButtons = document.querySelectorAll('#book-slot-nav, #book-slot-mobile, #book-slot-hero, .book-free-footer');
const becomeMentorButtons = document.querySelectorAll('#become-mentor-nav, #become-mentor-mobile, #become-mentor-section, #become-mentor-motivation, .become-mentor-footer');
const bookingModalOverlay = document.getElementById('booking-modal-overlay');
const modalClose = document.getElementById('modal-close');
const bookingForm = document.getElementById('booking-form');
const confirmationModalOverlay = document.getElementById('confirmation-modal-overlay');
const closeConfirmationBtn = document.getElementById('close-confirmation-btn');
const addToCalendarBtn = document.getElementById('add-to-calendar-btn');
const mentorCardsContainer = document.getElementById('mentor-cards-container');
const domainFilter = document.getElementById('domain-filter');
const experienceFilter = document.getElementById('experience-filter');
const priceFilter = document.getElementById('price-filter');
const faqQuestions = document.querySelectorAll('.faq-question');
const purposeSelect = document.getElementById('purpose');
const customPurposeContainer = document.getElementById('custom-purpose-container');
const customPurpose = document.getElementById('custom-purpose');
const liquidButton = document.getElementById('liquid-button');
const liquidFormContainer = document.getElementById('liquid-form-container');
const liquidFormClose = document.getElementById('liquid-form-close');
const liquidSubmitBtn = document.getElementById('liquid-submit-btn');
const testimonialTrack = document.getElementById('testimonial-track');
const testimonialDots = document.getElementById('testimonial-dots');

// Mentor Data
const mentors = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Senior Product Manager",
        company: "Microsoft",
        experience: "12 years",
        domain: "product",
        tags: ["Product Strategy", "User Research", "Roadmapping"],
        rating: 4.9,
        sessions: 142,
        responseTime: "Within 4 hours",
        duration: "60 min",
        price: 2499,
        isVerified: true,
        available: "Available Today",
        avatarColor: "#6c63ff",
        avatarInitials: "SJ"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        role: "Lead Software Engineer",
        company: "Google",
        experience: "9 years",
        domain: "software",
        tags: ["System Design", "Backend", "Scalability"],
        rating: 4.8,
        sessions: 98,
        responseTime: "Within 6 hours",
        duration: "60 min",
        price: 1999,
        isVerified: true,
        available: "Available This Week",
        avatarColor: "#36d1dc",
        avatarInitials: "RK"
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "Data Science Director",
        company: "Amazon",
        experience: "14 years",
        domain: "data",
        tags: ["Machine Learning", "Analytics", "Big Data"],
        rating: 4.9,
        sessions: 176,
        responseTime: "Within 2 hours",
        duration: "60 min",
        price: 2999,
        isVerified: true,
        available: "Available Today",
        avatarColor: "#ff6584",
        avatarInitials: "PS"
    },
    {
        id: 4,
        name: "Michael Chen",
        role: "UX Design Lead",
        company: "Meta",
        experience: "8 years",
        domain: "design",
        tags: ["UI/UX", "Design Systems", "User Testing"],
        rating: 4.7,
        sessions: 87,
        responseTime: "Within 8 hours",
        duration: "45 min",
        price: 1799,
        isVerified: true,
        available: "Next Available Slot",
        avatarColor: "#10b981",
        avatarInitials: "MC"
    },
    {
        id: 5,
        name: "Ananya Patel",
        role: "Digital Marketing Head",
        company: "Flipkart",
        experience: "11 years",
        domain: "marketing",
        tags: ["Growth Marketing", "SEO", "Content Strategy"],
        rating: 4.8,
        sessions: 114,
        responseTime: "Within 12 hours",
        duration: "60 min",
        price: 1699,
        isVerified: true,
        available: "Available This Week",
        avatarColor: "#8b5cf6",
        avatarInitials: "AP"
    },
    {
        id: 6,
        name: "David Wilson",
        role: "Investment Banker",
        company: "Goldman Sachs",
        experience: "15 years",
        domain: "finance",
        tags: ["Finance", "Investment", "Career Growth"],
        rating: 4.9,
        sessions: 203,
        responseTime: "Within 24 hours",
        duration: "60 min",
        price: 3499,
        isVerified: true,
        available: "Next Available Slot",
        avatarColor: "#f59e0b",
        avatarInitials: "DW"
    },
    {
        id: 7,
        name: "Neha Gupta",
        role: "Tech Lead",
        company: "Infosys",
        experience: "7 years",
        domain: "software",
        tags: ["Full Stack", "JavaScript", "Cloud"],
        rating: 4.6,
        sessions: 65,
        responseTime: "Within 6 hours",
        duration: "45 min",
        price: 1499,
        isVerified: true,
        available: "Available Today",
        avatarColor: "#ef4444",
        avatarInitials: "NG"
    },
    {
        id: 8,
        name: "Arun Mehta",
        role: "Senior Consultant",
        company: "Deloitte",
        experience: "13 years",
        domain: "finance",
        tags: ["Consulting", "Strategy", "Management"],
        rating: 4.8,
        sessions: 132,
        responseTime: "Within 12 hours",
        duration: "60 min",
        price: 2299,
        isVerified: true,
        available: "Available This Week",
        avatarColor: "#3b82f6",
        avatarInitials: "AM"
    }
];

// Testimonial Data
const testimonials = [
    {
        id: 1,
        text: "Switched from marketing to product roles after understanding what recruiters actually look for. The guidance helped me focus my preparation.",
        name: "Priya Sharma",
        role: "Product Analyst",
        initials: "PS"
    },
    {
        id: 2,
        text: "My mentor helped me structure my interview answers and identify gaps I wasn't aware of. Felt more confident in interviews.",
        name: "Raj Patel",
        role: "Software Engineer",
        initials: "RP"
    },
    {
        id: 3,
        text: "As a fresher, I was confused about where to start. The session helped me decide a clear learning path.",
        name: "Ananya Roy",
        role: "UX Design Student",
        initials: "AR"
    },
    {
        id: 4,
        text: "Got clarity on whether I should switch jobs now or wait. That one conversation saved me months of confusion.",
        name: "Kunal Mehta",
        role: "Data Analyst",
        initials: "KM"
    },
    {
        id: 5,
        text: "The resume review was practical and honest. I finally understood why I wasn't getting shortlists.",
        name: "Neha Verma",
        role: "MBA Graduate",
        initials: "NV"
    },
    {
        id: 6,
        text: "Helped me evaluate multiple career options instead of blindly following trends.",
        name: "Rohit Singh",
        role: "Final Year Student",
        initials: "RS"
    },
    {
        id: 7,
        text: "The mentor gave me specific action items to improve my portfolio. Landed a design internship in 2 months.",
        name: "Sneha Reddy",
        role: "UI/UX Designer",
        initials: "SR"
    },
    {
        id: 8,
        text: "Learned how to negotiate my salary effectively. Got a 25% increase in my new job offer.",
        name: "Amit Joshi",
        role: "Business Analyst",
        initials: "AJ"
    }
];

// State variables
let currentMentorId = null;
let isFreeCallUsed = localStorage.getItem('freeCallUsed') === 'true';
let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
let testimonialIndex = 0;
let testimonialInterval;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render mentor cards
    renderMentorCards(mentors);
    
    // Render testimonials
    renderTestimonials();
    startTestimonialAutoSlide();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set minimum date for booking to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    document.getElementById('session-date').min = tomorrowFormatted;
    
    // Initialize liquid button effect
    initLiquidButton();
    
    // Check for bookings in localStorage
    updateBookingState();
});

// Setup all event listeners
function setupEventListeners() {
    // Mobile menu
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Book slot buttons
    bookSlotButtons.forEach(button => {
        if (button.classList.contains('book-free-footer')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openLiquidForm();
            });
        } else {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                // For hero and nav buttons, open the liquid form
                openLiquidForm();
            });
        }
    });
    
    // Become a mentor buttons
    becomeMentorButtons.forEach(button => {
        button.addEventListener('click', openMentorForm);
    });
    
    // Modal close buttons
    modalClose.addEventListener('click', closeBookingModal);
    closeConfirmationBtn.addEventListener('click', closeConfirmationModal);
    addToCalendarBtn.addEventListener('click', addToCalendar);
    
    // Form submission
    bookingForm.addEventListener('submit', handleBookingSubmit);
    
    // FAQ accordion
    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFaqAnswer);
    });
    
    // Filter changes
    domainFilter.addEventListener('change', filterMentors);
    experienceFilter.addEventListener('change', filterMentors);
    priceFilter.addEventListener('change', filterMentors);
    
    // Purpose select change
    purposeSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            customPurposeContainer.style.display = 'block';
            customPurpose.required = true;
        } else {
            customPurposeContainer.style.display = 'none';
            customPurpose.required = false;
        }
    });
    
    // Liquid form
    liquidFormClose.addEventListener('click', closeLiquidForm);
    liquidSubmitBtn.addEventListener('click', handleLiquidFormSubmit);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === bookingModalOverlay) {
            closeBookingModal();
        }
        if (e.target === confirmationModalOverlay) {
            closeConfirmationModal();
        }
        if (e.target === liquidFormContainer) {
            closeLiquidForm();
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);
}

// Mobile menu functions
function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Scroll handler for navbar
function handleScroll() {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-light)';
    }
}

// Render mentor cards
function renderMentorCards(mentorsToRender) {
    mentorCardsContainer.innerHTML = '';
    
    mentorsToRender.forEach(mentor => {
        const isFirstCallFree = !isFreeCallUsed;
        
        const mentorCard = document.createElement('div');
        mentorCard.className = 'mentor-card';
        mentorCard.dataset.id = mentor.id;
        mentorCard.dataset.domain = mentor.domain;
        mentorCard.dataset.experience = parseInt(mentor.experience);
        mentorCard.dataset.price = mentor.price;
        
        mentorCard.innerHTML = `
            <div class="mentor-card-header">
                <div class="mentor-avatar" style="background-color: ${mentor.avatarColor}">
                    ${mentor.avatarInitials}
                </div>
                <div class="mentor-info">
                    <div class="mentor-name-row">
                        <h3 class="mentor-name">${mentor.name}</h3>
                        ${mentor.isVerified ? '<div class="verified-badge"><i class="fas fa-check"></i> Verified</div>' : ''}
                    </div>
                    <p class="mentor-role">${mentor.role} at ${mentor.company}</p>
                    <div class="mentor-experience">
                        <i class="fas fa-briefcase"></i>
                        <span>${mentor.experience} experience</span>
                    </div>
                </div>
            </div>
            <div class="mentor-card-body">
                <div class="mentor-tags">
                    ${mentor.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="mentor-stats">
                    <div class="stat-item">
                        <span class="stat-label">Rating</span>
                        <span class="stat-value">${mentor.rating} <i class="fas fa-star" style="color: #f59e0b;"></i></span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Sessions</span>
                        <span class="stat-value">${mentor.sessions}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Response</span>
                        <span class="stat-value">${mentor.responseTime}</span>
                    </div>
                </div>
                ${isFirstCallFree ? 
                    `<div class="free-badge"><i class="fas fa-gift"></i> First Call Free</div>` : 
                    `<div class="paid-badge"><i class="fas fa-rupee-sign"></i> Paid Session</div>`
                }
                <div class="mentor-price">
                    <span class="price-label">${mentor.duration} session</span>
                    ${isFirstCallFree ? 
                        `<span class="price-amount">₹0</span>` : 
                        `<span class="price-amount">₹${mentor.price}</span>`
                    }
                </div>
                <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 15px;">
                    <i class="far fa-clock"></i> ${mentor.available}
                </p>
            </div>
            <div class="mentor-card-footer">
                <button class="btn btn-primary book-call-btn" data-mentor-id="${mentor.id}">
                    Book Call
                </button>
            </div>
        `;
        
        mentorCardsContainer.appendChild(mentorCard);
    });
    
    // Add event listeners to book call buttons
    document.querySelectorAll('.book-call-btn').forEach(button => {
        button.addEventListener('click', function() {
            const mentorId = parseInt(this.dataset.mentorId);
            openBookingModal(mentorId);
        });
    });
}

// Filter mentors
function filterMentors() {
    const domain = domainFilter.value;
    const experience = experienceFilter.value;
    const price = priceFilter.value;
    
    let filteredMentors = [...mentors];
    
    // Filter by domain
    if (domain !== 'all') {
        filteredMentors = filteredMentors.filter(mentor => mentor.domain === domain);
    }
    
    // Filter by experience
    if (experience !== 'all') {
        const minExperience = parseInt(experience);
        filteredMentors = filteredMentors.filter(mentor => {
            const mentorExp = parseInt(mentor.experience);
            return mentorExp >= minExperience;
        });
    }
    
    // Sort by price
    if (price === 'low') {
        filteredMentors.sort((a, b) => a.price - b.price);
    } else if (price === 'high') {
        filteredMentors.sort((a, b) => b.price - a.price);
    }
    
    renderMentorCards(filteredMentors);
}

// Open booking modal
function openBookingModal(mentorId) {
    currentMentorId = mentorId;
    const mentor = mentors.find(m => m.id === mentorId);
    
    if (!mentor) return;
    
    const isFreeSession = !isFreeCallUsed;
    
    // Update mentor info in modal
    document.getElementById('mentor-info-summary').innerHTML = `
        <div class="mentor-summary-avatar" style="background-color: ${mentor.avatarColor}">
            ${mentor.avatarInitials}
        </div>
        <div class="mentor-summary-info">
            <h4>${mentor.name}</h4>
            <p>${mentor.role} at ${mentor.company}</p>
        </div>
    `;
    
    // Update session details
    document.getElementById('session-type-display').textContent = isFreeSession ? 'Free Session' : 'Paid Session';
    document.getElementById('session-duration-display').textContent = mentor.duration;
    document.getElementById('session-price-display').textContent = isFreeSession ? '₹0' : `₹${mentor.price}`;
    
    // Show modal
    bookingModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close booking modal
function closeBookingModal() {
    bookingModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    bookingForm.reset();
    customPurposeContainer.style.display = 'none';
    currentMentorId = null;
}

// Handle booking form submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const mentor = mentors.find(m => m.id === currentMentorId);
    if (!mentor) return;
    
    const formData = new FormData(bookingForm);
    const name = formData.get('full-name');
    const email = formData.get('email');
    const purpose = formData.get('purpose') === 'other' ? formData.get('custom-purpose') : formData.get('purpose');
    const date = formData.get('session-date');
    const time = formData.get('session-time');
    
    // Generate unique seat ID
    const seatId = `CGX-${Math.floor(10000 + Math.random() * 90000)}`;
    
    // Create booking object
    const booking = {
        id: Date.now(),
        seatId,
        mentorId: currentMentorId,
        mentorName: mentor.name,
        name,
        email,
        purpose,
        date,
        time,
        isFree: !isFreeCallUsed,
        price: !isFreeCallUsed ? 0 : mentor.price,
        createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // If this was a free call, mark it as used
    if (!isFreeCallUsed) {
        isFreeCallUsed = true;
        localStorage.setItem('freeCallUsed', 'true');
    }
    
    // Update booking state
    updateBookingState();
    
    // Close booking modal
    closeBookingModal();
    
    // Show confirmation modal
    showConfirmationModal(booking);
}

// Show confirmation modal
function showConfirmationModal(booking) {
    const mentor = mentors.find(m => m.id === booking.mentorId);
    
    // Format date for display
    const dateObj = new Date(booking.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    // Update confirmation details
    document.getElementById('confirmation-mentor-name').textContent = mentor.name;
    document.getElementById('confirmation-session-time').textContent = `${formattedDate}, ${booking.time}`;
    document.getElementById('confirmation-session-type').textContent = booking.isFree ? 'Free Guidance Session' : 'Paid Session';
    document.getElementById('confirmation-seat-id').textContent = booking.seatId;
    
    // Update confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    if (booking.isFree) {
        confirmationMessage.innerHTML = `
            <p><strong>Your free guidance call is confirmed.</strong> You'll receive an email with the meeting link and details within 24 hours.</p>
        `;
        confirmationMessage.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    } else {
        confirmationMessage.innerHTML = `
            <p><strong>Your paid session is confirmed.</strong> You'll receive a payment link via email to complete your booking. The session will be confirmed once payment is received.</p>
        `;
        confirmationMessage.style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
    }
    
    // Show modal
    confirmationModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close confirmation modal
function closeConfirmationModal() {
    confirmationModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add to calendar
function addToCalendar() {
    alert('Calendar integration would be added here. For now, please add the session to your calendar manually.');
    closeConfirmationModal();
}

// Update booking state (re-render mentor cards if free call was used)
function updateBookingState() {
    if (isFreeCallUsed) {
        renderMentorCards(mentors);
    }
}

// FAQ toggle
function toggleFaqAnswer(e) {
    const question = e.currentTarget;
    const answer = question.nextElementSibling;
    
    // Close other open FAQs
    faqQuestions.forEach(q => {
        if (q !== question) {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    question.classList.toggle('active');
    answer.classList.toggle('active');
}

// Open mentor form (Google Form)
function openMentorForm() {
    window.open('https://forms.gle/ts52nUnJUDSyypux8', '_blank');
}

// Render testimonials
function renderTestimonials() {
    testimonialTrack.innerHTML = '';
    testimonialDots.innerHTML = '';
    
    // Duplicate testimonials for seamless loop
    const allTestimonials = [...testimonials, ...testimonials];
    
    allTestimonials.forEach((testimonial, index) => {
        // Create testimonial card
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.dataset.index = index;
        
        testimonialCard.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-divider"></div>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initials}</div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        
        testimonialTrack.appendChild(testimonialCard);
        
        // Create dot (only for original testimonials)
        if (index < testimonials.length) {
            const dot = document.createElement('div');
            dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            dot.addEventListener('click', () => goToTestimonial(index));
            testimonialDots.appendChild(dot);
        }
    });
    
    // Set initial position
    updateTestimonialPosition();
}

// Update testimonial position
function updateTestimonialPosition() {
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
    const gap = 30;
    const translateX = -(testimonialIndex * (cardWidth + gap));
    testimonialTrack.style.transform = `translateX(${translateX}px)`;
    
    // Update active dot
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        const dotIndex = parseInt(dot.dataset.index);
        const activeIndex = testimonialIndex % testimonials.length;
        dot.classList.toggle('active', dotIndex === activeIndex);
    });
}

// Go to specific testimonial
function goToTestimonial(index) {
    testimonialIndex = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

// Start auto slide for testimonials
function startTestimonialAutoSlide() {
    testimonialInterval = setInterval(() => {
        testimonialIndex++;
        updateTestimonialPosition();
        
        // Reset to beginning if at the end of original testimonials
        if (testimonialIndex >= testimonials.length) {
            setTimeout(() => {
                testimonialIndex = 0;
                updateTestimonialPosition();
            }, 800);
        }
    }, 5000);
}

// Reset testimonial interval
function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialAutoSlide();
}

// Initialize liquid button
function initLiquidButton() {
    liquidButton.addEventListener('click', openLiquidForm);
}

// Open liquid form with animation
function openLiquidForm() {
    // Add active class to button for animation
    liquidButton.classList.add('active');
    
    // Remove active class after animation completes
    setTimeout(() => {
        liquidButton.classList.remove('active');
    }, 500);
    
    // Show the liquid form with delay
    setTimeout(() => {
        liquidFormContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 300);
}

// Close liquid form
function closeLiquidForm() {
    liquidFormContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('liquid-full-name').value = '';
    document.getElementById('liquid-email').value = '';
    document.getElementById('liquid-purpose').value = '';
}

// Handle liquid form submission
function handleLiquidFormSubmit() {
    const name = document.getElementById('liquid-full-name').value.trim();
    const email = document.getElementById('liquid-email').value.trim();
    const purpose = document.getElementById('liquid-purpose').value;
    
    if (!name || !email || !purpose) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    
    // Create a simple booking for the liquid form
    const seatId = `CGX-${Math.floor(10000 + Math.random() * 90000)}`;
    
    // For the liquid form, we'll just show a success message
    closeLiquidForm();
    
    // Show a simple confirmation
    setTimeout(() => {
        alert(`Thank you, ${name}! Your free slot request has been received. We'll contact you at ${email} within 24 hours to schedule your session. Your reference ID: ${seatId}`);
    }, 300);
}