export const scrollable = () => {
  let target = document.getElementById('contact-form').getBoundingClientRect();
  window.scrollTo(0, target.bottom);

  console.log(target.top, target.right, target.bottom, target.left);
}
