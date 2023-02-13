import Navigation from "../../components/Navigation";
import path from "path";
import fs from 'fs';
import {Fragment, useState} from "react";
import { Transition, Dialog } from "@headlessui/react";

// @ts-ignore
export default function gallery({fileNames}) {
    const [selectedImage, setSelectedImage] = useState("")
    const [showPopup, setShowPopup] = useState(false)

    return (
        <>
            <Navigation active="Gallery" />

            <main>
                <div className="py-12">
                    <div className="m-auto text-right w-full px-8 sm:px-0 sm:pl-32 sm:pr-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 sm:gap-6">
                            <>
                                {fileNames.map((imageName: string, index: number) => (
                                    <>
                                        <div className="flex items-center hover:opacity-90 hover:cursor-pointer" key={imageName} onClick={() => {
                                            setShowPopup(true)
                                            setSelectedImage(imageName)
                                        }}>
                                            <img src={`/images/color/${imageName}.jpg`} className="w-full py-4" />
                                        </div>

                                        <Transition.Root show={showPopup} as={Fragment}>
                                            <Dialog as="div" className="relative z-10" onClose={setShowPopup}>
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <div className="fixed inset-0 bg-gray-200 bg-opacity-20 transition-opacity" />
                                                </Transition.Child>

                                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-out duration-300"
                                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                            leave="ease-in duration-200"
                                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        >
                                                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                                                                <div>
                                                                    <img src={`/images/color/${selectedImage}.jpg`} className="w-full pt-2" />
                                                                </div>
                                                            </Dialog.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </Transition.Root>
                                    </>
                                ))}
                            </>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const directoryPath = path.join(__dirname, "/../../../../public/images/color/");
    const fileNames: any[] = [];
    const files = fs.readdirSync(directoryPath);
    files.forEach(function (file) {
        fileNames.push(file.substring(0, file.indexOf(".")));
    });

    return {
        props: { fileNames }, // will be passed to the page component as props
    }
}