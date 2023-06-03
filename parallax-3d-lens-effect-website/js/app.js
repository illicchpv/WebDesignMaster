document.addEventListener('mousemove', e => {
  // // document.documentElement - <html style...
  // можно так
  // Object.assign(document.documentElement, {
  //   style: `
  //   --move-x:${(e.clientX - window.innerWidth / 2)*-0.005}deg;
  //   --move-y:${(e.clientY - window.innerHeight / 2)*-0.01}deg;
  //   `
  // })
  // можно так
  document.body.style.cssText += `
  --move-x:${(e.clientX - window.innerWidth / 2)*-0.005}deg;
  --move-y:${(e.clientY - window.innerHeight / 2)*-0.01}deg;
  `
})