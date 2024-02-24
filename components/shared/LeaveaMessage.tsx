import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "../ui/evervault-card"
import Image from "next/image"
import { BackgroundBeams } from "../ui/background-beams"



const LeaveaMessage = () => {
  return (
    <div className="relative antialiased">
      {/* <Image
          src="/assets/icons/contactusicon.svg"
          alt="evervault"
          width={200}
          height={200}
          className="absolute top-0 right-0 -mt-32 -mr-36 hidden sm:block"
      /> */}
      <BackgroundBeams />
        {/* <h1 className="text-start text-3xl font-bold text-gray-800 dark:text-white mb-5">LeaveaMessage</h1> */}
    <Card className="w-[350px] relative">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <CardHeader>
        <CardTitle className="text-purple-800">Happy to see you there</CardTitle>
        <CardDescription>How can I help you today?</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 text-start">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="flex flex-col space-y-1.5 text-start">
              <Label htmlFor="framework">Email</Label>
                <Input id="framework" placeholder="Your Email" type="email"/>
            </div>
            <div className="flex flex-col space-y-1.5 text-start">
            <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message"/>
            </div>
          </div>
          

        </form>
      </CardContent>
      <CardFooter className="flex justify-between mt-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
            <Button variant="outline" className="text-purple-800">Deploy</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="bg-transparent text-purple-800">Add To my cloud</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
     
    </div>
  )
}

export default LeaveaMessage