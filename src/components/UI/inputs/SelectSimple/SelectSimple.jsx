import React from 'react';
import Select, { components, ControlProps, Props, StylesConfig } from 'react-select';

export const SelectSimple = ({ change = null, label = '', data = [] }) => {
  return (
    <div>
      <span>{label}</span>
      <Select onChange={change} getOptionLabel={(options) => options['name']} isSearchable name="emoji" options={data} placeholder="Seleccionar" isClearable={true} />
    </div>
  );
};
