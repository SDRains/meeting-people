import Navigation from "../../components/Navigation";
import path from "path";
import fs from 'fs';

// @ts-ignore
export default function gallery({fileNames}) {
    return (
        <>
            <Navigation active="Gallery" />

            <main>
                <div className="py-12">
                    <div className="m-auto text-right w-full px-8 sm:px-0 sm:pl-32 sm:pr-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 sm:gap-6">
                            <>
                                {fileNames.map((imageName: string) => (
                                    <div className="flex items-center hover:opacity-90 hover:cursor-pointer" key={imageName}>
                                        <img src={`/images/bw/${imageName}.jpg`} className="w-full" />
                                    </div>
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
    const directoryPath = path.join(__dirname, "/../../../../public/images/bw/");
    const fileNames: any[] = [];
    const files = fs.readdirSync(directoryPath);
    files.forEach(function (file) {
        fileNames.push(file.substring(0, file.indexOf(".")));
    });

    return {
        props: { fileNames }, // will be passed to the page component as props
    }
}