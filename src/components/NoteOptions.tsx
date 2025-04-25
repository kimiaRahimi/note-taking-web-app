"use client";
import HomeIcon from "@/Icons/HomeIcon";
import RightIcon from "@/Icons/RightIcon";
import clsx from "clsx";
import ArchiveIcon from "@/Icons/ArchiveIcon";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./types";
import { setActive } from "@/features/activeSlice";
type NoteType = "allNotes" | "archiveNote";

const NoteOptions = () => {
const {activeStatus} =  useSelector((state:IRootState)=>state.active);
const dispatch = useDispatch();

  const handleClick = (type: NoteType) => {
    dispatch(setActive({
      allNotes: type === "allNotes",
      archiveNote: type === "archiveNote",
    }));
  };

  const buttons = [
    {
      title: "All Notes",
      icon: (
        <HomeIcon
          className={clsx("w-5 h-5", { "text-blue-600": activeStatus.allNotes })}
        />
      ),
      type: "allNotes" as NoteType,
    },
    {
      title: "Archived Notes",
      icon: (
        <ArchiveIcon
          className={clsx("w-5 h-5", { "text-blue-600": activeStatus.archiveNote })}
        />
      ),
      type: "archiveNote" as NoteType,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {buttons.map((item, index) => (
        <div
          className={clsx(
            "flex justify-between items-center w-full p-3 rounded-md hover:bg-gray-100",
            {
              "bg-gray-100": activeStatus[item.type],
            }
          )}
          onClick={() => handleClick(item.type)}
          key={index}
        >
          <div className="flex gap-1 items-center">
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </div>
          {activeStatus[item.type] && <RightIcon className="text-blue-700 size-4" />}
        </div>
      ))}
    </div>
  );
};

export default NoteOptions;
