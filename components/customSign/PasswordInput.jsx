import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * PasswordInput component is a reusable input field component for passwords.
 * It includes a feature to toggle the visibility of the password.
 *
 * @param {Object} props - Component props
 * @param {string} props.placeholder - The placeholder text for the password input.
 */
const PasswordInput = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false); // State to track the visibility of the password

  /**
   * Toggles the visibility of the password.
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex relative">
      <input
        type={showPassword ? 'text' : 'password'} // Toggle input type between text and password
        placeholder={placeholder}
        className="placeholder:text-sub-text outline-none border-b border-[#E8ECEF] pb-2 w-full text-sub-text"
      />
      <img
        src="https://svgshare.com/i/18Cb.svg"
        alt="Toggle password visibility"
        className="absolute right-0 cursor-pointer" // Toggle password visibility on click
        onClick={togglePasswordVisibility}
      />
    </div>
  );
};

PasswordInput.propTypes = {
  placeholder: PropTypes.string.isRequired, // The placeholder text for the input element
};

export default PasswordInput;
