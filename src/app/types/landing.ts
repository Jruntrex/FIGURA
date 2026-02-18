import type { LucideIcon } from 'lucide-react';

export interface FeatureItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface ScalingStep {
    id: string;
    label: string;
    title: string;
    unit: string;
    subtitle: string;
    desc: string;
    isActive?: boolean;
    readiness?: {
        score: string;
        items: string[];
    };
}

export interface MaterialItem {
    title: string;
    subtitle?: string;
    icon?: LucideIcon;
    type?: 'hero' | 'wide' | 'standard';
    className?: string;
}
