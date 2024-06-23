import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsLinkedin, BsGithub,BsDribbble} from 'react-icons/bs';
import { AiOutlineGithub } from "react-icons/ai";

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="m-t">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Das's
              </span>
              Blog
            </Link>
          </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://durgadasdhoke.github.io/portfolio/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Projects
                  </Footer.Link>
                  <Footer.Link href="/" rel="noopener noreferrer">
                    Go to Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Follow me" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.linkedin.com/in/dasdhoke/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/durgadasdhoke
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider/>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright year={new Date().getFullYear()} href="#" by="Das'sBlog" />
          <div className="flex flex-row gap-6 mt-4 sm:mt-0  sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsLinkedin}/>
            <Footer.Icon href="#" icon={BsGithub}/>
            <Footer.Icon href="#" icon={BsDribbble}/>
          </div>
          </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
