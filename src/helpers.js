export const scrollable = () => {
  let target = document.getElementById('contact-form').getBoundingClientRect();
  window.scrollTo(0, target.bottom - 800);

  console.log(target.top, target.right, target.bottom, target.left);
}

export const scrollable2 = () => {
  let target = document.getElementById('page-bottom').getBoundingClientRect();
  window.scrollTo(0, target.bottom - 800);
}

// let myDate = new Date().getDate().toString() + ' May, ' + new Date().getFullYear().toString();
//
// let myPost = {
//   author: 'Natali Coronel',
//   date: myDate,
//   title: 'From Within Without',
//   preview: '',
//   story: ''
// }
//
// let state = {
//   blogList: []
// }
//
// addBlogPost = post => {
//   state.blogList.push(post);
// }
//
// addBlogPost(myPost);
//
// let bodyPost = 'This is my first blog post and I certainly hope you\'ll enyoy it. I know you\'re going to love it. There\'re tigers, lions, yoga, and mountains involved. Cool, eh? This is the rest of the story, how cool is that? Well maybe not so cool.';

// let splitify = str => {
//   //contains an array of all words of the story
//   let strArr = str.split(' ');
//   //creates an array to store first 25 words of story
//   let prevArr = [];
//   //creates array which will contain two elements, story and preview
//   let splitArr = [];
//   //iterates 13x through strArr
//   for(let i=0;i<13;i++){
//     //populates previewArr first 13 words of story
//     prevArr.push(strArr.shift());
//   }
//
//   splitArr.push(prevArr, strArr);
//
//   myPost.preview = splitArr[0].join(' ');
//   myPost.story = splitArr[1].join(' ');
//
// }
//
// splitify(bodyPost);
//
// console.log(myPost);
