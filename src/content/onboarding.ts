import type { Consent, DocRequirement, RoleDef, Section } from "@/lib/onboarding";

/* ===========================================================================
   Shared building blocks
   =========================================================================== */

const ABOUT_YOU: Section = {
  title: "About you",
  intro: "How we reach you, and where you are.",
  fields: [
    { name: "fullName", label: "Full name", type: "text", required: true },
    { name: "email", label: "Email address", type: "email", required: true },
    {
      name: "phone",
      label: "Phone number",
      type: "tel",
      required: true,
      help: "Include the country code.",
    },
    { name: "country", label: "Country", type: "text", required: true },
    { name: "city", label: "City or town", type: "text", required: true },
    {
      name: "languages",
      label: "Languages you can work in",
      type: "text",
      required: true,
      placeholder: "e.g. English, Swahili, French",
    },
  ],
};

const ABOUT_YOU_PERSONAL: Section = {
  title: "About you",
  intro: "Only what the app needs to point you at the right support.",
  fields: [
    { name: "fullName", label: "Full name", type: "text", required: true },
    { name: "email", label: "Email address", type: "email", required: true },
    { name: "phone", label: "Phone number", type: "tel", required: false },
    { name: "country", label: "Country", type: "text", required: true },
    { name: "city", label: "City or town", type: "text", required: false },
    {
      name: "language",
      label: "Preferred language",
      type: "text",
      required: false,
      placeholder: "e.g. English",
    },
  ],
};

const ID_DOC: DocRequirement = {
  key: "photo-id",
  label: "Government photo identification",
  category: "identity",
  description:
    "Passport, national ID or driving licence. The name must match the name on your qualifications.",
  required: true,
  needsNumber: true,
  needsExpiry: true,
};

const POLICE_CLEARANCE: DocRequirement = {
  key: "police-clearance",
  label: "Police or criminal record clearance",
  category: "safeguarding",
  description:
    "Issued within the last 12 months by your national police service or the equivalent vetting body (DBS, PCC, Garda vetting).",
  required: true,
  needsIssuer: true,
  needsIssued: true,
};

const INDEMNITY: DocRequirement = {
  key: "indemnity",
  label: "Professional indemnity insurance",
  category: "insurance",
  description:
    "Current certificate showing cover, insurer and policy number. Cover must be active for the whole period you practise through CareCircle.",
  required: true,
  needsIssuer: true,
  needsNumber: true,
  needsExpiry: true,
};

const PROFESSIONAL_CONSENTS: Consent[] = [
  {
    key: "truthful",
    label:
      "Everything I have entered is true, and the documents I have uploaded are genuine, current and mine.",
    required: true,
  },
  {
    key: "verification",
    label:
      "I authorise CareCircle to verify my qualifications, registration and clearances directly with the issuing institutions and regulators.",
    required: true,
  },
  {
    key: "scope",
    label:
      "I will work only within my registered scope of practice, and I will not diagnose, prescribe or advise outside it.",
    required: true,
  },
  {
    key: "escalation",
    label:
      "I have read the crisis and safeguarding policy, and I will escalate risk to emergency services and the person's care team rather than manage it alone.",
    required: true,
  },
  {
    key: "notify",
    label:
      "I will tell CareCircle within 7 days if my registration, insurance or clearance lapses, is suspended, or is subject to investigation.",
    required: true,
  },
  {
    key: "data",
    label:
      "I will handle the personal and health information of people I support in line with data protection law and professional confidentiality.",
    required: true,
  },
  {
    key: "terms",
    label: "I accept the terms of use and the privacy notice.",
    required: true,
  },
];

const PERSONAL_CONSENTS: Consent[] = [
  {
    key: "not-emergency",
    label:
      "I understand CareCircle is not an emergency service, and that in a crisis I should call my local emergency number.",
    required: true,
  },
  {
    key: "not-medical",
    label:
      "I understand this app offers education and self-help support, and does not replace my care team.",
    required: true,
  },
  {
    key: "contact",
    label:
      "CareCircle may contact me about my registration and any support I request.",
    required: true,
  },
  {
    key: "share",
    label:
      "If I request counselling or a dietitian, I agree that what I entered on this form may be shared with the professional taking my case.",
    required: true,
  },
  {
    key: "terms",
    label: "I accept the terms of use and the privacy notice.",
    required: true,
  },
];

