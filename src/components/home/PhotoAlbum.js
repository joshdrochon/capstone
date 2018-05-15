import React from 'react';

const styles = {
  grid: {
    display: 'grid',
    width: '98%',
    height: 'max-content',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridTemplateRows: 'repeat(auto-fit, minmax(300px, 1fr))',
    margin: 'auto',
    marginTop: '70px',
    gridGap: '10px'
  },
  cell: {
    margin: '0px',
    width: '300px',
    height: '300px',
    border: '1px solid black',
    margin: 'auto'
  }
}

const PhotoAlbum = () => {
  return(
    <div>
      <style>{`
          #grid div:hover{
            cursor: pointer;
            transform: scale(1.03);
            box-shadow: 8px 5px 20px gray;
          }
        `}
      </style>
  
      <div id='grid' style={styles.grid}>
        <div id='c1' style={styles.cell}></div>
        <div id='c2' style={styles.cell}></div>
        <div id='c3' style={styles.cell}></div>
        <div id='c4' style={styles.cell}></div>
        <div id='c5' style={styles.cell}></div>
        <div id='c6' style={styles.cell}></div>
        <div id='c7' style={styles.cell}></div>
        <div id='c8' style={styles.cell}></div>
        <div id='c9' style={styles.cell}></div>
        <div id='c10' style={styles.cell}></div>
        <div id='c11' style={styles.cell}></div>
        <div id='c12' style={styles.cell}></div>
        <div id='c13' style={styles.cell}></div>
        <div id='c14' style={styles.cell}></div>
        <div id='c15' style={styles.cell}></div>
        <div id='c16' style={styles.cell}></div>
      </div>
    </div>

  )
}

export default PhotoAlbum;
