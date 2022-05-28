const FileIconType = ({
    originalName,
    icon,
    textSize,
    iconColor,
    textColor,
    margin,
    classes
}) => {
  
  originalName = originalName.toLowerCase();

  return (
    <>
      {originalName.includes(".jpg") ||
      originalName.includes(".jpeg") ||
      originalName.includes(".jfif") ||
      originalName.includes(".png") ? (
        <i className={`my-2 fas fa-images ${textSize ? textSize : 'text-5xl'  } text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes(".svg") ? (
        <i className={` ${
          textSize ? textSize : "text-5xl"
        }  fas fa-bezier-curve  text-red-500 ml-2`}></i>
      ) : null}
      {originalName.includes(".mp4") ||
      originalName.includes(".mov") ? (
        <i className={`my-2 ${
          textSize ? textSize : "text-5xl"
        }  fas fa-photo-video text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes(".mp3") ||
      originalName.includes(".wav") ||
      originalName.includes(".mid") ||
      originalName.includes(".ac3") ? (
        <i className={`mt-2 ${
          textSize ? textSize : "text-5xl"
        } fas fa-music text-red-500 mr-1 mb-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes(".pdf") || originalName.includes(".PDF") ? (
        <i className={`my-2 ${
          textSize ? textSize : "text-5xl"
        }  far fa-file-pdf text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes(".mobi") || originalName.includes(".MOBI") ? (
        <i className={`my-2 ${
          textSize ? textSize : "text-5xl"
        }  fas fa-book text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes(".zip") || originalName.includes(".rar") ? (
        <i className={`my-2 ${
          textSize ? textSize : "text-5xl"
        }   fas fa-file-archive  text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes(".txt") ? (
        <i className={`my-2 ${
          textSize ? textSize : "text-5xl"
        }   fas fa-file-alt  text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
      {originalName.includes("torrent") ? (
        <i className={`my-2 ${
          textSize ? textSize : "text-5xl"
        }   fas fa-file-download  text-red-500 ml-2 hover:text-red-600`}></i>
      ) : null}
    </>
  );
};

export default FileIconType;
