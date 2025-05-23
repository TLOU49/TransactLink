import Business from '../assets/Businesses.png'
import Suppliers from '../assets/Suppliers.png'
import Individuals from '../assets/Individuals.png'

const WhoWeServe = () => {
  return (
    <div className="bg-black mx-4 md:mx-6 my-10 rounded-md py-12 px-4 text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">Who we serve</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Card */}
        <div className="bg-gray-100 rounded-lg shadow-md w-full md:w-1/3 h-64 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow">
          <p className="text-2xl font-semibold mb-4">Suppliers</p>
          <img src={Suppliers} alt="Suppliers icon" className="w-40 h-auto object-contain" />
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md w-full md:w-1/3 h-64 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow">
          <p className="text-2xl font-semibold mb-4">Businesses</p>
          <img src={Business} alt="Businesses icon" className="w-36 h-auto object-contain" />
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md w-full md:w-1/3 h-64 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow">
          <p className="text-2xl font-semibold mb-4">Individuals</p>
          <img src={Individuals} alt="Individuals icon" className="w-40 h-auto object-contain" />
        </div>
      </div>
    </div>
  )
}

export default WhoWeServe