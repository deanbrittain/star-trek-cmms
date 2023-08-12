// crewMember.ts

export type CrewRole =
  | 'Command Staff'
  | 'Science Staff'
  | 'Medical Staff'
  | 'Operations Staff'
  | 'Security Staff';

export interface CrewMember {
  name: string;
  rank: string;
  role: CrewRole; // Use the CrewRole type here
  status: string;
  specialization: string;
  certifications: string;
  contact: string;
  showDetails?: boolean;
  avatarUrl?: string;
}
