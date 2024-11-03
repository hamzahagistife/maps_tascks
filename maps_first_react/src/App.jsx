import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <form
          className=" truncate relative bg-background border-r-15 w-[70%] h-[100%] flex justify-center align-center"
          action=""
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className=" absolute top-[-150px] left-[-100px] rounded-[40px] rotate-[45deg] w-[320px] h-[320px] bg-secoundly "
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="bg-white px-[61px] py-[30px] rounded-[32px] mx-auto my-20 w-400 flex flex-col items-center"
          >
            <h1 className="text-3xl font-Karla:ital font-bold text-center font-[700 ] mb-[11px]  text-[36px]">
              Create An Account
            </h1>
            <p className="text-center mb-[32px]">
              Create an account to enjoy all the services <br />
              without any ads for free!
            </p>
            <input
              className=" p-[22px] w-[375px] h-[55px] rounded-[10px] my-[15px]"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              className="p-[22px] w-[375px] h-[55px] text-[14px] rounded-[10px] mb-[11px]"
              type="password"
              name="pass"
              placeholder="password"
              required
            />
            <button
              className="bg-background p-3 w-[255px] text-white
             text-[22px] mb-[11px] px-[48px] py-[15px] rounded-[32px]"
            >
              Create Account
            </button>
            <p className="">Already Have An Account? Sign In</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className=" absolute bottom-[-150px] right-[-100px] rounded-[40px] rotate-[45deg] w-[320px] h-[320px] bg-secoundly "
          ></motion.div>
        </form>
      </div>
    </>
  );
}

export default App;
