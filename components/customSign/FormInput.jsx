import PropTypes from 'prop-types';

/**
 * FormInput component is a reusable input field component.
 * It provides a consistent styling for input fields across forms.
 *
 * @param {Object} props - Component props
 * @param {string} props.type - The type of the input (e.g., text, email, password).
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {Object} props.rest - Any additional props passed to the input element.
 */
const FormInput = ({ type, placeholder, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="placeholder:text-sub-text outline-none border-b border-[#E8ECEF] pb-2 w-full text-sub-text"
    {...props}
  />
);

FormInput.propTypes = {
  type: PropTypes.string.isRequired, // The type of the input element (e.g., text, email, password).
  placeholder: PropTypes.string.isRequired, // The placeholder text for the input element.
};

export default FormInput;
