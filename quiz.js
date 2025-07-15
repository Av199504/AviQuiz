// Quiz questions (50 questions)

const questions = [

  // Section 1: An Astrologer’s Day (20 questions)

  {

    type: "multiple",

    question: "Where does the astrologer set up his business?",

    options: ["A temple", "A riverbank", "A park", "A market"],

    answer: "A park"

  },

  {

    type: "multiple",

    question: "What time does the astrologer start his work each day?",

    options: ["Morning", "Midday", "Evening", "Night"],

    answer: "Midday"

  },

  {

    type: "multiple",

    question: "Who is the stranger who confronts the astrologer at the end of the day?",

    options: ["A random client", "Guru Nayak", "The astrologer’s friend", "A police officer"],

    answer: "Guru Nayak"

  },

  {

    type: "multiple",

    question: "What is the primary source of light for the astrologer’s workspace?",

    options: ["A lamp", "Sunlight", "A flare", "A candle"],

    answer: "A flare"

  },

  {

    type: "multiple",

    question: "What had the astrologer done to Guru Nayak many years ago?",

    options: ["Stolen his money", "Stabbed him and left him for dead", "Cheated him in a business deal", "Refused to help him"],

    answer: "Stabbed him and left him for dead"

  },

  {

    type: "multiple",

    question: "The word 'pyol' in the story refers to:",

    options: ["A high platform on both sides of a house entrance", "A type of cloth", "A traditional lamp", "A horse-drawn cart"],

    answer: "A high platform on both sides of a house entrance"

  },

  {

    type: "multiple",

    question: "What does the word 'piqued' mean in the context of 'Our friend felt piqued'?",

    options: ["Excited", "Annoyed or irritated", "Confused", "Happy"],

    answer: "Annoyed or irritated"

  },

  {

    type: "multiple",

    question: "The term 'jutka' in the story refers to:",

    options: ["A type of food", "A two-wheeled, horse-drawn carriage", "A musical instrument", "A piece of clothing"],

    answer: "A two-wheeled, horse-drawn carriage"

  },

  {

    type: "truefalse",

    question: "The astrologer was as much a stranger to the stars as his customers.",

    answer: true

  },

  {

    type: "truefalse",

    question: "The astrologer’s wife was angry with him for nearly killing someone.",

    answer: false

  },

  {

    type: "multiple",

    question: "Why does the astrologer feel relieved after meeting Guru Nayak?",

    options: ["Guru Nayak pays him a large sum", "He realizes he is not a murderer", "Guru Nayak forgives him", "He escapes arrest"],

    answer: "He realizes he is not a murderer"

  },

  {

    type: "multiple",

    question: "What does the astrologer’s interaction with Guru Nayak reveal about his character?",

    options: ["His honesty and integrity", "His cunning and survival instincts", "His fear of confrontation", "His lack of intelligence"],

    answer: "His cunning and survival instincts"

  },

  {

    type: "multiple",

    question: "The astrologer sets his equipment under a tamarind tree. What is the correct form of the verb in this sentence: 'The astrologer ___ his equipment under a tamarind tree.'?",

    options: ["sets", "set", "setting", "is setting"],

    answer: "set"

  },

  {

    type: "multiple",

    question: "In the sentence, 'His eyes sparkled with a sharp, abnormal gleam,' the word 'sparkled' is:",

    options: ["A noun", "An adjective", "A verb", "An adverb"],

    answer: "A verb"

  },

  {

    type: "multiple",

    question: "Which of the following is a correctly punctuated version of a sentence from the story?",

    options: [

      "The astrologer, said, 'You were left for dead.'",

      "The astrologer said 'You were left for dead.'",

      "The astrologer said, 'You were left for dead.'",

      "The astrologer, said 'You were left for dead.'"

    ],

    answer: "The astrologer said, 'You were left for dead.'"

  },

  {

    type: "multiple",

    question: "What color is the astrologer’s turban?",

    options: ["Red", "Green", "Saffron", "Blue"],

    answer: "Saffron"

  },

  {

    type: "multiple",

    question: "What does the astrologer demand from Guru Nayak for his advice?",

    options: ["Five rupees", "Twelve annas and a half", "Three pies", "One rupee"],

    answer: "Five rupees"

  },

  {

    type: "multiple",

    question: "The astrologer’s professional equipment does NOT include:",

    options: ["Cowrie shells", "A magnifying glass", "A cloth with mystic charts", "Palmyra writing"],

    answer: "A magnifying glass"

  },

  {

    type: "multiple",

    question: "The term 'Raja’s Delicacy' refers to:",

    options: ["A dish eaten by the astrologer", "A name given to stale sweets by the groundnut vendor", "A type of cloth sold nearby", "A special horoscope reading"],

    answer: "A name given to stale sweets by the groundnut vendor"

  },

  {

    type: "multiple",

    question: "What literary device is used when the astrologer recognizes Guru Nayak but does not reveal it?",

    options: ["Foreshadowing", "Irony", "Metaphor", "Simile"],

    answer: "Irony"

  },

  // Section 2: The Swami and Mother Worship (15 questions)

  {

    type: "multiple",

    question: "Who wrote 'The Swami and Mother Worship'?",

    options: ["Swami Vivekananda", "Sister Nivedita", "Sri Ramakrishna", "R.K. Narayan"],

    answer: "Sister Nivedita"

  },

  {

    type: "multiple",

    question: "From which book is 'The Swami and Mother Worship' taken?",

    options: ["The Master as I Saw Him", "Malgudi Days", "The Gita", "The Complete Works of Vivekananda"],

    answer: "The Master as I Saw Him"

  },

  {

    type: "multiple",

    question: "Who is referred to as the 'born educator' by Sister Nivedita?",

    options: ["Sri Ramakrishna", "Swami Vivekananda", "Sister Nivedita", "Devendranath Tagore"],

    answer: "Swami Vivekananda"

  },

  {

    type: "multiple",

    question: "What does 'shop-keeping' in worship refer to according to Swami Vivekananda?",

    options: ["Chanting mantras", "Offering animal sacrifices", "Meditating daily", "Visiting temples"],

    answer: "Offering animal sacrifices"

  },

  {

    type: "multiple",

    question: "Who dedicated Swami Vivekananda to Kali?",

    options: ["Sister Nivedita", "Sri Ramakrishna Paramahamsa", "Devendranath Tagore", "Saradananda"],

    answer: "Sri Ramakrishna Paramahamsa"

  },

  {

    type: "multiple",

    question: "The term 'Brahmajnani' means:",

    options: ["A devotee of Kali", "One who has the highest knowledge of Brahman", "A temple priest", "A wandering monk"],

    answer: "One who has the highest knowledge of Brahman"

  },

  {

    type: "multiple",

    question: "What does 'samadhi' refer to in the context of the text?",

    options: ["A type of prayer", "The highest level of meditation", "A religious festival", "A sacred text"],

    answer: "The highest level of meditation"

  },

  {

    type: "truefalse",

    question: "Swami Vivekananda initially hated the idea of worshipping Kali.",

    answer: true

  },

  {

    type: "truefalse",

    question: "Sister Nivedita believed that religions were merely languages.",

    answer: true

  },

  {

    type: "multiple",

    question: "What does Swami Vivekananda’s statement 'I worship the terrible' reveal about his philosophy?",

    options: ["He feared Kali", "He embraced the fierce aspects of divinity", "He rejected traditional worship", "He preferred peaceful deities"],

    answer: "He embraced the fierce aspects of divinity"

  },

  {

    type: "multiple",

    question: "How does Sister Nivedita’s perspective on Kali worship evolve in the text?",

    options: ["She rejects it completely", "She approaches it as a learner of a new language", "She criticizes it as outdated", "She ignores it"],

    answer: "She approaches it as a learner of a new language"

  },

  {

    type: "multiple",

    question: "In the sentence, 'Swami Vivekananda said, “I worship the terrible,”' the word 'terrible' is:",

    options: ["A noun", "An adjective", "A verb", "An adverb"],

    answer: "An adjective"

  },

  {

    type: "multiple",

    question: "Which sentence is grammatically correct?",

    options: [

      "Sister Nivedita learn about Kali worship from Vivekananda.",

      "Sister Nivedita learned about Kali worship from Vivekananda.",

      "Sister Nivedita learning about Kali worship from Vivekananda.",

      "Sister Nivedita learns about Kali worship from Vivekananda."

    ],

    answer: "Sister Nivedita learned about Kali worship from Vivekananda."

  },

  {

    type: "multiple",

    question: "The sentence 'The Impersonal God, seen through the mists of sense, is personal' uses which figure of speech?",

    options: ["Metaphor", "Simile", "Personification", "Hyperbole"],

    answer: "Metaphor"

  },

  {

    type: "fillblank",

    question: "Swami Vivekananda was dedicated to ______ by Sri Ramakrishna.",

    answer: "Kali"

  },

  // Section 3: Amarnath (15 questions)

  {

    type: "multiple",

    question: "Where did Swami Vivekananda announce his plan to go to Amarnath?",

    options: ["At a temple", "In the Mogul Gardens at Achhabal", "On a boat in Islamabad", "In the Cave of Amarnath"],

    answer: "In the Mogul Gardens at Achhabal"

  },

  {

    type: "multiple",

    question: "What is Pawan famous for in the context of the Amarnath pilgrimage?",

    options: ["Its temples", "Its holy springs", "Its markets", "Its forests"],

    answer: "Its holy springs"

  },

  {

    type: "multiple",

    question: "What is the Cave of Amarnath situated in?",

    options: ["A dense forest", "A boulder-strewn gorge", "A wide valley", "A mountain peak"],

    answer: "A boulder-strewn gorge"

  },

  {

    type: "multiple",

    question: "What did the Swami see in the Cave of Amarnath?",

    options: ["A golden idol", "The great ice-lingam", "A group of monks", "A sacred fire"],

    answer: "The great ice-lingam"

  },

  {

    type: "multiple",

    question: "What sacrament is performed during the culmination of the Amarnath pilgrimage?",

    options: ["Offering fruits", "Tying red and yellow threads", "Lighting candles", "Chanting mantras"],

    answer: "Tying red and yellow threads"

  },

  {

    type: "multiple",

    question: "The word 'saeter-huts' in the text refers to:",

    options: ["Temporary shelters for shepherds", "Permanent houses", "Religious shrines", "Market stalls"],

    answer: "Temporary shelters for shepherds"

  },

  {

    type: "multiple",

    question: "The term 'declivities' in the context of the pilgrimage refers to:",

    options: ["Flat plains", "Steep slopes", "Rivers", "Forests"],

    answer: "Steep slopes"

  },

  {

    type: "truefalse",

    question: "The pilgrimage to Amarnath culminates on the day of Raksha Bandhan.",

    answer: true

  },

  {

    type: "truefalse",

    question: "The Cave of Amarnath was commercialized and exploited.",

    answer: false

  },

  {

    type: "multiple",

    question: "What does the ice-lingam symbolize in the context of the Amarnath pilgrimage?",

    options: ["Material wealth", "The divinity of Lord Shiva", "Human struggle", "Nature’s beauty"],

    answer: "The divinity of Lord Shiva"

  },

  {

    type: "multiple",

    question: "How does Sister Nivedita describe the organization of the pilgrimage?",

    options: ["Chaotic and disorganized", "Instinctive and orderly", "Commercial and exploitative", "Modern and efficient"],

    answer: "Instinctive and orderly"

  },

  {

    type: "multiple",

    question: "In the sentence, 'The Swami knelt and prostrated in the Cave,' the word 'prostrated' is:",

    options: ["A noun", "A verb", "An adjective", "An adverb"],

    answer: "A verb"

  },

  {

    type: "multiple",

    question: "Which sentence is grammatically correct?",

    options: [

      "The pilgrims was camping at Pawan for a night.",

      "The pilgrims were camping at Pawan for a night.",

      "The pilgrims camps at Pawan for a night.",

      "The pilgrims is camping at Pawan for a night."

    ],

    answer: "The pilgrims were camping at Pawan for a night."

  },

  {

    type: "multiple",

    question: "The sentence 'The cavern revealed itself to the Swami as the secret of Kailas' uses which figure of speech?",

    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],

    answer: "Metaphor"

  },

  {

    type: "multiple",

    question: "Identify the correct preposition in this sentence: 'The pilgrims camped ___ Pawan for a night.'",

    options: ["at", "in", "on", "by"],

    answer: "at"

  }

];

