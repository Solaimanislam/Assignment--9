import { CiLocationOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const SingleCard = ({ cards }) => {
    const { estate_title, image_url, segment_name, location, status } = cards;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className=" w-full lg:h-[300px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
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
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;