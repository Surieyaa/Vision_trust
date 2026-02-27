async function analyzeImage() {
    const fileInput = document.getElementById("imageUpload");
    const resultDiv = document.getElementById("result");

    if (!fileInput.files.length) {
        resultDiv.innerHTML = "Please upload an image.";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function() {
        const base64Image = reader.result.split(",")[1];

        const response = await fetch("/.netlify/functions/detect", {
            method: "POST",
            body: JSON.stringify({ image: base64Image })
        });

        const data = await response.json();
        resultDiv.innerHTML = 
            `Prediction: ${data.label} <br> Confidence: ${data.confidence}%`;
    };

    reader.readAsDataURL(file);
}