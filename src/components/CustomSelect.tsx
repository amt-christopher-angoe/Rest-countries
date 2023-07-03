import React, { useState } from 'react';
import '../index.css'


interface CustomSelectProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelectOption }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelectOption(option);
  };

  return (
    <div className="custom-select">
      <div className="select-btn" onClick={handleToggleOptions}>
        {selectedOption || 'Filter by Region'}
        <i className='bx bx-chevron-down filter-arrow'></i>
      </div>
      {showOptions && (
        <ul className="options">
          {options.map((option) => (
            <li className='opt' key={option} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