/* ===========================================================================
   Roles
   =========================================================================== */

const PATIENT: RoleDef = {
  key: "patient",
  name: "Patient",
  tagline: "I am the person living with the condition",
  who: "Anyone with a diagnosis — new, long-standing, in treatment, in remission or receiving palliative care.",
  verified: false,
  reviewDays: "Immediate — there is nothing to verify",
  sections: [
    ABOUT_YOU_PERSONAL,
    {
      title: "Your health",
      intro:
        "All optional except the first. It only shapes what the app shows you, and it stays on your device unless you ask for a referral.",
      fields: [
        {
          name: "condition",
          label: "Main condition",
          type: "text",
          required: true,
          placeholder: "e.g. breast cancer, kidney disease, Parkinson's",
        },
        {
          name: "stage",
          label: "Where are you in this?",
          type: "select",
          required: false,
          options: [
            "Recently diagnosed",
            "In active treatment",
            "Living with a long-term condition",
            "In remission or recovery",
            "Receiving palliative or hospice care",
            "Prefer not to say",
          ],
        },
        {
          name: "support",
          label: "What would help most right now?",
          type: "multiselect",
          required: false,
          options: [
            "Emotional support",
            "Anxiety or low mood",
            "Sleep",
            "Pain and distress",
            "Nutrition and eating",
            "Family communication",
            "Spiritual care",
            "Practical and financial help",
          ],
        },
        {
          name: "team",
          label: "Hospital or clinic (optional)",
          type: "text",
          required: false,
        },
      ],
    },
    {
      title: "Someone we can contact",
      intro:
        "Used only if you ask for help and we cannot reach you. Tell them you have listed them.",
      fields: [
        { name: "emergencyName", label: "Name", type: "text", required: false },
        {
          name: "emergencyRelation",
          label: "Relationship to you",
          type: "text",
          required: false,
        },
        {
          name: "emergencyPhone",
          label: "Phone number",
          type: "tel",
          required: false,
        },
      ],
    },
  ],
  documents: [],
  consents: PERSONAL_CONSENTS,
};

const FAMILY: RoleDef = {
  key: "family",
  name: "Family member or loved one",
  tagline: "Someone I love is ill",
  who: "Partners, adult children, parents, siblings and close friends — including those supporting from a distance.",
  verified: false,
  reviewDays: "Immediate — unless you are acting on someone's behalf",
  sections: [
    ABOUT_YOU_PERSONAL,
    {
      title: "Who you are supporting",
      fields: [
        {
          name: "relationship",
          label: "Your relationship to them",
          type: "select",
          required: true,
          options: [
            "Partner or spouse",
            "Adult child",
            "Parent",
            "Sibling",
            "Grandchild",
            "Friend",
            "Other",
          ],
        },
        {
          name: "theirCondition",
          label: "Their condition (optional)",
          type: "text",
          required: false,
        },
        {
          name: "alsoCaring",
          label: "Are you also providing hands-on care?",
          type: "select",
          required: true,
          options: [
            "No — I support emotionally and practically",
            "Yes — some of the time",
            "Yes — I am the main carer",
          ],
          help: "If you are the main carer, the caregiver support section is written for you.",
        },
        {
          name: "children",
          label: "Are there children in the family affected by this?",
          type: "select",
          required: false,
          options: ["No", "Yes — under 5", "Yes — 5 to 12", "Yes — teenagers", "Yes — several ages"],
        },
        {
          name: "support",
          label: "What would help most right now?",
          type: "multiselect",
          required: false,
          options: [
            "Understanding the diagnosis",
            "Talking to them about it",
            "Supporting children",
            "Family conflict",
            "Financial stress",
            "Anticipatory grief",
            "Bereavement",
            "Looking after myself",
          ],
        },
      ],
    },
    {
      title: "Acting on their behalf",
      intro:
        "Only if you will make decisions or hold conversations for them. Otherwise skip this.",
      fields: [
        {
          name: "authority",
          label: "Do you have legal authority to act for them?",
          type: "select",
          required: false,
          options: [
            "No",
            "Yes — power of attorney",
            "Yes — court-appointed deputy or guardian",
            "Yes — their written consent",
          ],
        },
      ],
    },
  ],
  documents: [
    {
      key: "authority-document",
      label: "Power of attorney or written consent",
      category: "statutory",
      description:
        "Only required if you will act on the patient's behalf. Without it we cannot discuss their care with you.",
      required: false,
      needsIssued: true,
    },
  ],
  consents: PERSONAL_CONSENTS,
};

