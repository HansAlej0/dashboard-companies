import {
    BarChart4,
    Building2,
    Calendar,
    CircleHelpIcon,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
} from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Building2,
        label: "Companies",
        href: "/companies",
    },
    {
        icon: Calendar,
        label: "Calendar",
        href: "/task",
    },
];

export const dataToolsSidebar = [
    {
        con: CircleHelpIcon,
        label: "Faqs",
        href: "/faqs",
    },
    {
        con: BarChart4,
        label: "Analytics",
        href: "/analytics",
    },
];

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Setting",
        href: "/setting",
    },
    {
        icon: ShieldCheck,
        label: "Security",
        href: "/security",
    },
];
