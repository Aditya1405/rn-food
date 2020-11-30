import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer BX8-0sYkOO21QS8Y7xErdSBvE0l_3DMfb3ILvLiGVp7Zu9RwGHqVYgs0zQ58pP18jPvFPqXfmI0po5wdDFYWWSv5QC6fF121_ECmZo7fLJGa6mW6FoucgKWp-lC_X3Yx',
    }
})
/**
 * that is the base url
 * for search specific
 *  https://api.yelp.com/v3/businesses/search
 * for id specific
 *  https://api.yelp.com/v3/businesses/{id}
 * 
 * so in future if we e
 * yelp.get('/search')
 */