import { CiLocationOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import PropTypes from 'prop-types';



const Blog = ({ blogs }) => {
    const { title, image_url, category, location, author, description } = blogs;
    console.log(blogs);
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
            <figure><img className=" w-full lg:h-[300px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{title}</h2>

                </div>
                <p className=" lg:text-xl font-bold text-sky-800"><span className=" text-yellow-800 ">Description: </span> {description}</p>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">
                        <FaHome />
                        <p className="  text-green-400">{author}</p>
                    </div>
                    <div className=" text-lg font-semibold ">
                        
                        <h4 className=" text-purple-500"><span className="text-lg text-black">Category: </span>{category}</h4>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">
                        <CiLocationOn className=" text-red-700" />
                        <h4 className="  text-blue-400">{location}</h4>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blogs: PropTypes.node
}