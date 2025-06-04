"use client" ;

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState({ 
    username: "", 
    password: ""
  });
  
  console.log(data);

  function handlSubmit() {
    router.push("/users");
  }

  return (
   <main className="flex justify-center items-center h-[100vh]">
    <div className="flex flex-col gap-3 p-8 border-2 border-slate-300 rounded-x1 w-[420px]">
      <p className="text 2x1 font-bold text-center">Connect With Us</p>
      <input 
      placeholder="Masukkan Email" 
      onChange={(e) =>
        setData((currentdata) => ({
          ...currentdata,
          username: e.target.value,
        }))
      } />
      <input placeholder="Masukkan Password" 
      onChange={(e) =>
        setData((currentdata) => ({
          ...currentdata,
          password: e.target.value,
        }))
      }
      type="password" />
      <Button onClick={() => router.push("/users")}> Sign In</Button> 
    </div>
   </main>
  );
}
