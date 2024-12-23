'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';

interface ResolutionFormData {
    title: string;
    type: 'short-term' | 'yearly';
    description: string;
    stakeAmount: string;
    deadline: string;
    milestones: { title: string; date: string }[];
}

export default function ResolutionCreator() {
    const { address } = useAccount();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<ResolutionFormData>({
        title: '',
        type: 'short-term',
        description: '',
        stakeAmount: '',
        deadline: '',
        milestones: [],
    });

    const handleAddMilestone = () => {
        setFormData({
            ...formData,
            milestones: [...formData.milestones, { title: '', date: '' }],
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement blockchain interaction for resolution creation
        console.log('Creating resolution:', formData);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Resolution</h2>

            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
                {[1, 2, 3].map((step) => (
                    <div
                        key={step}
                        className={`flex items-center ${step < currentStep ? 'text-indigo-600' : 'text-gray-400'}`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                ${step <= currentStep ? 'border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-400'}`}
                        >
                            {step}
                        </div>
                        {step < 3 && (
                            <div
                                className={`w-full h-1 mx-2 ${step < currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Resolution Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Enter your resolution title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value as 'short-term' | 'yearly' })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option value="short-term">Short-term</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                rows={3}
                                placeholder="Describe your resolution"
                            />
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Stake Amount (ETH)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={formData.stakeAmount}
                                onChange={(e) => setFormData({ ...formData, stakeAmount: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="0.1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Deadline</label>
                            <input
                                type="date"
                                value={formData.deadline}
                                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Milestones</label>
                            {formData.milestones.map((milestone, index) => (
                                <div key={index} className="flex gap-4 mb-4">
                                    <input
                                        type="text"
                                        value={milestone.title}
                                        onChange={(e) => {
                                            const newMilestones = [...formData.milestones];
                                            newMilestones[index].title = e.target.value;
                                            setFormData({ ...formData, milestones: newMilestones });
                                        }}
                                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Milestone title"
                                    />
                                    <input
                                        type="date"
                                        value={milestone.date}
                                        onChange={(e) => {
                                            const newMilestones = [...formData.milestones];
                                            newMilestones[index].date = e.target.value;
                                            setFormData({ ...formData, milestones: newMilestones });
                                        }}
                                        className="w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddMilestone}
                                className="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Milestone
                            </button>
                        </div>
                    </div>
                )}

                <div className="flex justify-between pt-4">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={() => setCurrentStep(currentStep - 1)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < 3 ? (
                        <button
                            type="button"
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Resolution
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
} 