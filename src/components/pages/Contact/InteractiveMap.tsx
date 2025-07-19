import React from 'react';
import { Map, Marker } from 'pigeon-maps';

export const InteractiveMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <Map height={384} defaultCenter={[3.848, 11.5021]} defaultZoom={12}>
        <Marker width={50} anchor={[3.848, 11.5021]} color="#10B981" />
      </Map>
    </div>
  );
};