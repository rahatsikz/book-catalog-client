/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useAppSelector } from "../redux/hooks";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function AddNewBook() {
  const { user } = useAppSelector((state) => state.user);

  const handleAddBook = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publishDate = form.publishDate.value;

    const dateObject = new Date(publishDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      dateObject
    );

    console.log({ title, author, genre, formattedDate, user });
  };

  return (
    <div className="container mx-auto mt-12">
      <p className="text-center text-xl font-semibold underline text-cyan-600 underline-offset-8 uppercase">
        Fill up the info to Add book
      </p>
      <div className="mt-8 py-8 bg-slate-200">
        <form onSubmit={handleAddBook}>
          <div className="grid lg:grid-cols-2 gap-8 w-9/12 mx-auto">
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="input input-bordered w-full focus:outline-none focus:border-cyan-500"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Enter Author"
              className="input input-bordered w-full focus:outline-none focus:border-cyan-500"
              required
            />
            <input
              type="text"
              name="genre"
              placeholder="Enter Genre"
              className="input input-bordered w-full focus:outline-none focus:border-cyan-500"
              required
            />

            <div className="form-control">
              <label className="input-group">
                <span className="bg-neutral text-white">Publish Date</span>
                <input
                  type="date"
                  name="publishDate"
                  className="input input-bordered w-full focus:outline-none focus:border-cyan-500"
                  required
                />
              </label>
            </div>
          </div>
          <div className="w-9/12 mx-auto mt-8">
            <button
              type="submit"
              className="btn btn-block btn-neutral text-white"
            >
              Add The Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
