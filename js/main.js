/* =========================================================
   Luck's Cleaning Services — Site JS
   Nav, scroll effects, reveal animations, lightbox, FAQ
   ========================================================= */
(function () {
  "use strict";

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var scrim = document.querySelector('.nav-scrim');

  function closeNav() {
    nav && nav.classList.remove('is-open');
    scrim && scrim.classList.remove('is-open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleNav() {
    var open = nav.classList.toggle('is-open');
    scrim && scrim.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', toggleNav);
    scrim && scrim.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }

  /* ---- Header solid-on-scroll (home page has transparent hero header) ---- */
  var header = document.querySelector('.site-header');
  function onScrollHeader() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('is-solid');
    else header.classList.remove('is-solid');
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---- Back to top ---- */
  var backTop = document.querySelector('.back-to-top');
  function onScrollTop() {
    if (!backTop) return;
    if (window.scrollY > 700) backTop.classList.add('is-visible');
    else backTop.classList.remove('is-visible');
  }
  window.addEventListener('scroll', onScrollTop, { passive: true });
  backTop && backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('is-open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('is-open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---- Lightbox for gallery ---- */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    var current = 0;

    function openLb(index) {
      current = index;
      var el = triggers[current];
      lbImg.src = el.getAttribute('href') || el.getAttribute('data-full');
      lbImg.alt = el.querySelector('img') ? el.querySelector('img').alt : '';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function closeLb() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function showRelative(delta) {
      current = (current + delta + triggers.length) % triggers.length;
      var el = triggers[current];
      lbImg.src = el.getAttribute('href') || el.getAttribute('data-full');
    }

    triggers.forEach(function (el, i) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openLb(i);
      });
    });
    var closeBtn = lightbox.querySelector('.lb-close');
    var prevBtn = lightbox.querySelector('.lb-prev');
    var nextBtn = lightbox.querySelector('.lb-next');
    closeBtn && closeBtn.addEventListener('click', closeLb);
    prevBtn && prevBtn.addEventListener('click', function () { showRelative(-1); });
    nextBtn && nextBtn.addEventListener('click', function () { showRelative(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') showRelative(-1);
      if (e.key === 'ArrowRight') showRelative(1);
    });
  }

  /* ---- Contact form ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    var statusBox = document.getElementById('form-status');
    var submitBtn = form.querySelector('button[type="submit"]');

    function setError(field, message) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.add('has-error');
      var msg = wrap.querySelector('.err-msg');
      if (msg) msg.textContent = message;
    }
    function clearError(field) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.remove('has-error');
    }
    function showStatus(type, message) {
      if (!statusBox) return;
      statusBox.className = 'form-status status-' + type;
      statusBox.innerHTML = message;
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function validate() {
      var valid = true;
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var phone = form.querySelector('[name="phone"]');
      var message = form.querySelector('[name="message"]');

      [name, email, phone, message].forEach(clearError);

      if (!name.value.trim()) { setError(name, 'Please enter your name.'); valid = false; }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        setError(email, 'Please enter a valid email address.'); valid = false;
      }

      if (!phone.value.trim()) { setError(phone, 'Please enter a phone number.'); valid = false; }

      if (!message.value.trim() || message.value.trim().length < 10) {
        setError(message, 'Tell us a little about the job (10+ characters).'); valid = false;
      }

      return valid;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot spam trap — if filled, silently drop
      var honey = form.querySelector('[name="_gotcha"]');
      if (honey && honey.value) return;

      if (!validate()) {
        showStatus('error', 'Please fix the highlighted fields and try again.');
        return;
      }

      var formData = new FormData(form);
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          showStatus('success', '<strong>Thanks — your message is on its way.</strong><br>We\'ll get back to you within one business day.');
        } else {
          return response.json().then(function (data) {
            var errMsg = (data && data.errors && data.errors.map(function (er) { return er.message; }).join(', '))
              || 'Something went wrong sending your message. Please try emailing us directly.';
            showStatus('error', errMsg);
          });
        }
      }).catch(function () {
        showStatus('error', 'Network error — please check your connection and try again, or email us directly.');
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
    });
  }
})();
