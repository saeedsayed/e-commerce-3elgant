/**
 * AgreementCheckbox component is a reusable checkbox element for user agreements.
 * It includes a checkbox and a label indicating agreement to the Privacy Policy and Terms of Use.
 */
const AgreementCheckbox = () => (
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      className="w-6 h-6 rounded checked:bg-text" // Checkbox with custom styling
    />
    <p className="text-xs text-sub-text">
      I agree with{' '}
      <span className="text-text font-semibold">Privacy Policy</span> and{' '}
      <span className="text-text font-semibold">Terms of Use</span>{' '}
      {/*Labeltext with links to Privacy Policy and Terms of Use*/}
    </p>
  </div>
);

export default AgreementCheckbox;
