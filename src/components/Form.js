import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNum: '',
    country: '',
    city: '',
    panNum: '',
    aadharNum: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errorMessage = {};
    if (!formData.firstName) errorMessage.firstName = 'First Name is required';
    if (!formData.lastName) errorMessage.lastName = 'Last Name is required';
    if (!formData.username) errorMessage.username = 'Username is required';
    if (!formData.email) errorMessage.email = 'Email Address is required';
    if (!formData.password) errorMessage.password = 'Password is required';
    if (!formData.phoneNum) errorMessage.phoneNum = 'Phone Number is required';
    if (!formData.country) errorMessage.country = 'Country is required';
    if (!formData.city) errorMessage.city = 'City is required';
    if (!formData.panNum) errorMessage.panNum = 'PAN Number is required';
    if (!formData.aadharNum) errorMessage.aadharNum = 'Aadhar Number is required';
    setErrors(errorMessage);
    return Object.keys(errorMessage).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/details', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register Form</h1>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="password-container ">
        <label>Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
            </svg>
          )}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="Spain">Spain</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          {formData.country === "India" && <>
            <option value="Delhi">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </>}
          {formData.country === "Japan" && <>
            <option value="Kyoto">Kyoto</option>
            <option value="Nara">Nara</option>
            <option value="Osaka">Osaka</option>
            <option value="Tokyo">Tokyo</option>
          </>}
          {formData.country === "USA" && <>
            <option value="Chicago">Chicago</option>
            <option value="Las Vegas">Las Vegas</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </>}
          {formData.country === "Spain" && <>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Valencia">Valencia</option>
            <option value="Seville">Seville</option>
          </>}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNum" value={formData.phoneNum} onChange={handleChange} />
        {errors.phoneNum && <span>{errors.phoneNum}</span>}
      </div>
      <div>
        <label>PAN Number:</label>
        <input type="text" name="panNum" value={formData.panNum} onChange={handleChange} />
        {errors.panNum && <span>{errors.panNum}</span>}
      </div>
      <div>
        <label>Aadhar Number:</label>
        <input type="text" name="aadharNum" value={formData.aadharNum} onChange={handleChange} />
        {errors.aadharNum && <span>{errors.aadharNum}</span>}
      </div>
      <button className="buttonClass" type="submit">Submit</button>
    </form>
  );
};

export default Form;
