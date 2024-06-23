import { IPrescription } from "../../../prescription/domain/model/IPrescription";

export interface IMedication {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  prescriptions: IPrescription[];
}