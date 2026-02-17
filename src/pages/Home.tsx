import React from 'react';

export const Home: React.FC = () => {
    return (
        <div className="relative isolate overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>

            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Create beauty with FIGURA
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Modern platform for creative professionals. Build, design, and share your vision with a community that cares.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">
                                Start Creating
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-20 flow-root sm:mt-24">
                        <div className="relative -m-2 rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-sm">
                            <div className="rounded-lg bg-slate-900 shadow-2xl ring-1 ring-white/10 aspect-video flex items-center justify-center text-slate-500 italic">
                                [ Interactive Dashboard Preview ]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
