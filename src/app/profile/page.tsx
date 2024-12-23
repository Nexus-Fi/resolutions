'use client';

import { useAccount } from 'wagmi';
import UserProfile from '../../components/UserProfile';
import WalletWrapper from '../../components/WalletWrapper';

export default function ProfilePage() {
    const { address } = useAccount();

    if (!address) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">
                            Connect Your Wallet to View Profile
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
                    <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
                    <p className="mt-2 text-gray-600">View your achievements and progress</p>
                </div>

                <UserProfile />
            </div>
        </div>
    );
} 