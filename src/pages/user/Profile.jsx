import React from "react";
import FormDemo from "./FormDemo";

const Profile = ({
  id,
  label,
  placeholder,
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
      <h1>this is profile</h1>
      <form>
        <FormDemo
          label="name"
          placeholder="what's your name"
          type="text"
          required={required}
        />
        <FormDemo
          value={email}
          label="email"
          placeholder="what's your name"
          type="text"
        />
        <FormDemo label="role" />
        <FormDemo label="age" />
        <FormDemo label="address" />
        <FormDemo label="examinationHistory" />
        <button onClick >save</button>
      </form>
    </div>
  );
};

export default Profile;
