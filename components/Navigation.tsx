import {Dialog, Transition} from "@headlessui/react";
import {Component, Fragment, useState} from "react";
import {Bars3BottomLeftIcon, XMarkIcon} from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
    active: string
}

class Navigation extends Component<Props, any> {
    constructor(p: Props | Readonly<Props>) {
        super(p);
        this.state = {
            sidebarOpen: false
        };
    }

    render() {
        const navigation = [
            { name: 'home', href: '/', current: this.props.active == "Home" },
            { name: 'blog', href: '/blog', current: this.props.active == "Blog" },
            { name: 'gallery', href: '/gallery', current: this.props.active == "Gallery" },
            { name: 'contact', href: '/contact', current: this.props.active == "Contact" },
            { name: 'about', href: '/about', current: this.props.active == "About" },
        ]

        return (
            <>
                <Transition.Root show={this.state.sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={() => this.setState({sidebarOpen: this.state.sidebarOpen != this.state.sidebarOpen})}>
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
                                                onClick={() => this.setState({sidebarOpen: !this.state.sidebarOpen})}
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
                            onClick={() => this.setState({sidebarOpen: !this.state.sidebarOpen})}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Navigation