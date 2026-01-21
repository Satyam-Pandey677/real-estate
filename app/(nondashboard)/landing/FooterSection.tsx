"use client"

import {motion} from "framer-motion"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"
import Link from "next/link";

const FooterSection = () => {
  return <div className=" relative w-full py-24">
    <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className="text-center"
    >

        <h1 className="text-2xl font-bold">BASECLUB</h1>

        <div className="flex justify-between max-w-88 mx-auto pt-5 font-bold">
            <Link
                href="/about-us"
            >
                About Us
            </Link>
            <Link
                href="/contact-us"
            >
                Contact Us
            </Link>
            <Link
                href="/faq"
            >
                FAQ
            </Link>
            <Link
                href="/terms"
            >
                Terms
            </Link>
            <Link
                href="/privacy"
            >
                Privacy
            </Link>
        </div>
        <div className="flex justify-between max-w-40 mx-auto pt-5 text-2xl">
            <Link
                href="/about-us"
            >
                <FaFacebook/>
            </Link>
            <Link
                href="/contact-us"
            >
                <FaInstagram/>
            </Link>
            <Link
                href="/faq"
            >
                <FaTwitter/>
            </Link>
            <Link
                href="/terms"
            >
                <FaLinkedin/>
            </Link>
            <Link
                href="/privacy"
            >
                <FaYoutube/>    
            </Link>
        </div>
        <div className="flex justify-between max-w-125 mt-10 mx-auto pt-5">
            <p>©BASEclub.All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Cookie Policy</p>
        </div>

    </motion.div>
  </div>;
};

export default FooterSection;
