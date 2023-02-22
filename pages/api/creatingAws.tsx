import S3 from "aws-sdk/clients/s3";
import axios from "axios";

const s3 = new S3({
    region: "us-west-1",
    accessKeyId: "AKIATD2AOMZ4Q6XBHNNC",
    secretAccessKey: "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",
    signatureVersion: "v4"
})

export default async function aws(file: File) {
    try {
        const fileParams = {
            Bucket: "meetingpeople",
            Key: file.name,
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