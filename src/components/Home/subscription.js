// components/Newsletter.js
export default function Newsletter() {
    return (
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg flex items-center">
            <div className="flex-1 ml-4 p-4"> {/* Added padding for better spacing */}
                <h3 className="text-gray-600 mb-2">Stay Informed with ITFlare</h3>
                <h1 className="text-gray-800 text-xl font-bold mb-2">
                    Be the First to Discover the Latest Trends
                </h1>
                <p className="text-gray-600 mb-2">
                    Get exclusive updates on special offers, new technology insights, and upcoming events.
                </p>
            </div>
            <div className="flex flex-col items-start w-2/2 ml-4 p-6"> {/* Changed width to full for better alignment */}
                <div className="flex items-center w-full"> {/* Wrap input and button in a flex container */}
                    <input
                        type="email"
                        placeholder="enter email here"
                        className="p-2 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-gray-800 placeholder-gray-400 flex-1 " // Increased width to 80%
                    />
                    <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-600 hover:text-white transition duration-200 "> {/* Set button width to 20% */}
                        SUBSCRIBE NOW
                    </button>
                </div>
                <p className="text-gray-500 text-sm mt-2"> {/* Margin top for spacing */}
                    Join the ITFlare Community
                </p>
            </div>
        </div>

    );
}
