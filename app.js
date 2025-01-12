document.querySelector(".projects-btn").addEventListener("click", function() {
    alert("Projelerinizi keşfetmek için yeni sayfaya yönlendiriliyorsunuz.");
  });
  var heading = document.querySelector("h1");
var text = heading.textContent.split("");
heading.innerHTML = "";

text.forEach(function(letter) {
  var span = document.createElement("span");
  span.textContent = letter;
  span.style.transition = "color 0.5s";
  heading.appendChild(span);
});

heading.addEventListener("mouseover", function() {
  document.querySelectorAll("h1 span").forEach(function(span) {
    span.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
});
var button = document.createElement("button");
button.innerText = "İçeriği Yükle";
document.body.appendChild(button);

button.addEventListener("click", function() {
  var content = document.createElement("div");
  content.innerHTML = "<h2>Yeni İçerik Yüklendi!</h2><p>Bu içerik, butona tıklayarak dinamik olarak yüklendi.</p>";
  document.body.appendChild(content);
});

document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', () => {
      image.classList.toggle('large');
    });
  });

 

  