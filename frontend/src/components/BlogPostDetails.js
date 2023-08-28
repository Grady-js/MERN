const BlogPostDetails = ({ blog }) => {
    return (
        <div className="blog-post-details">
            <h4>{blog.title}</h4>
            <p>{blog.body}</p>
            <p>{blog.createdAt}</p>
        </div>
    )
}
export default BlogPostDetails