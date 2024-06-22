import { IPatient } from "../../../patient/domain/model/IPatient";
import { TypeMeasurement } from "../enum/TypeMeasurent";

export interface IMeasurement {
  id: number;
  patientId: number;
  type: TypeMeasurement;
  value: number;
  timestamp: Date;
  patient: IPatient;
}

