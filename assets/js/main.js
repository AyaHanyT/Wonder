;(function () {
  ;("use strict")

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active")
      } else {
        navbarlink.classList.remove("active")
      }
    })
  }
  window.addEventListener("load", navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = el => {
    let header = select("#header")
    let offset = header.offsetHeight

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth"
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header")
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled")
      } else {
        selectHeader.classList.remove("header-scrolled")
      }
    }
    window.addEventListener("load", headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top")
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active")
      } else {
        backtotop.classList.remove("active")
      }
    }
    window.addEventListener("load", toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile")
    this.classList.toggle("bi-list")
    this.classList.toggle("bi-x")
  })

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle("dropdown-active")
      }
    },
    true
  )

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault()

        let navbar = select("#navbar")
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile")
          let navbarToggle = select(".mobile-nav-toggle")
          navbarToggle.classList.toggle("bi-list")
          navbarToggle.classList.toggle("bi-x")
        }
        scrollto(this.hash)
      }
    },
    true
  )

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  })

  /**
   * Preloader
   */
  let preloader = select("#preloader")
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove()
    })
  }

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox"
  })

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    })
  })

  // project card 1
  $(".t1").click(function () {
    $(".hidden1").toggle(500)
    $(".pc1").toggleClass("proj-card-toggle")
  })

  // project card
  $(".t2").click(function () {
    $(".hidden2").toggle(500)
    $(".pc2").toggleClass("proj-card-toggle")
  })

  // project card 3
  $(".t3").click(function () {
    $(".hidden3").toggle(500)
    $(".pc3").toggleClass("proj-card-toggle")
  })

  // project card 4
  $(".t4").click(function () {
    $(".hidden4").toggle(500)
    $(".pc4").toggleClass("proj-card-toggle")
  })

  // project card 5
  $(".t5").click(function () {
    $(".hidden5").toggle(500)
    $(".pc5").toggleClass("proj-card-toggle")
  })

  // project card 6
  $(".t6").click(function () {
    $(".hidden6").toggle(500)
    $(".pc6").toggleClass("proj-card-toggle")
  })

  $(".btn-primary-contact.active").click(function () {
    $(this).css("background-color", "#24167A")
    $(this).css("color", "white")
  })



  //     /* Image Slider - Swiper for tablet*/
  var swiper = new Swiper(".swiper-container-tab", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    speed:2000,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 4000
    }
  })

  //     /* Image Slider - Swiper for mobile*/
  var swiper = new Swiper(".swiper-container-mob", {
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 2,
    loop: true,
    speed:2000,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000
    }
  })

})()
