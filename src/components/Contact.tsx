import React from 'react';
import ContactForm from './ui/ContactForm';
import ContactInfo from './ui/ContactInfo';

const Contact = () => (
  <section className="py-20 bg-gray-50" id="contact">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Get in Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;