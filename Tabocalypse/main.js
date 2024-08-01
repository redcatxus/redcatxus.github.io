function openTabs(count, depth, message) {
  if (depth === 0) return;

  for (let i = 0; i < count; i++) {
    let newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>😜 You've been tabbed! 😜</title>
            <style>
              body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: #ffeb3b;
                font-family: Arial, sans-serif;
                text-align: center;
                overflow: hidden;
              }
              h1 {
                font-size: 3em;
                margin-bottom: 20px;
              }
              .smiley {
                position: absolute;
                animation: float 3s infinite;
                transform-origin: center;
              }
              @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                25% { transform: translateY(-20px) rotate(5deg); }
                50% { transform: translateY(0) rotate(0deg); }
                75% { transform: translateY(-15px) rotate(-5deg); }
              }
            </style>
          </head>
          <body>
            <h1>${message}</h1>
            ${Array.from({ length: 10 }, (_, idx) => `
              <div class="smiley" style="left: ${Math.random() * 100}vw; top: ${Math.random() * 100}vh; animation-delay: ${Math.random() * 3}s;">
                😜
              </div>
            `).join('')}
            <audio autoplay loop>
              <source src="https://www.soundjay.com/button/button-3.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
            <script>(${openTabs.toString()})(${count}, ${depth - 1}, 'You have been tabbed! 😜');<\/script>
          </body>
        </html>
      `);
    } else {
      console.log("Popup blocked or failed to open.");
    }
  }
}

openTabs(100, 3, 'Welcome to the Tabocalypse!'); // Adjust the numbers here for different results
