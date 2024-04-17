import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { TabTitle } from "../../utils/Gtitle";
import Blog from "../Blog/Blog";
// import Blog from "./Blog";
import 'animate.css';
import Footer from "../Footer/Footer";


const Blogs = () => {
    TabTitle('Blogs');
    const blogs = useLoaderData();
    // console.log(blogs);
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ph7NLBD/blog7.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center  text-neutral-content">
                    <div className=" p-2">
                        <h1 className="mb-5 text-3xl lg:text-5xl text-amber-600 font-bold animate__animated animate__zoomInDown">Welcome to my Blog Page</h1>
                        <p className="mb-5 text-xl text-blue-200 animate__animated animate__bounceInLeft ">In the realm of Dream Dwellings, we unlock the secrets to transforming houses into havens and properties into paradises. With a blend of inspiration and practicality, our blog invites you to embark on a journey of discovery, where every article is a key to unlocking the potential of your living space. From ingenious design hacks to savvy home-buying tips, we cater to your every residential need. Whether you are a first-time buyer, a seasoned homeowner, or simply seeking fresh ideas for your living environment, Dream Dwellings offers a treasure trove of insights, advice, and inspiration.</p>

                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-7 lg:my-10 p-2" >
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blogs={blog}
                    ></Blog>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;