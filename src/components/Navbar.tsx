'use client'
import React, { useState } from 'react'
import LoginButton from './LoginButton'
import SignupButton from './SignupButton'
import { useAccount } from 'wagmi'
import Link from 'next/link'

const Navbar = () => {
    const { address } = useAccount()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <nav className="w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 rounded-3xl">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-indigo-600">Resolutions</h1>
                        </div>
                        
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex items-center gap-4">
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

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 space-y-2">
                            <Link href="/dashboard">
                                <button className="block w-full text-left px-4 py-2 text-indigo-600 text-sm font-semibold hover:bg-indigo-50">Dashboard</button>
                            </Link>
                            <Link href="/profile">
                                <button className="block w-full text-left px-4 py-2 text-indigo-600 text-sm font-semibold hover:bg-indigo-50">Profile</button>
                            </Link>
                            <Link href="/social">
                                <button className="block w-full text-left px-4 py-2 text-indigo-600 text-sm font-semibold hover:bg-indigo-50">Social</button>
                            </Link>
                            <Link href="/create-resolution">
                                <button className="block w-full text-left px-4 py-2 text-indigo-600 text-sm font-semibold hover:bg-indigo-50">Create Resolution</button>
                            </Link>
                            <div className="px-4">
                                <SignupButton />
                                {!address && <LoginButton />}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar