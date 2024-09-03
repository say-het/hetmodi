import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';

const Education = () => {
  const Education = [
    { icon: <FaInstagram size={40} />, name: 'Instagram', link: 'https://www.instagram.com', color: '#E4405F' },
    { icon: <FaWhatsapp size={40} />, name: 'WhatsApp', link: 'https://www.whatsapp.com', color: '#25D366' },
    { icon: <FaTwitter size={40} />, name: 'X (Twitter)', link: 'https://www.twitter.com', color: '#1DA1F2' },
    { icon: <FaGithub size={40} />, name: 'GitHub', link: 'https://www.github.com', color: '#333' },
    { icon: <SiCodeforces size={40} />, name: 'Codeforces', link: 'https://codeforces.com', color: '#1F8ACB' },
    { icon: <SiCodechef size={40} />, name: 'CodeChef', link: 'https://www.codechef.com', color: '#5B4638' },
    { icon: <SiLeetcode size={40} />, name: 'LeetCode', link: 'https://leetcode.com', color: '#F89F1B' },
    { icon: <FaEnvelope size={40} />, name: 'Gmail', link: 'mailto:your-email@gmail.com', color: '#D14836' }
  ];

  return (
    <div className="grid grid-cols-3 gap-8 p-10">
      {Education.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col p-3 items-center space-y-4 transition-transform duration-300 transform hover:scale-110 hover:border-2 rounded-lg ease-in-out"
        >
          <div style={{ color: social.color }}>
            {social.icon}
          </div>
          <span className="text-lg font-semibold ">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Education;
