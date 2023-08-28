const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

const getBlogPosts = async (req, res) => {
    const blogPosts = await Blog.find({}).sort({createdAt: -1})

    res.status(200).json(blogPosts)
}

const getBlogPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such blog post'})
    }

    const blog = await Blog.findById(id)

    if (!blog) {
        return res.status(404).json({error: 'No such blog post'})
    }

    res.status(200).json(blog)
}

const createBlogPost = async (req, res) => {
    const {title, body} = req.body

    try {
        const blog = await Blog.create({title, body})
        res.status(200).json(blog)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

const deleteBlogPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such blog post'})
    }

    const blog = await Blog.findOneAndDelete({_id: id})

    if (!blog) {
        return res.status(404).json({error: 'No such blog post'})
    }

    res.status(200).json(blog)
}

const updateBlogPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such blog post'})
    }

    const blog = await Blog.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if (!blog) {
        return res.status(404).json({error: 'No such blog post'})
    }

    res.status(200).json(blog)
}

module.exports = {
    createBlogPost,
    getBlogPosts,
    getBlogPost,
    deleteBlogPost,
    updateBlogPost
}