import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard"
  
const Projects = () => {
  return (
    <div className="m-3">
        <h1 className="text-start text-3xl font-bold text-gray-800 dark:text-white mb-5">Projects</h1>
        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/2">
                    <ProjectCard />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                    <ProjectCard />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
    </div>
  )
}

export default Projects