'use client';

import { useAccount } from 'wagmi';
import ResolutionCreator from '../../components/ResolutionCreator';
import WalletWrapper from '../../components/WalletWrapper';
import Navbar from 'src/components/Navbar';

export default function CreateResolutionPage() {
  const { address } = useAccount();

  if (!address) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Connect Your Wallet to Create a Resolution
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4 sm:p-8">

      <Navbar /> 

      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Resolution</h1>
          <p className="mt-2 text-gray-600">
            Set your goals, stake your tokens, and track your progress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <ResolutionCreator />
          </div>

          {/* Tips and Guidelines */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips for Success</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-1">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Set specific, measurable, and achievable goals
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-1">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Break down your resolution into smaller milestones
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-1">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    Stake enough to stay motivated but not too much to cause stress
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                How Staking Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">1</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Stake your tokens when creating a resolution
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">2</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Complete milestones to unlock portions of your stake
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">3</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Receive rewards for completing your resolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 