import Blog from '../models/blog'
import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'
const allBlogs = catchAsyncErrors(async (req, res) => {
    const resPerPage = 3;
    const blogsCount = await Blog.countDocuments();
    const apiFeatures = new APIFeatures(Blog.find().sort({"createdAt":-1}), req.query)
        .search()
        .filter()
    let blogs = await apiFeatures.query;
    let filteredBlogsCount = blogs.length;
    apiFeatures.pagination(resPerPage)
    blogs = await apiFeatures.query;
    if (!blogs) {
        return next(new ErrorHandler('bład', 400));
    }
    res.status(200).json({
        success: true,
        blogsCount,
        resPerPage,
        filteredBlogsCount,
        blogs
    })
})
const getSingleBlog = catchAsyncErrors(async (req, res, next) => {
    const blog = await Blog.findById(req.query.id);
    if (!blog) {
        return next(new ErrorHandler('Nie znaleziono Blogu z tym ID ', 404))
    }
    res.status(200).json({
        success: true,
        blog
    })
})
const allAdminBlogs = catchAsyncErrors(async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json({
        success: true,
        blogs
    })
})
const newBlog = catchAsyncErrors(async (req, res) => {
    req.body.user = req.user._id

    const blog = await Blog.create(req.body);

    res.status(200).json({
        success: true,
        blog
    })
})
const updateBlog = catchAsyncErrors(async (req, res) => {
    let blog = await Blog.findById(req.query.id);
    if (!blog) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }
    blog = await Blog.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        blog
    })
})
const deleteBlog = catchAsyncErrors(async (req, res) => {
    const blog = await Blog.findById(req.query.id);
    if (!blog) {
        return next(new ErrorHandler('Nie ma blogu z tym ID do usunięcia', 404))
    }
    await blog.remove();
    res.status(200).json({
        success: true,
        message: 'Artykuł usunięty.'
    })
})
export {
    allBlogs,
    getSingleBlog,
    allAdminBlogs,
    newBlog,
    updateBlog,
    deleteBlog
}