const COUNSELLOR: RoleDef = {
  key: "counsellor",
  name: "Counsellor or psychologist",
  tagline: "I provide psychological support",
  who: "Registered counsellors, psychotherapists, clinical and counselling psychologists, and psychiatric social workers.",
  verified: true,
  reviewDays: "5–10 working days",
  sections: [
    ABOUT_YOU,
    {
      title: "Your practice",
      fields: [
        {
          name: "title",
          label: "Professional title",
          type: "select",
          required: true,
          options: [
            "Counsellor",
            "Psychotherapist",
            "Counselling psychologist",
            "Clinical psychologist",
            "Psychiatric social worker",
            "Psychiatric nurse (mental health)",
          ],
        },
        {
          name: "years",
          label: "Years in practice since qualifying",
          type: "number",
          required: true,
        },
        {
          name: "modalities",
          label: "Main approaches you work in",
          type: "multiselect",
          required: true,
          options: [
            "CBT",
            "ACT",
            "Person-centred",
            "Psychodynamic",
            "EMDR",
            "Systemic / family",
            "Grief-specific (prolonged grief therapy)",
            "Meaning-centred / dignity therapy",
            "Group work",
          ],
        },
        {
          name: "populations",
          label: "Populations you are experienced with",
          type: "multiselect",
          required: true,
          options: [
            "Oncology",
            "Palliative and end-of-life",
            "Bereavement",
            "Caregivers",
            "Children and adolescents",
            "Couples and families",
            "Chronic pain",
            "Dialysis and transplant",
            "Dementia",
            "HIV",
          ],
        },
        {
          name: "employer",
          label: "Current practice, employer or hospital",
          type: "text",
          required: true,
        },
        {
          name: "supervisor",
          label: "Clinical supervisor's name and registration number",
          type: "text",
          required: true,
          help: "We contact your supervisor as part of verification.",
        },
        {
          name: "delivery",
          label: "How can you see people?",
          type: "multiselect",
          required: true,
          options: ["In person", "Video", "Telephone", "Home visits", "Hospital or hospice visits"],
        },
        {
          name: "capacity",
          label: "How many new people could you take each month?",
          type: "number",
          required: true,
        },
        {
          name: "fees",
          label: "Fee arrangements",
          type: "textarea",
          required: true,
          placeholder:
            "Standard fee, sliding scale, any free or subsidised slots, insurance accepted.",
        },
      ],
    },
  ],
  documents: [
    {
      key: "degree",
      label: "Degree or diploma in counselling, psychology or psychotherapy",
      category: "academic",
      description:
        "The qualification that entitles you to register. Upload the certificate, not a transcript summary.",
      required: true,
      needsIssuer: true,
      needsIssued: true,
    },
    {
      key: "postgraduate",
      label: "Postgraduate or specialist training",
      category: "academic",
      description:
        "Optional. Palliative care, oncology, grief therapy, child bereavement, EMDR and similar.",
      required: false,
      needsIssuer: true,
      needsIssued: true,
    },
    {
      key: "registration",
      label: "Professional registration or licence",
      category: "statutory",
      description:
        "Registration with your national council or board — the statutory body that can strike you off.",
      required: true,
      needsIssuer: true,
      needsNumber: true,
      needsExpiry: true,
    },
    {
      key: "practising-certificate",
      label: "Current practising certificate",
      category: "statutory",
      description:
        "The annual certificate confirming you are licensed to practise this year.",
      required: true,
      needsNumber: true,
      needsExpiry: true,
    },
    INDEMNITY,
    POLICE_CLEARANCE,
    {
      key: "supervision-letter",
      label: "Confirmation of clinical supervision",
      category: "reference",
      description:
        "A short letter from your supervisor confirming the arrangement and its frequency.",
      required: true,
      needsIssued: true,
    },
    ID_DOC,
  ],
  consents: PROFESSIONAL_CONSENTS,
};

