import PostCard from './ui/PostCard'
import { useGetPostsQuery } from '../features/posts/postApiSlice'
import { useSelector } from 'react-redux'
export default function Content({ myPosts = false }) {
  const user = useSelector((state) => state.auth.user)
  const { data, isLoading, isError, error } = useGetPostsQuery()
  const posts = myPosts
    ? data?.posts.filter((post) => post.author === user.id)
    : data?.posts
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-4 mx-2 lg:py-14 lg:mx-14">
          <div className="grid justify-center lg:min-w-[1140px] md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-x-6 gap-y-4">
            {
              //single card
            }
            {posts.map((post) => {
              return <PostCard key={post._id} post={post} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
