import { IPatient } from "./IPatient";

export enum TypeMeasurement {
  Frequencia_Cardiaca,
  Temperatura,
  Frequencia_Respiratoria,
  Pressao_Arterial,
  Dor,
  Glicemia_Capilar,
  Saturacao_Oxigenio,
}

export interface IMeasurement {
  id: number;
  patientId: number;
  type: TypeMeasurement;
  value: number;
  timestamp: Date;
  patient: IPatient;
}

