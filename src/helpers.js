import $ from 'jquery';

export const scrollable = () => {
  let target = document.getElementById('form').getBoundingClientRect();
  window.scrollTo(0, target.bottom - 700);
  console.log(target.top, target.right, target.bottom, target.left);
}

export const formatDate = () => {
	let date = new Date();

  let formatMonth = month => {
	switch (month) {
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'February';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
    case 7:
        month = 'August';
        break;
    case 8:
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10:
        month = 'November';
        break;
    case 11:
        month = 'December';
		}
  	return month;
	}

 	let day = date.getDate().toString();
  let month = formatMonth(date.getMonth());
  let year = date.getFullYear().toString();

	return day + ' ' + month + ', ' + year;
}

//cycles through 0-99 to ensure API content doesn't return with &#82[0-99]
function unjunkify(quote){
  if(quote.includes('&#82')){
    let res = quote.substr(quote.indexOf('&'), 7);
    let counter = parseInt(res.split('2')[1]);
    let newQuote;
    for(let i = 10; i <= counter; i++){
      let replace = '&#82' + i.toString() +';';
      let re = new RegExp(replace, 'g');
      newQuote = quote.replace(re, "'");
    }
    return newQuote;
  }
  return quote;
}

export const fetchQuote = () => {
  $(() => {
    $.ajax({
      url: `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`,
      type: `GET`,
      data: {
        format: `json`
      },
      success: (response) => {
        console.log(response[0].content);
        let res = unjunkify(`${response[0].content}`);
        let newRes = res.replace(/&#038;|<p>|<\/?p[^>]*>/g, '');
        console.log(newRes)
        $('#show-quote').text(`${newRes}`);
      },
      error: () => {
        console.log('There was an error with the request.');
      }
    });
  });
}
