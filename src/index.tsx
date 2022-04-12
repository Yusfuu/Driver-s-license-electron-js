import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";
import apollo from "./graphql/apollo";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ApolloProvider client={apollo}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
