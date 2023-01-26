import Navigation from "../../components/Navigation";

export default function gallery() {
    return (
        <>
            <Navigation active="Gallery" />

            <main>
                <div className="pt-12">
                    <div className="m-auto text-right w-full px-8 sm:px-0 sm:pl-32 sm:pr-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-12 sm:gap-4">
                            <div className="bg-red-300 h-52">H</div>
                            <div className="bg-red-300 h-52">H</div>
                            <div className="bg-red-300 h-52">H</div>
                            <div className="bg-red-300 h-52">H</div>
                            <div className="bg-red-300 h-52">H</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}