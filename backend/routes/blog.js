const express = require('express')
const {
    createBlogPost,
    getBlogPosts,
    getBlogPost,
    deleteBlogPost,
    updateBlogPost
} = require('../controllers/blogController')


const router = express.Router()

router.get('/', getBlogPosts)

router.get('/:id', getBlogPost)

router.post('/', createBlogPost)

router.delete('/:id', deleteBlogPost)

router.patch('/:id', updateBlogPost)


module.exports = router