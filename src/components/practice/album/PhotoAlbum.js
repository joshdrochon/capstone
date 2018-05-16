import React from 'react';
import natali1 from '../../../assets/images/profile_pix/natali1.jpeg';
import natali2 from '../../../assets/images/profile_pix/natali2.jpeg';
import natali3 from '../../../assets/images/profile_pix/natali3.jpeg';
import natali4 from '../../../assets/images/profile_pix/natali4.jpeg';
import natali5 from '../../../assets/images/profile_pix/natali5.jpeg';
import natali6 from '../../../assets/images/profile_pix/natali6.jpeg';
import natali7 from '../../../assets/images/profile_pix/natali7.jpeg';
import natali8 from '../../../assets/images/profile_pix/natali8.jpeg';
import natali9 from '../../../assets/images/profile_pix/natali9.jpeg';
import natali10 from '../../../assets/images/profile_pix/natali10.jpeg';
import natali11 from '../../../assets/images/profile_pix/natali11.jpeg';
import natali12 from '../../../assets/images/profile_pix/natali12.jpeg';
import natali13 from '../../../assets/images/profile_pix/natali13.jpeg';
import natali14 from '../../../assets/images/profile_pix/natali14.png';
import natali15 from '../../../assets/images/profile_pix/natali15.png';
import natali16 from '../../../assets/images/profile_pix/natali16.jpeg';

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
    padding: '0px',
    width: '300px',
    height: 'max-content',
    overflow: 'hidden',
    margin: 'auto',
    transition: 'transform .5s'
  },
  img: {
    maxWidth: '100%',
    margin: '0px'
  }
}

const PhotoAlbum = () => {
  return(
    <div>
      <style>{`
          #grid div:hover{
            cursor: pointer;
            transform: scale(1.20);
          }
        `}
      </style>
      <div id='grid' style={styles.grid}>
        <div style={styles.cell}><img style={styles.img} src={natali1}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali2}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali3}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali4}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali5}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali6}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali7}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali8}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali9}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali10}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali11}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali12}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali13}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali14}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali15}/></div>
        <div style={styles.cell}><img style={styles.img} src={natali16}/></div>
      </div>
    </div>

  )
}

export default PhotoAlbum;