const NUTRITIONIST: RoleDef = {
  key: "nutritionist",
  name: "Dietitian or nutritionist",
  tagline: "I provide nutrition and dietetic care",
  who: "Registered dietitians and registered nutritionists working in clinical, community or private practice.",
  verified: true,
  reviewDays: "5–10 working days",
  sections: [
    ABOUT_YOU,
    {
      title: "Your practice",
      fields: [
        {
          name: "title",
          label: "Professional title",
          type: "select",
          required: true,
          options: [
            "Registered dietitian",
            "Registered nutritionist",
            "Clinical nutritionist",
            "Nutrition and dietetics technician",
          ],
        },
        {
          name: "years",
          label: "Years in practice since qualifying",
          type: "number",
          required: true,
        },
        {
          name: "specialisms",
          label: "Clinical specialisms",
          type: "multiselect",
          required: true,
          options: [
            "Renal",
            "Oncology",
            "Diabetes",
            "Cardiology",
            "Liver",
            "Gastroenterology",
            "Paediatrics",
            "Enteral and tube feeding",
            "Dysphagia and texture modification",
            "Malnutrition and frailty",
            "Palliative care",
            "Maternal nutrition",
          ],
        },
        {
          name: "setting",
          label: "Where do you currently work?",
          type: "text",
          required: true,
          placeholder: "Hospital, clinic, community service or private practice",
        },
        {
          name: "delivery",
          label: "How can you see people?",
          type: "multiselect",
          required: true,
          options: ["In person", "Video", "Telephone", "Home visits", "Group clinics"],
        },
        {
          name: "capacity",
          label: "How many new people could you take each month?",
          type: "number",
          required: true,
        },
        {
          name: "fees",
          label: "Fee arrangements",
          type: "textarea",
          required: true,
          placeholder: "Standard fee, sliding scale, subsidised slots, insurance accepted.",
        },
      ],
    },
  ],
  documents: [
    {
      key: "degree",
      label: "Degree in dietetics or human nutrition",
      category: "academic",
      description:
        "The qualification that entitles you to register in your country.",
      required: true,
      needsIssuer: true,
      needsIssued: true,
    },
    {
      key: "internship",
      label: "Clinical internship or community service certificate",
      category: "academic",
      description:
        "Where your country requires supervised practice before independent registration.",
      required: false,
      needsIssuer: true,
      needsIssued: true,
    },
    {
      key: "registration",
      label: "Registration with the dietetics or nutrition council",
      category: "statutory",
      description:
        "Statutory registration — for example HPCSA, HCPC, CDR, or your national nutritionists' board.",
      required: true,
      needsIssuer: true,
      needsNumber: true,
      needsExpiry: true,
    },
    {
      key: "practising-certificate",
      label: "Current practising certificate",
      category: "statutory",
      description: "The annual certificate confirming you are licensed this year.",
      required: true,
      needsNumber: true,
      needsExpiry: true,
    },
    {
      key: "specialist-certification",
      label: "Specialist certification",
      category: "academic",
      description:
        "Optional. Renal, oncology, paediatric, diabetes or enteral nutrition certification.",
      required: false,
      needsIssuer: true,
      needsExpiry: true,
    },
    INDEMNITY,
    POLICE_CLEARANCE,
    ID_DOC,
  ],
  consents: PROFESSIONAL_CONSENTS,
};

