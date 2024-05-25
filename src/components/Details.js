import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const loc = useLocation();
  const { formData } = loc.state;

  return (
    <div>
      <h2>User Details</h2>
      <p><span>First Name:</span> {formData.firstName}</p>
      <p><span>Last Name:</span> {formData.lastName}</p>
      <p><span>Username:</span> {formData.username}</p>
      <p><span>Email Address:</span> {formData.email}</p>
      <p><span>Phone Number.:</span> {formData.phoneNum}</p>
      <p><span>Country:</span> {formData.country}</p>
      <p><span>City:</span> {formData.city}</p>
      <p><span>Aadhar Number:</span> {formData.aadharNum}</p>
      <p><span>PAN Number:</span> {formData.panNum}</p>
    </div>
  );
};

export default Details;
