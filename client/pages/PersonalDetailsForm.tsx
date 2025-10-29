import { useState } from "react";
import { Calendar, Sun, Moon } from "lucide-react";

type CarParkingDay = "home" | "office" | "public" | "secure" | "street";
type CarParkingNight = "drive" | "street" | "garage" | "locked" | "away" | "car_park" | "work" | "private";
type CarUsage = "social" | "commuting" | "business";

export default function PersonalDetailsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [industry, setIndustry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [carParkingDay, setCarParkingDay] = useState<CarParkingDay | null>(null);
  const [carParkingNight, setCarParkingNight] = useState<CarParkingNight | null>(null);
  const [carUsage, setCarUsage] = useState<CarUsage | null>(null);
  const [licenseType, setLicenseType] = useState("");
  const [licenseHeld, setLicenseHeld] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [nclYears, setNclYears] = useState("");
  const [excessAmount, setExcessAmount] = useState("");
  const [criminalConvictions, setCriminalConvictions] = useState<boolean | null>(null);
  const [medicalConditions, setMedicalConditions] = useState<boolean | null>(null);
  const [insuranceCancelled, setInsuranceCancelled] = useState<boolean | null>(null);

  const handleBack = () => {
    console.log("Back clicked");
  };

  const handleNext = () => {
    console.log({
      firstName,
      lastName,
      dateOfBirth,
      email,
      phone,
      postcode,
      employmentStatus,
      industry,
      occupation,
      carParkingDay,
      carParkingNight,
      carUsage,
      licenseType,
      licenseHeld,
      licenseNumber,
      nclYears,
      excessAmount,
      criminalConvictions,
      medicalConditions,
      insuranceCancelled,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[720px] mx-auto">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">📋</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                Personal Details
              </h1>
            </div>
          </div>

          {/* Your Details Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">01</span> Your Details</h2>
            </div>

            <div className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                  <p className="text-xs text-red-600 mt-1">
                    First name must be at least 2 characters
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                  <p className="text-xs text-red-600 mt-1">
                    Last name must be at least 2 characters
                  </p>
                </div>
              </div>

              {/* Date of Birth and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative group">
                    <Calendar className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none group-focus-within:text-blue-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400 pr-11"
                    />
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    Date of birth is required
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                  <p className="text-xs text-red-600 mt-1">
                    Please enter a valid email
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                />
                <p className="text-xs text-red-600 mt-1">
                  Phone number must be at least 7 characters
                </p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">02</span> Address</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Postcode
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 whitespace-nowrap">
                    FIND ADDRESS →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Employment Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">03</span> Employment</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Employment Status
                  </label>
                  <div className="relative">
                    <select
                      value={employmentStatus}
                      onChange={(e) => setEmploymentStatus(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer transition-all duration-200 hover:border-gray-400 bg-white"
                    >
                      <option value="">Select employment status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-employed</option>
                      <option value="retired">Retired</option>
                      <option value="unemployed">Unemployed</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                  <p className="text-xs text-red-600 mt-1">
                    Industry and occupation are required unless you are retired or unemployed
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Occupation
                </label>
                <div className="relative">
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer transition-all duration-200 hover:border-gray-400 bg-white"
                  >
                    <option value="">Select your occupation</option>
                    <option value="doctor">Doctor</option>
                    <option value="engineer">Engineer</option>
                    <option value="teacher">Teacher</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-red-600 mt-1">
                  Occupation is required unless you are retired or unemployed
                </p>
              </div>
            </div>
          </div>

          {/* Car Parking Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">04</span> Car Parking</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Daytime Parking */}
              <div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-bold text-gray-900">Where do you keep your car during the day?</p>
                    <p className="text-sm text-gray-600">Select where your car is typically parked during daytime hours.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "home", label: "At home" },
                    { value: "office", label: "Office or factory car park" },
                    { value: "public", label: "Open public car park" },
                    { value: "secure", label: "Secure public car park" },
                    { value: "street", label: "Street away from home" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="parking-day"
                        value={option.value}
                        checked={carParkingDay === option.value}
                        onChange={(e) => setCarParkingDay(e.target.value as CarParkingDay)}
                        className="w-5 h-5 text-blue-600 cursor-pointer"
                      />
                      <span className="ml-3 font-medium text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-red-600 mt-3">
                  Invalid option: expected one of "At home"/"Office or factory car park"/"Open public car park"/"Secure public car park"/"Street away from home"
                </p>
              </div>

              {/* Nighttime Parking */}
              <div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4 flex items-center gap-3">
                  <Moon className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-bold text-gray-900">Where do you keep your car during the night?</p>
                    <p className="text-sm text-gray-600">Select where your car is typically parked during nighttime hours.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "drive", label: "Drive" },
                    { value: "street", label: "Street outside home" },
                    { value: "garage", label: "Locked garage" },
                    { value: "away", label: "Street away from home" },
                    { value: "car_park", label: "Public car park" },
                    { value: "work", label: "Work car park" },
                    { value: "private", label: "Private property" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="parking-night"
                        value={option.value}
                        checked={carParkingNight === option.value}
                        onChange={(e) => setCarParkingNight(e.target.value as CarParkingNight)}
                        className="w-5 h-5 text-blue-600 cursor-pointer"
                      />
                      <span className="ml-3 font-medium text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-red-600 mt-3">
                  Invalid option: expected one of "Drive"/"Street outside home"/"Locked garage"/"Street away from home"/"Public car park"/"Work car park"/"Private property"
                </p>
              </div>
            </div>
          </div>

          {/* Car Usage Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">05</span> Car Usage</h2>
            </div>

            <div>
              <p className="text-gray-900 font-semibold mb-4">What do you use the car for?</p>
              <div className="space-y-3">
                {[
                  { value: "social", label: "Social use only", description: "Personal use such as shopping or visiting friends and family." },
                  { value: "commuting", label: "Social and commuting", description: "Personal use and commuting to a single base location." },
                  { value: "business", label: "Social, commuting and business", description: "You drive to various locations for work." },
                ].map((option) => (
                  <label key={option.value} className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="car-usage"
                      value={option.value}
                      checked={carUsage === option.value}
                      onChange={(e) => setCarUsage(e.target.value as CarUsage)}
                      className="w-5 h-5 text-blue-600 cursor-pointer mt-1 flex-shrink-0"
                    />
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{option.label}</p>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* License & Claims Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">06</span> License & Claims</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    License Type
                  </label>
                  <div className="relative">
                    <select
                      value={licenseType}
                      onChange={(e) => setLicenseType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer transition-all duration-200 hover:border-gray-400 bg-white"
                    >
                      <option value="">Select license type</option>
                      <option value="category-b">Category B</option>
                      <option value="category-be">Category BE</option>
                      <option value="category-c">Category C</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    License Held
                  </label>
                  <div className="relative">
                    <select
                      value={licenseHeld}
                      onChange={(e) => setLicenseHeld(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer transition-all duration-200 hover:border-gray-400 bg-white"
                    >
                      <option value="">Select how long held</option>
                      <option value="less-2">Less than 2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="more-5">More than 5 years</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    License Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter license number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    No Claims Bonus
                  </label>
                  <div className="relative">
                    <select
                      value={nclYears}
                      onChange={(e) => setNclYears(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer transition-all duration-200 hover:border-gray-400 bg-white"
                    >
                      <option value="">Select NCB years</option>
                      <option value="0">0 years</option>
                      <option value="1">1 year</option>
                      <option value="2">2 years</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5+ years</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Voluntary Excess
                  </label>
                  <div className="relative">
                    <select
                      value={excessAmount}
                      onChange={(e) => setExcessAmount(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none cursor-pointer transition-all duration-200 hover:border-gray-400 bg-white"
                    >
                      <option value="">Select excess amount</option>
                      <option value="100">£100</option>
                      <option value="250">£250</option>
                      <option value="500">£500</option>
                      <option value="1000">£1000</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Declarations Section */}
          <div className="mb-8">
            <div className="mb-6 pb-3 border-b-2 border-blue-200">
              <h2 className="text-lg font-bold text-gray-900"><span className="text-blue-600">07</span> Declarations</h2>
            </div>

            <div className="space-y-6">
              {[
                { key: "criminal", label: "Do you have any unspent or outstanding criminal convictions?" },
                { key: "medical", label: "Do you have any medical conditions that are notifiable to the DVLA?" },
                { key: "insurance", label: "Have you ever had insurance cancelled, a claim refused, a policy voided, or any special terms imposed?" },
              ].map((item) => (
                <div key={item.key}>
                  <p className="text-gray-900 font-semibold mb-3">{item.label}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        if (item.key === "criminal") setCriminalConvictions(true);
                        if (item.key === "medical") setMedicalConditions(true);
                        if (item.key === "insurance") setInsuranceCancelled(true);
                      }}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        (item.key === "criminal" && criminalConvictions === true) ||
                        (item.key === "medical" && medicalConditions === true) ||
                        (item.key === "insurance" && insuranceCancelled === true)
                          ? "bg-gradient-to-r from-gray-300 to-gray-400 text-white"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        if (item.key === "criminal") setCriminalConvictions(false);
                        if (item.key === "medical") setMedicalConditions(false);
                        if (item.key === "insurance") setInsuranceCancelled(false);
                      }}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        (item.key === "criminal" && criminalConvictions === false) ||
                        (item.key === "medical" && medicalConditions === false) ||
                        (item.key === "insurance" && insuranceCancelled === false)
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                          : "border border-gray-300 text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-6 border-t border-gray-100">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