/* --------------------------------------------------------------- caregiver */

const CAREGIVER_INDIVIDUAL_SECTIONS: Section[] = [
  {
    title: "Your caring work",
    fields: [
      {
        name: "carerType",
        label: "Which describes you?",
        type: "select",
        required: true,
        options: [
          "Care assistant / health care assistant",
          "Home-based carer",
          "Enrolled or registered nurse",
          "Palliative or hospice care worker",
          "Community health worker",
          "Trained volunteer carer",
        ],
      },
      { name: "years", label: "Years of caring experience", type: "number", required: true },
      {
        name: "skills",
        label: "What are you trained and competent to do?",
        type: "multiselect",
        required: true,
        options: [
          "Personal care and hygiene",
          "Safe moving and handling",
          "Feeding assistance",
          "Texture-modified diets and thickened fluids",
          "Medication prompting",
          "Medication administration",
          "Wound and pressure area care",
          "Stoma or catheter care",
          "PEG or NG tube feeding",
          "End-of-life and palliative care",
          "Dementia care",
          "Basic life support",
        ],
      },
      {
        name: "employment",
        label: "How do you work?",
        type: "select",
        required: true,
        options: [
          "Employed by an agency or institution",
          "Self-employed / independent",
          "Volunteer",
        ],
      },
      {
        name: "employerName",
        label: "Current or most recent employer",
        type: "text",
        required: true,
      },
      {
        name: "availability",
        label: "Availability",
        type: "multiselect",
        required: true,
        options: ["Weekdays", "Evenings", "Nights", "Weekends", "Live-in", "On call"],
      },
      {
        name: "travel",
        label: "How far will you travel?",
        type: "text",
        required: false,
        placeholder: "e.g. within 15 km of the city centre",
      },
    ],
  },
];

const CAREGIVER_INDIVIDUAL_DOCS: DocRequirement[] = [
  {
    key: "care-qualification",
    label: "Care or nursing qualification",
    category: "academic",
    description:
      "Care certificate, nursing assistant certificate, NVQ / NQF care award, or nursing diploma or degree.",
    required: true,
    needsIssuer: true,
    needsIssued: true,
  },
  {
    key: "palliative-training",
    label: "Palliative or specialist care training",
    category: "academic",
    description:
      "Optional but strongly preferred for hospice work — palliative care, dementia care, or end-of-life training.",
    required: false,
    needsIssuer: true,
    needsIssued: true,
  },
  {
    key: "nursing-registration",
    label: "Nursing or care council registration",
    category: "statutory",
    description:
      "Required if you are a nurse or your country registers care workers. Give the council and your registration number.",
    required: false,
    needsIssuer: true,
    needsNumber: true,
    needsExpiry: true,
  },
  {
    key: "first-aid",
    label: "First aid or basic life support certificate",
    category: "statutory",
    description: "Must be current. Most certificates expire after two or three years.",
    required: true,
    needsIssuer: true,
    needsExpiry: true,
  },
  POLICE_CLEARANCE,
  {
    key: "occupational-health",
    label: "Occupational health and immunisation record",
    category: "health",
    description:
      "Fitness-to-work clearance, hepatitis B status and tuberculosis screening, as required where you work.",
    required: true,
    needsIssuer: true,
    needsIssued: true,
  },
  {
    key: "references",
    label: "Two professional references",
    category: "reference",
    description:
      "Names, roles and contact details of two people who have supervised your care work. Upload letters if you have them.",
    required: true,
  },
  ID_DOC,
];

