import { useEffect, useState } from "react";
import Image from 'next/image'
import styled from "styled-components";

type Props = {
  data?: boolean;
}

function DragArea({ data }: Props) {


  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState<any[any]>([]);


  useEffect(() => {
    if (!data) {
      setImageSelectedPrevious([]);
    }
    return () => {

    }
  }, [ data])


  const changeImage = (e: any) => {
    let arrayBlob: string[] = [];
    let arrayFiles = e.target.files;
    if ((ImageSelectedPrevious.length) > 3) {
      return;
    }
    for (let i = 0; i < arrayFiles.length; i++) {
      console.log(i)
      if (i > 3) {
        break;
      }
      if((ImageSelectedPrevious.length+arrayBlob.length) > 3){
        break;
      }

      var file = arrayFiles[i];
      const fileType = file['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      var url = URL.createObjectURL(file);
      if (!ImageSelectedPrevious.includes(url) && validImageTypes.includes(fileType)) {
        console.log(ImageSelectedPrevious.includes(url))
        arrayBlob.push(url);
      }


    }
    setImageSelectedPrevious([...ImageSelectedPrevious, ...arrayBlob])




  }

  return (
    <div>
      <div>
        <br />
        <div className="w-full mb-3">
          <label
            className="flex justify-center w-full h-24 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline">browse</span>
              </span>
            </span>
            <input
              className="h-[90px] w-[92%] opacity-0 z-10 absolute"
              type="file"
              accept="image/*"
              multiple
              name="file_upload"
              onChange={(e) => {
                changeImage(e);
              }}
            />
          </label>
        </div>

        <div className="center grid grid-cols-4">

          {ImageSelectedPrevious.map((user: any, index: number) => {

            return (
              <div className="w-[150px] h-[150px] p-2 border-solid border-2 border-indigo-400 rounded-md hover:border-indigo-600 ">
                <Image className="overflow-hidden h-full "
                  src={user || '/foto1.jpg'}
                  alt=""
                  objectFit="contain"
                  width={350}
                  height={350}
                />
              </div>
            )

          })}
        </div>
      </div>
    </div>
  );
}

export default DragArea;
