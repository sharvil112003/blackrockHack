const schemeData = [
    {
      "id": 1,
      "name": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      "description": "Provides income support of ₹6,000 per year to small and marginal farmer families.",
      "eligibility": "All small and marginal farmer families with landholdings up to 2 hectares.",
      "benefits": "₹6,000 per year paid in three equal installments.",
      "state": "All India",
      "applicationlink": "https://pmkisan.gov.in/"
    },
    {
      "id": 2,
      "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      "description": "Provides crop insurance to farmers against natural calamities, pests, and diseases.",
      "eligibility": "All farmers growing notified crops in notified areas.",
      "benefits": "Coverage of production cost and financial support in case of crop loss.",
      "state": "All India",
      "applicationlink": "https://pmfby.gov.in/"
    },
    {
      "id": 3,
      "name": "Soil Health Card Scheme",
      "description": "Provides soil health cards to farmers to help them understand the nutrient status of their soil.",
      "eligibility": "All farmers.",
      "benefits": "Personalized soil health report and recommendations for soil management.",
      "state": "All India",
      "applicationlink": "https://soilhealth.dac.gov.in/"
    },
    {
      "id": 4,
      "name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
      "description": "Aims to enhance water use efficiency through micro-irrigation projects.",
      "eligibility": "Farmers practicing irrigation.",
      "benefits": "Subsidies for irrigation systems and water-saving technologies.",
      "state": "All India",
      "applicationlink": "https://pmksy.gov.in/"
    },
    {
      "id": 5,
      "name": "Kisan Credit Card (KCC)",
      "description": "Provides farmers with timely access to credit for their cultivation needs.",
      "eligibility": "Farmers, tenant farmers, sharecroppers, and self-help groups.",
      "benefits": "Short-term credit for crop cultivation and ancillary activities.",
      "state": "All India",
      "applicationlink": "https://www.kisancreditcard.com/"
    },
    {
      "id": 6,
      "name": "National Agriculture Market (e-NAM)",
      "description": "Creates a unified national market for agricultural commodities.",
      "eligibility": "Farmers, traders, and agribusinesses.",
      "benefits": "Better price discovery and transparent auctioning processes.",
      "state": "All India",
      "applicationlink": "https://enam.gov.in/"
    },
    {
      "id": 7,
      "name": "Paramparagat Krishi Vikas Yojana (PKVY)",
      "description": "Promotes organic farming through a cluster approach.",
      "eligibility": "Farmers practicing or willing to adopt organic farming.",
      "benefits": "Financial assistance for organic inputs and certification.",
      "state": "All India",
      "applicationlink": "https://pgsindia-ncof.gov.in/pkvy/index.aspx"
    },
    {
      "id": 8,
      "name": "Rashtriya Krishi Vikas Yojana (RKVY)",
      "description": "Provides funds to states for enhancing agricultural productivity.",
      "eligibility": "State governments and UTs.",
      "benefits": "Grants for various agricultural development projects.",
      "state": "All India",
      "applicationlink": "https://rkvy.nic.in/"
    },
    {
      "id": 9,
      "name": "Mukhya Mantri Krishi Ashirwad Yojana (Jharkhand)",
      "description": "Provides financial assistance to farmers for input purchase.",
      "eligibility": "Small and marginal farmers in Jharkhand.",
      "benefits": "₹5,000 per acre up to a maximum of 5 acres.",
      "state": "Jharkhand",
      "applicationlink": "https://mmkay.jharkhand.gov.in/"
    },
    {
      "id": 10,
      "name": "YSR Rythu Bharosa (Andhra Pradesh)",
      "description": "Provides financial assistance to farmers for agricultural investments.",
      "eligibility": "All farmers in Andhra Pradesh, excluding government employees and pensioners.",
      "benefits": "₹13,500 per year per farmer family.",
      "state": "Andhra Pradesh",
      "applicationlink": "https://ysrrythubharosa.ap.gov.in/"
    },
    {
      "id": 11,
      "name": "Bhausaheb Fundkar Falbag Lagvad Yojana (Maharashtra)",
      "description": "Supports the cultivation of fruit crops.",
      "eligibility": "Farmers in Maharashtra with eligible land documents.",
      "benefits": "Subsidies for planting fruit crops.",
      "state": "Maharashtra",
      "applicationlink": "https://mahadbtmahait.gov.in/"
    },
    {
      "id": 12,
      "name": "Krishi Bhagya Scheme (Karnataka)",
      "description": "Aims to improve the livelihood of farmers through rainwater harvesting.",
      "eligibility": "Small and marginal farmers in Karnataka.",
      "benefits": "Subsidies for constructing farm ponds and purchasing water pumps.",
      "state": "Karnataka",
      "applicationlink": "https://raitamitra.karnataka.gov.in/"
    },
    {
      "id": 13,
      "name": "Crop Loan Waiver Scheme (Madhya Pradesh)",
      "description": "Provides loan waiver to farmers.",
      "eligibility": "Farmers with outstanding crop loans.",
      "benefits": "Waiver of outstanding crop loans up to ₹2 lakh.",
      "state": "Madhya Pradesh",
      "applicationlink": "https://mpkrishi.mp.gov.in/"
    },
    {
      "id": 14,
      "name": "Rajiv Gandhi Kisan Nyay Yojana (Chhattisgarh)",
      "description": "Provides financial assistance to farmers for crop cultivation.",
      "eligibility": "Farmers in Chhattisgarh with registered land.",
      "benefits": "Direct benefit transfer based on landholding and crop type.",
      "state": "Chhattisgarh",
      "applicationlink": "https://rgkny.cg.gov.in/"
    },
    {
      "id": 15,
      "name": "KALIA Scheme (Odisha)",
      "description": "Provides financial assistance to farmers and sharecroppers.",
      "eligibility": "Small, marginal farmers, landless agricultural households.",
      "benefits": "₹10,000 per year for crop cultivation and livelihood support.",
      "state": "Odisha",
      "applicationlink": "https://kalia.odisha.gov.in/"
    },
    {
      "id": 16,
      "name": "Bangla Shasya Bima (West Bengal)",
      "description": "Crop insurance scheme for farmers.",
      "eligibility": "All farmers in West Bengal growing notified crops.",
      "benefits": "Insurance coverage for crop loss due to natural calamities.",
      "state": "West Bengal",
      "applicationlink": "https://banglashasyabima.net/"
    },
    {
      "id": 17,
      "name": "Mukhyamantri Krishi Sa Sajuli Yojana (Assam)",
      "description": "Provides financial assistance for the procurement of agricultural tools.",
      "eligibility": "Small and marginal farmers in Assam.",
      "benefits": "₹5,000 per farmer for purchasing farm tools.",
      "state": "Assam",
      "applicationlink": "https://diragri.assam.gov.in/"
    },
    {
      "id": 18,
      "name": "Rythu Bandhu Scheme (Telangana)",
      "description": "Provides financial support for farmers' investment in crops.",
      "eligibility": "All farmers in Telangana with registered land.",
      "benefits": "₹10,000 per acre per year.",
      "state": "Telangana",
      "applicationlink": "https://treasury.telangana.gov.in/"
    },
    {
      "id": 19,
      "name": "Jharkhand Fasal Rahat Yojana (Jharkhand)",
      "description": "Provides financial relief to farmers in case of crop loss.",
      "eligibility": "Farmers in Jharkhand facing crop loss.",
      "benefits": "Compensation for crop loss due to natural disasters.",
      "state": "Jharkhand",
      "applicationlink": "https://jrfy.jharkhand.gov.in/"
    },
    {
      "id": 20,
      "name": "Mukhyamantri Kisan Aay Badhotri Solar Yojana (Bihar)",
      "description": "Promotes solar energy use in agriculture.",
      "eligibility": "Farmers in Bihar.",
      "benefits": "Subsidies for solar pump sets.",
      "state": "Bihar",
      "applicationlink": "https://breda.bih.nic.in/brd/"
    },
    {
        "id": 21,
        "name": "Mukhya Mantri Krishi Udyog Yojana (Bihar)",
        "description": "Encourages entrepreneurship in agriculture by providing financial support for setting up agri-businesses.",
        "eligibility": "Farmers, agri-entrepreneurs, and self-help groups in Bihar.",
        "benefits": "Subsidies for setting up agri-businesses and financial support.",
        "state": "Bihar",
        "applicationlink": "https://dbtagriculture.bihar.gov.in/"
    },
    {
        "id": 22,
        "name": "Bhavantar Bhugtan Yojana (Madhya Pradesh)",
        "description": "Provides compensation to farmers when market prices of crops fall below the minimum support prices.",
        "eligibility": "Farmers growing specified crops in Madhya Pradesh.",
        "benefits": "Compensation for the difference between market prices and MSP.",
        "state": "Madhya Pradesh",
        "applicationlink": "https://www.mpkrishi.mp.gov.in/"
    },
    {
        "id": 23,
        "name": "Rajiv Gandhi Jal Sanchay Yojana (Rajasthan)",
        "description": "Aims to improve water conservation and management in agriculture.",
        "eligibility": "Farmers in Rajasthan.",
        "benefits": "Financial support for water conservation projects.",
        "state": "Rajasthan",
        "applicationlink": "https://agriculture.rajasthan.gov.in/"
    },
    {
        "id": 24,
        "name": "Rythu Bima (Telangana)",
        "description": "Provides life insurance to farmers in Telangana.",
        "eligibility": "Farmers in Telangana aged 18-59 years.",
        "benefits": "Life insurance coverage of ₹5 lakh.",
        "state": "Telangana",
        "applicationlink": "https://ifmis.telangana.gov.in/"
    },
    {
        "id": 25,
        "name": "Atal Solar Krishi Pump Yojana (Maharashtra)",
        "description": "Promotes the use of solar pumps for irrigation.",
        "eligibility": "Farmers in Maharashtra with valid land ownership documents.",
        "benefits": "Subsidies for solar pump sets.",
        "state": "Maharashtra",
        "applicationlink": "https://www.mahadiscom.in/solar/"
    },
    {
        "id": 26,
        "name": "Karnataka Raitha Suraksha Pradhan Mantri Fasal Bima Yojana",
        "description": "Provides crop insurance to farmers in Karnataka.",
        "eligibility": "All farmers growing notified crops in Karnataka.",
        "benefits": "Coverage of production cost and financial support in case of crop loss.",
        "state": "Karnataka",
        "applicationlink": "https://pmfby.gov.in/"
    },
    {
        "id": 27,
        "name": "Mukhyamantri Krishi Sanjeevani Yojana (Goa)",
        "description": "Promotes organic farming in Goa.",
        "eligibility": "Farmers in Goa willing to adopt organic farming.",
        "benefits": "Financial assistance for organic inputs and certification.",
        "state": "Goa",
        "applicationlink": "https://www.goa.gov.in/"
    },
    {
        "id": 28,
        "name": "Mukhyamantri Krishi Sahay Yojana (Gujarat)",
        "description": "Provides financial assistance to farmers for crop loss due to natural calamities.",
        "eligibility": "Farmers in Gujarat facing crop loss.",
        "benefits": "Compensation for crop loss.",
        "state": "Gujarat",
        "applicationlink": "https://ikhedut.gujarat.gov.in/"
    },
    {
        "id": 29,
        "name": "Mukhyamantri Krishi Sahayata Yojana (Haryana)",
        "description": "Provides financial assistance to farmers for crop loss due to natural calamities.",
        "eligibility": "Farmers in Haryana facing crop loss.",
        "benefits": "Compensation for crop loss.",
        "state": "Haryana",
        "applicationlink": "https://fasal.haryana.gov.in/"
    },
    {
        "id": 30,
        "name": "Kisan Mitra Urja Yojana (Madhya Pradesh)",
        "description": "Provides subsidized electricity for agricultural purposes.",
        "eligibility": "Farmers in Madhya Pradesh with valid electricity connections.",
        "benefits": "Subsidized electricity rates for agriculture.",
        "state": "Madhya Pradesh",
        "applicationlink": "https://www.mppkvvcl.org/"
    },
    {
        "id": 31,
        "name": "Mukhyamantri Khet Suraksha Yojana (Himachal Pradesh)",
        "description": "Protects crops from wild animals.",
        "eligibility": "Farmers in Himachal Pradesh.",
        "benefits": "Financial assistance for fencing and other protective measures.",
        "state": "Himachal Pradesh",
        "applicationlink": "https://www.hpagriculture.com/"
    },
    {
        "id": 32,
        "name": "Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
        "description": "Provides pension to small and marginal farmers.",
        "eligibility": "Farmers aged 18-40 with landholding up to 2 hectares.",
        "benefits": "Monthly pension of ₹3,000 after the age of 60.",
        "state": "All India",
        "applicationlink": "https://pmkmy.gov.in/"
    },
    {
        "id": 33,
        "name": "Krishi Kalyan Abhiyan",
        "description": "Aims to improve the agricultural productivity of the country's farmers.",
        "eligibility": "Farmers in identified villages.",
        "benefits": "Multiple benefits including soil health cards, mini-kits of pulses, and horticulture plants.",
        "state": "Selected districts in various states",
        "applicationlink": "https://www.niti.gov.in/"
    },
    {
        "id": 34,
        "name": "Jai Kisan Rin Mukti Yojana (Madhya Pradesh)",
        "description": "Provides loan waiver to farmers.",
        "eligibility": "Farmers with outstanding loans in Madhya Pradesh.",
        "benefits": "Waiver of outstanding loans.",
        "state": "Madhya Pradesh",
        "applicationlink": "https://mpkrishi.mp.gov.in/"
    },
    {
        "id": 35,
        "name": "Telangana Crop Loan Waiver Scheme",
        "description": "Provides loan waiver to farmers in Telangana.",
        "eligibility": "Farmers with outstanding crop loans.",
        "benefits": "Waiver of outstanding loans up to ₹1 lakh.",
        "state": "Telangana",
        "applicationlink": "https://www.telangana.gov.in/"
    }
      ]

export default schemeData;