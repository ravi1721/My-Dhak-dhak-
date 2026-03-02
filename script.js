const hugBtn = document.getElementById("hugBtn");

hugBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="margin-top:15%; padding:20px; font-family:'Segoe UI', sans-serif;">
            <h1 style="color:#ff99aa;">🫂</h1>
            <h2 style="color:#555; line-height:1.8;">
                Come here…<br><br>
                Let me hold you gently.<br>
                No rush. No noise.<br>
                Just us… breathing together.<br><br>
                Your heartbeat near mine.<br>
                Your warmth around me.<br><br>
                In your arms, I feel complete.<br>
                In your hug, I feel home. 🤍<br><br>
                I love you V 💞
            </h2>
        </div>
    `;
});

// Slow floating hearts
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}, 800);
