import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';

const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    content: 'India UttarPardesh-Luckow 226002'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    content: 'kanojiaekta211@gmail.com'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM'
  }
];

const ContactInfo = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <ContactInfoItem key={index} {...detail} />
      ))}
    </div>
  </div>
);

export default ContactInfo;