const slideToRightConfig = {
  translateX: "100%",
  easing: "easeInOutQuad",
};

const fadeOutConfig = {
  opacity: 0,
  easing: "linear",
};

const slideToRightFadeOut = (targetElement, completeCallback) => {
  const timeline = anime
    .timeline({
      autoplay: false,
      duration: 500,
      easing: "linear",
      complete: completeCallback,
    })
    .add({ ...slideToRightConfig, targets: targetElement })
    .add({ ...fadeOutConfig, targets: targetElement });

  timeline.play();
};

export { slideToRightFadeOut };
