function generateAPK() {
    alert("APK Ban Gayi! (Demo)");
    // Yahan backend code aayega baad mein
}
// script.js - Backend Connection Code
async function generateAPK() {
  const userText = document.getElementById('textInput').value;
  
  try {
    // Backend URL (Vercel)
    const response = await fetch('https://text-to-app.vercel.app/generate-apk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: userText }) // User ka input backend pe bhej rahe hain
    });
    
    const result = await response.json();
    alert(`APK Download Link: ${result.apkUrl}`); // Backend se response show karega
  } catch (error) {
    console.error("Error:", error);
    alert("API mein masla hai, baad mein try karein!");
  }
}
