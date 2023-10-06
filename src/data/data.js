import Ellipse1 from "../assets/ellipses/Ellipse-1.svg"
import Ellipse2 from "../assets/ellipses/Ellipse-2.svg"
import Ellipse3 from "../assets/ellipses/Ellipse-3.svg"
import Ellipse4 from "../assets/ellipses/Ellipse-4.svg"
import Ellipse5 from "../assets/ellipses/Ellipse-5.svg"
import Ellipse6 from "../assets/ellipses/Ellipse-6.svg"
import Ellipse7 from "../assets/ellipses/Ellipse-7.svg"

const InsuranceData = [
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
      "Preventive care/screening/immunization(out-of-network provider)",
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
    secondHeading: "Imaging (CT/PET scans, MRIs) (out-of-network provider)",
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
    secondHeading: "Preferred brand drugs - Tier 2 (out-of-network provider)",
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
    secondHeading: "Specialty drugs  - Tier 4  (out-of-network provider)",
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
      "Facility fee (e.g., ambulatory surgery center)  (out-of-network provider)",
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
    secondHeading: "Emergency room care  (out-of-network provider)",
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
      "Emergency medical transportation  (out-of-network provider)",
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
      "Facility fee (e.g., hospital room)  (out-of-network provider)",
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
    secondHeading: "Outpatient services (out-of-network provider)",
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
    secondHeading: "Office visits (out-of-network provider)",
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
      "Childbirth/delivery facility services (out-of-network provider)",
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
    secondHeading: "Rehabilitation services (out-of-network provider)",
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
    secondHeading: "Skilled nursing care (out-of-network provider)",
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
    secondHeading: "Hospice services (out-of-network provider)",
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
const UsersReview1 = [
  {
    name:"Jane Cooper",
    position:"Marketing Coordinator",
    details:"“I value simplicity and this platform made health insurance a breeze.”" ,
    avatar: Ellipse1,
  }
,
{
  name:"Wade Warren",
  position:"Software Developer",
  details:"“I now understand my health insurance like never before, thanks to their clear explanations.”"  ,
  avatar:Ellipse7,
}
,

{
  name:"Jacob Jones",
  position:"Student",
  details:"“It's like having a personal health insurance expert by my side!”"  ,
  avatar:Ellipse6,
}
,
{
  name:"Cameron Williamson",
  position:"Medical Assistant",
  details:"“Hauora Health made health insurance design-friendly!”"  ,
  avatar:Ellipse5,
}
]

const UsersReview2 = [
  {
    name:"Brooklyn Simmons",
    position:"Web Designer",
    details:"“Hauora Health made health insurance easy-to-understand! Kudos to the team”"  ,
    avatar: Ellipse1,
  }
,
{
  name:"Leslie Alexander",
  position:"Graphic Designer",
  details:"“Hauora Health is my top recommendation for understanding health insurance.”"  ,
  avatar:Ellipse2,
}
,

{
  name:"Jacob Jones",
  position:"Student",
  details:"“I needed something easy to understand. Hauora Health made health insurance less intimidating and more accessible.”"  ,
  avatar:Ellipse3,
}
,
{
  name:"Theresa Webb",
  position:"Web Designer",
  details:"“Hauora Health simplifies health insurance decisions, making my life easier.”"  ,
  avatar:Ellipse4,
}
]

export default {UsersReview2 ,UsersReview1, InsuranceData };