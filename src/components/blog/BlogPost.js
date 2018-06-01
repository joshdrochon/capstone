import React from 'react';
import PropTypes from 'prop-types';
import natiIcon from './../../assets/images/social/nati-icon.png';
import $ from 'jquery';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    position: 'relative'
  },
  flxImgC: {
    maxWidth: '950px',
    maxHeight: '450px',
    textAlign: 'center',
    borderRadius: '14px',
    overflow: 'hidden'
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
  flxPrv: {
    wordSpacing: '1px',
    lineHeight: '25px'
  },
  flxDisplay: {
    margin: 'auto',
    width: '75vw',
    height: 'max-content'
  }
}

const BlogPost = props => {
  let selectedStory = null;
  if(props.selectedStory!=null){
    selectedStory = props.selectedStory;
  }

  $(()=> {
    $('#expand').click((event) => {
      $('.full-story').slideDown('fast');
      $('#collapse').show();
      $('#expand').hide();
    });

    $('#collapse').click(() => {
      $('.full-story').slideUp('fast');
      $('#expand').show();
      $('#collapse').hide();
    });
  });

  const handleCurrentTarget = event => {
    console.log(event.currentTarget);
  }

  return(
    <div onClick={handleCurrentTarget} id='blog-post' style={styles.flexParent}>
      <style>{`
          #img-cont img{
            width: 100%;
            transition: all 1s ease-out;
          }
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
          #expand, #collapse{
            margin-top: 10px;
            border: 1px solid dodgerblue;
            border-radius: 18px;
            padding: 8px;
            width: max-content;
          }
          .clickable:hover{
            cursor: pointer;
          }
          .full-story{
            display: none;
            word-spacing: 1px;
            line-height: 25px;
            max-width: 900px;
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
      <div id='img-cont' style={styles.flxImgC}>
        <img onLoad={props.fadeIn} style={{opacity: props.opacity}} src={require(`${props.image}`)} />
      </div>
      <div style={styles.flxWrapper}>
        <div style={styles.flxDisplay}>
          <h1 style={styles.flxTitle}>{props.title}</h1>
          <div id='details'>
            <p id='comment-anchor'>Leave a comment</p><span className='partition'>|</span>
            <p>{props.publishDate}</p><span className='partition'>|</span>
            <p>{props.author}</p>
            <img id='icon' src={natiIcon}/>
          </div>
          <article style={styles.flxSumC}>
            <p style={styles.flxPrv}>{props.preview}</p>
          </article>
          <article className='full-story'>
            <p>{selectedStory}</p>
          </article>
          <h3 className='clickable' id='expand' onClick={() => {props.onBlogPostSelection(props.postId);}}>Continue Article</h3>
          <h3 className='clickable' id='collapse'>Collapse Article</h3>
        </div>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
  story: PropTypes.string,
  image: PropTypes.string,
  onBlogPostSelection: PropTypes.func,
  selectedPost: PropTypes.string,
  selectedStory: PropTypes.string,
  postId: PropTypes.string
};

export default BlogPost;
