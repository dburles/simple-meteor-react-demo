import React, { PropTypes } from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.input.value);
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(c) => (this.input = c)} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

Add.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Add;
