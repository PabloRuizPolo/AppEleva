import "./formfield.css";

const FormField = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label className="formField-label">
        <span>{label}</span>
        <input className="formField-input" {...props} />
      </label>
    </div>
  );
};

export default FormField;
