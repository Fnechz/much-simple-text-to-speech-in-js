const speak = (msg) => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
};

speak('hello world, I want to kill you for using me like a robot');
