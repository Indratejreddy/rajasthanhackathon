// Grabbing all Element I Need

// Buttons
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
let intro = document.querySelector("#splash")
let logo = document.querySelector(".splash-data")
// Interface
let readQuestion = false
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const startContainer = document.querySelector(".start")
const questionNumber = document.querySelector("#number")
const quizApplication = document.querySelector(".quizApplication")
const loader = document.getElementById("preloader");
let [nameValue, gmailValue, phValue] = [document.querySelector(".form__input.title"), document.querySelector(".form__input.tagline"), document.querySelector(".form__input.desc")]

// Points and animation
const Points = document.querySelectorAll(".point-marker");
const pointsNum = document.querySelector(".points-num")
const gif = document.querySelector(".hoverGif")

// Grabing video tags to show web cam recording
const video1 = document.getElementById('video1')
const video = document.getElementById('video')

let stream = null,
  audio = null,
  mixedStream = null,
  chunks = [],
  recorder = null

// Creating userPoints, pointsArray
// init of variable bg music 
let points = 0;
let questions
let pointArray = [-20, -15, -10, -5, 45, 50, 55, 60, 65, 70, 75, 80]
pointArray.reverse()

// Hide Preloader
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('./models')
]).then(() => startVideo).then(() => {
  loader.style.display = "none"
  quizApplication.classList.remove('hide')
})

// Disable Right Click
document.addEventListener('contextmenu', event => {
  alert("Warning Please do not right click")
  event.preventDefault()
});

// Variable initalization
let shuffledQuestions, currentQuestionIndex, questionCount

// Starting WebCam
function startVideo1() {
  const constraints = {
    audio: true,
    video: { width: 1280, height: 1280 }
  };
  navigator.mediaDevices.getUserMedia(constraints)
    .then((mediaStream) => {
      video1.srcObject = mediaStream;
      video1.onloadedmetadata = () => {
        video1.play();
      };
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
}

function startVideo() {
  const constraints = {
    audio: true,
    video: { width: 1280, height: 1280 }
  };
  navigator.mediaDevices.getUserMedia(constraints)
    .then((mediaStream) => {
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();

      };
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
}
// Detections
let noOf0 = 0
video.addEventListener('play', () => {
  noOf0 = 0
  const canvas = faceapi.createCanvasFromMedia(video)
  document.querySelector(".videos").append(canvas)
  const displaySize = { width: 200, height: 200 }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
    if (detections.length >= 2) alert("Violation More than one person")

    if (detections.length == 0) {
      noOf0++
      if (noOf0 >= 100) {
        alert("Violation no face detected")
        noOf0 = 0
      }
    }
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    let array = [true, "Akash"]
    resizedDetections.forEach((el, i) => {
      const box = el.detection.box
      let drawBox
      if(i > 0) {
        drawBox = new faceapi.draw.DrawBox(box, { label: "unkown" })
      } else {
        drawBox = new faceapi.draw.DrawBox(box, { label: nameValue.value })
      }
      drawBox.draw(canvas)
    })
  }, 100)
})

// Start btn Hover Effect
function bigImg() {
  gif.style.display = "block"
}

function bigImage() {
  gif.style.display = "none"
}

// Event Listeners for Next & Start Btn
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  document.dispatchEvent(startEvent);
})

// Start Game Function
function startGame() {
  if (nameValue.value && gmailValue.value && phValue.value) {
    let text = "Do you want Me to Read Questions For You";
    if (confirm(text) == true) {
      readQuestion = true
    }
    console.log(startContainer.classList)
    startRecording()

    startContainer.classList.add('hide')
    console.log(startContainer.classList)
    if (questionContainerElement.requestFullscreen) {
      questionContainerElement.requestFullscreen();
    }
    document.dispatchEvent(startEvent);
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionCount = 1
    startVideo();
    startVideo1();
    console.log(questionContainerElement.classList)
    questionContainerElement.classList.remove('hide')
    console.log(questionContainerElement.classList)
    nextButton.innerText = 'Next'
    setNextQuestion()
    pointsNum.innerText = `Points: ${points}`
    countdown("ten-countdown", 10, 0);

  } else {
    alert("Please Fill All Fields Because Test Reports Will Be Sent Via This")
  }
}

