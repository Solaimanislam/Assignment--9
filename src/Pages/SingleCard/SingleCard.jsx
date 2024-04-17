import { CiLocationOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleCard = ({ cards }) => {
    const { estate_title, image_url, segment_name, location, status, id } = cards;
    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
            <figure><img className=" w-full lg:h-[300px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{estate_title}</h2>
                    <h4 className=" text-lg font-medium text-orange-500 border border-yellow-400 px-3 rounded-lg">{status}</h4>
                </div>
                <div className=" flex items-center gap-1 justify-between">
                    <div className=" flex items-center text-lg font-semibold gap-1 ">
                        <FaHome />
                        <p className="  text-green-400">{segment_name}</p>
                    </div>
                    <div className=" flex items-center text-lg font-semibold gap-1 ">
                        <CiLocationOn className=" text-red-700" />
                        <h4 className="  text-blue-400">{location}</h4>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link  
                    to={`/cards/${id}`}
                    ><button className="btn btn-outline btn-secondary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

SingleCard.propTypes = {
    cards: PropTypes.node
}