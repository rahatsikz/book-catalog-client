import { ITable } from "../types/ITable";

export default function TableRow({ book, idx }: ITable) {
  const { title, author, genre, publicationDate } = book;

  return (
    <tr>
      <th> {idx + 1} </th>
      <td> {title} </td>
      <td> {author} </td>
      <td> {genre} </td>
      <td> {publicationDate} </td>
      <td>
        <button className="btn btn-neutral text-white btn-xs">Details</button>
      </td>
    </tr>
  );
}
