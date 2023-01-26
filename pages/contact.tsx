import Navigation from "../components/Navigation";

export default function contact() {
    return (
        <>
            <Navigation active="Contact" />

            <main>
                <div className="flex h-screen">
                    <div className="m-auto text-right w-full pr-20">
                        <h3 className="text-2xl sm:text-4xl font-bold foundersFont">for prints and other inquiries</h3>
                        <div className="foundersFont text-xl pt-2">
                            <a href="">elimeyer@meetingpeopleiseasy.net</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}