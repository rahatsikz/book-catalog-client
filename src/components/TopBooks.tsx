export default function TopBooks() {
  const bookNames = [
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "The Lord of the Rings",
    "Harry Potter and the Sorcerer's Stone",
    "The Catcher in the Rye",
    "Moby-Dick",
    "The Chronicles of Narnia",
    "The Da Vinci Code",
  ];

  return (
    <div className="container mx-auto my-12">
      <p className="text-center text-xl font-semibold underline text-cyan-600 underline-offset-8 uppercase">
        Here are the latest top books
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        {bookNames.map((book, idx) => (
          <p key={idx} className="text-lg font-semibold">
            {book}
          </p>
        ))}
      </div>
    </div>
  );
}
