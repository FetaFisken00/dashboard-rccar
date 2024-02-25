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
import { Divide } from "lucide-react";
import { DropdownMenu, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Monitor, Sun } from "lucide-react";

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
        }, 100); // Runs every 1 second

        if (lastMessage !== null) {
            // console.log(lastMessage.data);
            toast(lastMessage.data);
            setMessages((prev: any) => [...prev, lastMessage.data] as any[]);
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
                                                    <Button variant="outline"> {theme == "system" ? <Monitor/> : <Moon/>} </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w=56">
                                                    <DropdownMenuItem>
                                                        <Moon />
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem> 
                                                        <Sun />
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem> 
                                                        <Monitor />
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>

                                    </div>
                                    <Separator />
                                    {/* <Mockup2></Mockup2> */}
                                </Card>
                            </div>
                            {/* <div style={{ width: "100vw", height: "100vh", padding: "1em" }}>
                            <Card style={{ width: "100%", height: "100%", padding: "0em" }}>
                                <div style={{ flexDirection: "column", display: "flex", height: "100%" }}>




                                    <div className="" style={{ padding: "1em" }}>
                                        <h2 className="text-3xl font-bold tracking-light font-sans">
                                            Dashboard
                                        </h2>
                                        <div className="flex items-center justify-end space-x-4">
                                            <div className="flex justify-items-end grid gap-y-2">
                                                <Skeleton className="h-4 w-[250px]"/>
                                                <Skeleton className="h-4 w-[200px]"/>
                                            </div>
                                            <Skeleton className="h-12 w-12 rounded-full"/>
                                        </div>
                                    </div>
                                    <Separator/>



                                    <div style={{ flexGrow: 1, height: "100%", padding: "1em" }}>
                                        <h1>This is where the cards will go</h1>
                                        <Mockup2></Mockup2>
                                    </div>
                                </div>
                            </Card>
                        </div> */}

                        {/* <UDPthing></UDPthing> */}


                        {/* <Dashboard></Dashboard> */}
                        {/* <Component></Component> */}
                    </>
                )}
            </main>
            <Toaster />
        </>
    );
}
