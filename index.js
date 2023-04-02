$("body").css("visibility", "visible");

gsap.from("#evelyn-emoji", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5
});
gsap.from("#evelyn-text", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
  onComplete: () => {
    gsap.to(".btn-start-scroll", {
      duration: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      onComplete: () => {
        setupScrollTriggerGreetingSection();
        setupGreetingScrollBtnListener();
      }
    });
  }
});

function setupScrollTriggerGreetingSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#greeting-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  tl.to(
    "#evelyn-emoji",
    { duration: 5, x: -300, y: -10, opacity: 0, scale: 0 },
    "<"
  );
  tl.to(
    "#evelyn-text",
    { duration: 5, x: 300, y: -20, opacity: 0, scale: 0 },
    "<"
  );
  tl.to(
    ".btn-start-scroll",
    { duration: 5, y: -20, opacity: 0, scale: 0 },
    "<"
  );
}

function setupGreetingScrollBtnListener() {
  $(".btn-start-scroll").on("click", function (ev) {
    ev.preventDefault();
    gsap.set("main", { overflow: "unset" });
    gsap.to(window, {
      scrollTo: "#happy-birthday",
      duration: 2,
      ease: "power2.inOut"
    });
  });
}

gsap.from(".hbd-header", {
  scrollTrigger: {
    trigger: "#greeting-section",
    start: "center top",
    end: "bottom top",
    scrub: 1
  },
  y: -50,
  scale: 1.5
});

const hbdSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#happy-birthday",
    scrub: 1,
    pin: true,
    start: "top top",
    end: "+=200%"
  }
});

hbdSectionTimeline.from(".umur-21-tahun-loh", {
  opacity: 0,
  x: -100,
  ease: "none"
});

const achievementSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#achievements",
    scrub: 0.5,
    pin: true,
    start: "top top",
    end: "+=4000px"
  }
});

achievementSectionTimeline.to(
  ".you-achieved-alot",
  {
    opacity: 0,
    x: 100,
    ease: "none"
  },
  "<"
);
achievementSectionTimeline.to(
  "#achievements",
  {
    backgroundColor: "#022e45",
    ease: "none"
  },
  "<"
);

const achievements = document.querySelectorAll(".achievement-container");
achievements.forEach(function (el, idx) {
  achievementSectionTimeline.from(
    `.achievement-${idx + 1}`,
    {
      opacity: 0,
      x: -200
    },
    idx === 0 ? ">" : "<"
  );

  if (idx !== achievements.length - 1) {
    achievementSectionTimeline.to(
      `.achievement-separator.achievement-${idx + 1}`,
      {
        height: "80px"
      }
    );
  }
});
achievementSectionTimeline.to(".achievements-root", {
  opacity: 0,
  y: 50
});
achievementSectionTimeline.from(`.proud-of-you`, {
  opacity: 0,
  x: 200
});

const wishSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#wishes",
    scrub: 0.5,
    pin: true,
    start: "top top",
    end: "+=4000px"
  }
});
wishSectionTimeline.to(".whatever-you-wish", {
  opacity: 0,
  y: -100
});
wishSectionTimeline.from(".hope-you-can-get-it", {
  opacity: 0,
  y: 60
});
wishSectionTimeline.to(".hope-you-can-get-it", {
  opacity: 0,
  y: -100
});
wishSectionTimeline.from(
  ".wish-container",
  {
    opacity: 0,
    y: 60
  },
  "<"
);

const wishContainer = document.querySelectorAll(".wish-container span");
wishContainer.forEach(function (el, idx) {
  wishSectionTimeline.from(`.wish-${idx + 1}`, {
    width: 0
  });
});

const myWishContainer = gsap.timeline({
  scrollTrigger: {
    trigger: "#my-wish",
    scrub: 0.5,
    pin: true,
    start: "top top",
    end: "+=4000px"
  }
});
myWishContainer.from(".satu-wish-dari-aku", {
  opacity: 0,
  y: 120
});
myWishContainer.to(".satu-wish-dari-aku", {
  opacity: 0,
  y: -50
});
myWishContainer.from(
  ".never-stop",
  {
    opacity: 0,
    y: 120
  },
  "<"
);
myWishContainer.to(".never-stop", {
  opacity: 0,
  y: -50
});

const finalSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#done",
    scrub: 0.5,
    pin: true,
    start: "top top",
    end: "+=4000px"
  }
});
finalSectionTimeline.to(".gitu-aja", {
  opacity: 0,
  x: -500
});
finalSectionTimeline.from(".panjang-umur", {
  opacity: 0,
  x: 500
});
