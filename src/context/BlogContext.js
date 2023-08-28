import { createContext, useReducer } from "react";

export const BlogContext = createContext()

export const blogPostsReducer = (state, action) => {
    switch (action) {
        case 'SET_BLOG_POSTS':
            return {
                blogPosts: action.payload
            }
        case 'CREATE_BLOG_POSTS':
            return {
                blogPosts: [action.payload, ...state.blogPosts]
            }
            default:
                return state
    }
}

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogPostsReducer, {
        blogPosts: null
    })

    

    return (
        <BlogContext.Provider value = {{...state, dispatch}}>
            { children }
        </BlogContext.Provider>
    )
}