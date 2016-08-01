import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import bemCn from 'bem-cn';
import M800ThemeProvider from 'm800-web-styleguide/react/dist/components/common/M800ThemeProvider';
import NavBar from '../containers/NavBar';

const bem = bemCn.setup({ el: '__', mod: '--' });

const App = (props) => (
  <M800ThemeProvider bem={bem}>
    <NavBar />
    {props.children}
  </M800ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
