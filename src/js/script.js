// menu lateral
// menu lateral

const menu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');
const body = document.body;

document.getElementById('menu-toggle').addEventListener('click', function () {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
    
    overlay.classList.remove('translate-x-full');
    overlay.classList.add('translate-x-0');

    body.classList.add('overflow-hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
    
    overlay.classList.remove('translate-x-0');
    overlay.classList.add('translate-x-full');

    body.classList.remove('overflow-hidden');
});

overlay.addEventListener('click', function () {
    document.getElementById('close-menu').click();
});

// menu lateral
// menu lateral

// drop-faq
// drop-faq

document.querySelectorAll(".faq-button").forEach(button => {
    button.addEventListener("click", function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector("svg");

        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
            content.style.maxHeight = "0px";
            content.classList.remove('mt-[60px]')
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('mt-[60px]')
        }
        button.classList.toggle("active");
    });
});

// drop-faq
// drop-faq

// audio player 
// audio player


const audio = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
if(playButton){
  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "⏸";
    } else {
      audio.pause();
      playButton.textContent = "▶";
    }
  });
  audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
  });
  
  progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });
}

// audio player
// audio player


// toggle categoria
// toggle categoria

const toggleBtn = document.getElementById('toggleCategoria');
const categoriaForm = document.getElementById('categoriaForm');

toggleBtn.addEventListener('click', () => {
  if (categoriaForm.classList.contains('max-h-0')) {
    categoriaForm.classList.remove('max-h-0');
    categoriaForm.classList.add('max-h-[1000px]');
    categoriaForm.classList.replace('border-0', 'border');
    categoriaForm.classList.add('border-t-0');
    toggleBtn.classList.replace('rounded-[20px]', 'rounded-t-[20px]');
  } else {
    categoriaForm.classList.remove('max-h-[1000px]');
    categoriaForm.classList.add('max-h-0');
    categoriaForm.classList.replace('border', 'border-0');
    categoriaForm.classList.remove('border-t-0');
    toggleBtn.classList.replace('rounded-t-[20px]', 'rounded-[20px]');

  }
});

// toggle categoria
// toggle categoria