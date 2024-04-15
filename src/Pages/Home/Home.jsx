import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Slider from "../../Shared/slider/Slider";
import SingleCard from "../SingleCard/SingleCard";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <div className=" text-center mx-auto lg:mt-12">
                <h2 className=" text-5xl font-bold mb-4 text-blue-400">The Largest Residential Area</h2>
                <p className=" text-xl font-medium">The Largest Residential Area, also known simply as TLRA, is a sprawling suburban community located just outside the bustling city center. With its vast expanse of neatly arranged streets and housing complexes, TLRA is home to thousands of families seeking a peaceful yet convenient lifestyle.</p>
            </div>
            {/* card section */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-10">
                {
                    cards.map(card => <SingleCard
                        key={card.id}
                        cards={card}
                        ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;