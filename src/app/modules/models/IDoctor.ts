import { IConsultation } from "./IConsultation";
import { IPatient } from "./IPatient";

export enum uf {
  ACRE = "AC",
  BRASILIA = "BR",
  ALAGOAS = "AL",
  AMAPA = "AP",
  AMAZONAS = "AM",
  BAHIA = "BA",
  CEARA = "CE",
  DISTRITO_FEDERAL = "DF",
  ESPIRITO_SANTO = "ES",
  GOIAS = "GO",
  MARANHAO = "MA",
  MATO_GROSSO = "MT",
  MATO_GROSSO_DO_SUL = "MS",
  MINAS_GERAIS = "MG",
  PARA = "PA",
  PARAIBA = "PB",
  PARANA = "PR",
  PERNAMBUCO = "PE",
  PIAUI = "PI",
  RIO_DE_JANEIRO = "RJ",
  RIO_GRANDE_DO_NORTE = "RN",
  RONDONIA = "RO",
  RORAIMA = "RR",
  SANTA_CATARINA = "SC",
  SAO_PAULO = "SP",
  SERGIPE = "SE",
  TOCANTINS = "TO",
}

export interface IDoctor {
  id: number;
  name: string;
  cpf: string;
  crm: string;
  uf: uf;
  specialty: string;
  email: string;
  phone: string;
  patients: IPatient[];
  consultations: IConsultation[];
}

