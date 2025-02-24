import { Input } from '../ui/input';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';
import { CheckIcon, CopyIcon } from 'lucide-react';
import React, { useState, useEffect, useId, useRef, } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Label } from '../ui/label';
import { Button } from '../ui/button';



const AddTransaction = () => {
    const id = useId();
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const fileInputRef = useRef(null);
    const navigate = useNavigate();


    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg)

    const handleCopy = () => {
        if (inputRef.current) {
          navigator.clipboard.writeText(inputRef.current.value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }
      };

      useEffect(() => {
        if (url) {
            fetch("/transaction-img",{
                method: "post",
                headers:{
                    "content-type": "application/json",
                    "Authorization": "bearer" + localStorage.getItem("jwt"),
                },
                body: JSON.stringify({
                    body,
                    pic: url,
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    notifyA(data.error);
                } else {
                    notifyB(" Image successfully Posted");
                    navigate("/dashboard")
                }
            })
            .catch((err) => console.log(err));
        }
      }, [url]);

      const postdetails = () => {
        const data = new Formdata();
        data.append("file", image);
        data.append("upload_preset", "pot-cloud");
        data.append("cloud_name", "dna3hwzre");
        fetch("https://api.cloudinary.com/v1_1/dna3hwzre/image/upload", {
            method: "post",
            body: "data",
     })
     .then((res) => res.json())
     .then((data) => setUrl(data.url))
     .catch((err) => console.log(err));
      };

      const handleNext = () =>{
        postdetails();
      };

      



  return (
    <div className='h-full flex w-full justify-center items-center'>
        {/*
        
        screenshot
        transaction hash 
        then request has to be sent to the admin for approval */} 

<div className="w-fit rounded-lg flex justify-center items-center p-1 bg-neutral-900">
    <img className='max-h-36 max-w-36 rounded-lg object-cover' src="https://res.cloudinary.com/dna3hwzre/image/upload/v1740355278/POT/hdjnjfiwnthrvwf4itwm.png" alt="" />
</div>
<div className="">
<div className="relative  w-full">
              <Input
                ref={inputRef}
                className="pe-9 bg-neutral-800 border border-neutral-600"
                type="text"
                defaultValue="0xcF2f33e27d82E11b25b2036Ee2Bc8F7E4e9Ce91a"
                readOnly
              />
              <TooltipProvider delayDuration={0} className="">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      className="text-muted-foreground/80 hover:text-foreground  focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                      aria-label={copied ? "Copied" : "Copy to clipboard"}
                      disabled={copied}
                    >
                      <div
                        className={cn(
                          "transition-all",
                          copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                        )}
                      >
                        <CheckIcon className="stroke-emerald-500" size={16} aria-hidden="true" />
                      </div>
                      <div
                        className={cn(
                          "absolute transition-all",
                          copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                        )}
                      >
                        <CopyIcon size={16} aria-hidden="true" />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="px-2 py-1 text-xs">Copy to clipboard</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <form action="" onSubmit={handleNext} >
            <div className="*:not-first:mt-2">
      <Label htmlFor={id}>File input</Label>
      <Input className="p-0 pe-3 file:me-3 file:border-0 file:border-e" type="file" accept="image/*" 
      />
      <Button>Submit</Button>
    </div>
    </form>
            
</div>

    </div>
  )
}

export default AddTransaction;