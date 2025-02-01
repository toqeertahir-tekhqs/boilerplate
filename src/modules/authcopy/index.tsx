import Button from "components/Buttons/Button";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Logging in with:", { email, password });
        // Call authentication API here
    };

    return (
        <div className="flex items-center justify-center h-[-webkit-fill-available]"
        >
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className=" flex justify-center items-center flex-col w-full">
                    <h2 className="text-2xl font-bold text-center mb-4">Login  Copy</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button title='Login'
                            onClick={handleLogin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
