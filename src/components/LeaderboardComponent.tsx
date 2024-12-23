'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';

interface LeaderboardEntry {
  address: string;
  completedResolutions: number;
  totalStaked: string;
  successRate: number;
  achievements: number;
  rank: number;
}

// Mock data - replace with actual data from blockchain
const mockLeaderboard: LeaderboardEntry[] = [
  {
    address: '0x1234...5678',
    completedResolutions: 15,
    totalStaked: '5.5',
    successRate: 85,
    achievements: 12,
    rank: 1,
  },
  {
    address: '0x8765...4321',
    completedResolutions: 12,
    totalStaked: '4.2',
    successRate: 80,
    achievements: 10,
    rank: 2,
  },
  {
    address: '0x9876...1234',
    completedResolutions: 10,
    totalStaked: '3.8',
    successRate: 75,
    achievements: 8,
    rank: 3,
  },
  {
    address: '0x4567...8901',
    completedResolutions: 8,
    totalStaked: '3.0',
    successRate: 70,
    achievements: 6,
    rank: 4,
  },
  {
    address: '0x2345...6789',
    completedResolutions: 6,
    totalStaked: '2.5',
    successRate: 65,
    achievements: 5,
    rank: 5,
  },
];

type LeaderboardTab = 'global' | 'friends';
type TimeRange = 'all' | 'month' | 'week';

export default function LeaderboardComponent() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('global');
  const [timeRange, setTimeRange] = useState<TimeRange>('all');

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 2:
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 3:
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-white text-gray-800 border-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Leaderboard</h2>
            <p className="text-gray-500">See how you stack up against others</p>
          </div>
          <div className="flex gap-4">
            {/* Tab Selector */}
            <div className="inline-flex rounded-lg border border-gray-100">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === 'global'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('global')}
              >
                Global
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === 'friends'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('friends')}
              >
                Friends
              </button>
            </div>
            {/* Time Range Selector */}
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as TimeRange)}
              className="block w-full rounded-lg border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <div className="bg-gray-50">
            <div className="grid grid-cols-6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-2">User</div>
              <div>Completed</div>
              <div>Staked</div>
              <div>Success Rate</div>
              <div>Achievements</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white divide-y divide-gray-200">
            {mockLeaderboard.map((entry) => (
              <div
                key={entry.address}
                className={`grid grid-cols-6 px-6 py-4 ${getRankStyle(entry.rank)}`}
              >
                <div className="col-span-2 flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-indigo-800">
                      #{entry.rank}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {entry.address}
                    </div>
                    {entry.address === address && (
                      <span className="text-xs text-indigo-600">(You)</span>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-900">
                  {entry.completedResolutions}
                </div>
                <div className="text-sm text-gray-900">{entry.totalStaked} ETH</div>
                <div className="text-sm text-gray-900">{entry.successRate}%</div>
                <div className="text-sm text-gray-900">{entry.achievements}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {mockLeaderboard.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No data available for the selected time range.</p>
          </div>
        )}
      </div>
    </div>
  );
} 