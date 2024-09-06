'use client'
import React, { useState, useEffect } from 'react';
import { AlertCircle, Wifi, Lock } from 'lucide-react';

const BatmanMessage = () => {
  const [stage, setStage] = useState('transmission');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (stage === 'transmission') {
      const timer = setTimeout(() => {
        setStage('password');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyPassword();
  };

  const verifyPassword = () => {
    if (password.toUpperCase() === 'STINKY') {
      setStage('message');
      setError('');
    } else {
      setError('Incorrect password. Access denied.');
      setPassword('');
    }
  };

  const renderStage = () => {
    switch (stage) {
      case 'transmission':
        return (
          <div className="relative w-full max-w-2xl h-64 bg-gray-900 border border-gray-700 rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <Wifi className="w-16 h-16 text-red-600 animate-pulse mb-4" />
              <div className="text-red-600 text-3xl font-bold tracking-wider mb-2">INCOMING TRANSMISSION</div>
              <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-red-600 animate-progressBar"></div>
              </div>
              <div className="absolute top-2 left-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
                <div className="text-gray-400 text-sm">Secure Channel</div>
              </div>
              <div className="absolute bottom-2 right-2 text-gray-400 text-sm animate-blink">
                Stand by...
              </div>
            </div>
          </div>
        );
      case 'password':
        return (
          <div className="relative w-full max-w-md bg-gray-900 border border-gray-700 rounded-md p-8">
            <Lock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center">Enter Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Password"
              />
              <button
                type="submit"
                onClick={verifyPassword}
                className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-md transition duration-200"
              >
                Verify
              </button>
            </form>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </div>
        );
      case 'message':
        return (
          <div className="relative max-w-3xl w-full bg-gradient-to-br from-gray-900 to-black shadow-2xl rounded-sm p-8 border border-gray-800 animate-fadeIn">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-5 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <svg className="w-16 h-16 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                <AlertCircle className="w-8 h-8 text-red-600 animate-ping" />
              </div>
              <h2 className="text-3xl font-bold text-gray-300 mb-6 text-center font-serif tracking-wider border-b border-gray-800 pb-4">A Secret Message from Batman</h2>
              <p className="text-gray-400 mb-4 text-xl font-semibold">To Sakshi,</p>
              <div className="space-y-4 text-gray-300 text-lg font-medium mb-8 font-mono leading-relaxed">
                <p className="text-red-600">Gotham is in peril.</p>
                <p>Poison Ivy and Scarecrow have unleashed a new kind of terror upon the city. They've created a toxin, using a rare plant extract, combined with Scarecrow's most sinister formula yet. This toxin causes everyone to hallucinate—but there's a twisted twist. Every girl in Gotham will see herself as something she is not—ugly, broken, lost.</p>
                <p>I need your help. Your unique essence, your inherent beauty—both inside and out—can counter this toxin's effects. Only someone like you, who embodies true self-confidence and strength, can help me develop the antidote. Time is running out. Gotham's future, its very heart, depends on you.</p>
                <p>Meet with Param at Param Food Corner. When you arrive, speak the words, "Gotham needs its maalkin," to the voice sensor. This command will grant you access to the Batcave. Come alone and trust no one.</p>
                <p>We move swiftly, in silence, and always in the shadows.</p>
              </div>
              <div className="mt-8 border-t border-gray-800 pt-4">
                <p className="text-gray-500 text-right italic mb-2">Your friend in the shadows,</p>
                <p className="text-gray-300 text-right font-bold text-xl">Batman</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 overflow-hidden">
      {renderStage()}
    </div>
  );
};

export default BatmanMessage;