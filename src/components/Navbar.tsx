import React from 'react'
import LoginButton from './LoginButton'
import SignupButton from './SignupButton'
import { useAccount } from 'wagmi'
import Link from 'next/link'

const Navbar = () => {
    const { address } = useAccount()
    return (
        <div>
            <nav className="w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 rounded-3xl">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-indigo-600">Resolutions</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/dashboard">
                                <button className="text-indigo-600 text-sm font-semibold hover:underline">Dashboard</button>
                            </Link>
                            <Link href="/profile">
                                <button className="text-indigo-600 text-sm font-semibold hover:underline">Profile</button>
                            </Link>
                            <Link href="/social">
                                <button className="text-indigo-600 text-sm font-semibold hover:underline">Social</button>
                            </Link>
                            <Link href="/create-resolution">
                                <button className="text-indigo-600 text-sm font-semibold hover:underline">Create Resolution</button>
                            </Link>
                            <SignupButton />
                            {!address && <LoginButton />}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar