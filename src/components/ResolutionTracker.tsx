'use client';

import { useState } from 'react';

interface Milestone {
    title: string;
    date: string;
    completed: boolean;
}

interface Resolution {
    id: string;
    title: string;
    type: 'short-term' | 'yearly';
    description: string;
    stakeAmount: string;
    deadline: string;
    progress: number;
    milestones: Milestone[];
}

// Mock data - replace with actual data from blockchain
const mockResolutions: Resolution[] = [
    {
        id: '1',
        title: 'Read 24 Books',
        type: 'yearly',
        description: 'Read two books every month throughout the year',
        stakeAmount: '0.5',
        deadline: '2024-12-31',
        progress: 25,
        milestones: [
            { title: 'Read 6 books', date: '2024-03-31', completed: true },
            { title: 'Read 12 books', date: '2024-06-30', completed: false },
            { title: 'Read 18 books', date: '2024-09-30', completed: false },
            { title: 'Read 24 books', date: '2024-12-31', completed: false },
        ],
    },
];

export default function ResolutionTracker() {
    const [activeResolution, setActiveResolution] = useState<Resolution | null>(
        mockResolutions[0]
    );

    const handleMilestoneToggle = (index: number) => {
        if (!activeResolution) return;

        const newMilestones = [...activeResolution.milestones];
        newMilestones[index].completed = !newMilestones[index].completed;

        // Calculate new progress
        const completedCount = newMilestones.filter((m) => m.completed).length;
        const newProgress = (completedCount / newMilestones.length) * 100;

        setActiveResolution({
            ...activeResolution,
            milestones: newMilestones,
            progress: newProgress,
        });
    };

    if (!activeResolution) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-500">No active resolutions found.</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{activeResolution.title}</h2>
                <p className="text-gray-600 mt-1">{activeResolution.description}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{Math.round(activeResolution.progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${activeResolution.progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Resolution Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-medium text-gray-900 capitalize">{activeResolution.type}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Stake Amount</p>
                    <p className="font-medium text-gray-900">{activeResolution.stakeAmount} ETH</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="font-medium text-gray-900">
                        {new Date(activeResolution.deadline).toLocaleDateString()}
                    </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Days Remaining</p>
                    <p className="font-medium text-gray-900">
                        {Math.max(
                            0,
                            Math.ceil(
                                (new Date(activeResolution.deadline).getTime() - new Date().getTime()) /
                                (1000 * 60 * 60 * 24)
                            )
                        )}
                    </p>
                </div>
            </div>

            {/* Milestones */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Milestones</h3>
                <div className="space-y-3">
                    {activeResolution.milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => handleMilestoneToggle(index)}
                                    className={`w-5 h-5 rounded border ${milestone.completed
                                            ? 'bg-indigo-600 border-indigo-600'
                                            : 'border-gray-300'
                                        } flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                >
                                    {milestone.completed && (
                                        <svg
                                            className="w-3 h-3 text-white"
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
                                    )}
                                </button>
                                <span
                                    className={`font-medium ${milestone.completed ? 'text-gray-400 line-through' : 'text-gray-900'
                                        }`}
                                >
                                    {milestone.title}
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">
                                {new Date(milestone.date).toLocaleDateString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 