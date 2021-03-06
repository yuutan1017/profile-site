import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header>
      <nav className="w-screen">
        <div className="flex items-center h-14 sm:px-10 sm:ml-auto py-6 text-slate-900">
          <div className="flex items-center ml-4">
            <Image
              src="/image/YLogIcon.png"
              alt="icon"
              width={45}
              height={45}
            />
            <Link href="/" passHref>
              <a className="text-2xl font-bold my-2 md:ml-2">YLog</a>
            </Link>
          </div>
          <div className="ml-auto md:space-x-3 sm:inline-block hidden">
            <Link href="/" passHref>
              <motion.button
                className="py-2 md:px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Home
              </motion.button>
            </Link>
            <Link href="/skills-page" passHref>
              <motion.button
                className="py-2 px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Skills
              </motion.button>
            </Link>
            <Link href="/portfolio-page" passHref>
              <motion.button
                className="py-2 md:px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Portfolio
              </motion.button>
            </Link>
            <Link href="/contact-page" passHref>
              <motion.button
                className="py-2 px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
