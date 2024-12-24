'use client';

import { useAccount } from 'wagmi';
import TransactionWrapper from 'src/components/TransactionWrapper';
import Link from 'next/link';
import Navbar from 'src/components/Navbar';


export default function OnboardingDashboard() {
    const { address } = useAccount();

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 p-4 sm:p-8">

            <Navbar />
            
            {/* Welcome Banner */}
            <div className="backdrop-blur-lg bg-white/30 rounded-3xl mt-10 p-8 mb-8 border border-white/50 shadow-xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Welcome to Resolutions! 🎉
                </h1>
                <p className="text-base md:text-lg text-gray-600">
                    Your journey to achieving goals through blockchain-powered accountability starts here.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {/* Quick Actions Card */}
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/50 shadow-lg transition-all hover:shadow-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="space-y-4 gap-3">
                            <button className="w-full py-3 px-4 bg-indigo-600/90 text-white rounded-xl hover:bg-indigo-700/90 transition-all backdrop-blur-sm">
                            <Link href="/create-resolution" className="py-4">
                                Create New Resolution
                            </Link>
                        </button>
                            <button className="w-full py-3 px-4 bg-white/50 text-indigo-600 border border-indigo-300 rounded-xl hover:bg-white/70 transition-all">
                                <Link href="/active-resolutions">
                                    View Active Resolutions
                                </Link>
                            </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/50 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/40 p-4 rounded-xl">
                            <p className="text-3xl font-bold text-indigo-600">0</p>
                            <p className="text-sm text-gray-600">Active Resolutions</p>
                        </div>
                        <div className="bg-white/40 p-4 rounded-xl">
                            <p className="text-3xl font-bold text-indigo-600">0 ETH</p>
                            <p className="text-sm text-gray-600">Total Staked</p>
                        </div>
                    </div>
                </div>

                {/* Transaction Component */}
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/50 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
                    {address ? (
                        <TransactionWrapper address={address} />
                    ) : (
                        <p className="text-gray-500">Connect your wallet to see recent activity.</p>
                    )}
                </div>
            </div>

            {/* Getting Started Guide */}
            <div className="mt-8 backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/50 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/40 p-6 rounded-xl">
                        <div className="text-3xl mb-2">🎯</div>
                        <h4 className="font-semibold mb-2">Create a Resolution</h4>
                        <p className="text-sm text-gray-600">
                            Set your goal, timeline, and stake amount to get started
                        </p>
                    </div>
                    <div className="bg-white/40 p-6 rounded-xl">
                        <div className="text-3xl mb-2">💎</div>
                        <h4 className="font-semibold mb-2">Stake Your Tokens</h4>
                        <p className="text-sm text-gray-600">
                            Lock in your commitment with ETH stakes
                        </p>
                    </div>
                    <div className="bg-white/40 p-6 rounded-xl">
                        <div className="text-3xl mb-2">🌟</div>
                        <h4 className="font-semibold mb-2">Track Progress</h4>
                        <p className="text-sm text-gray-600">
                            Complete milestones and earn rewards
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}