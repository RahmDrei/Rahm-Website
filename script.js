document.getElementById("copyBtn").addEventListener("click", () => {
  const key = document.getElementById("keyBox").textContent.trim();
  navigator.clipboard.writeText(key).then(() => {
    const status = document.getElementById("status");
    status.textContent = "🟢 Copied!";
    status.classList.add("copied");

    // Optional: Reset status after 2s
    setTimeout(() => {
      status.textContent = "🟡 Waiting...";
      status.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    document.getElementById("status").textContent = "❌ Copy failed.";
    console.error(err);
  });
});
