
const Hero = () => {
    return (
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
    )
}

export default Hero