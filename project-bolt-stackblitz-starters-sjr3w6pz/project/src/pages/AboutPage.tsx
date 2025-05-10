import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Modern Logistics
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Your trusted partner in global logistics since 2025
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative and sustainable logistics solutions that connect businesses
                and people around the world, while maintaining the highest standards of reliability
                and customer service.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h2>
              <p className="text-gray-600">
                We are committed to reducing our environmental impact through sustainable
                practices, including electric vehicles, optimized routes, and eco-friendly
                packaging solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Innovation</h2>
              <p className="text-gray-600">
                Through continuous investment in technology and infrastructure, we stay
                at the forefront of logistics innovation to provide our customers with
                the best possible service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Global Network
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">150+</div>
              <div className="mt-2 text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">1000+</div>
              <div className="mt-2 text-gray-600">Distribution Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">50K+</div>
              <div className="mt-2 text-gray-600">Delivery Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">10M+</div>
              <div className="mt-2 text-gray-600">Parcels Daily</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}