import React from "react";
import Link from "next/link";

const FolderFileItem = ({ styles, file }) => {
  const { fileName, downloadLimit, originalName, url, _id } = file.file;

  return (
    <article className="flex flex-col mr-4">
      <Link href={`/links/${url}`}>
        <a className="">
          {originalName.includes(".jpg") ||
          originalName.includes(".jpeg") ||
          originalName.includes(".png") ? (
            <i className=" my-2 text-5xl fas fa-images text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".mp4") || originalName.includes(".MP4")   || originalName.includes(".mov") ? (
            <i className="my-2 text-5xl  fas fa-photo-video text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".mp3") ||
          originalName.includes(".wav") ||
          originalName.includes(".mid") ||
          originalName.includes(".ac3") ? (
            <i className="mt-2 text-5xl  fas fa-music text-red-500 mr-1 mb-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".pdf") || originalName.includes(".PDF") ? (
            <i className="my-2 text-5xl  far fa-file-pdf text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".zip") || originalName.includes(".rar") ? (
            <i className="my-2 text-5xl   fas fa-file-archive  text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {
            originalName.includes(".txt") ? <i className="my-2 text-5xl   fas fa-file-alt  text-red-500 ml-2 hover:text-red-600"></i> : null      
          }
          {
            originalName.includes('torrent') ? <i className="my-2 text-5xl   fas fa-file-download  text-red-500 ml-2 hover:text-red-600"></i> : null
          }
        </a>
      </Link>
      <Link href={`/links/${url}`}>
        <a className="">
          <span className="hover:text-red-500"> {originalName.split('.')[0].slice(0,30)}</span><span className="text-red-500">.{originalName.split('.')[originalName.split('.').length - 1]}</span>
        </a>
      </Link>
    </article>
  );
};

export default FolderFileItem;
