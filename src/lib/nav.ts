export type NavItem = {
  href: string;
  label: string;
  icon: "home" | "heart" | "leaf" | "pulse" | "users";
  match: string;
};

/** The five thumb-reachable destinations on mobile. */
export const TABS: NavItem[] = [
  { href: "/", label: "Today", icon: "home", match: "^/$" },
  { href: "/support", label: "Support", icon: "heart", match: "^/support" },
  { href: "/nutrition", label: "Nutrition", icon: "leaf", match: "^/nutrition" },
  { href: "/tools", label: "Tools", icon: "pulse", match: "^/tools" },
  { href: "/care", label: "Care", icon: "users", match: "^/care" },
];

export type NavGroup = { title: string; links: { href: string; label: string }[] };

/** The full map, used by the desktop sidebar and the hub pages. */
export const SITE_MAP: NavGroup[] = [
  {
    title: "Today",
    links: [
      { href: "/", label: "Home" },
      { href: "/tools/check-in", label: "Daily check-in" },
      { href: "/tools/dashboard", label: "Progress dashboard" },
    ],
  },
  {
    title: "Emotional support",
    links: [
      { href: "/support/patient", label: "For the patient" },
      { href: "/support/caregiver", label: "For the caregiver" },
      { href: "/support/family", label: "For family & loved ones" },
      { href: "/support/modules", label: "Psychological modules" },
      { href: "/support/anticipatory-grief", label: "Anticipatory grief" },
      { href: "/support/bereavement", label: "Loss & bereavement" },
      { href: "/support/conditions", label: "By medical condition" },
    ],
  },
  {
    title: "Nutrition & dietetics",
    links: [
      { href: "/nutrition/assessment", label: "Nutrition assessment" },
      { href: "/nutrition/conditions", label: "Condition-specific nutrition" },
      { href: "/nutrition/diets", label: "Therapeutic diet plans" },
      { href: "/nutrition/recipes", label: "Healthy recipes" },
      { href: "/nutrition/treatment", label: "Nutrition during treatment" },
      { href: "/nutrition/library", label: "Nutrition education" },
      { href: "/nutrition/tracker", label: "Food & fluid tracker" },
      { href: "/nutrition/assistant", label: "Nutrition assistant" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/tools/check-in", label: "Mood check-in" },
      { href: "/tools/journal", label: "Journal" },
      { href: "/tools/gratitude", label: "Gratitude & reflection" },
      { href: "/tools/breathing", label: "Breathing & relaxation" },
      { href: "/tools/goals", label: "Goals" },
      { href: "/tools/milestones", label: "My milestones" },
      { href: "/tools/screening", label: "Screening questionnaires" },
      { href: "/tools/dashboard", label: "Progress dashboard" },
    ],
  },
  {
    title: "Monitoring",
    links: [
      { href: "/tools/glucose", label: "Blood sugar monitor" },
      { href: "/tools/blood-pressure", label: "Blood pressure monitor" },
      { href: "/nutrition/tracker", label: "Food & fluid tracker" },
    ],
  },
  {
    title: "Professional & peer care",
    links: [
      { href: "/care/counselling", label: "Counselling" },
      { href: "/care/dietitian", label: "Dietitian clinic" },
      { href: "/care/team", label: "Your care team" },
      { href: "/care/community", label: "Community" },
      { href: "/care/crisis", label: "Crisis support" },
    ],
  },
  {
    title: "Join Afya Companion",
    links: [
      { href: "/join", label: "Register" },
      { href: "/join/status", label: "Application status" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Afya Companion" },
      { href: "/settings", label: "Settings & privacy" },
    ],
  },
];
