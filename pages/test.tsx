import {useState} from "react";
import aws from "./api/creatingAws";

export default function Test() {
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);

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
        </>
    )
}