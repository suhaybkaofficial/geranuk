
import {CiDeliveryTruck} from "react-icons/ci"
import {BiSupport} from "react-icons/bi"
import {BsWallet2} from "react-icons/bs"
import {TbTruckReturn} from "react-icons/tb"
function Features() {
 
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 ml-6 py-2'  >
  {/* Free Delivery */}
   <div className="bg-white flex space-x-4 px-2 rounded-xl py-6">
    <CiDeliveryTruck color="#179bd7" size={50}/>
    <div className="flex flex-col justify-center">
      <p className="font-bold text-lg">Free Delivery</p>
      <p className="break-words text-black/40 text-sm">Free shipping on your order up to $300</p>
    </div>
  </div>
  <div className="bg-white flex space-x-4 px-2 rounded-xl py-6">
    <TbTruckReturn color="#179bd7" size={50}/>
    <div className="flex flex-col justify-center">
      <p className="font-bold text-lg">7 Days Return</p>
      <p className="break-words text-black/40 text-sm">Free returns & flexible terms</p>
    </div>
  </div>
  <div className="bg-white flex space-x-4 px-2 rounded-xl py-6">
    <BsWallet2 color="#179bd7" size={50}/>
    <div className="flex flex-col justify-center">
      <p className="font-bold text-lg">Payments</p>
      <p className="break-words text-black/40 text-sm">Zaad, eDahab, Stripe, Cash on delivery</p>
    </div>
  </div>
  <div className="bg-white flex space-x-4 px-2 rounded-xl py-6">
    <BiSupport color="#179bd7" size={50}/>
    <div className="flex flex-col justify-center">
      <p className="font-bold text-lg">Help Center</p>
      <p className="break-words text-black/40 text-sm">24/7 Support</p>
    </div>
  </div>
</div>

  )
}

export default Features