import Navigation from "../../components/Navigation";
import {useRouter} from "next/router";

export default function gallery() {
    const router = useRouter()
    const galleryType = router.query.type // "bw" || "color"
    console.log(galleryType)

    return (
        <>
            <Navigation active="Gallery" />

            <main>
                <div className="py-12">
                    <div className="m-auto text-right w-full px-8 sm:px-0 sm:pl-32 sm:pr-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 sm:gap-6">
                            {galleryType == "bw" && (
                                <>
                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/91000028.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/91000026.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/91000028.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/91000032.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/98760006.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/98770015.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/98770032.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/bw/98780012.jpg" className="w-full" />
                                    </div>
                                </>
                            )}

                            {galleryType == "color" && (
                                <>
                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/WSDOT%202%20(Seattle%202022).jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/SPL 4 (Seattle 2022).jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/SPL 2 (Seattle 2022).jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/SPL 1 (Seattle 2022).jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/R0000467.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/R0000454.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/R0000451.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/R0000436.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/R0000391.jpg" className="w-full" />
                                    </div>

                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer">
                                        <img src="/images/color/R0000328.jpg" className="w-full" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}