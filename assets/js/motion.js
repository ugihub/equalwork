/* EqualWork Motion Engine
   GSAP + IntersectionObserver reveal system for SPA panels.
   Must load AFTER GSAP CDN and BEFORE app.js. */

(function () {
  "use strict";

  var GSAP = window.gsap;

  /* ---- 1. GSAP Hero Entrance ---- */
  var entranceTriggered = false;

  window.triggerHeroEntrance = function () {
    if (entranceTriggered) return;
    entranceTriggered = true;

    if (GSAP) {
      var heroContent = document.querySelector(".hero-content");
      if (heroContent) {
        GSAP.from(".hero-content > *", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      var heroImg = document.querySelector(".hero-illustration");
      if (heroImg) {
        GSAP.from(heroImg, {
          opacity: 0,
          duration: 1.0,
          ease: "power3.out",
          delay: 0.45,
        });
      }
    }
  };

  // Fallback trigger if not called within 4.5 seconds
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      if (!entranceTriggered) {
        window.triggerHeroEntrance();
      }
    }, 4500);
  });

  /* ---- 2. Scroll Reveal System (SPA-safe) ---- */

  function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.88 && rect.bottom > 0;
  }

  function revealInPanel(panel) {
    var targets = panel.querySelectorAll(
      "[data-reveal]:not(.is-visible), [data-reveal-stagger]:not(.is-visible)"
    );
    targets.forEach(function (el) {
      if (isElementVisible(el)) {
        el.classList.add("is-visible");
      }
    });
  }

  /* Set up scroll listeners on every panel (only active panel scrolls) */
  function initRevealSystem() {
    var panels = document.querySelectorAll(".dashboard-panel");

    panels.forEach(function (panel) {
      panel.addEventListener("scroll", function () {
        revealInPanel(panel);
      }, { passive: true });
    });

    /* Reveal initial active panel on load (with small delay for render) */
    var activePanel = document.querySelector(".dashboard-panel.active");
    if (activePanel) {
      setTimeout(function () {
        revealInPanel(activePanel);
      }, 200);
    }

    /* Watch for panel switches via MutationObserver */
    var mo = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.attributeName === "class") {
          var panel = m.target;
          if (panel.classList.contains("active")) {
            setTimeout(function () {
              revealInPanel(panel);
            }, 180);
          }
        }
      });
    });

    panels.forEach(function (p) {
      mo.observe(p, { attributes: true, attributeFilter: ["class"] });
    });

    /* Re-check on resize */
    window.addEventListener("resize", function () {
      var active = document.querySelector(".dashboard-panel.active");
      if (active) revealInPanel(active);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRevealSystem);
  } else {
    initRevealSystem();
  }
})();
