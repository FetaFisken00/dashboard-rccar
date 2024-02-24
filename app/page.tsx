'use client'
import { Component } from "@/components/mockup";
import { UDPthing } from "@/components/temporaryudp";
import { AlertComponent } from "@/components/alertcomponent";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Dashboard } from "@/components/dashboard";
import { Mockup2 } from "@/components/mockup2";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { setSourceMapsEnabled } from "process";
import { read } from "fs";
import { Alert } from "@/components/ui/alert";

export default function Home() {
  const [progress, setProgress] = useState(0);
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
          if (readyState === ReadyState.OPEN) {
            toast("Successfully connected to UDP service.");
          } if (readyState === ReadyState.CONNECTING) {
            toast("Connecting to UDP service...");
          } else if (readyState === ReadyState.CLOSING || readyState === ReadyState.CLOSED) {
            toast("Failed to connect to UDP service. Please try again later.");
          }
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
      setMessages(( prev: any) => [...prev, lastMessage.data] as any[]);
    }

    // Clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, [lastMessage]);


  return (
    <>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {loading ? (
          <div style={{ maxWidth: '500px', width: '50%' }}>
            <Progress value={progress} />
          </div>

        ) : (
          <>
          {/* <div>WebSocket State: {readyState} ({ReadyState[readyState]})</div> */}

          <Mockup2></Mockup2>
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
