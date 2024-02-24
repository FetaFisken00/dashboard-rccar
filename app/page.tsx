'use client'
import { Component } from "@/components/component";
import { UDPthing } from "@/components/temporaryudp";
import { AlertComponent } from "@/components/alertcomponent";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setLoading(false)
          return 100;
        }

        const newProgress = oldProgress + 2; // Increase progress by 20 every second
        return Math.min(newProgress, 100); // Ensures that progress value doesn't exceed 100
      });
    }, 100); // Runs every 1 second

    // Clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      {loading ? (
        <div style={{maxWidth: '500px', width: '50%'}}>
          <Progress value={progress} />
        </div>
      ) : (
        <>
          <UDPthing></UDPthing>
          <Component></Component>
          {/* <AlertComponent></AlertComponent> */}
        </>
      )}
    </main>
  );
}
