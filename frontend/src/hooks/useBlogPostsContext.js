import { BlogContext } from '../context/BlogContext'
import { useContext } from 'react'

export const useBlogPostsContext = () => {
    const context = useContext(BlogContext)

    if (!context) {
        throw Error('Error with useBlogPostContext')
    }

    return context
}