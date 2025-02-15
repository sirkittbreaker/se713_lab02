import { s3Client } from "../awsConfig";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomBytes } from "crypto";
import dotenv from "dotenv";

dotenv.config();

function generateSaltedFileName(originalFileName: string): string {
  const salt = randomBytes(16).toString("hex");
  const extension = originalFileName.split(".").pop();
  return `${salt}.${extension}`;
}

export async function uploadFile(
  bucket: string,
  filePath: string,
  file: Express.Multer.File
): Promise<string> {
  const saltedFileName = generateSaltedFileName(file.originalname);
  const saltedFilePath = `${filePath}/${saltedFileName}`;
  const params = {
    Bucket: bucket,
    Key: saltedFilePath,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("File uploaded successfully: ", data);
    const publicUrl = `${process.env.SUPABASE_OUTPUT_URL}/${bucket}/${saltedFilePath}`;
    console.log("File uploaded successfully: ", publicUrl);
    return publicUrl;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
}
