import { useState } from "react"

const BlogPostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blog = { title, body }

        const response = await fetch('/api/blog', {
            method: 'POST',
            body : JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setBody('')
            setError(null)
            console.log('new post added', json)
        }
    }

    return (
        <form  className="create" onSubmit={handleSubmit()}>
            <h3>Add a New Post</h3>

            <label >Post Title:</label>
            <input 
            type="text" 
            onChange={(e) =>setTitle(e.target.value)}
            value={title}
            />

            <label >Post Body:</label>
            <input 
            type="text" 
            onChange={(e) =>setBody(e.target.value)}
            value={body}
            />

            <button>Add Post</button>
            {error && <div class = "error">{error}</div>}
        </form>
    )
}

export default BlogPostForm