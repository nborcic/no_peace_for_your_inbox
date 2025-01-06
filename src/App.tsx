
import * as React from "react";
import "./index.css";
import styles from "./FireText.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShinyButton } from "./assets/ShinyButton";
import Input from '@mui/material/Input';
import axios from "axios";

const page = () => {
  const [visible, setVisible] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const [flipUp, setFlipUp] = useState(false);
  const [showNewDiv, setShowNewDiv] = useState(false); //false for begin
  const [flipUp2, setFlipUp2] = useState(false);
  const [email, setEmail] = useState("");

  const useEmailValidation = () => {
    const [goodEmail, setGoodEmail] = useState<string | undefined>(undefined);
    /**
         *   email validation
         * The Regex matches:
         * - One or more word characters (letters, digits, and underscores).
         * - Optionally followed by a dot or hyphen and one or more word characters.
         * - An '@' symbol.
         * - One or more word characters.
         * - Optionally followed by a dot or hyphen and one or more word characters.
         * - A dot.
         * - Two to three word characters (representing the domain suffix).
         */
    const eRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const validateEmail = (email: string) => {
      if (eRegex.test(email)) {
        setGoodEmail(email);
      } else {
        setGoodEmail(undefined);
      }
    };
    return { goodEmail, validateEmail };
  };
  const { goodEmail, validateEmail } = useEmailValidation();
  const handleSwitch = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
    setVisible((prev) => !prev);
  };
  const handleFlipUp = () => {
    setTimeout(() => {
      setFlipUp(true);
    }, 800);
    setFlipUp2(true);
    setTimeout(() => {
      setShowNewDiv(true);
    }, 800);
  };

  const handleSend = async () => {
    validateEmail(email);
    if (goodEmail) {
      try {
        const response = await axios.post("http://localhost:4040/subscribe", { email });
        console.log(response.data);
        setEmail("");
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    } else {
      console.log("Invalid email format");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-600">
      <div className="absolute top-0 right-0"><p>Sun/Moon</p></div>
      <div className={`rounded-md ${!animationPlayed ? "hover:scale-105 && hover:cursor-pointer && animate-pulse" : ""}
          ${showNewDiv ? " " : ""}`}>

        <AnimatePresence>
          {!flipUp && !showNewDiv && (


            <motion.div initial={{ y: 0 }}
              animate={flipUp2 ? { y: -1000 } : { y: 0 }}
              transition={{ duration: 0.5 }} >
              <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }} className="flex bg-white rounded-md p-2 max-w-6xl ">
                <motion.h1
                  className="text-2xl"
                  onClick={() => handleSwitch()}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.1 }}> She bombards me daily with notifications. She changes subjects instantly, leaving me dizzy. Sometimes we’re mid-discussion about movies, then she's ranting about her pet hamster’s new trick. My phone buzzes nonstop, each message frantic. Despite the mentioned  headaches, her boundless energy keeps me omnipresent in her circus. This is too much to handle.
                </motion.h1>
              </motion.div>

              {animationPlayed && (
                <>
                  <motion.div className={`text-2xl flex justify-center rounded-md bg-white items-center flex-col ${visible ? '' : 'hidden'}`}
                    initial={flipUp2 ? { opacity: 0, y: 1000 } : {}}
                    animate={flipUp2 ? { opacity: 1, y: 0 } : {}}
                    transition={flipUp2 ? { ease: "easeInOut", duration: 1.1 } : {}}
                  >

                    <motion.p
                      className="text-2xl flex justify-center items-center "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 1.1 }} > Is this your story? </motion.p>
                    <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 1.1, delay: 1.3 }} className="text-2xl flex justify-center items-center">Is this something you've seen before? </motion.p>
                    <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 1.1, delay: 2.9 }} className="text-2xl flex justify-center items-center">Or is it something you see every day? </motion.p>
                    <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 1.1, delay: 4.6 }} className="text-2xl flex justify-center items-center">Are you tired of it? </motion.p>
                    <motion.p initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 1.1, delay: 6.2 }} className="text-2xl flex justify-center items-center">You want to spice it up? </motion.p>

                    <div className="flex justify-center items-center">
                      <motion.p initial={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 1.1, delay: 7.8 }} className="text-4xl flex justify-center items-center font-Playwright HR "> With  a <br /></motion.p>
                      <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.1, delay: 7.8 }} className="text-4xl flex justify-center items-center font-Playwright HR "> With  a <br /></motion.p>
                      <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.1, delay: 7.8 }} className="text-4xl flex justify-center items-center"><br /> pR_@Nk? </motion.p>

                      <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.1, delay: 9.2 }} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', padding: '1.2rem' }}>
                        <motion.div
                          className={styles.fireText}
                          initial={{ scale: 0.8, opacity: 0.8 }}
                          animate={{
                            scale: [1, 1.25, 1],
                            rotate: [0, 2, -2, 0],
                            opacity: 1
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        >
                          <span className="inline-flex h-12 w-12">
                            Maybe?

                            <img src="/CrazyTwo.webp" alt="" />
                          </span>
                        </motion.div>

                      </motion.div>

                    </div>

                    <motion.div initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 1.1, delay: 10.2 }}

                      className="text-2xl p-4 pr-6 pl-6  flex justify-center items-center hover:scale-110">
                      <ShinyButton onClick={handleFlipUp}>Yes Please</ShinyButton>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
          {showNewDiv && (
            <motion.div

              initial={{ opacity: 0, y: -1000, backgroundColor: 'transparent' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="flex justify-center items-center flex-col rounded-md bg-white"
            >
              <div className="text-2xl flex-col p-4 pr-6 pl-6  flex justify-center items-center ">

                <h1 className="text-2xl underline">Check the settings below to make some damage</h1>
                <h1></h1>
                <fieldset className="font-1rem">
                  <h2 className="p-2">Select the magnitude of the damage:</h2>
                  <div>
                    <input type="radio" id="hu" name="drone" value="hu" defaultChecked />
                    <label htmlFor="hu"> Just a small scratch</label>
                  </div>
                  <div>
                    <input type="radio" id="de" name="drone" value="de" />
                    <label htmlFor="de"> A bit bigger scratch</label>
                  </div>
                  <div>
                    <input type="radio" id="lo" name="drone" value="lo" />
                    <label htmlFor="lo"> Quite a bit bigger scratch</label>
                  </div>
                </fieldset>

              </div>
              <div className="text-2xl p-4 pr-6 pl-6 flex-col pt-2 gap-2 flex justify-center items-center ">
                <Input style={{ width: '16em' }} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email to send some damage" />
                {!email &&
                  !goodEmail ? <p className="text-red-500 text-sm">Email format not good</p> : ""
                }
                <ShinyButton onClick={handleSend}>Make Damage</ShinyButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>



  )
}

export default page;
