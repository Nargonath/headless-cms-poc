import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'part:@sanity/components/formfields/default';

import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import styles from './slider.css';

const createPatchFrom = value =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

export default class Slider extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number,
      }).isRequired,
    }).isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus();
  }

  render() {
    const { type, value, onChange } = this.props;
    const { min, max, step } = type.options.range;

    return (
      <FormField label={type.title} description={type.description}>
        <input
          type="range"
          className={styles.slider}
          min={min}
          max={max}
          step={step}
          value={value === undefined ? '' : value}
          onChange={event => onChange(createPatchFrom(event.target.value))}
          ref={element => (this._inputElement = element)}
        />
        <p className={styles.sliderDetail}>value: {value}</p>
      </FormField>
    );
  }
}
