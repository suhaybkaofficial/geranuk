import Image from "next/image"
function MiddleHero() {
  return (
    <div className="mx-6 ">
      {/* Hero Category Navigation */}
      <nav className="">
        <ul className="flex items-center space-x-3  font-semibold cursor-pointer">
          <li>Home </li>
          <li>Electronics</li>
          <li>Men</li>
          <li>Women</li>
          <li>Beauty</li>
          <li>Kids</li>
          <li>Sports</li>
        </ul>
      </nav>
      <div className="h-[57vh] my-2 rounded-xl">
      <Image src="/heroImg.jpg"
        width={1000}
        height={1000}
        alt="UAE Flag"
        className="h-full w-full rounded-xl object-cover"
      />
      </div>
      
    </div>
  )
}

export default MiddleHero