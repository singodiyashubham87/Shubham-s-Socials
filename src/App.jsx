import { useState } from "react";
import Button from "./components/Button.jsx";
import profile from "../src/assets/images/circleDP.png";

// react-icons
import {FaMoon, FaSun, FaDiscord, FaTelegram, FaGithub, FaLinkedin} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiDevpost, SiPeerlist } from "react-icons/si";

function App() {
  const [bgPosition, setBgPosition] = useState("left");

  // Dark Mode Toggle 
  const toggleMode = (theme) => {
    theme==="dark"?setBgPosition("left") : setBgPosition("right");
    document.querySelector("body").setAttribute("data-theme", theme);
  };


  return (
    <>
      <div className="parentContainer bg-bg-primary w-[100vw] min-h-[100vh] relative text-inter flex justify-center items-center border-2 border-white-700">
        {/* Theme  */}
        <div className="absolute top-[1rem] right-[1rem] bg-social-icons px-[0.5rem] py-[0.5rem] flex justify-center items-center rounded-[2rem] gap-[1rem] border-2 border-social-icons  msm:top-[1.5rem] msm:right-[1.5rem] md:top-[2rem] md:right-[2rem]">
          <div
            className={bgPosition==="left" ? `bg-theme-circle absolute left-0 h-full w-[50%] rounded-[2rem]`:`bg-theme-circle absolute right-0 h-full w-[50%] rounded-[2rem]`}
          ></div>
          <FaMoon
            className="text-black cursor-pointer z-[100]"
            onClick={() => toggleMode("dark")}
          />
          <FaSun
            className="cursor-pointer z-[100]"
            onClick={() => toggleMode("light")}
          />
        </div>

        {/* Main Contents  */}
        <div
          className={`content flex flex-col justify-center items-center gap-[2rem]  p-[1rem] gsm:py-[2rem]`}
        >
          <div className="intro flex flex-col justify-center items-center">
            <img
              src={profile}
              alt="profile"
              className="border-2 border-social-icons w-[7rem] rounded-[50%] mb-[0.5rem]"
            />
            <div className="name flex flex-col justify-center items-center">
              <h1 className="text-[2rem] font-semibold leading-[1.2] gsm:text-[3rem] text-social-icons">
                Shubham Singodiya
              </h1>
              <h2 className="text-[1.5rem] text-text-muted mb-[0.5rem] gsm:text-[2rem]">
                Full Stack Developer
              </h2>
            </div>
            <div className="socialLinks flex justify-center items-center gap-[2rem]">
              <a
                href="https://discordapp.com/users/967858699156729866"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-[2rem] cursor-pointer text-social-icons hover:text-theme-circle hover:scale-[1.2] ease-in duration-200" />
              </a>

              <a
                href="mailto:singodiyashubham87@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoGmail className="text-[2rem] cursor-pointer text-social-icons hover:text-theme-circle hover:scale-[1.2] ease-in duration-200" />
              </a>

              <a
                href="https://t.me/singodiyashubham87"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-[2rem] cursor-pointer text-social-icons hover:text-theme-circle hover:scale-[1.2] ease-in duration-200" />
              </a>
            </div>
          </div>

          <div className="links flex flex-col justify-center items-center gap-[1rem]">
            <a
              href="https://github.com/singodiyashubham87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                buttonText="Github"
                icon={
                  <FaGithub className="absolute left-[1.5rem] text-[2rem]" />
                }
              />
            </a>

            <a
              href="https://www.linkedin.com/in/singodiyashubham87/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                buttonText="LinkedIn"
                icon={
                  <FaLinkedin className="absolute left-[1.5rem] text-[2rem]" />
                }
              />
            </a>

            <a
              href="https://peerlist.io/shubham87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                buttonText="Peerlist"
                icon={
                  <SiPeerlist className="absolute left-[1.5rem] text-[2rem]" />
                }
              />
            </a>

            <a
              href="https://devpost.com/singodiyapeechuparashubham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                buttonText="Devpost"
                icon={
                  <SiDevpost className="absolute left-[1.5rem] text-[2rem]" />
                }
              />
            </a>
          </div>

          <div className="credit">
            <h3 className="text-text-muted text-[1.5rem] font-semibold">Radhe-Radhe!</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
