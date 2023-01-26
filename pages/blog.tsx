import Navigation from "../components/Navigation";

export default function Blog() {
    return (
        <>
            <Navigation active="Blog" />

            <main>
                <div className="flex h-screen">
                    <div className="m-auto text-right w-full pr-20">
                        <h3 className="text-3xl sm:text-5xl foundersFont">blog under construction</h3>
                        <div className="foundersFont text-xl pt-6">
                            <p>sorry :(</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}