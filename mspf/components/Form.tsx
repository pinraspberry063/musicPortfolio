'use client';
import React, {useState} from 'react'

function Form() {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleMessage = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const res = await fetch('../api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
    
        if (res.ok) {
          setStatus('Message sent!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Something went wrong. Please try again.');
        }
      };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <form className="w-full max-w-6xl" onSubmit={handleMessage}>
        <h2 className="text-white text-6xl font-semibold mb-6">Let's get in touch</h2>

        <label className="block text-zinc-300 mb-1">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
          required
        />

        <label className="block text-zinc-300 mt-4 mb-1">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
          required
        />

        <label className="block text-zinc-300 mt-4 mb-1">Message</label>
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 h-32 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-6 w-1/6 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
        >
          Send
        </button>

        {status &&  <label className="block text-zinc-300 mt-4 mb-1">{status}</label>}
      </form>
    </div>
  )
}

export default Form
