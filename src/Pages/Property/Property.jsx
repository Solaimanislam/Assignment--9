import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";



const Property = () => {

    const {id} = useParams();

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">This is my Property pages</h2>
            <p>{id}</p>
        </div>
    );
};

export default Property;