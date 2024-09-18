import { formatDate } from '../utils/utils'
export default function BlogCard({ blog, goToPost }) {
  console.log(blog)

  return (
    <li className="border-t mx-auto min-w-full border-gray-500 mb-5 prose dark:prose-invert flex flex-wrap gap-5">
      <div className="flex flex-col">
        <div
          onClick={() => goToPost(blog._id)}
          className="w-[315px] h-[215px] overflow-hidden cursor-pointer"
        >
          <img
            className="object-cover h-full w-full transition-transform duration-300 hover:scale-125"
            src={blog.cover_img}
          />
        </div>
        <p className="text-xs">{formatDate(blog.date)}</p>
      </div>
      <div className="flex flex-col">
        <h3 onClick={() => goToPost(blog._id)} className="mb-1 cursor-pointer">
          {blog.title}
        </h3>

        <span className="text-green-500 text-xs">{blog.tags.map((tag)=>tag + " ")}</span>
        <p className="mb-1">
          todo description in db
        </p>
        <p
          onClick={() => goToPost(blog._id)}
          className="text-green-500 cursor-pointer"
        >
          Read more...{' '}
        </p>
      </div>
    </li>
  )
}
