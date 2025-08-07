// const card = document.querySelector('.card');

// card.addEventListener('mousemove', (e) => {
//   const rect = card.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

  // Gradient position update

//   card.style.setProperty('--x', `${x}px`);
//   card.style.setProperty('--y', `${y}px`);

  // 3D Tilt calculation

//   const rotateX = ((y / rect.height) - 0.5) * 10; 
//   const rotateY = ((x / rect.width) - 0.5) * -10; 

//   card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });

// card.addEventListener('mouseleave', () => {
//   card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
//   card.style.setProperty('--size', `0px`);
// });