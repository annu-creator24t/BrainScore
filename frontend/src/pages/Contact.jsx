import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    telephone: '',
    country: '',
    workField: '',
    interest: '',
    message: '',
    newsletters: false,
    privacyPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
        
        <div className="flex flex-col lg:flex-row lg:divide-x lg:divide-gray-300 gap-10">
          
          {/* Static Contact Info */}
          <div className="lg:w-1/3 pr-0 lg:pr-20">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h2>
              <div className="text-gray-600 space-y-6">
                <div>
                  <p className="font-semibold">Annu Tiwari</p>
                  <p>Email: annu.tiwari.cs27@iilm.edu</p>
                  <p>Phone: +91 7565987815</p>
                </div>
                <div>
                  <p className="font-semibold">Sanjeev Kumar</p>
                  <p>Email: sanjeev.kumar.cs27@iilm.edu</p>
                  <p>Phone: +91 8825171882</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 lg:pl-20">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company or organization *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select a country</option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="workField" className="block text-sm font-medium text-gray-700 mb-1">Work Field</label>
                    <select
                      id="workField"
                      name="workField"
                      value={formData.workField}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select your field</option>
                      <option value="Technology">Technology</option>
                      <option value="Research">Research</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in *</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select an option</option>
                      <option value="Products">Products</option>
                      <option value="Services">Services</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletters"
                      name="newsletters"
                      checked={formData.newsletters}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="newsletters" className="text-sm text-gray-700">
                      I accept to receive newsletters from BrainScore.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="privacyPolicy"
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="privacyPolicy" className="text-sm text-gray-700">
                      I accept the Privacy Policy associated with this form *
                    </label>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
