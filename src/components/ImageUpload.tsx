"use server";

import Image from "next/image";

interface UploadResult {
  // TODO: Unknown result type needed to contact backend for result schema
}

const uploadImage = async (img: FormData): Promise<UploadResult> => {
  // TODO: send image to backend and get result object
  return {};
};

export default async function ImageUpload() {
  return (
    <form>
      <input type="file">
        <Image src={""} alt="image_upload" />
      </input>
    </form>
  );
}
