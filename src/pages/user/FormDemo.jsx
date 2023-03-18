import React from "react";

const FormDemo = ({
  id,
  label,
  type,
  onChange,
  name,
  error = "",
  placeholder,
  value,
  email,
  fullName,
  role,
  password,
  age,
  address,
  booked,
  examinationHistory,
  required,
}) => {
  return (
    <div>
      <label>{label}: </label>
      <input
        id={id}
        label={label}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required={required}
      />

      {error && (
        <p
          style={{
            fontSize: "13px",
            marginTop: "0px",
            color: "red",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormDemo;