const CAREGIVER_ORG_SECTIONS: Section[] = [
  {
    title: "The organisation",
    fields: [
      { name: "orgName", label: "Registered organisation name", type: "text", required: true },
      {
        name: "orgType",
        label: "Type of service",
        type: "select",
        required: true,
        options: [
          "Hospice / palliative care unit",
          "Home care agency",
          "Nursing home or care home",
          "Hospital",
          "Rehabilitation centre",
          "Day care or respite centre",
          "Community health organisation",
        ],
      },
      { name: "founded", label: "Year established", type: "number", required: true },
      {
        name: "address",
        label: "Physical address of the service",
        type: "textarea",
        required: true,
      },
      { name: "website", label: "Website", type: "text", required: false },
      {
        name: "capacity",
        label: "Beds, or clients supported at one time",
        type: "number",
        required: true,
      },
      {
        name: "services",
        label: "Services provided",
        type: "multiselect",
        required: true,
        options: [
          "Inpatient palliative care",
          "Home-based palliative care",
          "Respite care",
          "Nursing care",
          "Personal and social care",
          "Bereavement support",
          "Day hospice",
          "Rehabilitation",
          "Dementia care",
          "Spiritual care",
        ],
      },
      {
        name: "staffing",
        label: "Clinical staffing",
        type: "textarea",
        required: true,
        placeholder:
          "Numbers by role — registered nurses, care assistants, doctors, counsellors, therapists — and your staff-to-patient ratio.",
      },
      {
        name: "afterHours",
        label: "Out-of-hours arrangements",
        type: "textarea",
        required: true,
        placeholder: "Who covers nights and weekends, and how families reach you at 3am.",
      },
    ],
  },
  {
    title: "Who is accountable",
    intro:
      "We verify a named clinician and a named signatory. Both must be reachable.",
    fields: [
      {
        name: "clinicianName",
        label: "Named responsible clinician",
        type: "text",
        required: true,
      },
      {
        name: "clinicianRole",
        label: "Their role",
        type: "text",
        required: true,
        placeholder: "e.g. Medical Director, Matron, Lead Nurse",
      },
      {
        name: "clinicianRegistration",
        label: "Their professional registration number and council",
        type: "text",
        required: true,
      },
      { name: "signatoryName", label: "Authorised signatory", type: "text", required: true },
      { name: "signatoryRole", label: "Their role", type: "text", required: true },
      { name: "signatoryEmail", label: "Their email", type: "email", required: true },
    ],
  },
];

const CAREGIVER_ORG_DOCS: DocRequirement[] = [
  {
    key: "facility-licence",
    label: "Health facility operating licence",
    category: "statutory",
    description:
      "The licence from your national or regional health authority permitting this service to operate at this address.",
    required: true,
    needsIssuer: true,
    needsNumber: true,
    needsExpiry: true,
  },
  {
    key: "company-registration",
    label: "Company or non-profit registration certificate",
    category: "statutory",
    description:
      "Certificate of incorporation, NPO or trust registration — whatever your legal form is.",
    required: true,
    needsIssuer: true,
    needsNumber: true,
    needsIssued: true,
  },
  {
    key: "tax-compliance",
    label: "Tax compliance or exemption certificate",
    category: "statutory",
    description: "Current tax clearance, or the exemption certificate for a charity.",
    required: true,
    needsNumber: true,
    needsExpiry: true,
  },
  {
    key: "accreditation",
    label: "Accreditation or quality certification",
    category: "statutory",
    description:
      "Optional. Palliative care association accreditation, ISO, or national quality certification.",
    required: false,
    needsIssuer: true,
    needsExpiry: true,
  },
  {
    key: "clinician-registration",
    label: "Named clinician's professional registration",
    category: "clinical",
    description:
      "Registration certificate and current practising certificate for the responsible clinician named above.",
    required: true,
    needsIssuer: true,
    needsNumber: true,
    needsExpiry: true,
  },
  {
    key: "org-indemnity",
    label: "Professional indemnity and public liability insurance",
    category: "insurance",
    description:
      "Certificate showing both covers, the insurer, the policy number and the sum insured.",
    required: true,
    needsIssuer: true,
    needsNumber: true,
    needsExpiry: true,
  },
  {
    key: "safeguarding-policy",
    label: "Safeguarding policy for vulnerable adults and children",
    category: "safeguarding",
    description:
      "Your written policy, including how allegations are reported and to whom.",
    required: true,
    needsIssued: true,
  },
  {
    key: "staff-vetting",
    label: "Staff vetting statement",
    category: "safeguarding",
    description:
      "A signed statement that every member of staff and every volunteer with patient contact holds a current police clearance, and how you evidence it.",
    required: true,
    needsIssued: true,
  },
  {
    key: "inspection-report",
    label: "Most recent inspection or quality report",
    category: "statutory",
    description:
      "Optional but it speeds verification considerably. Include any improvement notices and what you did about them.",
    required: false,
    needsIssued: true,
  },
  {
    key: "signatory-id",
    label: "Photo identification of the authorised signatory",
    category: "identity",
    description: "Passport, national ID or driving licence.",
    required: true,
    needsNumber: true,
    needsExpiry: true,
  },
];

