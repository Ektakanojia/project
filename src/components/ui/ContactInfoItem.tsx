import React, { ReactNode } from 'react';

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="text-blue-500 mr-4">{icon}</div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactInfoItem;