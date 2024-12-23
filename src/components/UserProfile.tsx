'use client';

import { useAccount } from 'wagmi';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
}

interface Stats {
  totalResolutions: number;
  completedResolutions: number;
  totalStaked: string;
  successRate: number;
}

// Mock data - replace with actual data from blockchain
const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Early Bird',
    description: 'Created first resolution',
    icon: '🌟',
    date: '2024-01-01',
  },
  {
    id: '2',
    title: 'Milestone Master',
    description: 'Completed 5 milestones',
    icon: '🎯',
    date: '2024-01-15',
  },
  {
    id: '3',
    title: 'High Roller',
    description: 'Staked more than 1 ETH',
    icon: '💎',
    date: '2024-01-20',
  },
];

const mockStats: Stats = {
  totalResolutions: 5,
  completedResolutions: 3,
  totalStaked: '2.5',
  successRate: 60,
};

export default function UserProfile() {
  const { address } = useAccount();

  if (!address) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Please connect your wallet to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">
              {address.slice(2, 4).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {`${address.slice(0, 6)}...${address.slice(-4)}`}
            </h2>
            <p className="text-gray-500">Member since January 2024</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Total Resolutions</h3>
          <p className="text-3xl font-bold text-gray-900">{mockStats.totalResolutions}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Completed</h3>
          <p className="text-3xl font-bold text-gray-900">{mockStats.completedResolutions}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Total Staked</h3>
          <p className="text-3xl font-bold text-gray-900">{mockStats.totalStaked} ETH</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Success Rate</h3>
          <p className="text-3xl font-bold text-gray-900">{mockStats.successRate}%</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                {achievement.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                <p className="text-sm text-gray-500">{achievement.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(achievement.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Completed milestone: Read 6 books
                </p>
                <p className="text-xs text-gray-500">Resolution: Read 24 Books</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 days ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Created new resolution
                </p>
                <p className="text-xs text-gray-500">Staked: 0.5 ETH</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
} 