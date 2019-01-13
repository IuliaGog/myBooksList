import React from "react";
import { Label } from "semantic-ui-react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => (
  <Label basic color="red" pointing>
    {text}
  </Label>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
