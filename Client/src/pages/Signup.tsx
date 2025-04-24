import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { API } from '../ApiUri';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    longitude: '',
    latitude: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      location: {
        type: 'Point',
        coordinates: [parseFloat(formData.longitude), parseFloat(formData.latitude)],
      },
    };
    
    try {
      const response = await axios.post(`${API}/signupUser`, payload);
      if(response){
        toast.success("Signup Successfull");
      }
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#f5f4ea] px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 font-serif">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          <input name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          <input name="phone" type="text" placeholder="Aadhar number" value={formData.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          <input name="longitude" type="number" step="any" placeholder="Longitude" value={formData.longitude} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          <input name="latitude" type="number" step="any" placeholder="Latitude" value={formData.latitude} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />

          <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-gray-900 font-semibold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
