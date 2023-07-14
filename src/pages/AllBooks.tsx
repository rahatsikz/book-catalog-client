/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TableRow from "../components/TableRow";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/IBook";
import { FormEvent } from "react";
import { useState, useEffect } from "react";

export default function AllBooks() {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  console.log(isLoading);

  let [filteredData, setFilteredData] = useState<IBook[] | undefined>(
    data?.data
  );

  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = (form.search as HTMLInputElement).value;
    // console.log({ search });
    setSearch(search);
  };

  const handleYear = (e: {
    preventDefault: () => void;
    currentTarget: any;
  }) => {
    e.preventDefault();

    const year = e.currentTarget.value;
    console.log({ year });
    setYear(year);
  };

  if (search.length && year.length) {
    filteredData = data?.data.filter(
      (indivBook: IBook) =>
        (indivBook.title.toLowerCase().includes(search.toLowerCase()) ||
          indivBook.author.toLowerCase().includes(search.toLowerCase()) ||
          indivBook.genre.toLowerCase().includes(search.toLowerCase())) &&
        parseInt(indivBook.publicationDate.slice(-4)) < parseInt(year)
    );
    // console.log(filteredData);
  } else if (search.length) {
    filteredData = data?.data.filter(
      (indivBook: IBook) =>
        indivBook.title.toLowerCase().includes(search.toLowerCase()) ||
        indivBook.author.toLowerCase().includes(search.toLowerCase()) ||
        indivBook.genre.toLowerCase().includes(search.toLowerCase())
    );
  } else if (year.length) {
    filteredData = data?.data.filter(
      (indivBook: IBook) =>
        parseInt(indivBook.publicationDate.slice(-4)) < parseInt(year)
    );
  }

  console.log({ filteredData });

  // setFilteredData(filteredData);

  return (
    <div className="w-8/12 mx-auto mt-12">
      <p className="text-center text-xl font-semibold underline text-cyan-600 underline-offset-8 uppercase">
        List of all books
      </p>

      <div className="mt-8">
        <form onSubmit={handleSearch} className="grid grid-cols-3 gap-8">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                name="search"
                placeholder="Search…"
                className="input input-bordered focus:outline-none"
              />
              <button type="submit" className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="form-control">
            <label className="input-group">
              <span>Publication Year upto</span>
              <select
                onChange={handleYear}
                name="year"
                className="select select-bordered focus:outline-none"
              >
                <option defaultValue={2023}>2023</option>
                <option value={1950}>1950</option>
                <option value={1900}>1900</option>
                <option value={1850}>1850</option>
                <option value={1800}>1800</option>
              </select>
            </label>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((book: IBook, idx: number) => (
              <TableRow key={book._id} idx={idx} book={book}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
