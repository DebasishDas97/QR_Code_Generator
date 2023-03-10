import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/DebasishDas97"
  );

  const getQrCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputUrl = (e.currentTarget.elements.namedItem("url") as HTMLInputElement).value;
    setUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputUrl}`
    );
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-96 bg-gray-800 p-8 rounded-md text-center">
        <p className="text-3xl font-semibold text-white pb-5 font-serif">
          Enter url & get QR
        </p>
        <form onSubmit={getQrCode} className="flex flex-col">
          <input
            type="text"
            name="url"
            placeholder="Enter Url"
            className="outline-none rounded-sm p-3"
          />
          <img src={url} className="h-60 mt-5" alt="qr-code" />
          <button className="mt-7 bg-amber-600 p-2 text-white text-xl font-bold tracking-wide">
            Generate QR Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
