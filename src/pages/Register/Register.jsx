
import { FaGoogle, FaEnvelope, FaUser, FaLock, FaImage } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/register_animation.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser} = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    // Pass validation 
    const regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regEx.test(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Password',
        })
        return;

    }
    const photoUrl = formData.get("photoUrl");
    console.log(name, email, password, photoUrl);

    createUser(email, password)
    .then(result => {
        console.log(result.user);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User Registered Successfully',
        })
    })
    .catch(error => {
        console.log(error.message);
    })

  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center p-4 mt-20">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <Lottie
            options={defaultOptions}
            height={300}
            width="100%"
            style={{ maxWidth: "400px" }}
          />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FaGoogle className="text-red-500" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
