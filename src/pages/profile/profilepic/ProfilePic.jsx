import React, { useState, useEffect, useRef } from "react";

export default function ProfilePic({ changeprofile }) {
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  // Posting image to Cloudinary
  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Instagram-clone");
    data.append("cloud_name", "kanishkkcloud18");
    fetch("https://api.cloudinary.com/v1_1/kanishkkcloud18/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
    console.log(url);
  };

  const postPic = () => {
    // Saving post to MongoDB
    fetch("http://localhost:5000/uploadProfilePic", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        pic: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        changeprofile();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    if (image) {
      postDetails();
    }
  }, [image]);

  useEffect(() => {
    if (url) {
      postPic();
    }
  }, [url]);

  return (
    <div className="flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-80 bg-white rounded-2xl shadow-xl p-4">
        <h2 className="text-center text-black text-xl font-semibold mb-4">
          Change Profile Photo
        </h2>

        <div className="border-t  border-neutral-900">
          <button
            className="w-full py-2 text-blue-500 hover:underline"
            onClick={handleClick}
          >
            Upload Photo
          </button>
          <input
            type="file"
            ref={hiddenFileInput}
            accept="image/*"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="border-t  border-neutral-900">
          <button className="w-full py-2 text-red-500 hover:underline">
            Remove Current Photo
          </button>
        </div>

        <div className="border-t border-neutral-900">
          <button
            className="w-full py-2 text-gray-700 hover:text-black"
            onClick={changeprofile}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