// Quiz logic

let currentQuestion = 0;

let score = 0;

let answers = new Array(questions.length).fill(null);

let timeLeft = 30 * 60; // 30 minutes in seconds

let timerInterval = null;

// Validate DOM elements

const getElement = (id) => {

  const element = document.getElementById(id);

  if (!element) {

    console.error(`Element with ID '${id}' not found.`);

    alert(`Error: Required element '${id}' is missing in the HTML.`);

    throw new Error(`Missing DOM element: ${id}`);

  }

  return element;

};

function startQuiz() {

  try {

    displayQuestion();

    startTimer();

  } catch (error) {

    console.error("Failed to start quiz:", error);

    alert("An error occurred while starting the quiz. Please check the console for details.");

  }

}

function startTimer() {

  if (timerInterval) clearInterval(timerInterval); // Clear any existing timer

  timerInterval = setInterval(() => {

    if (timeLeft <= 0) {

      clearInterval(timerInterval);

      submitQuiz();

      return;

    }

    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    getElement("timer").textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  }, 1000);

}

function displayQuestion() {

  const questionData = questions[currentQuestion];

  const questionElement = getElement("question");

  const optionsDiv = getElement("options");

  const feedbackElement = getElement("feedback");

  questionElement.innerHTML = `<strong>Question ${currentQuestion + 1}:</strong> ${questionData.question}`;

  optionsDiv.innerHTML = "";

  feedbackElement.textContent = "";

  if (questionData.type === "multiple") {

    questionData.options.forEach((option) => {

      const optionElement = document.createElement("div");

      optionElement.className = `option ${answers[currentQuestion] === option ? "selected" : ""}`;

      optionElement.textContent = option;

      optionElement.onclick = () => selectOption(option);

      optionsDiv.appendChild(optionElement);

    });

  } else if (questionData.type === "truefalse") {

    ["True", "False"].forEach((option) => {

      const optionElement = document.createElement("div");

      optionElement.className = `option ${answers[currentQuestion] === option ? "selected" : ""}`;

      optionElement.textContent = option;

      optionElement.onclick = () => selectOption(option);

      optionsDiv.appendChild(optionElement);

    });

  } else if (questionData.type === "fillblank") {

    const inputElement = document.createElement("input");

    inputElement.type = "text";

    inputElement.placeholder = "Enter your answer";

    inputElement.value = answers[currentQuestion] || "";

    inputElement.oninput = (e) => {

      answers[currentQuestion] = e.target.value.trim();

    };

    optionsDiv.appendChild(inputElement);

  }

  getElement("prev-btn").disabled = currentQuestion === 0;

  getElement("next-btn").style.display = currentQuestion === questions.length - 1 ? "none" : "inline";

  getElement("submit-btn").style.display = currentQuestion === questions.length - 1 ? "inline" : "none";

}

