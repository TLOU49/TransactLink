import React from 'react';
import { MdInventory2 } from "react-icons/md";

const features = [
  { title: 'Inventory Alerts', desc: 'Keep Track of Stock Levels', img: '/path/to/inventory.jpg' },
  { title: 'Purchase Management', desc: 'Monitor your goods on the platform', img: '/path/to/purchase.jpg' },
  { title: 'Payment Plan', desc: 'Utilise a comprehensive smart plan to access your goods', img: '/path/to/payment.jpg' },
  { title: 'Geolocation and Al Technology', desc: '', video: true },
  { title: 'Analytics', desc: '', img: '/path/to/analytics.jpg' },
  { title: 'Data Extraction and Management', desc: '', img: '/path/to/data.jpg' },
  { title: 'Identity Verification', desc: 'Keep track and stay safe from any threats', img: '/path/to/identity.jpg' }
];

const Features = () => {
  return (
    <div className="bg-white py-12 px-6 text-gray-900 flex flex-col w-full text-center items-center">
      <h2 className="text-5xl font-bold text-center mb-8 w-1/2 ">Supply chain features tailored for you</h2>
      
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 w-full">
          {features.map((f, i) => (
            <div key={i} className="flex  flex-col bg-gray-100 p-4 shadow-md rounded w-60 h-64">
              <h3 className="font-semibold mt-4">{f.title}</h3>
              <MdInventory2 className="w-full h-40 object-cover rounded" />
              <p className='text-[13px]'>{f.desc}</p>
            </div>
          ))}
        </div>

    </div>
  );
};

export default Features;
