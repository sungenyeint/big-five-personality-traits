import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-myanmar-maroon py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
                    <div className="flex-1 mb-6 md:mb-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold">Myanmar Personality Compass</span>
                        </Link>
                        <p className="text-sm mt-2 text-gray-500 max-w-md">
                            Discover your personality traits with our culturally adapted Big Five personality test for Myanmar.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/test" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Take the Test
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Learn More</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Big Five Traits
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Research
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="mailto:info@myanmarpersonality.com" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Email Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Myanmar Personality Compass. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                        Made with
                        <span className="text-red-500 mx-1" aria-label="love" role="img">♥</span>
                        for Myanmar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
