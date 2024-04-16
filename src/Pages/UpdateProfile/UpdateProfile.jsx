

import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { TabTitle } from '../../utils/Gtitle';

const UpdateProfile = () => {
    TabTitle('Update Profile');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        
        console.log(name, image);

        createUser( name, image)
        .then(result => {
            updateUserProfile(name, image)
            .then(() => {
                toast.success('User updated Successfully');
            })
            console.log(result.user)
            // setSuccess('User Created Successfully');
            toast.success('User Created Successfully');
        })
        .catch(error => {
            console.error(error);
            // setRegisterError(error.message);
            toast.warn('Email-already-in-use');
        })

    }



    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                <div className="hero-content w-full flex-col">
                    <div className="text-center ">
                        <h1 className="text-3xl lg:text-5xl font-bold">Update Your Profile</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photoURL" name="image" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                       

                    </div>
                </div>
            </div>
        </div>
    );
};


export default UpdateProfile;