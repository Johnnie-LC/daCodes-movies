import styled from 'styled-components'
export const background = 'linear-gradient(180.02deg, #4584ff -3.31%, rgb(70 141 216) 40.26%, rgb(0 255 207 / 80%) 82.49%);'

export const Footer = styled.footer`
  margin-top: 40px;
  background: ${background};
  .custom-shape-divider-top-1697326568 {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: scaleY(-1);
  }

  .custom-shape-divider-top-1697326568 svg {
      position: relative;
      display: block;
      width: calc(148%);
      height: 250px;
      background: #05067b;
  }

  .custom-shape-divider-top-1697326568 .shape-fill {
      fill: #4588ee;
  }

  /** For mobile devices **/
  @media (max-width: 980px) {
      .custom-shape-divider-top-1697326568 svg {
          width: calc(148%);
          height: 150px;
      }
  }
`
export const FooterSection = styled.section`
  padding-top: 50px;
  margin: 0 156px;
  padding-bottom: 200px;
  h3{
    text-align: left;
    font-size: 45px;
  }
  p{
    text-align: justify;
    font-size: 30px;
    
  }
`
