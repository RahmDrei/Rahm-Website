const correctKey = "cosmicveil123"; // Replace with your actual key or fetch from raw URL

function validateKey() {
  const input = document.getElementById("keyInput").value;
  const status = document.getElementById("status");

  if (input === correctKey) {
    status.textContent = "🟢 Key accepted! Welcome to the Veil.";
    status.style.color = "#aaffaa";
  } else {
    status.textContent = "❌ Invalid key. Try again.";
    status.style.color = "#ffaaaa";
  }
}

function toggleCrown() {
  const container = document.querySelector(".container");
  container.style.boxShadow = "0 0 20px gold";
  document.getElementById("status").textContent = "👑 Crown Mode Activated";
}
