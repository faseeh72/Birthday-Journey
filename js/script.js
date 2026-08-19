/* =================================
   ELEMENTS
================================= */

const startButton =
    document.getElementById("startButton");

const welcomeSection =
    document.getElementById("welcome");

const letterSection =
    document.getElementById("letter");

const typewriterElement =
    document.getElementById("typewriter");

const letterButton =
    document.getElementById("letterButton");

const memorySection =
    document.getElementById("memories");

const memoryButton =
    document.getElementById("memoryButton");

const memoryTimeline =
    document.getElementById("memoryTimeline");

const appreciationSection =
    document.getElementById("appreciation");

const appreciationGrid =
    document.getElementById("appreciationGrid");

const appreciationButton =
    document.getElementById("appreciationButton");  
    
const wishSection =
    document.getElementById("wish");

const wishButton =
    document.getElementById("wishButton");

const giftSection =
    document.getElementById("gift");

const openGiftButton =
    document.getElementById("openGiftButton");

const giftIntro =
    document.getElementById("giftIntro");

const giftContent =
    document.getElementById("giftContent");

const accessLock =
    document.getElementById("accessLock");

const accessForm =
    document.getElementById("accessForm");

const accessPassword =
    document.getElementById("accessPassword");

const accessError =
    document.getElementById("accessError");

/* =================================
   BIRTHDAY MESSAGE
================================= */

const birthdayMessage = `
Senior, I know you might be expecting a normal birthday card from me this year, but

I wanted to create
something a little different for you.

Instead of giving you a normal birthday card,
I decided to build you a small journey.

A journey made from memories, wishes,
and a few surprises.

So take your time, enjoy every little part,
and most importantly...

Have a beautiful birthday. ❤️
`;


/* =================================
   START JOURNEY
================================= */

startButton.addEventListener("click", function () {

    welcomeSection.style.opacity = "0";

    setTimeout(function () {

        welcomeSection.style.visibility = "hidden";

        letterSection.classList.add("active");

        startTypewriter();

    }, 800);

});


/* =================================
   TYPEWRITER
================================= */

function startTypewriter() {

    let index = 0;

    typewriterElement.innerHTML = "";

    function typeCharacter() {

        if (index < birthdayMessage.length) {

            typewriterElement.innerHTML +=
                birthdayMessage.charAt(index);

            index++;

            setTimeout(typeCharacter, 35);

        } else {

            letterButton.classList.add("show");

        }

    }

    typeCharacter();

}


/* =================================
   MEMORY DATA
================================= */

const memories = [

    {
        year: "Old but Gold",

        title: "A Beautiful smile",

        description:
            "No Worries era, just enjoying every moment without stresses of world.",

        type: "image",

        media: "images/memories/memory-1.jpg"
    },


    {
        year: "Togetherness",

        title: "A Beautiful Memory",

        description:
            "Some memories become more precious as the years pass.",

        type: "image",

        media: "images/memories/memory-2.jpg"
    },


    {
        year: "2023",

        title: "Just One clip of us all together",

        description:
            "A moment that still makes me smile whenever I remember it.",

        type: "video",

        media: "videos/memories/memory-1.mp4"
    },


    {
        year: "2026",

        title: "Today",

        description:
            "And now we're here, shining brightly in path of MBBS, a sense of accomplishment.",

        type: "image",

        media: "images/memories/memory-4.jpg"
    }

];

/* =================================
   CREATE MEMORY CARDS
================================= */

