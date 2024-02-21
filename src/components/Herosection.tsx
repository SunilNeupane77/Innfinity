
function HeroSection() {
  return (
    <div 
    className='h-auto md:h-[48rem] w-full rounded-md flex-col items-center justify-center overflow-hidden py-10'>
        <div className="p-4 relative z-10 w-full text-center">
            <h1>Master The Art of Music </h1>
            <p>
                Dive your comprehensive  Music Courses and 
                transform your musicam journey today . Whatever youare 
                a beginner or looking to refine your skills,jois us 
                to unlock your true potemtial.
            </p>
            <div className="mt-4">
                <link href={"/courses"}>
                    Explore Courses
                </link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection