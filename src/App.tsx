import './index.css'
import './App.css'

const App = () => {
  return (
    <>
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hi, I'm Jason 👋🏼 </span>
      </a>
      <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a href="https://github.com/Jaysavvy" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">GitHub</a>
          </li>
          <li>
            <a href="#about-me" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Background</a>
          </li>
          <li>
            <a href="#my-projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sehwatz/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
          <li>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-1 mb- dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Resume</button>
        </li>
        </ul>
      </div>
    </div>
  </nav>

  <section className="sm:mt-5 lg:mt-7 mt-12 max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 pb-8">
    <div
    className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Crafting digital excellence:</span>
            <span className="block text-blue-500 xl:inline"> My Journey into Code</span>
        </h1>
        <p
            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          With a passion for crafting digital experiences, I bring to life innovative solutions and push the boundaries of what's possible. Explore my portfolio 
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
                <a href="#about-me"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                    Get started
                </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href=""
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Projects
                </a>
            </div>
        </div>
    </div>

    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.imgur.com/vz5f03M.png" alt=""></img>
    </div>
    </div>
  </section>

    <section id="about-me" className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">Here's a little bit about me!</h2>
            <p className="mb-4">I'm software engineer with a strong foundation in HTML, CSS, JavaScript, React, TypeScript, and a host of other technologies including Nest.JS, GraphQL, and Docker, I excel in crafting scalable solutions. Oh yeah, I haven't even touched on my experience in the cloud 😎</p>
        </div>
        <div
            className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Education</h3>
                        <p className="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a
                            project. See what other editors are doing and edit even a simple text together</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">History of Edits</h3>
                    <p className="mt-6 text-base text-gray-600">Go back and forth your history of changes and
                        restore your designs to any point in time</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Integrations</h3>
                        <p className="mt-6 text-base text-gray-600">Step up your designs and workflow with
                            integrations with your favorite tools such as mailchimp, slack, jira etc</p>
                    </div>
                    
                </div>
                
            </div>
            
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                
                </div>
            </div>
            <div className="mt-6 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
            <a href="#my-projects"
                    className=" px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    What've I been up to?
                </a>
            </div>
            </div>
  </section>

  <section id="my-projects" className=''>
  <h1 className=" text-center mb-1 mt-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Browse my  <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">recent projects </span>
  </h1>
  </section>

  <section className="bg-white ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Tutorial
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2"> My Universe: Dive into a Showcase of Innovative Projects!</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Take a journey through my diverse portfolio, each project tells a unique story of problem-solving, creativity, and a commitment to excellence. Let the code speak for itself.</p>
            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                    </svg>
                    Design
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                    </svg>
                    Code
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  </section>


  <footer className=" bg-white  shadow m-4 dark:bg-gray-800">
    <div className=" text-center p-4 md:items-center md:justify-between">
      <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400"> © 2023 by 
      <a href="#" className="text-center hover:underline"> Jason Love™</a>. All Rights Reserved.
    </span>
    </div>
  </footer>


  </>
  )
  }

export default App
