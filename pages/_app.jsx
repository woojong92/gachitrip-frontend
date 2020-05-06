import 'react-quill/dist/quill.snow.css'
import "react-quill/dist/quill.bubble.css"
import 'antd/dist/antd.css';
import "../styles/reset.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; 
import rootReducer from "../modules";
import withRedux from 'next-redux-wrapper';

function MyApp({ Component, pageProps, store }) {
    return (
        // <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        // </ThemeProvider>
    )
}

const configureStore = (initialState, options) => {
    // const middlewares = []; // 미들웨어들을 넣으면 된다.
    // const enhancer = process.env.NODE_ENV === 'production' ? 
    //   compose(applyMiddleware(...middlewares)) : 
    //       composeWithDevTools(
    //         applyMiddleware(...middlewares)
    //       );
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
  }
  
export default withRedux(configureStore)(MyApp);