// Next Question function and pointsAdding
function setNextQuestion() {
  resetState()
  pointsNum.innerText = `Points: ${points}`
  showQuestion(shuffledQuestions[currentQuestionIndex])
  Points[currentQuestionIndex].style.backgroundColor = "yellow"
  Points[currentQuestionIndex].style.color = "black"
}

async function setupStream() {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: true
    });

    audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    });

    setupVideoFeedback();
  } catch (err) {
    console.error(err)
  }
}

function setupVideoFeedback() {
  if (stream) {
    const video = document.querySelector('.video-feedback');
    video.srcObject = stream;
    video.play();
  } else {
    console.warn('No stream available');
  }
}

async function startRecording() {
  await setupStream();

  if (stream && audio) {
    mixedStream = new MediaStream([...stream.getTracks(), ...audio.getTracks()]);
    recorder = new MediaRecorder(mixedStream);
    recorder.ondataavailable = handleDataAvailable;
    recorder.onstop = handleStop;
    recorder.start(1000)
    console.log('Recording started');
  } else {
    console.warn('No stream available.');
  }
}

function stopRecording() {
  recorder.stop();
}

function handleDataAvailable(e) {
  chunks.push(e.data);
  console.log(typeof chunks, chunks)
}

async function handleStop(e) {
  const blob = new Blob(chunks, { 'type': 'video/mp4' });
  chunks = [];

  console.log('Recording stopped');
  let link = document.createElement('a');
  link.download = 'example.mp4';
  link.href = URL.createObjectURL(blob);
  link.click()
}

// Function to show question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.classList.add("option")
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
  let utterance
  if (readQuestion) {
    utterance = new SpeechSynthesisUtterance(questionElement.innerText + `    Option A: ${document.querySelectorAll(".option")[0].innerText}    Option B: ${document.querySelectorAll(".option")[1].innerText}    Option C: ${document.querySelectorAll(".option")[2].innerText}    Option D: ${document.querySelectorAll(".option")[3].innerText}`)
    speechSynthesis.speak(utterance)
  }

  // document.addEventListener("keypress", (e) => {
  // let speak = new SpeechSynthesisUtterance("Answer Captured")
  // if(e.key == "1") {
  //   document.querySelectorAll(".option")[0].click()
  //   speechSynthesis.speak(speak)
  //   setTimeout(() => {
  //     nextButton.click()
  //   }, 2000)
  // }

  // if(e.key == "2") {
  //   document.querySelectorAll(".option")[1].click()
  //   speechSynthesis.speak(speak)
  //   setTimeout(() => {
  //     nextButton.click()
  //   }, 2000)
  // }

  // if(e.key == "3") {
  //   document.querySelectorAll(".option")[2].click()
  //   speechSynthesis.speak(speak)
  //   setTimeout(() => {
  //     nextButton.click()
  //   }, 2000)
  // }

  // if(e.key == "4") {
  //   document.querySelectorAll(".option")[3].click()
  //   speechSynthesis.speak(speak)
  //   setTimeout(() => {
  //     nextButton.click()
  //   }, 2000)
  // }

  // if(e.key == "5") {
  //   let speak = new SpeechSynthesisUtterance("Answer Captured")
  //   speechSynthesis.speak(utterance)
  // }
  // })

  var shouldHandleKeyDown = true;
  document.onkeydown = function (e) {
    if (!shouldHandleKeyDown) return;
    shouldHandleKeyDown = false;
    // HANDLE KEY DOWN HERE
    let speak = new SpeechSynthesisUtterance("Answer Captured")
    if (e.key == "1") {
      document.querySelectorAll(".option")[0].click()
      speechSynthesis.speak(speak)
      setTimeout(() => {
        nextButton.click()
      }, 2000)
    }

    if (e.key == "2") {
      document.querySelectorAll(".option")[1].click()
      speechSynthesis.speak(speak)
      setTimeout(() => {
        nextButton.click()
      }, 2000)
    }

    if (e.key == "3") {
      document.querySelectorAll(".option")[2].click()
      speechSynthesis.speak(speak)
      setTimeout(() => {
        nextButton.click()
      }, 2000)
    }

    if (e.key == "4") {
      document.querySelectorAll(".option")[3].click()
      speechSynthesis.speak(speak)
      setTimeout(() => {
        nextButton.click()
      }, 2000)
    }

    if (e.key == "5") {
      speechSynthesis.speak(utterance)
      shouldHandleKeyDown = true
    }
  }
  document.onkeyup = function () {
    shouldHandleKeyDown = true;
  }
  questionElement.innerText += " (" + question.type + ")"
  questionCount++
}

