// pages/_app.js
import '../styles/global.css';  
import 'animate.css/animate.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
