'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchFeatures } from '../lib/api';

interface Feature {
  id: number;
  attributes: {
    name: string;
  };
}

interface FeatureResponse {
  data: Feature[];
}

const WhyChooseUs: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const response = await fetchFeatures();
        const featureData = response.data as FeatureResponse;
        setFeatures(featureData.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load features');
        setIsLoading(false);
      }
    };

    loadFeatures();
  }, []);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-2">WHY CHOOSE US</h2>
      <h3 className="text-4xl font-bold text-center mb-4">We Are Different From Others</h3>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        We offer unique solutions tailored to your needs. Our team of experts is dedicated to delivering high-quality results.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-red-500 rounded-full"></div>
          <div className="absolute inset-0 left-1/3 bg-gray-200 rounded-full overflow-hidden">
            <Image
              src="/images/expert.jpg"
              alt="Industry expert"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/4 left-8 bg-red-500 text-white p-4 rounded-lg max-w-[200px]">
            <h4 className="font-bold mb-2">Industry experts</h4>
            <p className="text-sm">Our team consists of experienced professionals in various fields.</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex items-center p-3 rounded-full ${index === 0 ? 'bg-red-500 text-white' : 'bg-gray-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature.attributes.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;