'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

const Photos = () => {
  return (
    <div className="m-3">
        <h1 className="text-start text-3xl font-bold text-gray-800 dark:text-white mb-5">Photos</h1>
        <Carousel  
            plugins={[
                Autoplay({
                // delay: 200,
                // stopOnHover: true,
                }),
            ]}
        >
            <CarouselContent  className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <CarouselItem className="basis-1/2">
                    <img
                        src='/assets/images/Marshall1.jpeg'
                        alt='marshall1'
                        className="w-[300px] h-[300px] object-cover rounded-2xl"
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/2 pl-8">
                    <img
                        src='/assets/images/Marshall2.jpeg'
                        alt='marshall2'
                        className="w-[300px] h-[300px] object-cover rounded-2xl object-top"
                    />
                </CarouselItem>
                <CarouselItem className="basis-1/2 pl-8">
                    <img
                        src='/assets/images/Marshall3.jpeg'
                        alt='marshall3'
                        className="w-[300px] h-[300px] object-cover rounded-2xl"
                    />
                </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
         </Carousel>
    </div>
  )
}

export default Photos