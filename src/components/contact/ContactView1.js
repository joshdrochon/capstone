import React from 'react';

const ContactView1 = () => {
  return(
    <div id='top-container'>
      <style>{`
        #pointer-sm{
          display: none;
          color: black;
          font-size: calc(30px + 2.5vw);
          font-weight: lighter;
        }
        @media(max-width: 700px){
          #pointer-sm{
            display: block;
          }
        }
        #top-container{
          width: 100%;
          overflow-y: hidden;
          background-color: inherit;
        }
        #pointer-sm{
          margin: 35px 35px;
        }
      `}
      </style>
      <p id='pointer-sm'> ~ Contact Us ~</p>
    </div>
  );
}

export default ContactView1;
