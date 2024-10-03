// components/Shared/Layout.js
import Navbar from './Navbar'; // Adjust the path as necessary
import Footer from './Footer'; // Adjust the path as necessary

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout; // Ensure this is a default export
