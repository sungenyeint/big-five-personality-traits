
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-myanmar-maroon py-8 px-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold">Myanmar Personality Compass</span>
                        </Link>
                        <p className="text-sm mt-2 text-gray-500 max-w-md">
                            Discover your personality traits with our culturally adapted Big Five personality test for Myanmar.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div className="mb-6 md:mb-0">
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

                        <div className="mb-6 md:mb-0">
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

                        <div className="mb-6 md:mb-0">
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
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Myanmar Personality Compass. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 mt-4 md:mt-0 flex items-center">
                        Made with for Myanmar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
