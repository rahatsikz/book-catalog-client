/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import {
  useAddCommentMutation,
  useGetSingleBookQuery,
} from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";
import cardIMG from "../assets/pexels-oziel-2846814.jpg";

export default function BookDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);

  const [addComment, { isLoading }] = useAddCommentMutation();

  console.log(isLoading);

  const handleComment = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    console.log({ comment });

    const option = {
      id,
      data: {
        comment,
      },
    };
    await addComment(option);
    toast.success("Comment Added Successfully");
  };

  return (
    <div className="container mx-auto my-12">
      <p className="text-center text-xl font-semibold underline text-cyan-600 underline-offset-8 uppercase">
        Details of {data?.data?.title}
      </p>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <figure>
          <img src={cardIMG} alt="Album" className="lg:w-64" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {data?.data?.title} </h2>
          <p className="flex-grow-0">
            Author : <span className="text-cyan-500">{data?.data?.author}</span>
          </p>
          <p className="flex-grow-0">
            Genre : <span className="text-cyan-500">{data?.data?.genre}</span>
          </p>
          <p className="flex-grow-0">
            Publication Date :{" "}
            <span className="text-cyan-500">{data?.data?.publicationDate}</span>
          </p>
          <div className="card-action mt-4 flex gap-4">
            <button className="btn bg-cyan-500 text-white hover:bg-cyan-600">
              Wishlist
            </button>
            <button className="btn bg-transparent border-cyan-500 text-cyan-500">
              Plan To Read
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleComment} className="mt-8">
        <div className="form-control">
          <label className="input-group input-group-lg">
            <input
              type="text"
              name="comment"
              placeholder="Type your comment"
              className="input input-bordered w-full"
            />
            <span>
              <button type="submit">Comment</button>
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
