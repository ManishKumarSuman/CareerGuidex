
        // WhatsApp phone number (can be changed)
        const whatsappNumber = "919583438210"; // Format: country code + number without +
        
        // Current mentor for booking
        let currentMentor = null;
        let selectedDate = null;
        let selectedTime = null;
        
        // DOM Elements
        const navbar = document.getElementById('navbar');
        const bookFreeSessionBtn = document.getElementById('bookFreeSessionBtn');
        const heroBookBtn = document.getElementById('heroBookBtn');
        const calendarModal = document.getElementById('calendarModal');
        const closeModal = document.getElementById('closeModal');
        const cancelBookingBtn = document.getElementById('cancelBookingBtn');
        const confirmBookingBtn = document.getElementById('confirmBookingBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const mentorsCarousel = document.getElementById('mentorsCarousel');
        const bookMentorBtns = document.querySelectorAll('.book-mentor-btn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        
        // Calendar elements
        const currentMonthEl = document.getElementById('currentMonth');
        const calendarDaysEl = document.getElementById('calendarDays');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const timeSlots = document.querySelectorAll('.time-slot');
        const modalMentorName = document.getElementById('modalMentorName');
        const modalMentorRole = document.getElementById('modalMentorRole');
        
        // Calendar state
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        
        // ============ NAVBAR SCROLL EFFECT ============
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // ============ MOBILE MENU TOGGLE ============
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                navLinks.style.gap = '20px';
            }
        });
        
        // ============ SMOOTH SCROLLING ============
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.style.display = 'none';
                }
            });
        });
        
        // ============ MENTOR CAROUSEL ============
        prevBtn.addEventListener('click', () => {
            mentorsCarousel.scrollBy({
                left: -350,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', () => {
            mentorsCarousel.scrollBy({
                left: 350,
                behavior: 'smooth'
            });
        });
        
        // ============ OPEN CALENDAR MODAL ============
        function openCalendarModal(mentorCard) {
            currentMentor = {
                name: mentorCard.getAttribute('data-mentor'),
                role: mentorCard.getAttribute('data-role'),
                price: mentorCard.getAttribute('data-price')
            };
            
            modalMentorName.textContent = `Book Session with ${currentMentor.name}`;
            modalMentorRole.textContent = currentMentor.role;
            
            // Reset selections
            selectedDate = null;
            selectedTime = null;
            document.querySelectorAll('.time-slot.selected').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Generate calendar
            generateCalendar(currentYear, currentMonth);
            
            // Show modal
            calendarModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        // ============ CLOSE CALENDAR MODAL ============
        function closeCalendarModal() {
            calendarModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Book Free Session button
        bookFreeSessionBtn.addEventListener('click', () => {
            // For free session, we'll open WhatsApp directly
            const message = `Hello CareerGuidex Team 👋
I am contacting through the CareerGuidex website to book a FREE career guidance session.

I'm looking for guidance on my career direction and would like to know the next steps.

Please share available time slots for a free 15-minute session.

Thank you.`;
            
            openWhatsApp(message);
        });
        
        // Hero Book button
        heroBookBtn.addEventListener('click', () => {
            bookFreeSessionBtn.click();
        });
        
        // Mentor Book buttons
        bookMentorBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const mentorCard = this.closest('.mentor-card');
                openCalendarModal(mentorCard);
            });
        });
        
        // Close modal buttons
        closeModal.addEventListener('click', closeCalendarModal);
        cancelBookingBtn.addEventListener('click', closeCalendarModal);
        
        // Close modal when clicking outside
        calendarModal.addEventListener('click', (e) => {
            if (e.target === calendarModal) {
                closeCalendarModal();
            }
        });
        
        // ============ CALENDAR LOGIC ============
        function generateCalendar(year, month) {
            // Update month display
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            currentMonthEl.textContent = `${monthNames[month]} ${year}`;
            
            // Clear previous days
            calendarDaysEl.innerHTML = '';
            
            // Get first day of month and total days
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const totalDays = lastDay.getDate();
            const firstDayIndex = firstDay.getDay();
            
            // Previous month days
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            for (let i = firstDayIndex; i > 0; i--) {
                const day = document.createElement('div');
                day.classList.add('calendar-day', 'disabled');
                day.textContent = prevMonthLastDay - i + 1;
                calendarDaysEl.appendChild(day);
            }
            
            // Current month days
            const today = new Date();
            for (let i = 1; i <= totalDays; i++) {
                const day = document.createElement('div');
                day.classList.add('calendar-day');
                day.textContent = i;
                
                // Disable past dates
                if (year < today.getFullYear() || 
                    (year === today.getFullYear() && month < today.getMonth()) ||
                    (year === today.getFullYear() && month === today.getMonth() && i < today.getDate())) {
                    day.classList.add('disabled');
                } else {
                    day.addEventListener('click', () => selectDate(day, i));
                }
                
                // Mark today
                if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                    day.style.border = '2px solid var(--primary)';
                }
                
                calendarDaysEl.appendChild(day);
            }
            
            // Next month days (to fill the grid)
            const totalCells = 42; // 6 weeks * 7 days
            const nextDays = totalCells - (firstDayIndex + totalDays);
            for (let i = 1; i <= nextDays; i++) {
                const day = document.createElement('div');
                day.classList.add('calendar-day', 'disabled');
                day.textContent = i;
                calendarDaysEl.appendChild(day);
            }
        }
        
        // Select date
        function selectDate(dayElement, day) {
            // Remove previous selection
            document.querySelectorAll('.calendar-day.selected').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Add selection
            dayElement.classList.add('selected');
            selectedDate = `${day}/${currentMonth + 1}/${currentYear}`;
        }
        
        // Select time slot
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Remove previous selection
                document.querySelectorAll('.time-slot.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                
                // Add selection
                this.classList.add('selected');
                selectedTime = this.textContent;
            });
        });
        
        // Calendar navigation
        prevMonthBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentYear, currentMonth);
        });
        
        nextMonthBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentYear, currentMonth);
        });
        
        // ============ WHATSAPP INTEGRATION ============
        function openWhatsApp(message) {
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        }
        
        // Confirm booking
        confirmBookingBtn.addEventListener('click', () => {
            if (!selectedDate || !selectedTime) {
                alert('Please select both date and time for your session.');
                return;
            }
            
            if (!currentMentor) {
                alert('No mentor selected. Please try again.');
                return;
            }
            
            const message = `Hello CareerGuidex Team 👋
I would like to book a PAID session with a mentor through your website.

Mentor Details:
Name: ${currentMentor.name}
Role: ${currentMentor.role}
Session Price: ₹${currentMentor.price}

Selected Time:
Date: ${selectedDate}
Time: ${selectedTime}

Please confirm the booking and share payment details.

Thank you.`;
            
            closeCalendarModal();
            setTimeout(() => {
                openWhatsApp(message);
            }, 300);
        });
        
        // ============ INITIALIZE ============
        document.addEventListener('DOMContentLoaded', () => {
            // Initial calendar generation
            generateCalendar(currentYear, currentMonth);
            
            // Add animations on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            }, observerOptions);
            
            // Observe elements for animation
            document.querySelectorAll('.step-card, .mentor-card, .testimonial-card').forEach(el => {
                observer.observe(el);
            });
            
            console.log('CareerGuidex Website Loaded Successfully!');
        });

        

        
        