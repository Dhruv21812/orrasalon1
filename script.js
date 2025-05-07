// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const navLinks = document.getElementById("navLinks")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll(".nav-links .nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        menuToggle.classList.remove("active")
      }
    })
  })

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Floating discount visibility
  const floatingDiscount = document.getElementById("floatingDiscount")
  if (floatingDiscount) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        floatingDiscount.style.opacity = "0"
        floatingDiscount.style.visibility = "hidden"
      } else {
        floatingDiscount.style.opacity = "1"
        floatingDiscount.style.visibility = "visible"
      }
    })
  }

  // Animated Scissor Element
  const animatedScissor = document.getElementById("animatedScissor")
  if (animatedScissor) {
    // Make the scissor clickable to scroll to booking section
    animatedScissor.addEventListener("click", () => {
      const bookingSection = document.getElementById("booking")
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" })
      } else {
        // If on gallery page, redirect to index.html#booking
        window.location.href = "index.html#booking"
      }
    })

    // Add some random movement to the scissor animation
    let isAnimating = false

    animatedScissor.addEventListener("mouseover", () => {
      if (!isAnimating) {
        isAnimating = true

        // Add a small jump animation
        animatedScissor.style.animation = "none"
        setTimeout(() => {
          animatedScissor.style.animation = "scissorJump 0.5s ease-in-out"
        }, 10)

        // Reset after animation completes
        setTimeout(() => {
          animatedScissor.style.animation = "scissorFloat 10s ease-in-out infinite"
          isAnimating = false
        }, 500)
      }
    })
  }

  // Intersection Observer for fade-in sections
  const sections = document.querySelectorAll(".section-fade-in")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => {
    observer.observe(section)
  })

  // Booking form submission
  const bookingForm = document.getElementById("bookingForm")
  const bookingConfirmation = document.getElementById("bookingConfirmation")

  if (bookingForm && bookingConfirmation) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // In a real application, you would send the form data to a server here
      console.log("Form submitted")

      // Show confirmation message
      bookingForm.style.display = "none"
      bookingConfirmation.style.display = "block"

      // Reset form after 3 seconds and hide confirmation
      setTimeout(() => {
        bookingForm.reset()
        bookingForm.style.display = "block"
        bookingConfirmation.style.display = "none"
      }, 3000)
    })
  }

  // Add parallax effect to background images
  const parallaxElements = document.querySelectorAll(".service-image, .gallery-image, .member-image")

  window.addEventListener("scroll", () => {
    parallaxElements.forEach((element) => {
      const scrollPosition = window.pageYOffset
      const elementPosition = element.getBoundingClientRect().top + scrollPosition
      const distance = scrollPosition - elementPosition
      const translateY = distance * 0.05 // Adjust the parallax intensity

      if (element.querySelector("img")) {
        element.querySelector("img").style.transform = `translateY(${translateY}px)`
      }
    })
  })

  // Interactive pricing table rows
  const pricingRows = document.querySelectorAll(".pricing-row")

  pricingRows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "rgba(139, 69, 19, 0.1)"
      row.style.transform = "translateY(-2px)"
      row.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
    })

    row.addEventListener("mouseleave", () => {
      row.style.backgroundColor = ""
      row.style.transform = ""
      row.style.boxShadow = ""
    })
  })

  // Add scissor jump animation keyframes dynamically
  const styleSheet = document.createElement("style")
  styleSheet.textContent = `
    @keyframes scissorJump {
      0% { transform: translateY(0); }
      50% { transform: translateY(-20px) rotate(15deg); }
      100% { transform: translateY(0); }
    }
  `
  document.head.appendChild(styleSheet)
})
