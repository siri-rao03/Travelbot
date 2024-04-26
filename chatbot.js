// define the chatbot responses

const link={
	"":""
}

const responses = {
	"hello": "Where you are wishing to visit...?",
	"mumbai": "Sorry for inconvience, we don't have data for it.Would you like an itenary for Pune ?",
	"pune":"How many days are you planning to visit Pune ?",
	"yes":"How many days are you planning to visit Pune ?",
	"1":"Plan for Day 1:<br>| 8:00 | Visit Aga Khan Palace | Important historical site |<br>| 10:00 | Shaniwar Wada | Important historical fort |<br>| 13:00 | Lunch at Athithya | Recommended restaurant |<br>| 15:00 | Visit Pataleshwar Cave Temple | Important historical temple |<br>| 17:00 | Parvati Hill | Beautiful view of the city |",
	"2":"Plan for Day 1:<br><br>| 8:00 |Visit Aga Khan Palace | Important historical site |<br>| 10:00 | Shaniwar Wada | Important historical fort |<br>| 13:00 | Lunch at Athithya | Recommended restaurant |<br>| 15:00 | Visit Pataleshwar Cave Temple | Important historical temple |<br>| 17:00 | Parvati Hill | Beautiful view of the city |<br><br><br>Plan for Day 2:<br><br>| 8:00 | Chaturshringi temple | Hindu temple |<br>| 10:00 | Visit Shinde Chhatri | Important historical monument |<br>| 13:00 | Lunch at Chaitanya Paratha | Recommended restaurant |<br>| 15:00 | Osho International Meditation Resort | Unique experience |<br>| 17:00 | Boat ride along Mula-Mutha River | Beautiful view of the city |",
	"3":"Plan for Day 1:<br><br>| 8:00 | Visit Aga Khan Palace | Important historical site |<br>| 10:00 | Shaniwar Wada | Important historical fort |<br>| 13:00 |Lunch at Athithya | Recommended restaurant |<br>| 15:00 | Visit Pataleshwar Cave Temple | Important historical temple |<br>| 17:00 | Parvati Hill | Beautiful view of the city |<br><br><br>Plan for Day 2:<br><br>| 8:00 | Chaturshringi temple | Hindu temple |<br>| 10:00 | Visit Shinde Chhatri | Important historical monument |<br>| 13:00 | Lunch at Chaitanya Paratha | Recommended restaurant |<br>| 15:00 | Osho International Meditation Resort | Unique experience |<br>| 17:00 | Boat ride along Mula-Mutha River | Beautiful view of the city |<br><br><br>Plan for Day 3:<br><br>| 8:00 | Visit Raja Dinkar Kelkar Museum | Interesting museum |<br>| 10:00 | Visit Bund Garden | Beautiful garden with walking paths |<br>| 13:00 | Lunch at Sorriso | Recommended restaurant |<br>| 15:00 | Visit Saras Baug Temple | Important historical temple |<br>| 17:00 | Baner Hill | Beautiful view of the city |",
	"4":"Plan for Day 1:<br><br>| 8:00 | Visit Aga Khan Palace | Important historical site |<br>| 10:00 | Shaniwar Wada | Important historical fort |<br>| 13:00 |Lunch at Athithya | Recommended restaurant |<br>| 15:00 | Visit Pataleshwar Cave Temple | Important historical temple |<br>| 17:00 | Parvati Hill | Beautiful view of the city |<br><br><br>Plan for Day 2:<br><br>| 8:00 | Chaturshringi temple | Hindu temple |<br>| 10:00 | Visit Shinde Chhatri | Important historical monument |<br>| 13:00 | Lunch at Chaitanya Paratha | Recommended restaurant |<br>| 15:00 | Osho International Meditation Resort | Unique experience |<br>| 17:00 | Boat ride along Mula-Mutha River | Beautiful view of the city |<br><br><br>Plan for Day 3:<br><br>| 8:00 | Visit Raja Dinkar Kelkar Museum | Interesting museum |<br>| 10:00 | Visit Bund Garden | Beautiful garden with walking paths |<br>| 13:00 |Lunch at Sorriso | Recommended restaurant |<br>| 15:00 | Visit Saras Baug Temple | Important historical temple |<br>| 17:00 | Baner Hill | Beautiful view of the city |<br><br><br></br>Plan for Day 4:<br><br>| 8:00 | Visit Sinhagad Fort | Important historical fort |<br>| 10:00 | Visit Vetal Hill | Beautiful view of the city |<br>| 13:00 | Lunch at Retro Madhushala | Recommended restaurant |<br>| 15:00 | Visit Rajiv Gandhi Zoological Park | Fun activity |<br>| 17:00 | Visit Appu Ghar Amusement Park | Fun activity |",
	"5":"Plan for Day 1:<br><br>| 8:00 | Visit Aga Khan Palace | Important historical site |<br>| 10:00 | Shaniwar Wada | Important historical fort |<br>| 13:00 | Lunch at Athithya | Recommended restaurant |<br>| 15:00 | Visit Pataleshwar Cave Temple | Important historical temple |<br>| 17:00 | Parvati Hill | Beautiful view of the city |<br><br><br>Plan for Day 2:<br><br>| 8:00 | Chaturshringi temple | Hindu temple |<br>| 10:00 | Visit Shinde Chhatri | Important historical monument |<br>| 13:00 | Lunch at Chaitanya Paratha | Recommended restaurant |<br>| 15:00 | Osho International Meditation Resort | Unique experience |<br>| 17:00 | Boat ride along Mula-Mutha River | Beautiful view of the city |<br><br><br>Plan for Day 3:<br><br>| 8:00 | Visit Raja Dinkar Kelkar Museum | Interesting museum |<br>| 10:00 | Visit Bund Garden | Beautiful garden with walking paths |<br>| 13:00 | Lunch at Sorriso  | Recommended restaurant |<br>| 15:00 | Visit Saras Baug Temple | Important historical temple |<br>| 17:00 | Baner Hill | Beautiful view of the city |<br><br><br></br>Plan for Day 4:<br><br>| 8:00 | Visit Sinhagad Fort | Important historical fort |<br>| 10:00 | Visit Vetal Hill | Beautiful view of the city |<br>| 13:00 | Lunch at Retro Madhushala | Recommended restaurant |<br>| 15:00 | Visit Rajiv Gandhi Zoological Park | Fun activity |<br>| 17:00 | Visit Appu Ghar Amusement Park | Fun activity |<br><br><br>Plan for Day 5:<br><br>| 8:00 | DagaduShet Ganpati Temple | Important historical temple |<br>| 10:00 | Visit National War Memorial | Important historical site |<br>| 13:00 | Lunch at Chingari | Recommended restaurant |<br>| 15:00 | Visit Darshan Museum | Interesting museum |<br>| 17:00 | Visit Lal Mahal | Important historical palace |",
	"6":"Plan for Day 1:<br><br>| 8:00 | Visit Aga Khan Palace | Important historical site |<br>| 10:00 | Shaniwar Wada | Important historical fort |<br>| 13:00 | Lunch at Athithya | Recommended restaurant |<br>| 15:00 | Visit Pataleshwar Cave Temple | Important historical temple |<br>| 17:00 | Parvati Hill | Beautiful view of the city |<br><br><br>Plan for Day 2:<br><br>| 8:00 | Chaturshringi temple | Hindu temple |<br>| 10:00 | Visit Shinde Chhatri | Important historical monument |<br>| 13:00 | Lunch at Chaitanya Paratha | Recommended restaurant |<br>| 15:00 | Osho International Meditation Resort | Unique experience |<br>| 17:00 | Boat ride along Mula-Mutha River | Beautiful view of the city |<br><br><br>Plan for Day 3:<br><br>| 8:00 | Visit Raja Dinkar Kelkar Museum | Interesting museum |<br>| 10:00 | Visit Bund Garden | Beautiful garden with walking paths |<br>| 13:00 | Lunch at Sorriso | Recommended restaurant |<br>| 15:00 | Visit Saras Baug Temple | Important historical temple |<br>| 17:00 | Baner Hill | Beautiful view of the city |<br><br><br></br>Plan for Day 4:<br><br>| 8:00 | Visit Sinhagad Fort | Important historical fort |<br>| 10:00 | Visit Vetal Hill | Beautiful view of the city |<br>| 13:00 | Lunch at Retro Madhushala | Recommended restaurant |<br>| 15:00 | Visit Rajiv Gandhi Zoological Park | Fun activity |<br>| 17:00 | Visit Appu Ghar Amusement Park | Fun activity |<br><br><br>Plan for Day 5:<br><br>| 8:00 | DagaduShet Ganpati Temple | Important historical temple |<br>| 10:00 | Visit National War Memorial | Important historical site |<br>| 13:00 | Lunch at Chingari | Recommended restaurant |<br>| 15:00 | Visit Darshan Museum | Interesting museum |<br>| 17:00 | Visit Lal Mahal | Important historical palace |<br><br><br>Plan for Day 6:<br><br>| 8:00 | Visit Lohagad Fort | Important historical fort |<br>| 13:00 | Lunch at Shama Bhosale Lazeez Biryani | Recommended restaurant |<br>| 15:00 |Phoenix Market CIty|The biggest mall |<br>| 17:00 | Night walk near WTC| World Trade Centre. |",
	"default": "I'm sorry, I don't understand. Can you please rephrase your question?"
};

// function to send a message from the user
function sendUserMessage() {
	// get the user input
	const userInput = document.getElementById("chatbot-input").value;

	// create a new dialogue element
	const dialogueElement = document.createElement("div");
	dialogueElement.classList.add("chatbot-dialogue-user");
	dialogueElement.innerHTML = `<p>${userInput}</p>`;

	// append the dialogue element to the chatbot dialogue
	document.getElementById("chatbot-dialogue").appendChild(dialogueElement);

	// clear the input field
	document.getElementById("chatbot-input").value = "";

	// send the message to the chatbot
	sendMessageToChatbot(userInput);
}

// function to send a message to the chatbot and receive a response
function sendMessageToChatbot(userInput) {
	// create a new dialogue element
	const dialogueElement = document.createElement("div");
	dialogueElement.classList.add("chatbot-dialogue-chatbot");

	// check if the user input matches any known responses
	if (responses[userInput.toLowerCase()]) {
		dialogueElement.innerHTML = `<p>${responses[userInput.toLowerCase()]}</p>`;
	} else {
		dialogueElement.innerHTML = `<p>${responses["default"]}</p>`;
	}

	// append the dialogue element to the chatbot dialogue
	document.getElementById("chatbot-dialogue").appendChild(dialogueElement);
}
