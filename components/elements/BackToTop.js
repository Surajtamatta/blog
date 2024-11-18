import { useEffect, useState } from 'react';

const BackToTop = () => {
    // State to manage the visibility of the scroll-to-top button
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll event and update the visibility state
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true); // Show the button when scrolled down 200px
        } else {
            setIsVisible(false); // Hide the button when not scrolled down enough
        }
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Scroll smoothly to the top
        });
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    id="scrollUp"
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[2147483647] bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    <i className="fi-rr-arrow-small-up text-xl" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
