import "./globals.css";

export default function Home() {
  return (
    <div className="flex w-screen items-center flex-col">
      <h1 className="text-4xl mt-4 mb-8">File sender</h1>
      <form
        action={`${process.env.NEXT_PUBLIC_API_URL ?? ""}/upload`}
        encType="multipart/form-data"
        method="post"
        className="grid grid-cols-2 gap-y-4 items-center justify-items-center shadow rounded-lg p-4"
      >
        <label htmlFor="fileName">File name</label>
        <input
          id="fileName"
          type="text"
          placeholder="file.txt"
          required
          className="border justify-self-stretch rounded px-2 py-1"
        />
        <label htmlFor="file">File</label>
        <input
          id="file"
          type="file"
          required
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
