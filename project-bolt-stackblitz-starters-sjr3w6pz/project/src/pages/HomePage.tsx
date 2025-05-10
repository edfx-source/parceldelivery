import React from 'react';
import { useTranslation } from 'react-i18next';
import CountrySelector from '../components/CountrySelector';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl text-gray-600">{t('home.subtitle')}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('home.trackingLabel')}
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter tracking number"
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {t('home.trackButton')}
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Select Your Region
              </h2>
              <CountrySelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}