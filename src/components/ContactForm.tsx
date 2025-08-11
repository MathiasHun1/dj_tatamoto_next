'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

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

    if (!checkTermsAccepted()) {
      return;
    }

    setStatus('idle');
    setMessage('Küldés...');

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
        phone: '',
        subject: '',
        message: '',
        // priceRequest: false,
      });

      sessionStorage.setItem('formSuccess', 'true');
      router.push('/koszonjuk'); // Redirect to thank you page
    } catch (error) {
      console.error(error);
      setMessage('Hiba történt, kérem próbálja újra.');
      setStatus('error');
    }
  };

  // Check if terms are accepted
  const checkTermsAccepted = () => {
    if (!termsAccepted) {
      setMessage('Kérjük, fogadja el az adatvédelmi nyilatkozatot.');
      setStatus('error');
      return false;
    }
    return true;
  };

  // Handle terms acceptance change
  const termsAcceptionChange = () => {
    if (termsAccepted) {
      setMessage('Kérjük, fogadja el az adatvédelmi nyilatkozatot.');
      setStatus('error');
    } else {
      setMessage('');
      setStatus('idle');
    }

    setTermsAccepted(!termsAccepted);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <div id="contact-form" className="mb-3 bg-secondary p-4 rounded-3 text-black">
        <h2 className="pb-3">Ajánlatkérés</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label mb-0">
              Neved
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label mb-0">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label mb-0">
              Telefonszám (opcionális)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="+36 20 123 4567"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label mb-0">
              Esemény típusa
            </label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-control">
              <option value="">Válassz egy eseményt</option>
              <option value="esküvő">Esküvő</option>
              <option value="rendezvény">Rendezvény</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label mb-0">
              Üzenet
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
              checked={termsAccepted}
              onChange={termsAcceptionChange}
              className="form-checkbox"
            />
            <label htmlFor="priceRequest" className="form-label mb-0 ps-2">
              Elfogadom az{' '}
              <Link href="/adatvedelem" className="text-primary">
                Adatvédelmi Nyilatkozat-ban foglaltakat
              </Link>
            </label>
          </div>

          <Typography variant="body2" color="initial" sx={{ pb: 1 }}>
            {message && status === 'success' && <span className="">{message}</span>}
            {message && status === 'error' && <span className="">{message}</span>}
          </Typography>

          <div>
            <button type="submit" disabled={message === 'Sending...'} className="btn btn-primary">
              {message === 'Küldés...' ? 'Folyamatban...' : 'Üzenet küldése'}
            </button>
          </div>
        </form>
      </div>
    </Box>
  );
}
