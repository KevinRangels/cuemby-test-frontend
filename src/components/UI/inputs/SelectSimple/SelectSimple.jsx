import React from 'react';
import Select, { components, ControlProps, Props, StylesConfig } from 'react-select';
let options = [
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const SelectSimple = ({ change = null, label = '' }) => {
  return (
    <div>
      <span>{label}</span>
      <Select onChange={change} isSearchable name="emoji" options={options} placeholder="Seleccionar" />
    </div>
  );
};
