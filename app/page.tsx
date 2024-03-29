'use client'
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { Toaster } from "@/components/ui/sonner";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mockup2 } from "@/components/mockup2";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger, MenubarSeparator, MenubarShortcut } from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Car, Divide } from "lucide-react";
import { DropdownMenu, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Monitor, Sun, Loader, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { CanvasComponent } from "@/components/canvasComponent"

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("system");
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const {
    sendMessage,
    lastMessage,
    readyState
  } = useWebSocket("ws://localhost:8080");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setLoading(false)
          // toast("Loading complete!");
          // toast("Loading complete!"); // Replaced Alert with toast function call
          // toast(`readystate: ${ReadyState[readyState]}`)
          return 100;
        }

        // toast("Hgello world!");
        const newProgress = oldProgress + 2; // Increase progress by 20 every second
        return Math.min(newProgress, 100); // Ensures that progress value doesn't exceed 100
      });
    }, 10); // Runs every 1 second

    if (lastMessage !== null) {
      // console.log(lastMessage.data);
      toast(lastMessage.data);
      setMessages((prev: any[]) => [...prev, lastMessage.data]);
    }

    // Clean up interval on unmount
    return () => {
      toast("Cleaning up...");
      if (readyState === ReadyState.OPEN) {
        toast("Successfully connected to UDP service.");
      } if (readyState === ReadyState.CONNECTING) {
        toast("Connecting to UDP service...");
      } else if (readyState === ReadyState.CLOSING || readyState === ReadyState.CLOSED) {
        toast("Failed to connect to UDP service. Please try again later.");
      }
      clearInterval(interval);
    };
  }, [lastMessage]);


  return (
    <>
      {/* <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> */}
      <main className="flex justify-center items-center h-screen w-full">
        {loading ? (
          <div style={{ maxWidth: '500px', width: '50%' }}>
            <Progress value={progress} />
          </div>

        ) : (
          <>
            <div className="container max-w-full size-full flex p-4">
              <Card className="flex-grow">
                <div className="flex justify-between p-8">
                  <h2 className="text-3xl font-bold tracking-light font-sans">
                    Dashboard
                  </h2>
                  <div>
                    <Button variant="ghost">Simple</Button>
                    <Button variant="ghost">Useful</Button>
                    {/* <Button disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin duration-1500"/>
                      work in progress
                    </Button> */}


                  </div>
                  <div className="flex flex-row gap-6">
                    <div className="flex items-center justify-end space-x-4">
                      <div className="flex justify-items-end grid gap-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                      <Skeleton className="h-12 w-12 rounded-full" />
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        {/* Open */}
                        <Button variant="outline">
                          {theme == "system" ? <Monitor /> : theme == "light" ? <Sun /> : <Moon />}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-12">
                        <DropdownMenuItem onSelect={() => setTheme("dark")}>
                          <Moon />
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setTheme("light")}>
                          <Sun />
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setTheme("system")}>
                          <Monitor />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                </div>
                <Separator />
                <div className="flex col-auto gap-4 p-4">
                  <Card className="h-64">
                    <div className="w-96 grid grid-row-5 col-auto gap-4 p-4 px-2">
                      <div className="flex px-4 justify-between">
                        <p>mode 1</p>
                        <Switch disabled />
                      </div>
                      <Separator />
                      <div className="flex px-4 justify-between">
                        <p>mode 2</p>
                        <Switch disabled />
                      </div>
                      <Separator />
                      <div className="flex px-4 justify-between">
                        <p>Tank mode</p>
                        <Switch checked={true} disabled />
                      </div>
                      <Separator />
                      <div className="flex flex-col px-4 space-y-2 justify-between">
                        <p>Power limit</p>
                        <Slider disabled />
                      </div>
                    </div>
                  </Card>
                  <Card className="h-96 w-96 flex items-center justify-center">
                    {/* <h1>Acceleration</h1> */}
                    <CanvasComponent />
                    {/* <div className="w-48 h-48 rounded-full bg-white relative">
                      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-gray-300 translate-x-[-0.25px]" />
                      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-300 translate-y-[-0.25px]" />
                      <div className="w-[4px] h-[50px] bg-teal-400 bottom-1/2 left-1/2 absolute origin-bottom" style={{ transform: "rotate(150deg)" }}>
                        <div className="w-[20px] h-[20px] rounded-full bg-teal-400 absolute top-[-10px] left-[-8px]"></div>
                      </div>
                    </div> */}
                  </Card>
                  <Card className="h-64">
                    helo
                  </Card>
                </div>

              </Card>
            </div>

            {/* <UDPthing></UDPthing> */}


            {/* <Mockup2></Mockup2> */}
            {/* <Dashboard></Dashboard> */}
            {/* <Component></Component> */}
          </>
        )}
      </main>
      <Toaster />
    </>
  );
}
