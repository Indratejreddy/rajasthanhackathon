const questions = [
  {
    question:
      "If you were to buy a new laptop, what would be your ideal budget?",
    options: [
      "Below 50k",
      "50k to 1 lakh",
      "1 lakh to 5 lakh",
      "Money Is Not An Object",
    ],
  },
  {
    question: "What is your preferred operating system?",
    options: ["Windows", "MacOS", "Linux", "No Preference"],
  },
  {
    question: "What will be your primary use for the laptop?",
    options: ["Web Browsing", "Office Work", "Gaming", "Video Editing"],
  },
  {
    question: "What is the minimum RAM you need?",
    options: ["4 GB", "8 GB", "16 GB", "32 GB or more"],
  },
  {
    question: "What is the ideal screen size for you?",
    options: [
      "Below 14 inches",
      "14-16 inches",
      "16-17 inches",
      "17 inches or more",
    ],
  },
];

const laptops = [
    {
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        price: 2999,
        os: "Windows",
        use: ["Web Browsing", "Office Work"],
        ram: "16 GB",
        storage: "1.5 TB HDD",
        url: "https://www.amazon.in/Renewed-Lenovo-ThinkPad-Performance-20KH002JUS/dp/B07HDV3PJ7/ref=asc_df_B07HDV3PJ7/?tag=googleshopdes-21&linkCode=df0&hvadid=619722637671&hvpos=&hvnetw=g&hvrand=7733704386425202073&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040219&hvtargid=pla-619001100857&psc=1",
        image: "https://m.media-amazon.com/images/I/71NqFN60+ZL._SX679_.jpg",
      },
      {
        brand: "Apple",
        model: "MacBook Pro",
        price: 139999,
        os: "MacOS",
        use: ["Video Editing", "Gaming"],
        ram: "32 GB or more",
        storage: "1 TB HDD",
        url: "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3B5BWCT/ref=sr_1_1_sspa?crid=237LCPDATKH61&keywords=Apple+MacBook+Pro&qid=1679219521&s=computers&sprefix=apple+macbook+pro%2Ccomputers%2C260&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        image: "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
      },
      {
        brand: "Dell",
        model: "XPS 13",
        price: 79999,
        os: "Windows",
        use: ["Web Browsing", "Office Work", "Programming"],
        ram: "16 GB",
        storage: "500 GB SSD",
        url: "https://www.amazon.in/Microsoft-Surface-Laptop-Windows-Platinum/dp/B0B4KJ21KV/ref=sr_1_1_sspa?crid=2LWVIURYVM9GR&keywords=Dell+XPS+13&qid=1679219806&s=computers&sprefix=dell+xps+13%2Ccomputers%2C276&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        image: "https://m.media-amazon.com/images/I/41JM2AxnD9L.jpg",
      }
];

let current = 0;
const selectedOptions = [];

const quizWindow = document.getElementById("quiz-window");
const question = document.getElementById("question");
const btns = document.getElementById("btns");
const progress = document.getElementById("progress");

function renderQuiz() {
  const currentQuestion = questions[current];
  question.innerText = currentQuestion.question;

  btns.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.addEventListener("click", () => handleOptionClick(option));
    btns.appendChild(btn);
  });

  progress.innerText = `${current + 1}/${questions.length}`;
}

function handleOptionClick(option) {
    if(option == "Below 50k") selectedOptions.push(50000);
    else if(option == "50k to 1 lakh") selectedOptions.push(100000);
    else if(option == "1 lakh to 5 lakh") selectedOptions.push(500000);
    else if(option == "Money Is Not An Object") selectedOptions.push(50000000000000000);
    else selectedOptions.push(option)
  current++;
  if (current < questions.length) {
    renderQuiz();
    console.log(selectedOptions);
  } else {
    // document.querySelector("#question").innerText = "Below Are The Ideal Laptops FOr Your Taste"
    const result = filterLaptops(laptops, selectedOptions)
    document.querySelector("main").innerHTML = `
    <h1 id="question">Below Are The Ideal Laptops For Your Taste</h1>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        ${result.map(item => `
          <div class="swiper-slide">
            <img src="${item.image}">
            <span class="use">${item.use[0]}</span>
            <span class="use1">${item.use[1]}</span>
            <h2>${item.brand} ${item.model}</h2>
            <p>Price:- ${item.price}Rs.</p>
            <p>Operating System:- ${item.os}</p>
            <p>RAM:- ${item.ram}</p>
            <p>Storage:- ${item.storage}.</p>
            <div class="button-group">
                <button><a href="${item.url}">Buy Now</a></button>
                <button><a href="${item.url}">See Review's</a></button>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>`;

      
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
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
    console.log(filterLaptops(laptops, selectedOptions))      
  }
}

  renderQuiz();


function filterLaptops(laptops, selectedOptionsArray) {
    return laptops.filter(laptop => {
      // check if laptop matches all selected options
      console.log(laptop.price <= selectedOptionsArray[0] &&
        laptop.os === selectedOptionsArray[1] ||
        laptop.use.includes(selectedOptionsArray[2]) ||
        laptop.ram === selectedOptionsArray[3])
      return laptop.price <= selectedOptionsArray[0] ||
             laptop.os === selectedOptionsArray[1] ||
             laptop.use.includes(selectedOptionsArray[2]) ||
             laptop.ram === selectedOptionsArray[3];
    });
  } 