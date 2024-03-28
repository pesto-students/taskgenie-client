import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
/**
 * Formats a date into a human-readable string.
 * If the date is today, it returns 'Today'.
 * Otherwise, it returns the date in the format 'day month year'.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
  const today = new Date();
  const taskDate = new Date(date);

  if (taskDate.toDateString() === today.toDateString()) {
    return "Today";
  } else {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return taskDate.toLocaleDateString(undefined, options);
  }
};

export const formatAmount = (amount) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
};

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
    console.log("file name is ", key);
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
      console.log("image url", imageUrl);
      return imageUrl;
    } else {
      throw new Error("Unable to convert Image");
    }
  } catch (error) {
    return error;
  }
};
