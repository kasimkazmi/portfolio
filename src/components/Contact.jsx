/* eslint-disable react/jsx-no-comment-textnodes */
export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#071121] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/lajkzppb"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-pink-600 border-b-4 text-gray-300">
            Contact
          </p>
          <p className=" py-4 text-gray-300">
            // Submit form below or shoot me an email -
            <span className="font-medium">rajakazmi47@gmail.com</span>
          </p>
        </div>
        <input
          className=" p-2  outline-none bg-slate-300"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className=" p-2 outline-none bg-slate-300 my-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          placeholder="Message"
          className="p-2  outline-none bg-slate-300"
          name="message"
          rows={10}
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-500 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-4">
          Let's Collborate
        </button>
      </form>
    </div>
  );
}
