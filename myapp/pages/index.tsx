// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">pages/index.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
// import { Head, Main } from "next/document";
// import { FaHtml5 } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
    <Head>
<title>NErmin Memmedova</title>

    </Head>
   <main className="px-6">
   <header className="flex justify-between items-center py-2 me-36">
     <div className=" flex justify-between items-center gap-6">
    {/* <Image className=" drop-shadow-custom "  width={200} height={200} src="/png/Nm.png" alt="logo"/> */}
    </div>
     <nav >
       <ul className="flex text-2xl gap-6 text-white">
       <li>About me</li>
       <li>Portfolio</li>
       <li>Resume</li>
      <li>Skills</li>
       <li>Contact</li>
      </ul>
 </nav>
   </header>
   <section className="flex mt-20">
    <div className="text-white w-1/2 ">
      <h1 className=" drop-shadow-custom">I am a web developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Maiores omnis sed, eius rerum quia laboriosam deserunt, 
         praesentium veniam totam possimus quae accusantium unde 

         iusto incidunt nostrum minima commodi natus. Ducimus quis, 
         blanditiis corporis quaerat aspernatur delectus cum,
         eveniet corrupti alias sed aperiam quod pariatur id veritatis
          explicabo facilis modi quos.</p>
          <div className="flex gap-6 items-center">
            <button className="rounded-xl px-3 py-2 mt-10 bg-purplemain">Download Cv</button>
            {/* <div>in</div>
            <div>git</div>
            <div>up</div>
            <div>fiv</div> */}
          </div>
    </div>
    <div className="w-1/2 flex items-center justify-center">
    <div className="w-[200px] h-[200px]  shadow-shadowCustom rounded-full sh bg-black">
<Image width={200} height={200} src="" alt="image"></Image>
    </div>
    </div>
   </section>
   <section className="  mt-44">
    <div className="flex text-white justify-around">
    <div className="flex gap-2 items-center ">
      <p className="text-6xl">2</p>
    <p className="text-2xl">Years of <br/> Experience</p>
    </div>
  
    <div  className="flex  items-center "> 
      <p  className="text-6xl">10+</p>
    <p  className=" text-2xl" >Project</p></div>
    {/* <div  className="flex items-center "> 
      <p  className="text-6xl">60k+</p>
    <p  className=" text-2xl">Lines of <br/> Code</p></div> */}
    <div  className="flex items-center ">
       <p className="text-6xl gap-2">100%</p>
    <p className=" text-2xl" > Satisfaction<br/> Guarante</p></div>
    </div>
   </section>
   <section className=" mt-44 bg-red-500">
    <div className="text-white text-center">
      <h1 className="">My Projects</h1>
      <p>Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Quos, sed expedita! Quasi vitae porro nobis aliquam doloribus animi? 
        Rem ab consequatur, quasi sunt
         molestias temporibus laboriosam alias delectus voluptatum omnis.</p>
         <div className="flex gap-10   justify-around">
         <div className="w-1/2 h-[400px] bg-slate-200"></div>
         <div  className="w-1/2 h-[400px] bg-slate-200" ></div>
         </div>
    </div>
   </section>
   {/* <section className="mt-40 text-white bg-amber-700">
    <h1 className="text-center">experience and education</h1>
   </section> */}
   <section className=" bg-orange-500 mt-40 text-white">
    <div className=" bg-zinc-500 ">
    <h1 className=" text-center">My Skills</h1>
    <div className="flex flex-wrap justify-around">
    <div>
    {/* <FaHtml5 /> */}
      Html</div>
    <div>CSS</div>
    <div>Javascript</div>
    <div>TypeScript</div>
    <div>React</div>
    <div>Next.js</div>
    <div>Tailwind css</div>
    <div>Github</div>
    <div>Git</div>
    <div>Trello</div>
    </div>
    </div>
   </section>
   <section>
    <div className=" bg-orange-200 flex">
    <div >in</div>
            <div>git</div>
            <div>up</div>
            <div>fiv</div>
    </div>
    <div>
      <p>Contact Me</p>
      <form action="">
        <input type="text"  placeholder="First name"/>
        <input type="text" placeholder="last name" />

        <input type="email" placeholder="Email address" />

        <input type="phone" placeholder="Phone Number" />

<textarea  name="" id=""></textarea>
<button>Send Message</button>
      </form>
    </div>
   </section>
    </main>
    <footer>
      <small>Created by Nermin Memmedova</small>
    </footer>

  {/* // <Main></Main> */}
  </>
  );
}
