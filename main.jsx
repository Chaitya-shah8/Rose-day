@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Crimson+Pro:wght@400;500&display=swap");

body {
  margin: 0;
  font-family: "Crimson Pro", serif;
  background: linear-gradient(135deg, #fff0f5, #ffe4ed);
}

.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(18px);
  padding: 3.5rem;
  border-radius: 28px;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 30px 80px rgba(255, 107, 157, 0.25);
}

.title {
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
  color: #e75480;
}

.title.small {
  font-size: 2.2rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
  font-style: italic;
}

.divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, transparent, #ff8fb3, transparent);
  margin: 2rem auto;
}

.cta {
  border: none;
  background: linear-gradient(135deg, #ff6b9d, #ff8fb3);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
}

.bouquet {
  width: 100%;
  max-width: 380px;
  margin-bottom: 2rem;
  filter: drop-shadow(0 20px 50px rgba(255, 107, 157, 0.35));
}

.note {
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
