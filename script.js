function copyKey() {
  const key = document.getElementById("keyBox").textContent;
  navigator.clipboard.writeText(key).then(() => {
    document.getElementById("status").textContent = "🟢 Key copied to clipboard!";
    console.log("Copied:", key);
  }).catch(err => {
    document.getElementById("status").textContent = "❌ Copy failed.";
    console.error(err);
  });
}
