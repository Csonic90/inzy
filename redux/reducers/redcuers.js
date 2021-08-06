import { combineReducers } from 'redux';

import { allRoomsReducer, roomDetailsReducer, newReviewReducer, checkReviewReducer, newRoomReducer, roomReducer, roomReviewsReducer, reviewReducer } from './roomReducers'

import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

import { checkBookingReducer, bookedDatesReducer, bookingsReducer, bookingDetailsReducer, bookingReducer } from './bookingReducers'

import { allFlatReducer, myFlatsReducer } from './flatReducers'

import { allBlogReducer, blogDetailsReducer, blogReducer, newBlogReducer } from './blogReducers'

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    newRoom: newRoomReducer,
    roomDetails: roomDetailsReducer,
    room: roomReducer,
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    checkBooking: checkBookingReducer,
    bookedDates: bookedDatesReducer,
    bookings: bookingsReducer,
    booking: bookingReducer,
    bookingDetails: bookingDetailsReducer,
    newReview: newReviewReducer,
    checkReview: checkReviewReducer,
    roomReviews: roomReviewsReducer,
    review: reviewReducer,
    flats: allFlatReducer,
    myflats: myFlatsReducer,
    blogs: allBlogReducer,
    blogDetails: blogDetailsReducer,
    newBlog: newBlogReducer,
    blog: blogReducer
})

export default reducer