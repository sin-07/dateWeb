import axios from "axios";

export const useUpload = async ({ image, onUploadProgress }) => {
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "dateWeb");
      formData.append("api_key", "724289965791618");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: onUploadProgress,
        withCredentials: false,
      };

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxli2mlbq/image/upload",
        formData,
        config
      );

      const data = await res.data;
      if (!data) throw new Error("Failed to upload image");

      return {
        url: data.secure_url,
        public_id: data.public_id,
      };
    } catch (error) {
      return error.message;
    }
  };

  const { public_id, url } = await upload();
  return { public_id, url };
};
