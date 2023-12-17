// src/components/CRUDExample.tsx
import React, { useState } from 'react';
import './style.css'

interface Item {
  id: number;
  name: string;
  contact: string;
  email: string;
  pincode: string;
}

const CRUDExample: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({
    id: 0,
    name: '',
    contact: '',
    email: '',
    pincode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddItem = () => {
    if (newItem.name.trim() !== '' && newItem.contact.trim() !== '' && newItem.email.trim() !== '' && newItem.pincode.trim() !== '') {
      setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
      setNewItem({
        id: 0,
        name: '',
        contact: '',
        email: '',
        pincode: '',
      });
    }
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border border1 rounded-md">
      <div className='seprate'>
      <div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          className="input w-full px-3 py-2 mb-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter name..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">
          Contact:
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={newItem.contact}
          onChange={handleInputChange}
          className="input w-full px-3 py-2 mb-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter contact..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={newItem.email}
          onChange={handleInputChange}
          className="input w-full px-3 py-2 mb-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter email..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pincode" className="block text-gray-700 text-sm font-bold mb-2">
          Pincode:
        </label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={newItem.pincode}
          onChange={handleInputChange}
          className="input w-full px-3 py-2 mb-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter pincode..."
        />
      </div>
      <button
        onClick={handleAddItem}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none mb-4"
      >
        Add Item
      </button>
</div>

      <div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className=" alingment flex  items-center border-b border-gray-300 py-2">
            <span>{item.name}</span>
            <span>{item.contact}</span>
            <span>{item.email}</span>
            <span>{item.pincode}</span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default CRUDExample;
