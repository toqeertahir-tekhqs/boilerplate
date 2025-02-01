import Button from "components/Buttons/Button";

const Forget = () => {

    const handleForget = () => {
        console.log("Logging in with:", {});
        // Call authentication API here
    };

    return (
        <div className="flex items-center justify-center h-[-webkit-fill-available]">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className=" flex justify-between items-center flex-col w-full gap-3">
                    <h2 className="text-2xl font-bold text-center">Forget Copy</h2>

                    <div className="">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button title='Forget'
                            onClick={handleForget}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;
