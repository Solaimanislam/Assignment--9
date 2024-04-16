import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

import Footer from "../Footer/Footer";
import { FaHome } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";



const Property = () => {
    const cards = useLoaderData();


    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);
    // console.log(card);

    return (
        <div className=" p-3">
            <Navbar></Navbar>
            <div className="card bg-base-100 shadow-xl mb-6">
                <figure data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"><img className=" lg:w-1/2 rounded-xl lg:h-[450px]" src={card.image_url} alt="Shoes" /></figure>
                <div className="card-body" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="flex items-center justify-between">
                        <h2 className="lg:text-xl font-bold text-orange-500"><span className=" lg:text-2xl font-bold text-black">Property Name:</span> {card.estate_title}</h2>
                        <h4 className=" lg:text-lg font-medium text-orange-500 border border-yellow-400 px-3 rounded-lg">{card.status}</h4>
                    </div>

                    <p className=" lg:text-xl font-bold text-sky-800"><span className=" text-yellow-800 ">Description: </span> {card.description}</p>
                    <div className=" lg:flex items-center gap-4 justify-between">
                        <div className=" flex items-center lg:text-lg font-semibold gap-3 ">
                            <FaHome />
                            <p className="  text-green-400"><span className=" text-black font-bold">Segment Name: </span> {card.segment_name}</p>
                        </div>
                        <div className=" flex items-center lg:text-lg font-semibold gap-3 ">
                            <CiLocationOn className=" text-red-700" />
                            <h4 className="  text-blue-400"><span className=" text-black font-bold">Location: </span> {card.location}</h4>
                        </div>
                    </div>
                    <div className=" lg:flex items-center gap-4 justify-between">
                        <div className=" flex items-center lg:text-lg font-semibold gap-3 ">

                            <p className="  text-green-400"><span className=" text-black font-bold">Price: </span> {card.price}</p>
                        </div>
                        <div className=" flex items-center text-lg font-semibold gap-3 ">

                            <h4 className="  text-blue-400"><span className=" text-black font-bold">Area: </span>{card.area}</h4>
                        </div>
                    </div>
                    <div className=" mx-auto text-start text-lg font-medium text-green-500">
                        <span className=" text-black font-bold">Facilities: </span>
                        {
                            card.facilities.map((item) => (
                                <li key={item.id}>{item}</li>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Property;