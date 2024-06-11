import { UploadDropzone } from "@/lib/uploadThing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  className: string;
  endpoint: any;
}

export default function ImageInput(props: Props) {
  const {
    label,
    imageUrl,
    setImageUrl,
    className = "col-span-full",
    endpoint = "imageUploader",
  } = props;

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4 mt-4">
        <label
          htmlFor="course-image"
          className="block text-sm text-center font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
        className={className}
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // Do something with the response
            // console.log("Files: ", res);
            // console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            // console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
