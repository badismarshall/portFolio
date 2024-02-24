const Testimonials = () => {
  return (
    <div className='flex flex-col'>
        <h1 className="text-start text-3xl font-bold text-gray-800 dark:text-white mb-5">Testimonials</h1>
        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote stroke-purple-800"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
          {/* className={cn('animate-scroll [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]')} */}
          <p className='mt-3 mb-8'>
            What are my friends saying?
          </p>
          <div className='flex flex-row gap-4'>
              <div className='flex flex-col justify-start gap-[24px] bg-[#1F2937] py-8 pl-3 rounded-sm'>
                        <p className='max-w-[320px] text-white text-start'>
                        “It’s not just that is fast, the scalability and ease of use is simply unparalleled, truly mindblowing”  
                        </p>
                        <div className='flex flex-row items-center'>
                            <img 
                                src="/assets/images/hero-card-complete.jpeg"
                                alt='avatar'
                                className='w-[64px] h-[64px] rounded-full object-cover'
                            />
                            <div className='flex flex-col gap-[3px] ml-[16px]'>
                                <h4 className='text-zinc-300 text-sm'>
                                    Markus Freeman
                                </h4>
                                <p className='text-gray-500 text-xs'>
                                   Dev Ops - Azious
                                </p>
                            </div>

                        </div>
              </div>
              <div className='flex flex-col justify-start gap-[24px] bg-[#1F2937] py-8 pl-3 rounded-sm'>
                        <p className='max-w-[320px] text-white text-start'>
                        "I had the pleasure of working with him on a recent project, and I couldn't be happier with the results."  
                        </p>
                        <div className='flex flex-row items-center'>
                            <img 
                                src="/assets/images/OussamaIA.webp"
                                alt='avatar'
                                className='w-[64px] h-[64px] rounded-full object-cover'
                            />
                            <div className='flex flex-col gap-[3px] ml-[16px]'>
                                <h4 className='text-zinc-300 text-sm'>
                                    Oussama Ezz
                                </h4>
                                <p className='text-gray-500 text-xs'>
                                   Dev Ops - Azious
                                </p>
                            </div>

                        </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonials