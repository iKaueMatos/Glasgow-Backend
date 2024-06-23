import { IPatient } from "../../../patient/domain/entities/interfaces/IPatient";
import { TypeMeasurement } from "../enum/TypeMeasurent";

export interface IMeasurement {
  id: number;
  patientId: number;
  type: TypeMeasurement;
  value: number;
  timestamp: Date;
  patient: IPatient;
}

