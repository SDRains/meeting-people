import Navigation from "../components/Navigation";
import Link from "next/link";

export default function gallery() {
    return (
        <>
            <Navigation active="Gallery" />

            <main>
                <div className="flex h-screen">
                    <div className="m-auto text-right w-full pr-20">
                        <Link href="/gallery/bw" className="text-2xl sm:text-4xl foundersFont hover:text-gray-600">black & white</Link>

                        <div className="py-1"></div>

                        <Link href="/gallery/color" className="text-2xl sm:text-4xl foundersFont">
                            <span className="hover:text-blue-600">c</span>
                            <span className="hover:text-red-600">o</span>
                            <span className="hover:text-green-600">l</span>
                            <span className="hover:text-purple-600">o</span>
                            <span className="hover:text-yellow-600">r</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}