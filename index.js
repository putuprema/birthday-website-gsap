document.querySelector('body').style.visibility = 'visible'

animateGreetingSection();
animateHappyBirthdaySection();
animateAchievementSection();
animateWishSection();
animateMyWishSection();
animateFinalSection();

function animateGreetingSection() {
  gsap.from("#emoji", { duration: 1, x: -100, opacity: 0, ease: "power4.out", delay: 0.5 });
  gsap.from("#greeting-header", { duration: 1, x: 100, opacity: 0, ease: "power4.out", delay: 0.5, onComplete: playStartScrollBtnAnim });

  document.querySelector(".btn-start-scroll").addEventListener('click', function (ev) {
    document.querySelector('main').style.overflow = 'unset';
    gsap.to(window, {
      scrollTo: "#happy-birthday",
      duration: 2,
      ease: "power2.inOut",
    });
  })

  function playStartScrollBtnAnim() {
    gsap.to(".btn-start-scroll", {
      duration: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      onComplete: () => {
        setupScrollTriggerGreetingSection();
        setupGreetingScrollBtnListener();
      },
    });
  }
  
  function setupScrollTriggerGreetingSection() {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#greeting-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
      .to("#emoji", { duration: 5, x: -300, y: -10, opacity: 0, scale: 0 }, "<")
      .to("#greeting-header", { duration: 5, x: 300, y: -20, opacity: 0, scale: 0 }, "<")
      .to(".btn-start-scroll", { duration: 5, y: -20, opacity: 0, scale: 0 }, "<");
  }
}

function animateHappyBirthdaySection() {
  gsap.from(".hbd-header", {
    scrollTrigger: {
      trigger: "#greeting-section",
      start: "center top",
      end: "bottom top",
      scrub: 1,
    },
    y: -50,
    scale: 1.5,
  });
  
  gsap.timeline({
    scrollTrigger: {
      trigger: "#happy-birthday",
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=200%",
    },
  })
    .from(".turned-age-21", {
      opacity: 0,
      x: -100,
      ease: "none",
    });
}

function animateAchievementSection() {
  const achievementSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#achievements",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px",
    },
  });

  achievementSectionTimeline
    .to(".you-achieved-alot", { opacity: 0, x: 100, ease: "none" }, "<")
    .to("#achievements", { backgroundColor: "#022e45", ease: "none" }, "<");
  
  const achievements = document.querySelectorAll(".achievement-container");
  achievements.forEach(function (el, idx) {
    achievementSectionTimeline.from(`.achievement-${idx + 1}`, { opacity: 0, x: -200 }, idx === 0 ? ">" : "<");
  
    if (idx !== achievements.length - 1) {
      achievementSectionTimeline.to(`.achievement-separator.achievement-${idx + 1}`, { height: "80px" });
    }
  });
  
  achievementSectionTimeline
    .to(".achievements-root", { opacity: 0, y: 50 })
    .from(`.proud-of-you`, { opacity: 0, x: 200 });
}

function animateWishSection() {
  const wishSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#wishes",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px",
    },
  });

  wishSectionTimeline
    .to(".whatever-you-wish", { opacity: 0, y: -100 })
    .from(".hope-you-can-get-it", { opacity: 0, y: 60 })
    .to(".hope-you-can-get-it", { opacity: 0, y: -100 })
    .from(".wish-container", { opacity: 0, y: 60 }, "<");
  
  const wishContainer = document.querySelectorAll(".wish-container span");
  wishContainer.forEach(function (el, idx) {
    wishSectionTimeline.from(`.wish-${idx + 1}`, {
      width: 0,
    });
  });
}

function animateMyWishSection() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#my-wish",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px",
    },
  })
    .from(".my-wish-for-you", { opacity: 0, y: 120 })
    .to(".my-wish-for-you", { opacity: 0, y: -50 })
    .from(".never-stop", { opacity: 0, y: 120 }, "<")
    .to(".never-stop", { opacity: 0, y: -50 })
    .from(".we-stay-friends", { opacity: 0, y: 120 }, "<");
}

function animateFinalSection() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#done",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=4000px",
    },
  })
    .to(".ending-header", { opacity: 0, x: -500 })
    .from(".wish-you-long-year", { opacity: 0, x: 500 });
}
