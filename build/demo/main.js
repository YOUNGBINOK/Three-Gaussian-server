let showBtn = document.querySelectorAll(".demo-scene-button");
showBtn.forEach((quBtn) =>
  quBtn.addEventListener("click", function () {
    const scene = quBtn.value;
    const mode = quBtn.dataset.mode;
    window.location.href = `/viewer.html?scene=${scene}&mode=${mode}`;
  })
);
