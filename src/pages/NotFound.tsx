
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lofi-background px-4">
      <div className="glass-card p-8 md:p-12 max-w-lg rounded-2xl text-center">
        <h1 className="text-7xl md:text-9xl font-display font-bold text-lofi-primary mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
