'use client';
import { useState } from "react";
import { cn } from "../Utils/cn";
function Navbar({ className }: { className?: string }) {
const [active,setActive] = useState<string |null>(null);
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}></div>
  )
}

export default Navbar