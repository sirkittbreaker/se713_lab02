import { s3Client } from "../awsConfig";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

export async function uploadFile(
  bucket: string,
  filePath: string,
  file: Express.Multer.File
): Promise<string> {
  const params = {
    Bucket: bucket,
    Key: filePath,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("File uploaded successfully: ", data);
    const endpoint = process.env.ENDPOINT!.replace(
      "s3",
      "object/public/images"
    );
    const publicUrl = `${endpoint}/${filePath}`;
    console.log("File uploaded successfully: ", publicUrl);
    return publicUrl;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
}
