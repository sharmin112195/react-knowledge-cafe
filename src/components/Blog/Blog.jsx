
import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover,author, author_img, reading_time, posted_date, hashtags, id} = blog
    return (
        <div className="mb-20 space-y-4">
            <img className="rounded-lg w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4 ">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl"><CiBookmark></CiBookmark></button>
                </div>
            </div>
           <h2 className="text-3xl md:justify-start md:flex">{title}</h2> 
           <p className="md:flex md:justify-start">
            {
                hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>
           <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-800 font-bold underline md:flex md:justify-start">Mark As Read</button>
        </div>
    );
};
Blog . propTypes = {
    blog : PropTypes . object . isRequired,
    handleAddToBookmark : PropTypes . func . isRequired,
    handleMarkAsRead : PropTypes . func . isRequired
}

export default Blog;