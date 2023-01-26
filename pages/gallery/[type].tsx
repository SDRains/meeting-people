import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {navigation} from "../../components/Navigation";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function gallery() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="space-y-1 px-2">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'text-black font-bold' : 'text-gray-600 hover:text-black',
                                                        'group flex items-center px-2 pt-1 rounded-md foundersFont font-regular'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    <div className="flex flex-grow flex-col overflow-y-auto pt-5">
                        <div className="flex flex-1 flex-col">
                            <nav className="flex-1 space-y-1 px-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'text-black font-bold' : 'text-gray-600 hover:text-black',
                                            'group flex items-center px-2 pt-1 rounded-md foundersFont font-regular'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow sm:hidden">
                        <button
                            type="button"
                            className="px-4 text-gray-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <main>
                        <div className="pt-12">
                            <div className="m-auto text-right w-full px-20">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                                    <div className="bg-red-300 h-52">H</div>
                                    <div className="bg-red-300 h-52">H</div>
                                    <div className="bg-red-300 h-52">H</div>
                                    <div className="bg-red-300 h-52">H</div>
                                    <div className="bg-red-300 h-52">H</div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}