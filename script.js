document.getElementById('imageInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const preview = document.getElementById('preview');

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

function detectDisease() {
  // Placeholder function for disease detection logic
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Disease detected!';
}