'use client';

import { useAccount } from 'wagmi';
import ResolutionTracker from '../../components/ResolutionTracker';
import WalletWrapper from '../../components/WalletWrapper';

export default function DashboardPage() {
  const { address } = useAccount();

  if (!address) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Connect Your Wallet to View Dashboard
            </h1>
            <WalletWrapper
              className="inline-block"
              text="Connect Wallet"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Track your resolutions and progress</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <a
                href="/create-resolution"
                className="block w-full py-2 px-4 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition"
              >
                Create New Resolution
              </a>
              <a
                href="/pools"
                className="block w-full py-2 px-4 bg-white text-indigo-600 text-center border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Browse Activity Pools
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Active Resolutions</p>
                <p className="text-2xl font-bold text-indigo-600">3</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Staked</p>
                <p className="text-2xl font-bold text-indigo-600">2.5 ETH</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
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
                    Milestone Completed
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Resolutions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Resolutions</h2>
          <ResolutionTracker />
        </div>

        {/* Upcoming Milestones */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Milestones</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Read 12 books</p>
                  <p className="text-sm text-gray-500">Resolution: Read 24 Books</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Due in 15 days</p>
                  <p className="text-xs text-gray-500">June 30, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Run 50km</p>
                  <p className="text-sm text-gray-500">Resolution: Run 200km</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Due in 20 days</p>
                  <p className="text-xs text-gray-500">July 5, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 