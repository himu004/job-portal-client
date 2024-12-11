import { useState } from 'react';
import { FaGoogle, FaEnvelope, FaUser, FaLock, FaImage } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/register_animation.json';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const handleGoogleSignIn = () => {
        // Handle Google Sign-In
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                    <Lottie 
                        options={defaultOptions} 
                        height={300} 
                        width="100%" 
                        style={{ maxWidth: '400px' }}
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Full Name"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="email" 
                                placeholder="Email Address"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Photo URL"
                                value={photoUrl} 
                                onChange={(e) => setPhotoUrl(e.target.value)} 
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