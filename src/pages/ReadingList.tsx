/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetSingleUserQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hooks";
import { IReadList } from "../types/IReadList";
import ReadCard from "../components/ReadCard";

export default function ReadingList() {
  const { user } = useAppSelector((state) => state.user);

  const { data } = useGetSingleUserQuery(user.id);

  if (data?.data?.readList.length < 1) {
    return (
      <p className="text-center text-lg text-red-400 mt-12">
        No Book Added to Reading List
      </p>
    );
  }

  return (
    <section className="container mx-auto mt-12">
      <p className="text-center text-xl font-semibold underline text-cyan-600 underline-offset-8 uppercase">
        Here are your book from Reading List
      </p>

      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {data?.data?.readList.map((list: IReadList, idx: number) => (
          <ReadCard key={idx} list={list}></ReadCard>
        ))}
      </div>
    </section>
  );
}
