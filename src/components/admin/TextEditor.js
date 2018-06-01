import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte/lib/RichTextEditor';

class TextEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value){
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString('html'));
    }
  };

  render () {
    console.log(this.state.value)
    return (
      <Fragment>
        <style>{`
          ._1XFl4IeA-fyEI9QMzFK3cm{
            height: 445px;
          }
        `}
        </style>
        <RichTextEditor
          id='text-editor'
          value={this.state.value}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}

TextEditor.propTypes = {
  onChange: PropTypes.func
};

export default TextEditor;
