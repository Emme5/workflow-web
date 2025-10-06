"use client";

import { ModeToggle } from "@/components/ThemeSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { pathInfo } from "@/constants";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-[60px] bg-background border-b flex items-center justify-between p-4">
      <div>
        {pathname.includes("automation") ? (
          <div>
            <h3 className="text-lg font-semibold">
              {pathname.includes("/automation/")
                ? "Workflow Builder"
                : "Automation"}
            </h3>
            <p className="text-sm text-muted-foreground">
              Automated flows for effective actions
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold">
              {pathInfo[pathname.replace("/", "")].path}
            </h3>
            <p className="text-sm text-muted-foreground">
              {pathInfo[pathname.replace("/", "")].subtitle}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <ModeToggle />

        {/* ส่วนของกระดิ่งแจ้งเตือน */}
        <Popover>
          <PopoverTrigger>
            <span className="relative">
              <Bell size={20} />

              <span className="absolute -top-1 right-0 z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animated-ping absolute inline-flex h-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
              </span>
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            Place content for the notifications.
          </PopoverContent>
        </Popover>

        {/* ส่วนของรูปโปรไฟล์ */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage
                alt="profile-img"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div>
                <h3 className="text-base font-medium">Mongkol Suphamanee</h3>
                <p className="text-sm font-normal text-muted-foreground">
                  example@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />

            <div className="px-2 py-1.5">
              <Button variant={"outline"} className="w-full">
                Sign Out
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;
