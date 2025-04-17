'use client'
import HomeIcon from "@/Icons/HomeIcon"
import RightIcon from "@/Icons/RightIcon"
import { useState } from "react"
import clsx from "clsx"
import ArchiveIcon from "@/Icons/ArchiveIcon"

type NoteType = "allNotes" | "archiveNote";

const NoteOptions = () => {
  const [active, setActive] = useState<{ allNotes: boolean; archiveNote: boolean }>({ allNotes: false, archiveNote: false });

  const handleClick = (type: NoteType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActive((prevState) => ({
      allNotes: type === "allNotes",
      archiveNote: type === "archiveNote"
    }));
  };

  const buttons = [
    {
      title: "All Notes",
      icon: <HomeIcon className={clsx("w-5 h-5",{"text-blue-600": active.allNotes})} />,
      type: "allNotes" as NoteType 
    },
    {
      title: "Archived Notes",
      icon: <ArchiveIcon className={clsx("w-5 h-5",{"text-blue-600": active.archiveNote})}/>,
      type: "archiveNote" as NoteType 
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      {buttons.map((item, index) => (
        <div
          className={clsx("flex justify-between items-center w-full p-3 rounded-md hover:bg-gray-100", {
            "bg-gray-100": active[item.type]
          })}
          onClick={() => handleClick(item.type)} 
          key={index}
        >
          <div className="flex gap-1 items-center">
            {item.icon}
            <span className="text-base">{item.title}</span>
          </div>
          {active[item.type] && <RightIcon className="text-blue-700 size-4" />}
        </div>
      ))}
    </div>
  );
}

export default NoteOptions;
