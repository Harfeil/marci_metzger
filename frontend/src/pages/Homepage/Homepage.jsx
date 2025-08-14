import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Homepage.css'

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showHoursDropdown, setShowHoursDropdown] = useState(false)
  
  const galleryImages = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png"
  ]

  // Office hours data
  const officeHours = [
    { day: 'Mon', fullDay: 'Monday', hours: '08:00 am – 07:00 pm' },
    { day: 'Tue', fullDay: 'Tuesday', hours: '08:00 am – 07:00 pm' },
    { day: 'Wed', fullDay: 'Wednesday', hours: '08:00 am – 07:00 pm' },
    { day: 'Thu', fullDay: 'Thursday', hours: '08:00 am – 07:00 pm' },
    { day: 'Fri', fullDay: 'Friday', hours: '08:00 am – 07:00 pm' },
    { day: 'Sat', fullDay: 'Saturday', hours: '08:00 am – 07:00 pm' },
    { day: 'Sun', fullDay: 'Sunday', hours: '08:00 am – 07:00 pm' }
  ]

  // Get current day
  const getCurrentDay = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const today = new Date().getDay()
    return days[today]
  }

  const currentDay = getCurrentDay()
  const todayHours = officeHours.find(day => day.day === currentDay)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showHoursDropdown && !event.target.closest('.today-hours-dropdown')) {
        setShowHoursDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showHoursDropdown])

  // Auto slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  // Update main image when currentImageIndex changes
  useEffect(() => {
    const mainImage = document.getElementById('main-gallery-image')
    if (mainImage) {
      mainImage.src = galleryImages[currentImageIndex]
    }
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail')
    thumbnails.forEach((thumb, index) => {
      if (index === currentImageIndex) {
        thumb.classList.add('active')
      } else {
        thumb.classList.remove('active')
      }
    })
  }, [currentImageIndex, galleryImages])

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1)
    } else {
      setCurrentImageIndex(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1)
    }
  }

  const setCurrentImage = (index) => {
    setCurrentImageIndex(index)
  }
  return (    
    <>
      <Navbar />
      <div className='homepage'>
        <h5>NARCU NETZGER - THE RIDGE REALTY GROUP</h5>
        <h3>PAHRUMP REALTOR</h3>
        <button className='callNow-button'>Call Now</button>
      </div>
      <div className='second-container'>
        <h3>MARCI METZGER</h3>
        <div>
          <img src="/images/marci_metzger.png" alt="Marci Metzger" />
        </div>
        <h4>REALTOR FOR NEARLY 3 DECADES!</h4>
        <h5>206-919-6886</h5>
      </div>
      <div className='third-container'>
        <h1>
          GET IT SOLD
        </h1>
        <div className='residential1-container'>
          <div className='residential1-img'>
            <img src="/images/residential1.png" alt="Residential 1" />
          </div>
          <div className='residential1-text'>
            <h2>Top Residential Sales Last 5 Years</h2>
            <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
            Our team works hard everyday to grow and learn, so that we may continue to
            excel in our market. Our clients deserve our best, & we want to make sure our
            best is better every year.
            </p>
          </div>
        </div>
        <div className='residential2-container'>
          <div className='residential2-img'>
            <img src="/images/residential2.png" alt="Residential 2" />
          </div>
          <div className='residential2-text'>
            <h2>Don't Just List it...</h2>
            <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the
              fingertips of every possible buyer, getting you top dollar for your home.
            </p>
          </div>
        </div>
        <div className='residential3-container'>
          <div className='residential3-img'>
            <img src="/images/residential3.png" alt="Residential 3" />
          </div>
          <div className='residential3-text'>
            <h2>Guide to Buyers</h2>
            <p>Nobody knows the market like we do. Enjoy having a pro at your service.
              Market analysis, upgrades lists, contractors on speed dial, & more!
            </p>
          </div>
        </div>
      </div>
      <div className='fourth-container'>
        <h1>FIND YOUR DREAM HOME</h1>
        <div className='search-form'>
          <h2 className='search_tag'>Search Listings</h2>
          
          <div className='form-row'>
            <div className='form-group'>
              <label>Location</label>
              <select>
                <option value="">Select Location</option>
                <option value="pahrump">Pahrump</option>
                <option value="las-vegas">Las Vegas</option>
                <option value="henderson">Henderson</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Type</label>
              <select>
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Sort By</label>
              <select>
                <option value="">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
          
          <div className='form-row-2'>
            <div className='form-group'>
              <label>Bedrooms</label>
              <select>
                <option value="">Any Number</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Baths</label>
              <select>
                <option value="">Any Number</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Min Price</label>
              <input type="text" placeholder="$0" className="price-input" />
            </div>
            <div className='form-group'>
              <label>Max Price</label>
              <input type="text" placeholder="No Max" className="price-input" />
            </div>
          </div>
          
          <button className='search-button'>Search Now</button>
        </div>
      </div>
      <div className='fifth-container'>
        <div className='logo1'>
          <img src="/images/ridge.png" alt="Logo 1" />
        </div>
        <div className='logo2'>
          <img src="/images/equal_housing.png" alt="Logo 2" />
        </div>
        <div className='logo3'>
          <img src="/images/realtor.png" alt="Logo 3" />
        </div>
        <div className='logo4'>
          <img src="/images/pahrump_valley.png" alt="Logo 4" />
        </div>
      </div>
      <div className='sixth-container'>
        <h1>PHOTO GALLERY</h1>
        <div className='gallery-container'>
          <div className='main-image-container'>
            <button className='nav-button nav-left' onClick={() => changeImage('prev')}>
              <span>‹</span>
            </button>
            <img 
              src="/images/gallery1.png" 
              alt="Gallery Image" 
              className='main-gallery-image'
              id='main-gallery-image'
            />
            <button className='nav-button nav-right' onClick={() => changeImage('next')}>
              <span>›</span>
            </button>
          </div>
          <div className='thumbnail-container'>
            <img 
              src="/images/gallery1.png" 
              alt="Thumbnail 1" 
              className='thumbnail active'
              onClick={() => setCurrentImage(0)}
            />
            <img 
              src="/images/gallery2.png"
              alt="Thumbnail 2" 
              className='thumbnail'
              onClick={() => setCurrentImage(1)}
            />
            <img 
              src="/images/gallery3.png" 
              alt="Thumbnail 3" 
              className='thumbnail'
              onClick={() => setCurrentImage(2)}
            />
            <img 
              src="/images/gallery4.png" 
              alt="Thumbnail 4" 
              className='thumbnail'
              onClick={() => setCurrentImage(3)}
            />
            <img 
              src="/images/gallery5.png" 
              alt="Thumbnail 5" 
              className='thumbnail'
              onClick={() => setCurrentImage(4)}
            />
            <img 
              src="/images/gallery6.png" 
              alt="Thumbnail 6" 
              className='thumbnail'
              onClick={() => setCurrentImage(5)}
            />
            <img 
              src="/images/gallery7.png" 
              alt="Thumbnail 7" 
              className='thumbnail'
              onClick={() => setCurrentImage(6)}
            />
          </div>
        </div>
      </div>
      <div className='seventh-container'>
        <h1>Our Services</h1>
        <div className='services-grid'>
          <div className='service-card'>
            <div className='service-image'>
              <img src="/images/service1.png" alt="Real Estate Done Right" />
            </div>
            <h3>Real Estate Done Right</h3>
            <p>Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
          </div>
          <div className='service-card'>
            <div className='service-image'>
              <img src="/images/service2.png" alt="Commercial & Residential" />
            </div>
            <h3>Commercial & Residential</h3>
            <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
          </div>
          <div className='service-card'>
            <div className='service-image'>
              <img src="/images/service3.png" alt="Rely on Expertise" />
            </div>
            <h3>Rely on Expertise</h3>
            <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
          </div>
        </div>
      </div>
      <div className='eighth-container'>
        <div className='social-media-container'>
          <a href="#" className='social-icon' aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className='social-icon' aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className='social-icon' aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className='social-icon' aria-label="Yelp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.271 16.718v1.417q-.69.69-1.38.69-.517 0-.862-.345-.345-.345-.345-.862 0-.517.345-.862l1.242-1.242q.345-.345.862-.345.517 0 .862.345.345.345.345.862 0 .69-.69 1.38l-.379.362zm6.901-5.447l-3.795 1.897q-.517.259-.862.086-.345-.172-.431-.603-.086-.431.086-.862l1.897-3.795q.172-.345.517-.431.345-.086.69.086l2.898 1.449q.345.172.431.517.086.345-.086.69-.172.345-.517.431l-2.898 1.449zm-8.280 0l-2.898-1.449q-.345-.172-.517-.431-.086-.345.086-.69.086-.345.431-.517l2.898-1.449q.345-.172.69-.086.345.086.517.431l1.897 3.795q.172.431.086.862-.086.431-.431.603-.345.173-.862-.086l-3.795-1.897zm1.380-6.901v2.898q0 .345-.345.517-.172.086-.345.086-.172 0-.345-.086-.345-.172-.345-.517V4.370q0-.345.345-.517.172-.086.345-.086.172 0 .345.086.345.172.345.517zm0 12.461v2.898q0 .345-.345.517-.172.086-.345.086-.172 0-.345-.086-.345-.172-.345-.517v-2.898q0-.345.345-.517.172-.086.345-.086.172 0 .345.086.345.172.345.517z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className='ninth-container'>
        <h1>Call or Visit</h1>
        <div className='contact-content'>
          <div className='contact-form-section'>
            <h2>Send Message</h2>
            <form className='contact-form'>
              <div className='form-group'>
                <input type="text" placeholder="Name" required />
              </div>
              <div className='form-group'>
                <input type="email" placeholder="Email*" required />
              </div>
              <div className='form-group'>
                <textarea placeholder="Message" rows="6" required></textarea>
              </div>
              <button type="submit" className='send-button'>SEND</button>
            </form>
            <p className='disclaimer'>
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
          <div className='contact-info-section'>
            <div className='whatsapp-button'>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.451 3.516"/>
              </svg>
              Message us on WhatsApp
            </div>
            <div className='business-info'>
              <h3>Marci Metzger - THE RIDGE REALTY GROUP</h3>
              <p className='address'>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              <p className='phone'>(206) 919-6886</p>
            </div>
            <div className='office-hours'>
              <h3>Office Hours</h3>
              <div className='hours-info'>
                <div className='today-hours-dropdown'>
                  <button 
                    className='today-dropdown-trigger'
                    onClick={() => setShowHoursDropdown(!showHoursDropdown)}
                  >
                    Open today <span>{todayHours?.hours}</span>
                    <svg className={`dropdown-arrow ${showHoursDropdown ? 'open' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </button>
                  {showHoursDropdown && (
                    <div className='hours-dropdown'>
                      {officeHours.map((dayInfo, index) => (
                        <div 
                          key={index} 
                          className={`hours-item ${dayInfo.day === currentDay ? 'current-day' : ''}`}
                        >
                          <span className='day-name'>{dayInfo.day}</span>
                          <span className='day-hours'>{dayInfo.hours}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <p className='appointments'>Appointments outside office hours available upon request.</p>
                <p className='call-note'>Just call!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='tenth-container'>
        <div className='map-section'>
          <div className='map-header'>
            <h2>Visit Our Office</h2>
            <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
            <a 
              href="https://www.google.com/maps/dir//3190+HW-160,+Suite+F,+Pahrump,+NV+89048,+USA" 
              target="_blank" 
              rel="noopener noreferrer"
              className='directions-button'
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2M6.5 12.5L8.5 14.5L6.5 16.5L4.5 14.5L6.5 12.5M17.5 12.5L19.5 14.5L17.5 16.5L15.5 14.5L17.5 12.5Z"/>
              </svg>
              Get Directions
            </a>
          </div>
          <div className='map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.8!2d-116.0!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Ridge Realty Group Location"
            ></iframe>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-social'>
            <a href="#" className='footer-social-icon' aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className='footer-social-icon' aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className='footer-social-icon' aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className='footer-social-icon' aria-label="Yelp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.271 16.718v1.417q-.69.69-1.38.69-.517 0-.862-.345-.345-.345-.345-.862 0-.517.345-.862l1.242-1.242q.345-.345.862-.345.517 0 .862.345.345.345.345.862 0 .69-.69 1.38l-.379.362zm6.901-5.447l-3.795 1.897q-.517.259-.862.086-.345-.172-.431-.603-.086-.431.086-.862l1.897-3.795q.172-.345.517-.431.345-.086.69.086l2.898 1.449q.345.172.431.517.086.345-.086.69-.172.345-.517.431l-2.898 1.449zm-8.280 0l-2.898-1.449q-.345-.172-.517-.431-.086-.345.086-.69.086-.345.431-.517l2.898-1.449q.345-.172.69-.086.345.086.517.431l1.897 3.795q.172.431.086.862-.086.431-.431.603-.345.173-.862-.086l-3.795-1.897zm1.380-6.901v2.898q0 .345-.345.517-.172.086-.345.086-.172 0-.345-.086-.345-.172-.345-.517V4.370q0-.345.345-.517.172-.086.345-.086.172 0 .345.086.345.172.345.517zm0 12.461v2.898q0 .345-.345.517-.172.086-.345.086-.172 0-.345-.086-.345-.172-.345-.517v-2.898q0-.345.345-.517.172-.086.345-.086.172 0 .345.086.345.172.345.517z"/>
              </svg>
            </a>
          </div>
          
          <div className='footer-text'>
            <p className='copyright'>COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED</p>
            <div className='footer-divider'></div>
            <div className='powered-by'>
              <span>POWERED BY</span>
              <div className='godaddy-logo'>
                <img src="images/godaddy.png" alt="GoDaddy Logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Homepage