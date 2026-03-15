import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkSections = [
        {
            title: "Company",
            links: ["Home", "Best Sellers", "Offers & Deals", "About Us", "FAQs", "Blogs", "Partners"]
        },
        {
            title: "Need Help?",
            links: ["Safety Information", "Cancellation Policy", "Return & Refund Policy", "Privacy Policy", "Payment Methods", "Terms of Service", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];
    return (
         <div className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32 invert opacity-80 p-2" src={assets.logo} alt="Quick Stay Logo" />
                    <p className="max-w-[410px] mt-6">Get the perfect blend of comfort and convenience for your stay. Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <Link to="/">QuickStay</Link> All Right Reserved.
            </p>
        </div>
    )
}

export default Footer