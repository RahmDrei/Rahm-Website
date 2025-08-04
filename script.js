document.getElementById("copyBtn").addEventListener("click", () => {
  const key = document.getElementById("keyBox").textContent.trim();
  navigator.clipboard.writeText(key).then(() => {
    document.getElementById("status").textContent = "🟢 Copied!";
  }).catch(err => {
    document.getElementById("status").textContent = "❌ Copy failed.";
    console.error(err);
  });
});
