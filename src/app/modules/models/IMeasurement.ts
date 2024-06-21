import { IPatient } from "./IPatient";

export enum TypeMeasurement {
 Heart_Rate,
 Temperature,
 Respiratory_frequency,
 Blood_pressure,
 Pain,
 Capillary_Glycemia,
 Oxygen_Saturation,
}

export interface IMeasurement {
  id: number;
  patientId: number;
  type: TypeMeasurement;
  value: number;
  timestamp: Date;
  patient: IPatient;
}