memories.forEach(function (memory) {

    const memoryCard =
        document.createElement("article");

    memoryCard.classList.add("memory-card");


    let mediaHTML = "";


    if (memory.type === "image") {

        mediaHTML = `
            <img
                class="memory-media"
                src="${memory.media}"
                alt="${memory.title}"
                loading="lazy"
            >
        `;

    }


    if (memory.type === "video") {

        mediaHTML = `
            <video
                class="memory-media"
                controls
                preload="metadata"
            >
                <source
                    src="${memory.media}"
                    type="video/mp4"
                >

                Your browser does not support video playback.
            </video>
        `;

    }


    memoryCard.innerHTML = `

        <div class="memory-dot"></div>

        <div class="memory-content">

            ${mediaHTML}

            <div class="memory-details">

                <span class="memory-year">
                    ${memory.year}
                </span>

                <h3 class="memory-title">
                    ${memory.title}
                </h3>

                <p class="memory-description">
                    ${memory.description}
                </p>

            </div>

        </div>

    `;


    memoryTimeline.appendChild(memoryCard);

});

/* =================================
   OPEN MEMORY LANE
================================= */

letterButton.addEventListener("click", function () {

    console.log("Continue button clicked");

    letterSection.classList.remove("active");

    setTimeout(function () {

        memorySection.classList.add("active");

        console.log("Memory section:", memorySection);

        console.log(
            "Memory classes:",
            memorySection.className
        );

    }, 500);

});


/* =================================
   APPRECIATION DATA
================================= */

const appreciations = [

    {
        icon: "🤍",

        title: "Your Kind Heart",

        description:
            "There is something genuinely warm about the way you care about the people around you."
    },


    {
        icon: "🤲",

        title: "Your Faith",

        description:
            "The way you make time for prayer and keep your connection with Allah is something beautiful."
    },


    {
        icon: "☕",

        title: "Your Little Rituals",

        description:
            "Even something as simple as making coffee can somehow become part of what makes you, you."
    },


    {
        icon: "📱",

        title: "Your Fun Side",

        description:
            "From making snaps to capturing little moments, you know how to turn ordinary days into memories."
    },


    {
        icon: "🌹",

        title: "Your Simplicity",

        description:
            "You don't need anything complicated to stand out. There is something beautiful about your simplicity."
    },


    {
        icon: "✨",

        title: "Simply You",

        description:
            "And honestly, the best thing to admire is simply the person you are."
    }

];

/* =================================
   CREATE APPRECIATION CARDS
================================= */

appreciations.forEach(function (item) {

    const card =
        document.createElement("article");

    card.classList.add("appreciation-card");


    card.innerHTML = `

        <div class="appreciation-icon">
            ${item.icon}
        </div>

        <h3 class="appreciation-title">
            ${item.title}
        </h3>

        <p class="appreciation-description">
            ${item.description}
        </p>

    `;


    appreciationGrid.appendChild(card);

});


/* =================================
   OPEN APPRECIATION
================================= */

memoryButton.addEventListener("click", function () {

    console.log("Opening Appreciation...");

    memorySection.classList.remove("active");

    appreciationSection.classList.add("active");

});


/* =================================
   OPEN BIRTHDAY WISH
================================= */

appreciationButton.addEventListener("click", function () {

    console.log("Opening Birthday Wish...");

    appreciationSection.classList.remove("active");

    wishSection.classList.add("active");

});


/* =================================
   OPEN FINAL GIFT
================================= */

wishButton.addEventListener("click", function () {

    console.log("Opening Final Gift...");

    wishSection.classList.remove("active");

    giftSection.classList.add("active");

});


/* =================================
   REVEAL GIFT CONTENT
================================= */

openGiftButton.addEventListener("click", function () {

    console.log("Gift opened!");

    giftIntro.style.display = "none";

    giftContent.classList.add("show");

});



/* =================================
   ACCESS LOCK
================================= */

const SECRET_PASSWORD = "roma23";


accessForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const enteredPassword =
        accessPassword.value.trim();


    if (enteredPassword === SECRET_PASSWORD) {

        console.log("Access granted.");

        accessError.textContent = "";

        accessLock.classList.add("unlocked");

        setTimeout(function () {

            accessLock.style.display = "none";

        }, 850);


    } else {

        console.log("Access denied.");

        accessError.textContent =
            "That isn't the secret. Try again ❤️";

        accessPassword.value = "";

        accessPassword.focus();

    }

});