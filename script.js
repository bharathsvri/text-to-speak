const text = document.querySelector("#msg");


const submit = () => {
    const msg = text.value;
    console.log(msg);
    const voice = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(voice);
}