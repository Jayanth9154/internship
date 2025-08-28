import React from 'react';
import { MapPin, Navigation, Clock, Car, Truck, AlertCircle } from 'lucide-react';

const VehicleMap: React.FC = () => {
  const vehicles = [
    { id: 'FL-001', type: 'van', lat: 40.7128, lng: -74.0060, status: 'moving', speed: '45 km/h', destination: 'Manhattan Plaza' },
    { id: 'FL-002', type: 'truck', lat: 40.7589, lng: -73.9851, status: 'stopped', speed: '0 km/h', destination: 'Central Park Delivery' },
    { id: 'FL-003', type: 'van', lat: 40.6892, lng: -74.0445, status: 'moving', speed: '32 km/h', destination: 'Brooklyn Heights' },
    { id: 'FL-004', type: 'truck', lat: 40.7831, lng: -73.9712, status: 'loading', speed: '0 km/h', destination: 'Warehouse District' },
  ];

  const alerts = [
    { id: 1, type: 'traffic', message: 'Heavy traffic on Route 95', severity: 'warning' },
    { id: 2, type: 'weather', message: 'Rain expected in downtown area', severity: 'info' },
    { id: 3, type: 'maintenance', message: 'FL-005 requires immediate service', severity: 'error' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-teal-50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Live Fleet Tracking</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live Updates</span>
                </div>
              </div>
            </div>
            
            {/* Simulated Map */}
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Vehicle Markers */}
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${25 + index * 20}%`,
                    top: `${30 + index * 15}%`,
                  }}
                >
                  <div className={`p-3 rounded-full shadow-lg ${
                    vehicle.status === 'moving' ? 'bg-green-500' :
                    vehicle.status === 'stopped' ? 'bg-red-500' : 'bg-yellow-500'
                  } text-white relative`}>
                    {vehicle.type === 'truck' ? <Truck className="w-5 h-5" /> : <Car className="w-5 h-5" />}
                    {vehicle.status === 'moving' && (
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/80 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                      <div className="font-medium">{vehicle.id}</div>
                      <div>{vehicle.speed}</div>
                      <div>{vehicle.destination}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Route Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 100 120 Q 200 80 300 180"
                  stroke="url(#routeGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Map Controls */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Moving</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Stopped</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Loading</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-teal-700 transition-colors">
                  Refresh Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Vehicle List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Active Vehicles</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="px-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        vehicle.status === 'moving' ? 'bg-green-500' :
                        vehicle.status === 'stopped' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="font-medium text-gray-900">{vehicle.id}</span>
                    </div>
                    <span className="text-sm text-gray-600">{vehicle.speed}</span>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {vehicle.destination}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Live Alerts</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {alerts.map((alert) => (
                <div key={alert.id} className="px-6 py-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className={`w-5 h-5 mt-0.5 ${
                      alert.severity === 'error' ? 'text-red-500' :
                      alert.severity === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                    }`} />
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {alert.message}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        2 min ago
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleMap;