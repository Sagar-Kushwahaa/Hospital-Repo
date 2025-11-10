
export type Role = 'Admin' | 'Doctor' | 'User';

export type Gender = 'Male' | 'Female' | 'Other';

export interface Doctor {
  id: number;
  name: string;
  department: string;
  specialization: string;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: Role;
  gender: Gender;
  address: string;
  appointmentTime: string;
  assignedDoctor: string;
}
   