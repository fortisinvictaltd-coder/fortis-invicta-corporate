'use client';

import { useState } from 'react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('inquiries');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (email === 'cadjatu@fortisinvicta.com' && password === 'Cadjatu@2026') ||
      (email === 'admin@fortisinvicta.com' && password === 'Admin@2026')
    ) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Demo: cadjatu@fortisinvicta.com / Cadjatu@2026
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-fortis-green text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">CMS Dashboard</h1>
        <button onClick={() => setIsLoggedIn(false)} className="text-sm">
          Logout
        </button>
      </header>

      <div className="container-s py-8">
        <div className="flex gap-4 mb-8">
          {['inquiries', 'subscribers', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-fortis-green text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Partnership Inquiries</h2>
            <p className="text-gray-500">No inquiries yet.</p>
          </div>
        )}

        {activeTab === 'subscribers' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Newsletter Subscribers</h2>
            <p className="text-gray-500">No subscribers yet.</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Site Settings</h2>
            <p className="text-gray-500">Settings panel coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}