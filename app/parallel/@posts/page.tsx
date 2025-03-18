import { delay } from "@/utils/delay";


const PostsPage = async() => {
    await delay(5000);
    throw new Error();

    return (
        <>
        <section className="bg-green-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Our Dynamic Section
          </h2>
          <p className="text-lg text-gray-300 mb-6">
          Dynamic Content
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
          >
            Get Started
          </a>
        </div>
      </section>
          
        </>
    );
};

export default PostsPage;