const textArea = document.getElementById("text");
const voiceSelect = document.getElementById("voices");
let voices = [];

function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  voices.forEach((voice, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function speak() {
  const text = textArea.value;
  const speech = new SpeechSynthesisUtterance(text);

  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) {
    speech.voice = selectedVoice;
  }

  speech.rate = 1; // Speed of the speech
  speech.pitch = 1; // Pitch of the speech
  speech.volume = 1; // Volume of the speech

  window.speechSynthesis.speak(speech);
}

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Populate voice options when they are loaded
window.speechSynthesis.onvoiceschanged = populateVoices;

// Initial call to populate voices
populateVoices();