function selectOption(option) {

  answers[currentQuestion] = option;

  document.querySelectorAll(".option").forEach((opt) => {

    opt.classList.remove("selected");

    if (opt.textContent === option) opt.classList.add("selected");

  });

}

function prevQuestion() {

  if (currentQuestion > 0) {

    currentQuestion--;

    displayQuestion();

  }

}

function nextQuestion() {

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    displayQuestion();

  }

}

function submitQuiz() {

  if (timerInterval) clearInterval(timerInterval);

  score = 0;

  questions.forEach((q, i) => {

    if (q.type === "fillblank") {

      if (answers[i] && answers[i].toLowerCase().trim() === q.answer.toLowerCase().trim()) {

        score++;

      }

    } else if (q.type === "truefalse") {

      if (answers[i] === (q.answer ? "True" : "False")) {

        score++;

      }

    } else if (answers[i] === q.answer) {

      score++;

    }

  });

  getElement("quiz").style.display = "none";

  getElement("result").style.display = "block";

  getElement("score").textContent = `Your Score: ${score} / ${questions.length}`;

}

function restartQuiz() {

  currentQuestion = 0;

  score = 0;

  answers = new Array(questions.length).fill(null);

  timeLeft = 30 * 60;

  getElement("quiz").style.display = "block";

  getElement("result").style.display = "none";

  startQuiz();

}

// Initialize quiz on window load

window.onload = () => {

  try {

    // Verify all required DOM elements

    ["question", "options", "timer", "prev-btn", "next-btn", "submit-btn", "quiz", "result", "score", "feedback"].forEach(getElement);

    startQuiz();

  } catch (error) {

    console.error("Initialization failed:", error);

    alert("Failed to initialize quiz. Please ensure all required HTML elements are present.");

  }

};