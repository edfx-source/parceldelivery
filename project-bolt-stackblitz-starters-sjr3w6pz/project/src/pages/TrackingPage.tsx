import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TrackingPage() {
  const { t } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement actual tracking logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {t('nav.tracking')}
          </h1>
          
          <form onSubmit={handleTracking} className="space-y-6">
            <div>
              <label
                htmlFor="tracking-number"
                className="block text-sm font-medium text-gray-700"
              >
                {t('home.trackingLabel')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="tracking-number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g., ML123456789"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !trackingNumber}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                t('home.trackButton')
              )}
            </button>
          </form>

          {/* Placeholder for tracking results */}
          <div className="mt-8">
            {/* Results will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
}