import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link }  from "react-router-dom";
import ProfilePic from "./profilepic/ProfilePic";

const SHEET_SIDES = ["top"];

export default function Profile() {
  const picLink = "https://i.pinimg.com/736x/54/3a/5f/543a5feab057a0db0d202419a6eae8bf.jpg";
  const [user, setUser] = useState({});
  const [changePic, setChangePic] = useState(false);


  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser && localUser._id) {
      fetch(`http://localhost:5000/user/${localUser._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            
            setUser(result.user || {});
          } else {
            console.error("No result found");
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const changeprofile = () => {
    setChangePic(!changePic);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl text-white font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4  text-sm text-gray-200" x-chunk="dashboard-04-chunk-0"
          >
            <Link to="/" className="font-semibold text-">
              Home
            </Link>
            <Link className="font-semibold text-" to="/profile">Profile</Link>
            <Link to="#">Security</Link>
            <Link to="#">Integrations</Link>
            <Link to="/support">Support</Link>
            <Link to="#">Organizations</Link>
            <Link to="#">Advanced</Link>
          </nav>
          
          <div className="grid gap-6">
          <div className="bg-[#0A0A0A] text-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col mb-5 justify-start items-start">
          <img
           onClick={changeprofile}
            src={user.Photo ? user.Photo : picLink}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
            <button className="update-photo" onClick={changeprofile}>Update photo</button>
          <h2 className="mt-6 text-3xl  font-semibold">{user.name || "conferio user"}</h2>
          <p className="text-neutral-500 text-xl">{user.email}</p>
          {changePic && <ProfilePic changeprofile={changeprofile} />}
        </div>
          <h1 className="text-2xl mt-4 font-bold">Personal details</h1>
          <div className="mt-1">
            <div className="flex justify-between items-center border-b py-4">
              <div>
                <p className="text-neutral-500">Name</p>
                <p className="font-medium">{user.name || 'conferio user'}</p>
              </div>
              <button className="text-blue-500">
             
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost">Edit</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name"  className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                 
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
   
              </button>
            </div>
            <div className="flex justify-between items-center border-b py-4">
              <div>
                <p className="text-neutral-500">Email address</p>
                <p className="font-medium">{user.email}</p>
              </div>
             
            </div>
            <div className="flex justify-between items-center border-b py-4">
              <div>
                <p className="text-neutral-500">Password</p>
                <p className="font-medium">No password yet</p>
              </div>
              <button className="text-blue-500">
             
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost">Create one</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit password</SheetTitle>
              <SheetDescription>
                Set the password. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input id="name"  className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="repeat" className="text-right">
                  Repeat Password
                </Label>
                <Input
                  id="repeat"
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
              </button>
            </div>
          </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
