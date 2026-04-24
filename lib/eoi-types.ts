export interface EOISubmission {
  partnerType: string;
  interestAreas: string[];
  organizationName: string;
  registrationNumber?: string;
  country: string;
  website?: string;
  fullName: string;
  position: string;
  email: string;
  phone: string;
  message: string;
  subscribeNewsletter: boolean;
}

export const partnerTypes = [
  { id: "government", label: "Government / Municipality" },
  { id: "investor", label: "Institutional Investor / Financier" },
  { id: "strategic", label: "Strategic Partner (Technology/Construction)" },
  { id: "development", label: "Development Partner (UN/Bilateral/INGO)" },
  { id: "research", label: "Research / Academic Institution" },
];

export const interestAreas = [
  { id: "circular-hub", label: "Circular Economy Hub Replication" },
  { id: "fortis-os", label: "FORTIS OS Digital Infrastructure" },
  { id: "housing", label: "NZEB EcoTech Housing (GTUCCU Model)" },
  { id: "wolffia", label: "Wolffia-AWG Water Treatment" },
  { id: "solar", label: "Solar Energy Systems" },
];

export const countries = [
  "The Gambia",
  "Ghana",
  "Nigeria",
  "Senegal",
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "South Africa",
  "Cameroon",
  "Ivory Coast",
  "Mali",
  "Burkina Faso",
  "Niger",
  "Chad",
  "Sudan",
  "South Sudan",
  "Liberia",
  "Sierra Leone",
  "Guinea",
  "Guinea-Bissau",
  "Mauritania",
  "Togo",
  "Benin",
  "Democratic Republic of Congo",
  "Republic of Congo",
  "Zambia",
  "Zimbabwe",
  "Malawi",
  "Mozambique",
  "Botswana",
  "Namibia",
  "Angola",
  "Madagascar",
  "Comoros",
  "Seychelles",
  "Mauritius",
  "Eswatini",
  "Lesotho",
  "Cameroon",
  "United Kingdom",
  "Germany",
  "France",
  "United States",
  "Canada",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Italy",
  "Spain",
  "Portugal",
  "Norway",
  "Sweden",
  "Denmark",
  "Finland",
  "Austria",
  "Ireland",
  "Australia",
  "New Zealand",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Other",
];