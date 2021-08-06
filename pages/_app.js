import '../styles/globals.css'
import 'react-vis/dist/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