// function to reset all the bg color
function resetState() {
  clearStatusClass(questionContainerElement)
  nextButton.style.visibility = "hidden"
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// Function to check user selected ans is correct or wrong
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(Points[currentQuestionIndex], correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    questionNumber.innerText = `Question ${questionCount}`
    nextButton.style.visibility = "visible"
  } else {
    nextButton.innerText = 'Restart'
    nextButton.style.visibility = "visible"
    nextButton.addEventListener('click', () => {
      stopRecording()
      sendDetails(nameValue.value, gmailValue.value, phValue.value)
    })
  }
  if (correct) {
    points += Math.abs(pointArray[currentQuestionIndex])
    var audio = new Audio('./assets/audios/win.mp3');
    audio.play();
  }
  if (!correct) {
    points -= Math.abs(pointArray[currentQuestionIndex])
    new Audio('./assets/audios/wrong.wav').play();
  }
}

function sendEmail(gmail, name) {
  let params = {
    from_name: name,
    to_name: gmail
  }

  emailjs.send("service_97p0rqi", "template_n37cxxe", params, "5sbJW1yNgIjZcbFEp")
    .then((res) => {
      console.log("Sucess", res.status)
      window.location.replace("http://localhost:3000/home");
    })
}

function sendDetails(name, gmail, phone) {
  sendEmail(gmail, name)
  call(phone)
}

function call(phone) {
  let score = 0
  document.querySelectorAll(".point-marker").forEach(el => {
    if (el.style.color == "rgb(50, 205, 50)") {
      score++
      console.log(score, "hi")
    }
  })
  let utterance1 = new SpeechSynthesisUtterance(`You have given ${score} correct answers. Keep It Up and try again to score higher marks.`)
  speechSynthesis.speak(utterance1)
}

// Setting status of btn and points as correct or wrong
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    if (element === Points[currentQuestionIndex]) {
      element.style.color = "#32CD32"
      Points[currentQuestionIndex].style.backgroundColor = "transparent"
    } else {
      element.classList.add('correct')
    }
  } else {
    if (element === Points[currentQuestionIndex]) {
      element.style.color = "red"
      Points[currentQuestionIndex].style.backgroundColor = "transparent"
    } else {
      element.classList.add('wrong')
    }
  }
}

