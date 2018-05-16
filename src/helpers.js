export const scrollable = () => {
  let target = document.getElementById('contact-form').getBoundingClientRect();
  window.scrollTo(0, target.bottom - 800);

  console.log(target.top, target.right, target.bottom, target.left);
}

export const scrollable2 = () => {
  let target = document.getElementById('page-bottom').getBoundingClientRect();
  window.scrollTo(0, target.bottom - 800);
}
