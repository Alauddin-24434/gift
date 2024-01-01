import { BsThreeDots } from "react-icons/bs";

const DashboardProfile = () => {
    // Sample data (replace with actual data from your application)
    const userProfile = {
        id: 74656456,
        accountType: 'Free',
        pendingInvitations: 3,
        connections: 20,
        visitors: 15,
    };

    return (
        <section>
            <div className="flex justify-between">
                <p className="text-2xl font-medium">Profile</p>
                <span>< BsThreeDots /></span>
               
            </div>
            <div className=" shadow-md p-6">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        className="w-24 h-24 object-cover rounded-full"
                        src="https://i.ibb.co/pRRpyXn/replicate-prediction-wto7yyrbiohn7vprzkrhtsakti-1.jpg"  // Replace with the actual path to the profile image
                        alt="Profile"
                    />
                </div>

                {/* User ID */}
                <p className="text-center text-gray-600 text-sm mt-2">Alauddin Mollik</p>
                <p className="text-center text-gray-600 text-sm mt-2">User ID: {userProfile.id}</p>

                <div className='flex justify-between my-4 items-center'>
                    {/* Account Type */}
                    <p className="text-center text-sm text-blue-500 font-semibold">{userProfile.accountType} Account</p>

                    {/* Upgrade Button */}

                    <button className="bg-white text-red-500 px-4 py-2 rounded-md">
                        Upgrade
                    </button>

                </div>

                {/* Stats */}
                <div className="flex justify-around mt-4">
                    <div className="flex items-center justify-center ">

                        <p className="text-sm">Pending Invitations </p>

                    </div>

                    <div className="flex  ">

                        <p className="text-sm">Connections</p>

                    </div>

                    <div className="flex items-center">

                        <p className="text-sm">Visitors</p>

                    </div>
                </div>
                {/* verifaction */}
                <div className="flex justify-around py-6 text-white">
                    <div className="flex items-center justify-center ">

                        <p className="text-sm bg-red-600 rounded-md px-2 py-1"><button>Verification</button></p>

                    </div>

                    <div className="flex  ">

                        <p className="text-sm bg-red-600 rounded-md px-2 py-1">Profile Details</p>

                    </div>

                    <div className="flex items-center">

                        <p className="text-sm bg-red-600 rounded-md px-2 py-1">Exclusive Services</p>

                    </div>
                </div>
                <div>
                    <p>Email</p>
                    <p>Mobile Number</p>
                    <p>Verify Id</p>
                </div>
            </div>
        </section>

    );
};

export default DashboardProfile;
