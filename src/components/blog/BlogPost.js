import React from 'react';
import PropTypes from 'prop-types';
import imgBp1 from './img_bp1.jpg';
import { allText } from './../../text-blocks';
import natiIcon from './../../assets/images/social/nati-icon.png';
import $ from 'jquery';

function expand(){
  $(()=> {
    $('#expand').click(() => {
      $('#full-story').slideDown();
      $('#expand').hide();
      $('#collapse').show();
      console.log('You slide me down');
    });
  });
}

function collapse(){
  $(()=> {
    $('#collapse').click(() => {
      $('#full-story').slideUp();
      $('#expand').show();
      $('#collapse').hide();
      console.log('You slide me up');
    });
  });
}

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    overflow: 'hidden',
    position: 'relative'
  },
  flxImgC: {
    backgroundImage: `url(${imgBp1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '950px',
    height: '450px',
    textAlign: 'center',
    borderRadius: '14px',
    verticalAlign: 'middle',
  },
  flxTitle: {
    width: '100%',
    marginTop: '10px'
  },
  flxWrapper: {
    maxWidth: '900px',
    height: 'max-content'
  },
  flxSumC: {
    marginTop: '10px',
    maxWidth: '900px'
  },
  flxSum: {
    wordSpacing: '1px',
    lineHeight: '25px'
  },
  flxDisplay: {
    margin: 'auto',
    width: '75vw',
    height: 'max-content'
  }
}

const BlogPost = (props) => {
  return(
    <div id='blog-post' style={styles.flexParent}>
      <style>{`
          #details{
            margin-top: 10px;
            display: flex;
            flex-wrap: reverse-wrap;
            flex-direction: row;
            align-items: center;
          }
          #details p{
            display: inline-block;
          }
          #comment-anchor:hover{
            text-decoration: underline;
            cursor: pointer;
          }
          #icon{
            z-index: 1;
            width: 26px;
            height: 26px;
            border-radius: 13px;
            margin-left: 10px;
          }
          #blog-post *{
            font-family: 'book-antique';
            font-weight: lighter;
          }
          .partition{
            font-family: times;
            margin: 0px 15px 0px 15px;
          }
          .clickable{
            margin-top: 10px;
            border: 1px solid dodgerblue;
            border-radius: 18px;
            padding: 8px;
            width: max-content;
          }
          .clickable:hover{
            cursor: pointer;
          }

          #full-story{
            display: none;
            margin-top: 10px;
            word-spacing: 1px;
            line-height: 25px;
            max-width: 900px;
          }
          p + p{
            margin-top: 10px;
          }
          #collapse{
            display: none;
          }
          @media(max-width: 950px){
            #img-cont{
              border-radius: 0px !important;
            }
          }
      `}
      </style>
      <div id='img-cont' style={styles.flxImgC}/>
      <div style={styles.flxWrapper}>
        <div style={styles.flxDisplay}>
          <h1 style={styles.flxTitle}>{props.title}</h1>
          <div id='details'>
            <p id='comment-anchor'>Leave a comment</p><span className='partition'>|</span>
            <p>14 May, 2018</p><span className='partition'>|</span>
            <p>Natali Coronel</p>
            <img id='icon' src={natiIcon}/>
          </div>
          <article style={styles.flxSumC}>
            <p style={styles.flxSum}>{allText.blogPostSummary.p1}</p>
          </article>
          <article id='full-story'>
            <p>{props.body}</p>
            <p>This is some test text</p>
          </article>
          <h3 className='clickable' id='expand' onClick={expand}>Continue Article -></h3>
          <h3 className='clickable' id='collapse' onClick={collapse}>Collapse Article</h3>
        </div>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string
};

export default BlogPost;
