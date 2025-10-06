const Hero = () => {
  return (
    <div className="lg:max-w-6xl mx-auto">
        <div className="flex flex-col gap-10 text-start md:w-2xl md:mt-0 lg:m-24 mt-20 w-[90%] m-5">
            <h1 className="text-gray-50 md:text-5xl text-4xl font-bold">I'm a software engineer that rarely <span className="text-blue-500">writes code.</span></h1>
            <p className="text-zinc-400 text-[16px]">Meet Manu Arora, the self-proclaimed code wizard who can turn caffeine into beautiful websites. His passion for building clean and functional designs is only rivaled by his passion for finding the perfect GIF to express his excitement.</p>
            <p className="text-zinc-400 text-[16px]">Building <span className="text-white font-semibold">Algochurn </span> and <span className="text-white font-semibold">Aceternity </span> when I'm not working on my day job.</p>
        </div>
    </div>
  )
}

export default Hero 