import { styled } from 'baseui';
import background from "../img/land.jpg";
import backgroundTwo from "../img/light.jpg"; 


const HeadStyle = styled('div', {
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-around',
    width: "100vw",
    height: "20vh",
  });

  const ContentStyle = styled('div', {
    alignItems: 'center',
    backgroundImage: `url(${backgroundTwo})`,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop:"1px",
    border: '4px solid brownn',
    width: "100vw",
    height: "80vh",
  });

export { HeadStyle, ContentStyle };    