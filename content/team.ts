// TODO(client): replace with real team members and photos.
export const teamMembers = [
  { id: "managing", name: "Ellen Van Damme", role: "managingDirector" },
  { id: "operations", name: "Youssef El Amrani", role: "operationsManager" },
  { id: "dispatch", name: "Sofie Peeters", role: "dispatchLead" },
  { id: "fleet", name: "Thomas Vermeulen", role: "fleetManager" },
] as const;

export type TeamMember = (typeof teamMembers)[number];
