import { useState } from "react";
import Button from "./components/Button.jsx";
import profile from "../src/assets/images/circleDP.png";

// react-icons
import {
  FaMoon,
  FaSun,
  FaDiscord,
  FaTelegram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiDevpost, SiPeerlist } from "react-icons/si";

function App() {

  const [bgPosition, setPosition] = useState("left");
  const [bgColor, setBgColor] = useState("white");

  const toggleMode = (pos,color) => {
    setPosition(pos);
    setBgColor(color);
  };

  return (
    <>
      <div className="parentContainer w-[100vw] h-[100vh] relative text-inter flex justify-center items-center border-2 border-white-700">

        {/* Theme  */}
        <div className="absolute top-[2rem] right-[2rem] bg-[#D9D9D9CC] px-[0.5rem] py-[0.5rem] flex justify-center items-center rounded-[2rem] gap-[1rem] border-2 border-gray-700">
          <div className={`bg-${bgColor} absolute ${bgPosition}-0 h-full w-[50%] rounded-[2rem]`}></div>
          <FaMoon className="text-black cursor-pointer z-[100]" onClick={()=>toggleMode("left","white")}/>
          <FaSun className="cursor-pointer z-[100]" onClick={()=>toggleMode("right","black")} />
        </div>

        {/* Main Contents  */}
        <div className="content bg-[#242424] flex flex-col justify-center items-center gap-[2rem] p-[1rem] border-2 border-white rounded-[0.625rem] backdrop-blur-[40px] shadow-md shadow-[#736464]">
          <div className="intro flex flex-col justify-center items-center">
            <img
              src={profile}
              alt="profile"
              className="border-2 border-[#00000099] w-[7rem] rounded-[50%] mb-[0.5rem]"
            />
            <div className="name flex flex-col justify-center items-center">
              <h1 className="text-[3rem] font-semibold leading-[1.2]">
                Shubham Singodiya
              </h1>
              <h2 className="text-[2rem] text-[#FFFFFF99] mb-[0.5rem]">
                Full Stack Developer
              </h2>
            </div>
            <div className="socialLinks flex justify-center items-center gap-[2rem]">
              <a
                href="https://discordapp.com/users/967858699156729866"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-[2rem] cursor-pointer text-[#D9D9D9CC] hover:text-white hover:scale-[1.2] ease-in duration-200" />
              </a>

              <a
                href="mailto:singodiyashubham87@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoGmail className="text-[2rem] cursor-pointer text-[#D9D9D9CC] hover:text-white hover:scale-[1.2] ease-in duration-200" />
              </a>

              <a
                href="https://t.me/singodiyashubham87"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-[2rem] cursor-pointer text-[#D9D9D9CC] hover:text-white hover:scale-[1.2] ease-in duration-200" />
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
            <h3 className="text-[#FFFFFFCC] text-[1.5rem]">{`Made with <3 by Shubham Singodiya`}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
