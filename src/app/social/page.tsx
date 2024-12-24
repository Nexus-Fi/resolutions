'use client';

import { useAccount } from 'wagmi';
import LeaderboardComponent from '../../components/LeaderboardComponent';
import WalletWrapper from '../../components/WalletWrapper';
import Navbar from 'src/components/Navbar';

export default function SocialPage() {
    const { address } = useAccount();

    if (!address) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">
                            Connect Your Wallet to View Social Features
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
                    <h1 className="text-3xl font-bold text-gray-900">Social Hub</h1>
                    <p className="mt-2 text-gray-600">Connect with other resolution makers</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <LeaderboardComponent />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Active Challenges */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Active Challenges
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-medium text-gray-900">30-Day Reading Sprint</h4>
                                        <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                                            5 days left
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Read for 30 minutes every day
                                    </p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">25 participants</span>
                                        <button className="text-indigo-600 hover:text-indigo-700">
                                            Join Challenge
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-medium text-gray-900">Fitness February</h4>
                                        <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                                            12 days left
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Complete 20 workouts this month
                                    </p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">42 participants</span>
                                        <button className="text-indigo-600 hover:text-indigo-700">
                                            Join Challenge
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Friend Activity */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Friend Activity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-medium text-indigo-800">JD</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-900">
                                            <span className="font-medium">John Doe</span> completed a milestone
                                            in "Read 24 Books"
                                        </p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-medium text-indigo-800">AS</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-900">
                                            <span className="font-medium">Alice Smith</span> started a new
                                            resolution
                                        </p>
                                        <p className="text-xs text-gray-500">5 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Suggested Connections */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Suggested Connections
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-indigo-800">RJ</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Robert Johnson</p>
                                            <p className="text-xs text-gray-500">5 mutual connections</p>
                                        </div>
                                    </div>
                                    <button className="text-sm text-indigo-600 hover:text-indigo-700">
                                        Connect
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-indigo-800">EW</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Emma Wilson</p>
                                            <p className="text-xs text-gray-500">3 mutual connections</p>
                                        </div>
                                    </div>
                                    <button className="text-sm text-indigo-600 hover:text-indigo-700">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 