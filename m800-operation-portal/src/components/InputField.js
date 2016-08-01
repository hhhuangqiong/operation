import React, { PropTypes } from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return <input type="text" onChange={this.onChange} />;
  }
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputField;
