import { profileInfo } from "@/config/profile-info";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ProfileContainer = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      <Image
        src={profileInfo.image}
        alt={profileInfo.name}
        width={100}
        height={100}
        className="rounded-full"
        priority
        loading="eager"
      />
      <div>
        <p className="text-lg sm:text-xl text-primary font-semibold">
          {profileInfo.title}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold ">{profileInfo.name}</h1>
        <p className="text-xl sm:text-2xl font-light text-neutral-500 dark:text-neutral-400">
          {profileInfo.bio}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Link href={profileInfo.locationLink} target="_blank">
          <Button variant="outline" className="flex-1">
            <MapPin className="mr-2 h-4 w-4" /> {profileInfo.location}
          </Button>
        </Link>
        <a href={`mailto:${profileInfo.email}`} target="_blank">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProfileContainer;
