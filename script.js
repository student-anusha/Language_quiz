const questions = {
  1: {q: "संविधान के किस अनुच्छे्द में कहा गया है – “संघ की राजभाषा हिन्दी और लिपि देवनागरी होगी”?", a: "343 अनुच्छेद में "},
  2: {q: "श्री लाल शुक्ल की प्रसिद्ध रचना “राग दरबारी” को साहित्य का कौन सा पुरस्कार दिया गया था?", a: " साहित्य अकादमी  "},
  3: {q: "किस लेखक की लघुकथा मारे गए गुलफ़ाम पर 'तीसरी कसम' नामक फ़िल्म बनी है?", a: "फणीश्वर नाथ रेणु"},
  4: {q: "2024 में केंद्रीय मंत्रिमंडल ने और कितनी भाषाओं को 'शास्त्रीय' भाषा का दर्जा दिये जाने को स्वीकृति दी है?", a: "पांच भाषाओं को "},
  5: {q: "अंतर्राष्ट्रीय बुकर पुरस्कार से सम्मानित हिंदी उपन्यास ‘रेत समाधि’ की लेखिका कौन है?", a: "गीतांजलि श्री "},
  6: {q: "71वें राष्ट्रीय फिल्म पुरस्कार 2025 में किस फिल्म को सर्वश्रेष्ठ फीचर फिल्म का पुरस्कार मिला?", a: "12th फेल को "},
  7: {q: "भारत की पहली मूक फिल्म 'राजा हरिश्चंद्र' के निर्माता कौन थे?", a: "दादा साहेब फाल्के"},
  8: {q: "भारतीय भाषा अनुभाग की औपचारिक शुरुआत कब की गयी?   ", a: "- 06 जून 2025"},              
  9: {q: "अंडमान निकोबार द्वीप भाषा की दृष्टि से किस क्षेत्र में आता है?  ", a: "“क” क्षेत्र में"},
  10: {q: "भारत के राष्ट्रीय प्रतीक चिह्न अशोक स्तंभ के नीचे ’’सत्यमेव जयते’’ वाक्य मूलतः कहाँ से लिया गया है ?  ", a: "मुंडकोपनिषद् से"},
  11: {q: "ज्ञानपीठ पुरस्कार पाने वाले पहले हिंदी साहित्यकार कौन थे? ", a: "सुमित्रानंदन पंत "},
  12: {q: " देश के किसी सिनेमाघर में सबसे लंबे समय तक कौन सी फिल्म चली है?  ", a: " दिलवाले दुल्हनिया ले जायेंगे"},
  13: {q: "उर्दू किस भाषा का शब्द है ? ", a: "तुर्की भाषा का "},
  14: {q: "दक्षिणी भारत हिन्दी प्रचार सभा का मुख्यालय कहाँ स्थित है ?    ", a: "चेन्नई में "},
  15: {q: "शंकराचार्य ने किस सिद्धांत का प्रतिपादन किया?    ", a: "अद्वैत वेदांत "},
  16: {q: "प्रथम विश्व हिंदी सम्मेलन कहाँ हुआ था?   ", a: "नागपुर"}
};

let currentCircle = null;

function openQuestion(num) {
  currentCircle = num;
  document.getElementById("home-page").style.display = "none";
  document.getElementById("question-page").style.display = "block";
  document.getElementById("question-text").innerText = questions[num].q;
  document.getElementById("answer-text").innerText = questions[num].a;
  document.getElementById("answer-text").classList.remove("show");
  document.querySelector(".close-btn").style.display = "none";
}

function showAnswer() {
  document.getElementById("answer-text").classList.add("show");
  document.querySelector(".close-btn").style.display = "inline-block";
}

function closeQuestion() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("question-page").style.display = "none";
  let circles = document.querySelectorAll(".circle");
  circles[currentCircle - 1].classList.add("visited");
}