// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import './Button.css';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
}

const Button = (props: ButtonProps) => (
  <button className="f8n-button">{props.label}</button>
);

export default Button;
