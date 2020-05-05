import 'react-quill/dist/quill.snow.css'
import "react-quill/dist/quill.bubble.css"
import 'antd/dist/antd.css';
import "../styles/reset.css";


// import theme from "../styles/Theme";
// import { ThemeProvider } from 'emotion-theming'

export default function MyApp({ Component, pageProps }) {
    return (
        // <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        // </ThemeProvider>
    )
}