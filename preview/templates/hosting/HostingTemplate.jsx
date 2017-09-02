// React Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Custom Components
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

// Component
class HostingTemplate extends Component {
  // Render
  render = () => {
    const {company, invoice} = this.props.data;
    return (
      <div>
        <Header company={company}/>
        <Main invoice={invoice}/>
      </div>
    );
  };
}

HostingTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HostingTemplate;