import Navigation from "../components/Navigation";


export default function about() {
    return (
        <>
            <Navigation active="About" />
            
            <main>
                <div className="flex h-screen">
                    <div className="m-auto text-right w-full pr-20">
                        <h3 className="text-3xl sm:text-5xl font-bold foundersFont">web design</h3>
                        <div className="foundersFont text-2xl pt-2">
                            <p>Stephen Rains</p>
                            <p>Eli Meyer</p>
                            <p>Nat Mak</p>
                        </div>

                        <h3 className="text-3xl sm:text-5xl font-bold foundersFont pt-8">gear</h3>
                        <div className="foundersFont text-2xl pt-2">
                            <p>Hasselblad 500C/M</p>
                            <p className="text-sm pb-2">zeiss 80mm planar, zeiss 40mm distagon</p>

                            <p>Leica M-A / M6</p>
                            <p className="text-sm pb-2">28mm summicron asph, 25mm summilux asph, 50mm sumilux asph</p>

                            <p>Leica Q2</p>
                            <p>Ricoh GRiii</p>
                            <p>Ricoh GRiiix</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}