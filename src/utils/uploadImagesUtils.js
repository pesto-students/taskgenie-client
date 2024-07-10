import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
/**
 * Uploads multiple images to S3 and returns an array of image URLs.
 *
 * @param {Array} images - Array of images to upload
 * @return {Array} Array of URLs for the uploaded images
 */
export const uploadImages = async (images) => {
	const imageUrls = [];
	try {
		for (let image of images) {
			const url = await uploadImageToS3(image);
			imageUrls.push(url);
		}
		return imageUrls;
	} catch (error) {
		return error;
	}
};
/**
 * Uploads an image file to Amazon S3 bucket.
 *
 * @param {File} file - The image file to upload.
 * @return {string} The URL of the uploaded image.
 */
export const uploadImageToS3 = async (file) => {
	try {
		const s3Client = new S3Client({
			region: import.meta.env.VITE_AWS_REGION,
			credentials: {
				accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
				secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
			},
		});
		const key = file.name.replace(/\s/g, "_");
		const params = {
			Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
			Key: key,
			Body: file,
			ACL: "public-read",
		};

		const command = new PutObjectCommand(params);
		const response = await s3Client.send(command);
		if (response.$metadata.httpStatusCode === 200) {
			const imageUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
			return imageUrl;
		} else {
			throw new Error("Unable to convert Image");
		}
	} catch (error) {
		return error;
	}
};
