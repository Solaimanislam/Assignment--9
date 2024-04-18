import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Slider from "../../Shared/slider/Slider";
import SingleCard from "../SingleCard/SingleCard";
import Footer from "../Footer/Footer";
import { TabTitle } from "../../utils/Gtitle";
import Service from "../Services/Service";
import 'animate.css';
import About from "../About/About";


const Home = () => {
    TabTitle('Home');
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div className=" p-3">
            <Navbar></Navbar>
            <Slider></Slider>
            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-blue-400">The Largest Residential Area</h2>
                <p className=" text-base lg:text-xl font-medium">The Largest Residential Area, also known simply as TLRA, is a sprawling suburban community located just outside the bustling city center. With its vast expanse of neatly arranged streets and housing complexes, TLRA is home to thousands of families seeking a peaceful yet convenient lifestyle.</p>
            </div>
            {/* card section */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7 lg:my-10" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                {
                    cards.map(card => <SingleCard
                        key={card.id}
                        cards={card}
                    ></SingleCard>)
                }
            </div>
            {/* service section */}
            <div className=" text-center mx-auto mt-6 mb-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-purple-500 " data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">Our Services</h2>
                <p className=" text-base lg:text-xl font-medium">Each service should be described in detail, emphasizing the value it brings to your clients and how it sets your residential home agency apart from competitors. Including testimonials or case studies can also help demonstrate your expertise and the positive outcomes you have achieved for your clients.</p>
            </div>
            <Service></Service>
            {/* About us */}

            <div className=" text-center mx-auto mt-6 lg:mt-12">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-4 text-orange-800 " data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">About US</h2>
                <p className=" text-base lg:text-xl font-medium" data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">What Our Customers Say About Us</p>
            </div>
            <About></About>


            <Footer></Footer>
        </div>

    );
};

export default Home;