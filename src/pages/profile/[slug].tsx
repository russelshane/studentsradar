import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Meta } from "../../layouts/Meta";
import { Main } from "../../templates/Main";
import Profiles from "../../utils/Profiles.json" 

const Profile = () => {
  const [profile, setProfile] = useState()


 const router = useRouter()
  const {slug} = router.query


  useEffect(() => {
  setProfile(Profiles.find(prf => prf.id === slug) as any)

  })

  console.log(profile)

  return (
    <Main
      meta={
        <Meta
          title={(profile as any)?.fullName}
          description="Get your student profile up online and get to know other people."
        />
      }
    >
      <br />
      <img style={{objectFit: "cover"}} className="w-36 h-36 rounded" src={(profile as any)?.avatarUrl} alt={(profile as any)?.fullName} />
      <br />
      <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-green-700">{(profile as any)?.fullName}</h1>
      <h1 className="font-medium leading-tight text-xl mt-0 mb-2 text-green-700">{(profile as any)?.age} years old</h1>
      <br />
      <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-green-700">Hobbies</h1>
      {(profile as any)?.hobbies.map((val: any, index: any) => (
      <h1 key={index} className="font-medium leading-tight text-xl mt-0 mb-2 text-green-700">{val}</h1>

      ))}
    </Main>
  )
}




export default Profile