import React, { useState } from "react";
import EmailInput from "../Validation/EmailInput";
// import EmailInput from "./EmailInput";

const FormComponent = ({ fields, formTitle, buttonText, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const today = new Date().toISOString().split("T")[0];

    fields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      } else if (field.name === "name" && !nameRegex.test(formData.name)) {
        newErrors.name = "Name should contain only alphabets.";
      } else if (field.name === "phone" && !mobileRegex.test(formData.phone)) {
        newErrors.phone = "Mobile Number should be exactly 10 digits.";
      } else if (
        field.name === "appointmentDate" &&
        formData.appointmentDate < today
      ) {
        newErrors.appointmentDate = "Appointment date cannot be in the past.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
      );
      setErrors({});
    }
  };

  return (
    <div className="p-4 book-form">
      <h2 className="text-center fw-bold">{formTitle}</h2>
      <form className="p-3 rounded form-container" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label className="form-label">{field.label}:</label>
            {field.type === "email" ? (
              <EmailInput
                value={formData[field.name]}
                onChange={(value) =>
                  setFormData({ ...formData, [field.name]: value })
                }
              />
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                className="form-control mb-2"
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                className="form-control mb-2"
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
            {errors[field.name] && (
              <p className="text-danger">{errors[field.name]}</p>
            )}
          </div>
        ))}
        <input
          type="submit"
          value={buttonText}
          className="btn btn-primary mt-3"
        />
      </form>
    </div>
  );
};

export default FormComponent;
