import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 51.1657,
  lng: 10.4515
};

export default function LocationFinder() {
  const { t } = useTranslation();
  const [zipCode, setZipCode] = useState('');
  const [locations, setLocations] = useState([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to fetch locations based on zip code
    // For now, we'll just log the zip code
    console.log('Searching for locations near:', zipCode);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find Our Locations</h1>
        <p className="mt-4 text-lg text-gray-500">
          Search for parcel shops and depots in your area
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter ZIP code"
            className="flex-1 min-w-0 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
          >
            {/* Add markers here when locations are loaded */}
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Nearby Locations</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Location cards would be rendered here */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Sample Location</h3>
            <p className="text-gray-500">123 Example Street</p>
            <p className="text-gray-500">12345 City</p>
            <p className="text-gray-500">Opening Hours: 9:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}