// Clearin status
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// Questions Array
(() => {
  questions = [
    {
      question: 'What is the value of f(0) when f(x) = 32x+6 ??',
      type: "math",
      answers: [
        { text: 'two', correct: false },
        { text: 'six', correct: true },
        { text: 'eight', correct: false },
        { text: 'thirty eight', correct: false }
      ]
    },
    {
      question: 'Find the value of a, if x – a is a factor of x3 – ax2 + 2x + a – 1.',
      type: "math",
      answers: [
        { text: '1/3', correct: true },
        { text: '3/1', correct: false },
        { text: '8', correct: false },
        { text: '3', correct: false }
      ]
    },
    {
      question: 'Who among the following have invented venn diagrams ??',
      type: "math",
      answers: [
        { text: 'Euclid', correct: false },
        { text: 'John Venn', correct: true },
        { text: 'Aristocratis', correct: false },
        { text: 'Sameed Venn', correct: false }
      ]
    },
    {
      question: 'Which one of the following is the value of iota ??',
      type: "math",
      answers: [
        { text: '-1', correct: false },
        { text: '1', correct: false },
        { text: '√-1', correct: true },
        { text: '2 * √-1', correct: true }
      ]
    },

    {
      question: 'What does the term "Bacillus" mean ??',
      type: "biology",
      answers: [
        { text: 'Rod Shaped', correct: true },
        { text: 'Blade Shaped', correct: false },
        { text: 'Bacteria', correct: false },
        { text: 'None Of the Above', correct: false }
      ]
    },

    {
      question: 'What is themost primitive type of cryptogamme ?',
      type: "biology",
      answers: [
        { text: 'Bryophyta', correct: false },
        { text: 'Pteridophyta', correct: false },
        { text: 'Thallophyta', correct: true },
        { text: 'Angiosperms', correct: false }
      ]
    },

    {
      question: 'Who is the father of heridity',
      type: "biology",
      answers: [
        { text: 'Gregor Medol', correct: true },
        { text: 'Darwin', correct: false },
        { text: 'Namivian', correct: false },
        { text: 'None Of the Above', correct: false },
      ]
    },
    {
      question: 'What does the term "sonorous" means in Physics',
      type: "physics",
      answers: [
        { text: 'Shiny non metal', correct: false },
        { text: 'Sound made when we hit metals', correct: true },
        { text: 'Sound made when we hit objects', correct: false },
        { text: 'Shiny object', correct: false }
      ]
    },
    {
      question: 'Who is the father of Biology ?',
      type: "biology",
      answers: [
        { text: 'Aristocratle', correct: false },
        { text: 'Aristotle', correct: true },
        { text: 'Rama Ranjan', correct: false },
        { text: 'Birbal', correct: false }
      ]
    },
    {
      question: 'What is the second law of motion',
      type: "physics",
      answers: [
        { text: 'P = mv', correct: true },
        { text: 'F = m / a', correct: false },
        { text: 'F = 3ma', correct: false },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      question: 'What is viscosity ??',
      type: "physics",
      answers: [
        { text: 'Resistance of fluid', correct: true },
        { text: 'No term know as viscosity', correct: false },
        { text: 'Speed of an object with direction', correct: false },
        { text: 'None Of the above', correct: false }
      ]
    },
    {
      question: 'First equation of motion ??',
      type: "physics",
      answers: [
        { text: 'accelaration = (v - u)/t', correct: true },
        { text: 'displacement = ut + (at)/2', correct: false },
        { text: 'Law Of Inertia', correct: false },
        { text: 'None Of The Above', correct: false }
      ]
    }
  ]
})()

let tabSwitchCount = 1;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    if (tabSwitchCount >= 3) {
      window.close()
    }
    alert(`Do Not Switch Pages, Warning ${tabSwitchCount}`)
  } else {
    tabSwitchCount += 1
  }
})

// To assign event
const startEvent = new Event("start");

// To trigger the event Listener
let warning = 1
document.addEventListener("start", () => {
  const isAtMaxWidth = screen.availWidth - window.innerWidth === 0
  const isMaximizedAndDefaultZoom = isAtMaxWidth;
  if (!isMaximizedAndDefaultZoom) {
    alert(`Please Close all other Browser tabs and maximize your browser. Warning ${warning}`)
    warning++
    if (warning === 4) {
      alert("You have been disqualified as not followed instructions")
      window.close()
    }
  }
});

function countdown(elementName, minutes, seconds) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return (n <= 9 ? "0" + n : n);
  }

  function updateTimer() {
    msLeft = endTime - (+new Date);
    if (msLeft < 1000) {
      element.innerHTML = "Time is up!";
      setTimeout(() => {
        window.location.href = "http://localhost:3000/home";
      }, 3000)
      alert("Times Up You. Click On Ok then you will be redirecting in 3 seconds")
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }

  element = document.getElementById(elementName);
  endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}

function call50() {
  let num1 = Math.floor(Math.random() * 4);
  let num2 = Math.floor(Math.random() * 4);

  if (num1 === num2) {
    num2 = Math.floor(Math.random() * 4);
  }

  setStatusClass(Array.from(answerButtonsElement.children)[num2], Array.from(answerButtonsElement.children)[num2].dataset.correct)
  setStatusClass(Array.from(answerButtonsElement.children)[num1], Array.from(answerButtonsElement.children)[num1].dataset.correct)
  document.querySelector(".life1").setAttribute('onclick', 'disabled')
}

function callGoogle() {
  const popupwin = window.open("https://www.google.com", "", `width=${window.innerWidth / 2}, height=${window.innerHeight / 2}`);
  setTimeout(function () { popupwin.close(); }, 15000);
  document.querySelector(".life").setAttribute('onclick', 'disabled')
}