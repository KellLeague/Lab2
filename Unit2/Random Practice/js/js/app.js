const drag = document.querySelector('.js-draggable');
let isDraggable = false;
drag.addEventListener('mousedown', e => {
  isDraggable = true;
  e.target.classList.add('moveable')
})
drag.addEventListener('mouseup', e => {
  isDraggable = false;
  e.target.classList.remove('moveable')
})
drag.addEventListener('mousemove', e => {
  if (isDraggable) {
    console.log('should drag now')
    e.target.style.left = e.offsetX + 'px';
    e.target.style.top = e.offsetY + 'px';
  }
})