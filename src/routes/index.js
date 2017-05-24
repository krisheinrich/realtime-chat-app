import React, { Component } from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Chat} />
    <Route path="chat" handler={Chat} />
    <Route path="chat/:channel" handler={Chat} />
    <Route path="login" handler={Login} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.getElementById('react-root'));
});
