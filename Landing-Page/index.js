var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  spaceBetween: 30,
});

function SendMail() {
  var params = {
    from_name: "Customer",
    email_id: document.getElementById("email_id").value,
    Message: document.getElementById("Message").value,
  };
  emailjs
    .send("service_7nbw1ti", "template_29kvbti", params)
    .then(function (res) {
      alert("Sent Mail");
    });
}

function joinWaitlist() {
  var params = {
    from_name: "Customer",
    email_id: document.getElementById("email_id").value,
    Message: "Want To Join Wait List",
  };
  emailjs
    .send("service_7nbw1ti", "template_29kvbti", params)
    .then(function (res) {
      alert("Joined Waitlist You will be contacted in 2-3 days");
    });
}