const CAREGIVER: RoleDef = {
  key: "caregiver",
  name: "Caregiver or care provider",
  tagline: "I provide hands-on care — as an individual or an institution",
  who: "Care assistants, nurses, home carers and palliative care workers; and hospices, home care agencies, nursing homes and hospitals.",
  verified: true,
  reviewDays: "10–15 working days, including reference and regulator checks",
  variantQuestion: "Are you registering yourself, or an organisation?",
  variants: [
    {
      key: "individual",
      name: "An individual caregiver",
      blurb:
        "You provide care yourself — employed, self-employed or as a trained volunteer.",
      sections: CAREGIVER_INDIVIDUAL_SECTIONS,
      documents: CAREGIVER_INDIVIDUAL_DOCS,
    },
    {
      key: "organisation",
      name: "An organisation or institution",
      blurb:
        "A hospice, home care agency, nursing home, hospital or community care provider.",
      sections: CAREGIVER_ORG_SECTIONS,
      documents: CAREGIVER_ORG_DOCS,
    },
  ],
  sections: [ABOUT_YOU],
  documents: [],
  consents: [
    ...PROFESSIONAL_CONSENTS,
    {
      key: "staff-checks",
      label:
        "Everyone I deploy to a patient — staff or volunteer — holds a current police clearance and works within their training.",
      required: true,
    },
  ],
};

export const ROLES: RoleDef[] = [PATIENT, FAMILY, COUNSELLOR, NUTRITIONIST, CAREGIVER];

export function findRole(key: string) {
  return ROLES.find((r) => r.key === key);
}

/** Sections and documents for a role, with the chosen variant folded in. */
export function resolveRole(role: RoleDef, variantKey?: string) {
  const variant = role.variants?.find((v) => v.key === variantKey);
  return {
    variant,
    sections: [...role.sections, ...(variant?.sections ?? [])],
    documents: [...role.documents, ...(variant?.documents ?? [])],
  };
}

export const VERIFICATION_STEPS = [
  {
    title: "1. You apply",
    body: "You complete the form and upload your documents. You can stop and come back — everything is saved on your device until you submit.",
  },
  {
    title: "2. Documents checked",
    body: "We read every document, check the names match, and confirm nothing has expired.",
  },
  {
    title: "3. Regulator and referees contacted",
    body: "We verify your registration directly with the council or board that issued it, and contact your supervisor or referees.",
  },
  {
    title: "4. Conversation",
    body: "A short call about your experience, your scope of practice, and how you handle risk and escalation.",
  },
  {
    title: "5. Verified",
    body: "You are listed and can start taking referrals. We re-check registration, insurance and clearance annually, and whenever a document expires.",
  },
];

export const WHY_DOCUMENTS = [
  "The people using CareCircle are seriously ill, frightened, and often unable to check anyone's credentials themselves.",
  "Families let caregivers into their homes and leave them alone with someone vulnerable.",
  "A counsellor working outside their competence with a dying patient can do real harm.",
  "Nutrition advice given to someone on dialysis, or in liver failure, can be dangerous if it comes from the wrong hands.",
  "Regulators exist so that someone struck off in one place cannot simply start again in another. Checking with them is the point.",
];
