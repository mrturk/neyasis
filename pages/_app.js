import '@/styles/globals.css'
import { Provider } from "react-redux";
import { wrapper, store } from "../store/index";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};
export default App;