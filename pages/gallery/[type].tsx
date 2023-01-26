import Navigation from "../../components/Navigation";
import {useRouter} from "next/router";

export default function gallery() {
    const router = useRouter()
    const galleryType = router.query // "bw" || "color"

    return (
        <>
            <Navigation active="Gallery" />

            <main>
                <div className="pt-12">
                    <div className="m-auto text-right w-full px-8 sm:px-0 sm:pl-32 sm:pr-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 sm:gap-6">
                            <img src="/images/bw/91000028.jpg" className="w-full" />
                            <img src="/images/bw/91000026.jpg" className="w-full" />
                            <img src="/images/bw/91000028.jpg" className="w-full" />
                            <img src="/images/bw/91000032.jpg" className="w-full" />
                            <img src="/images/bw/98760006.jpg" className="w-full" />
                            <img src="/images/bw/98770015.jpg" className="w-full" />
                            <img src="/images/bw/98770032.jpg" className="w-full" />
                            <img src="/images/bw/98780012.jpg" className="w-full" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}