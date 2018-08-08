import React from 'react'

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      coloredTheme: this.props.coloredTheme
    };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

ThemeProvider.childContextTypes = {
  coloredTheme: PropTypes.string
};

export default ThemeProvider;