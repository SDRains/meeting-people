import {useState} from "react";
import {aws, getAWS} from "./api/creatingAws";

interface imgData {
    images: []
}

export default function Test(pageData: imgData) {
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const images = pageData.images
    const baseURL = "https://meetingpeople.s3.us-west-1.amazonaws.com/"

    function storeFile(e: any) {
        console.log(e.target)
        setFile(e.target.files[0])
    }

    const uploadFile = async() => {
        setMessage("Uploading!")
        // @ts-ignore
        let returnData = await aws(file) // Upload File
        setMessage(String(returnData))
    }

    return (
        <>
            <p>Upload File:</p>
            <p className="text-red-600">{message}</p>
            <input type={"file"} onChange={(e) => storeFile(e)} />

            <input type={"button"} defaultValue={"Send"} onClick={uploadFile} className="bg-blue-300 py-2 px-6" />

            <div className="mt-20">
                <p>{images.length}</p>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    let returnData = await getAWS("bw")

    return {
        props: {
            images: returnData
        }
    }
}