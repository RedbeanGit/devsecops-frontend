import "./globals.css";

export default function Home() {
  return (
    <div className="flex w-screen items-center flex-col">
      <iframe
        title="dummyframe"
        name="dummyframe"
        id="dummyframe"
        style={{ display: "none" }}
      ></iframe>
      <h1 className="text-4xl mt-4 mb-2">File sender</h1>
      <p className="mb-8 italic">Uploaded files are removed every 30 seconds</p>
      <form
        action={`${process.env.NEXT_PUBLIC_API_URL ?? ""}/upload`}
        encType="multipart/form-data"
        method="post"
        className="grid grid-cols-2 gap-y-4 items-center justify-items-center shadow rounded-lg p-4 m-2"
        target="dummyframe"
      >
        <label htmlFor="fileName">File name</label>
        <input
          id="fileName"
          type="text"
          placeholder="file.txt"
          required
          name="filename"
          className="border justify-self-stretch rounded px-2 py-1"
        />
        <label htmlFor="file">File</label>
        <input
          id="file"
          type="file"
          required
          name="file"
          className="border justify-self-stretch rounded"
        />
        <input
          type="submit"
          value="Send"
          className="col-span-2 bg-red-600 px-8 py-2 text-white rounded-lg mt-4 cursor-pointer"
        />
      </form>
    </div>
  );
}
