import React from 'react';
import paintStroke from './../../assets/images/blog/paint-stroke.png';
import treeClipArt from './../../assets/images/blog/tree-clip-art.png';

const styles = {
  flexParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'max-content',
    paddingTop: '70px',
    paddingBottom: '70px',
    overflow: 'hidden',
    position: 'relative'
  },
  flexChild: {
    width: '45%',
    minWidth: '550px',
    height: 'max-content',
    textAlign: 'center',
    margin: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '20px'
  },
  hr: {
    width: '80%',
    margin: '0px',
    position: 'absolute',
    bottom: '0'
  }
}

const BlogView1 = () => {
  return(
    <div style={styles.flexParent}>
      <style>{`
        #paint{
          width: 400px;
          height: auto;
          vertical-align: middle;
        }
        #tree{
          width: 300px;
          height: auto;
          vertical-align: middle;
        }
      `}
      </style>
      <div style={styles.flexChild}>
        <img id='paint' src={paintStroke}/>
      </div>
      <div style={styles.flexChild}>
        <img id='tree' src={treeClipArt}/>
      </div>
      <hr style={styles.hr}/>
    </div>
  );
}

export default BlogView1;
