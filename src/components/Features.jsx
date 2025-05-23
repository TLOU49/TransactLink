import Geolocation from '../assets/Geolocation.mp4'
import InventoryAlert from '../assets/InventoryAlert.png'
import PurchaseManagement from '../assets/PurchaseManagement.png'
import PaymentPlan from '../assets/PaymentPlan.png'
import Analytics from '../assets/Analytics.png'
import DataExtraction from '../assets/DataExtraction.png'
import IdentityVerification from '../assets/IdentityVerification.png'

const FeatureCard = ({ title, description, image, imageWidth }) => (
  <div className="flex flex-col items-center bg-gray-100 p-4 shadow-lg rounded-lg w-full h-64">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <img src={image} width={imageWidth || 160} alt={title} className="mb-2" />
    <p className="text-sm text-center px-2">{description}</p>
  </div>
)

const Features = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12 text-gray-900 flex flex-col w-full text-center items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 max-w-3xl">
        Supply chain features tailored for you
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <FeatureCard
            title="Inventory Alerts"
            description="Keep Track of Stock Levels"
            image={InventoryAlert}
          />
          <FeatureCard
            title="Purchase Management"
            description="Monitor your goods on the platform"
            image={PurchaseManagement}
            imageWidth={100}
          />
          <FeatureCard
            title="Payment Plan"
            description="Utilise a comprehensive smart plan to access your goods"
            image={PaymentPlan}
          />
        </div>

        {/* Middle Column (Video) */}
        <div className="flex flex-col items-center bg-gray-100 p-4 shadow-lg rounded-lg w-full md:w-1/3 h-[20rem]">
          <h3 className="font-semibold text-lg mb-2">Geolocation and AI Technology</h3>
          <video
            className="w-full object-cover rounded p-4" 
            autoPlay muted loop playsInline
          >
            <source src={Geolocation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm mt-2 text-center px-2">
            Leverage AI-powered geolocation to optimize delivery
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <FeatureCard
            title="Analytics"
            description="Visualize key supply chain metrics"
            image={Analytics}
          />
          <FeatureCard
            title="Data Extraction and Management"
            description="Automate and manage your data pipeline"
            image={DataExtraction}
          />
          <FeatureCard
            title="Identity Verification"
            description="Keep track and stay safe from any threats"
            image={IdentityVerification}
            imageWidth={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Features
