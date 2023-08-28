import { useEffect } from 'react'
import { useBlogPostsContext } from '../hooks/useBlogPostsContext'
import BlogPostDetails from '../components/BlogPostDetails'
import BlogPostForm from '../components/BlogPostForm'

const Home = () => {
    const [blogPost, dispatch] = useBlogPostsContext()
    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch('/api/blog')
            const json = await response.json()
            
            if(response.ok) {
                dispatch({type:'SET_BLOG_POSTS', payload: json})
            }
        }
        fetchBlogPosts()
    }, [])

    return (
        <div className="home">
            <div className="blogPosts">
                {blogPost && blogPost.map((blog) => (
                    <BlogPostDetails key = {blog._id} blog={blog}/>
                ))}
            </div>
            <BlogPostForm/>
        </div>
    )
}
export default Home