'use client';

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ImageSections from "@/components/ImageSections";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);

  return (
    <div>
      <NavBar showCreate={true} />
      <Hero exampleRef={ref} />
      <ImageSections exampleRef={ref} />
      
    </div>
  )
    };

// {body.fullName} ${body.yearsOfExperience} ${body.nameOfCompany} ${body.nameOfRole} ${body.reasonForApplying} ${body.greatestStrength}`
  // const resp = await fetch('/api/form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(coverLetterInfo)
    // })
    // if (!resp.ok) {
    //   toast("Something went wrong", { type: "error" })
    // }
    // const data = await resp.json();
    // setCoverLetter(data.result)
    // setLoading(false)
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const d = new FormData(ref.current);
    //   const res = await fetch('/api/form', {
    //     method: 'POST',
    //     body: d,
    //   });
    // }

          {/* <form ref={ref} onSubmit={handleSubmit}>
        <input name="fullName" />
        <input name="nameOfCompany" />
        <button>submit</button>
      </form> */}