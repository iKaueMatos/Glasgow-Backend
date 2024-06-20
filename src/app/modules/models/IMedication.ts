import { IPrescription } from "./IPrescription";

export interface IMedication {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  prescriptions: IPrescription[];
}