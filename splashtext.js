const texts = [
    "The band's back together again. And again. And again.",
    "It's Encore-ing time!",
    "wow it's an encore in here!",
    "If En, then only Core!",
    "Also try YARG!",
    "Also try Rock Band 3 Deluxe!",
    "Also try Clone Hero!",
    "Also try GHWT:DE!",
    "Also try GHTV Reloaded!",
    "Also try FNLookup!",
    "I hope this grabs your attention!",
    "acai if you see this please dm me \"banana\"!",
    "powered by HTML, css, javascript, and some enby's autism",
    "Trans Rights!",
    "Queer Rights!",
    "we do not discussion that here.",
    "There's a pipe bomb in your mailbox! Better get it! :3",
    "The overshell was the best invention since sliced bread!",
    "vs midas real",
    "No practice mode; it's cheating!",
    "Media streaming error!",
    "It's Only Connor was here!"
];

const randomIndex = Math.floor(Math.random() * texts.length);
document.getElementById('splash').innerText = texts[randomIndex];
