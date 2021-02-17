const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // getting the x and y location of where it's clicked
    const x = e.clientX;
    const y = e.clientY;
    // button's offest location of the top and left
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    // making the corner of the button 0
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);
    // 여기까지만 하면 클릭할 때마다 계속 span을 DOM에 추가하게됨
    // removing 'circle' from the DOM
    setTimeout(() => circle.remove(), 500);
  })
})