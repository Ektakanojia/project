import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    className="transform hover:scale-110 transition-transform text-white hover:text-blue-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-8 h-8">{icon}</div>
  </a>
);

export default SocialLink;