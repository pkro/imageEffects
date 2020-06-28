document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.shadow');
  Array.from(images, (img) => {
    // const offset = Array.from(img.classList).indexOf(new RegExp(/shadow/));
    // console.log(offset);
    const topImg = img.cloneNode();
    const shadowImg = img.cloneNode();
    const innerWrap = document.createElement('div');
    topImg.style.cssText = 'position: absolute; left: 4px; top: 0;';
    shadowImg.style.cssText =
      'filter: brightness(0) blur(2px); opacity: 0.7; transform: translateY(4px);';
    innerWrap.style.cssText = 'position: relative; top: 0; left: 0;';
    innerWrap.appendChild(shadowImg);
    innerWrap.appendChild(topImg);
    img.replaceWith(innerWrap);
  });
});
