"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [file,setFile] = useState<File>()

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(!file) return

    try{
      const data = new FormData()
      data.set('file',file)

      const res = await fetch ('api/upload',{
        method:'POST',
        body:data
      })

      if(!res.ok) throw new Error(await res.text())
      }
  
      catch(e:any){
    
        console.error(e)
      }
    }

  

  return (
    <main>
      <div>
        <form onSubmit={onSubmit}>
          <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
          />
          <button className="bg-black text-white bg-#888 hover:bg-#646464">
            <input type="submit" value="Upload" className=""/>
          </button>
          
        </form>
      </div>
    </main>
  );
}
