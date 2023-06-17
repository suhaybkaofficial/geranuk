import Image from "next/image"

function RightHero() {
  
  return (
    <div>
      <h1 className="font-semibold">Download Geranuk App and get <span className="text-secondary">5% Cash back</span></h1>
      <div className="h-[57vh] my-2 rounded-xl">

      <Image src="/rightHeroImg.jpg"
        width={1000}
        height={1000}
        alt="UAE Flag"
        className="h-full w-full rounded-xl object-cover"
      />
      </div>
    </div>
  )
}

export default RightHero