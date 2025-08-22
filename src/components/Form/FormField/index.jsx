const FormField = ({ label, htmlFor, children }) => (
  <div className="form-field">
    <div className="form-label font-24-bold mb-[12px]">
      <label htmlFor={htmlFor}>{label}</label>
    </div>
    <div className="form-value">{children}</div>
  </div>
);

export default FormField;
