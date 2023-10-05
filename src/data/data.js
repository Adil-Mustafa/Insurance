const sampleData = [
  {
    firstHeading:
      "Primary care visit to treat an injury or illness (in network provider)",
    secondHeading:
      "Primary care visit to treat an injury or illness (out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Specialist Visit (in-network provider)",
    secondHeading: "Specialist Visit (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading:
      "Preventive care/screening/immunization (in-network provider)",
    secondHeading:
      "Preventive care/screening/immunization(out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Diagnostic test (x-ray, blood work)  (in-network provider)",
    secondHeading:
      "Diagnostic test (x-ray, blood work) (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Imaging (CT/PET scans, MRIs) (in-network provider)",
    secondHeading: "Imaging (CT/PET scans, MRIs) (out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Generic drugs - Tier 1 (in-network provider)",
    secondHeading: "Generic drugs - Tier 1 (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Preferred brand drugs - Tier 2 (in-network provider)",
    secondHeading: "Preferred brand drugs - Tier 2 (out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Non-preferred brand drugs  - Tier 2 (in-network provider)",
    secondHeading:
      "Non-preferred brand drugs  - Tier 2 (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Specialty drugs  - Tier 4 (in-network provider)",
    secondHeading: "Specialty drugs  - Tier 4  (out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Specialist Visit (in-network provider)",
    secondHeading: "Specialist Visit (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading:
      "Facility fee (e.g., ambulatory surgery center) (in-network provider)",
    secondHeading:
      "Facility fee (e.g., ambulatory surgery center)  (out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Physician/surgeon fees (in-network provider)",
    secondHeading: "Physician/surgeon fees (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Emergency room care  (in-network provider)",
    secondHeading: "Emergency room care  (out of network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Emergency medical transportation (in-network provider)",
    secondHeading:
      "Emergency medical transportation  (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Urgent care (in-network provider)",
    secondHeading: "Urgent care (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Facility fee (e.g., hospital room)  (in-network provider)",
    secondHeading:
      "Facility fee (e.g., hospital room)  (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Physician/surgeon fees (in-network provider)",
    secondHeading: "Physician/surgeon fees  (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Outpatient services (in-network provider)",
    secondHeading: "Outpatient services (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Inpatient services (in-network provider)",
    secondHeading: "Inpatient services (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Office visits  (in-network provider)",
    secondHeading: "Office visits (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading:
      "Childbirth/delivery professional services (in-network provider)",
    secondHeading:
      "Childbirth/delivery professional services (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Childbirth/delivery facility services (in-network provider)",
    secondHeading:
      "Childbirth/delivery facility services (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Home health care  (in-network provider)",
    secondHeading: "Home health care (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Rehabilitation services (in-network provider)",
    secondHeading: "Rehabilitation services (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Habilitation services (in-network provider)",
    secondHeading: "Habilitation services (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Skilled nursing care (in-network provider)",
    secondHeading: "Skilled nursing care (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Durable medical equipment (in-network provider)",
    secondHeading: "Durable medical equipment (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Hospice services (in-network provider)",
    secondHeading: "Hospice services (out of network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Children’s eye exam (in-network provider)",
    secondHeading: "Children’s eye exam (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Children’s glasses (in-network provider)",
    secondHeading: "Children’s glasses (out-of-network provider)",
    paragraphs: [
      "$95/visit",
      "$60/visit",
      "20% Coinsurance",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
  {
    firstHeading: "Children’s dental check-up  (in-network provider)",
    secondHeading: "Children’s dental check-up  (out-of-network provider)",
    paragraphs: [
      "$60/visit",
      "$60/visit",
      "$60/visit",
      "Not Covered",
      "Not Covered",
      "Not Covered",
    ],
  },
];

export default sampleData;
