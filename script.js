// Menu toggle
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  sideMenu.classList.add('open');
  overlay.classList.add('show');
}
function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
}
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

menuToggle.addEventListener('click', () => {
  sideMenu.classList.contains('open') ? closeMenu() : openMenu();
});
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

//Slideshow
let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  const slides = document.querySelectorAll(".slides img");
  if (!slides.length) return;

  // Wrap around
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((s, i) => {
    s.classList.remove("active", "side");
    if (i === slideIndex) {
      s.classList.add("active"); // current image
    } else if (i === (slideIndex - 1 + slides.length) % slides.length ||
               i === (slideIndex + 1) % slides.length) {
      s.classList.add("side"); // previous & next
    } else {
      s.style.display = "none"; // hide others
    }
    s.style.display = "block"; // ensure visible for active/side
  });
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Auto-play every 4 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 4000);

//Review Generator
// Expanded phrase banks for 10,000 combinations

const openings = [
  "We celebrated at Kalash Marriage Lawn and",
  "Our wedding at Kalash Marriage Lawn was unforgettable because",
  "Attending an event here was delightful since",
  "Kalash Marriage Lawn impressed us as",
  "The venue made our occasion special as",
  "Hosting our ceremony here was a joy because",
  "Kalash Marriage Lawn stood out during our event since",
  "Our guests loved the atmosphere because",
  "The celebration felt grand as",
  "Choosing this venue was perfect since",
  "We enjoyed every moment here because",
  "The arrangements were smooth as",
  "Kalash Marriage Lawn truly delivered since",
  "Our family gathering was memorable because",
  "The venue exceeded expectations as",
  "We felt comfortable here since",
  "The hospitality was remarkable because",
  "Our function was seamless as",
  "The ambiance was charming since",
  "Kalash Marriage Lawn made our day special because"
];

const features = [
  "the open air lawn created a grand vibe",
  "the cozy indoor space felt welcoming",
  "the dedicated kitchen made catering smooth",
  "indoor parking was convenient for guests",
  "power backup kept everything seamless",
  "AC and non-AC rooms gave flexibility",
  "CCTV ensured safety throughout",
  "the spacious lawn accommodated everyone comfortably",
  "the indoor hall was beautifully decorated",
  "lighting arrangements enhanced the atmosphere",
  "the staff was attentive and professional",
  "cleanliness was maintained throughout the venue",
  "the sound system worked perfectly",
  "the stage setup was elegant",
  "the entryway was decorated beautifully",
  "the seating was comfortable and well arranged",
  "the catering team worked efficiently",
  "the lawn greenery added freshness",
  "the indoor area was cozy and stylish",
  "parking attendants were helpful",
  "backup facilities ensured no interruptions",
  "rooms were spacious and well maintained",
  "security was reliable with CCTV",
  "the ambience was festive and vibrant",
  "the arrangements reflected great planning"
];

const closings = [
  "— highly recommended!",
  "— exceeded expectations.",
  "— would book again.",
  "— perfect blend of elegance.",
  "— made our day memorable.",
  "— truly worth every penny.",
  "— a venue that stands out.",
  "— unforgettable experience.",
  "— ideal for family functions.",
  "— flawless from start to finish.",
  "— a place we’ll always cherish.",
  "— everything was handled smoothly.",
  "— guests were impressed.",
  "— we’ll return for future events.",
  "— a gem in Lucknow.",
  "— remarkable service and ambience.",
  "— left us delighted.",
  "— a venue that delivers quality.",
  "— simply outstanding.",
  "— our celebration was elevated."
];

// Generate review
function generateReview() {
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const feature = features[Math.floor(Math.random() * features.length)];
  const closing = closings[Math.floor(Math.random() * closings.length)];
  return `${opening} ${feature}, ${closing}`;
}

// Display initial review
const reviewText = document.getElementById("reviewText");
reviewText.textContent = generateReview();

// New review
document.getElementById("newReviewBtn").addEventListener("click", () => {
  reviewText.textContent = generateReview();
});

// Copy review
document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(reviewText.textContent).then(() => {
    const msg = document.getElementById("copyMsg");
    msg.textContent = "✅ Copied!";
    setTimeout(() => msg.textContent = "", 2000);
  });
});

// Universal Google review link
document.getElementById("mapsBtn").addEventListener("click", function(e) {
  e.preventDefault();
  const review = document.getElementById("reviewText").innerText;
  const mapsUrl = "https://search.google.com/local/writereview?placeid=ChIJMRToX2fimzkRUan3u1DooSM";
  window.open(mapsUrl, "_blank");
});

const placeId = "ChIJMRToX2fimzkRUan3u1DooSM";
const mapsBtn = document.getElementById("mapsBtn");

//Enquiry Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsappForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const fullMessage = `Hello, I am ${name}. My email is ${email}. I would like to enquire for the date: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    const whatsappNumber = "916388028416"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  });
});

// WhatsApp Enquiry Form
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "916388028416"; // ← Update this number only

    const rawMessage = `New Enquiry:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  });
}
