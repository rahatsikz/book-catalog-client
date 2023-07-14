/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TableRow from "../components/TableRow";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/IBook";

export default function AllBooks() {
  const { data, isLoading } = useGetAllBooksQuery(undefined);

  // console.log(data?.data);

  return (
    <div className="w-8/12 mx-auto mt-12">
      <p className="text-center text-xl font-semibold underline text-cyan-600 underline-offset-8 uppercase">
        List of all books
      </p>

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
            {data?.data.map((book: IBook, idx: number) => (
              <TableRow key={book._id} idx={idx} book={book}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
