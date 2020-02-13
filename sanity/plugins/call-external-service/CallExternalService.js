import React from 'react';

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from './CallExternalService.css';

class CallExternalService extends React.Component {
  onClick = () => {
    alert('you did it!');
  };

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.onClick}>Click me to display an alert</button>
      </div>
    );
  }
}

export default CallExternalService;
