import S3 from "aws-sdk/clients/s3";
import axios from "axios";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3({
    region: "us-west-1",
    accessKeyId: "AKIATD2AOMZ4Q6XBHNNC",
    secretAccessKey: "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",
    signatureVersion: "v4"
})

export async function aws(file: File) {
    try {
        const fileParams = {
            Bucket: "meetingpeople",
            Key: "" + file.name, // Add folder name into string before key. Ex: "test/"
            Expires: 600,
            ContentType: file.type
        }

        const url = await s3.getSignedUrlPromise("putObject", fileParams);

        await axios.put(url, file, {
            headers: {
                "Content-type": String(file.type)
            }
        })

        return "Uploaded!"
    }
    catch (err) {
        return err
    }
}

export async function getAWS() {
    const response = await s3.listObjects({Bucket: 'meetingpeople', }).promise();
    //console.log("Response: ", response.Contents)
    let data: (string | undefined)[] = []

    response.Contents?.map((x) => {
        data.push(x.Key)
    })

    return (data)
}