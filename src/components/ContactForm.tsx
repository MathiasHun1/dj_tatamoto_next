'use client'; // This directive marks the component as a Client Component

import { Box } from '@mui/material';
import { useState } from 'react';

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  priceRequest: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    priceRequest: false,
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Handle input changes for all form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      const result = await response.json();
      setMessage(result.message);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priceRequest: false,
      });
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="mb-3 bg-primary p-4 rounded-3">
        <h2 className="">Ajánlatkérés</h2>
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="name" className="form-label">
              Neved
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-control" />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" />
          </div>

          <div>
            <label htmlFor="subject" className="form-label">
              Esemény típusa
            </label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-control">
              <option value="">Válassz egy eseményt</option>
              <option value="wedding">Esküvő</option>
              <option value="birthday">Rendezvény</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control"
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="priceRequest"
              name="priceRequest"
              checked={formData.priceRequest}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="priceRequest" className="form-label">
              I am requesting a price estimate
            </label>
          </div>

          <div>
            <button type="submit" disabled={message === 'Sending...'} className="btn btn-secondary">
              {message === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {message && status === 'success' && <p className="">{message}</p>}
          {message && status === 'error' && <p className="">{message}</p>}
        </form>
      </div>
    </Box>
  );
}
