import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import ApolloProvider from "./ApolloProvider";
import "./App.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { AuthProvider } from "../src/context/auth";

import DynamicRoute from "./utils/DynamicRoute";

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <BrowserRouter>
          <Container className="pt-5">
            <Switch>
              <DynamicRoute exact path="/" component={Home} authenticated />
              <DynamicRoute path="/register" component={Register} guest />
              <DynamicRoute path="/login" component={Login} guest />
            </Switch>
          </Container>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
