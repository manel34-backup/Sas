import React from 'react';

export function Calendar({ mode, selected, onSelect, className }) {
  const today = new Date().toISOString().split('T')[0];
  return (
    <input
      type="date"
      value={selected ? selected.toISOString().split('T')[0] : today}
      onChange={(e) => onSelect(new Date(e.target.value))}
      className={className}
    />
  );
}
