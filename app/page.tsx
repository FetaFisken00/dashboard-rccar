import { Component } from "@/components/component";
import { UDPthing } from "@/components/temporaryudp";
import Image from "next/image";

export default function Home() {
  return (
     <main>
      <UDPthing></UDPthing>
      <Component></Component>
     </main>
  );
}
