import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
​
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
​
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Gender</label>
          <select name="gender"> 
    <option value=" "> EMPTY </option> 
    <option value="Male">Male</option> 
    <option value="Female">Female</option> 
</select> 
            </div>
            <div className= "form-inputs">
            
          <label className='form-label'>Date of birth</label>
          
  <input type="date" id="birthday" name="birthday" />
  <input type="submit" />
            </div>
            <div className="form-inputs">
            <label className='form-label'>Address</label>
<textarea  name="w3review" rows="4" cols="50">
​
  </textarea>
            </div>
​
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};
​
export default FormSignup;