import express, { Request, Response } from 'express';
import { Patient, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/patients', async (req: Request, res: Response) => {
  try {
    const patients = await prisma.patient.findMany();
    res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

router.get('/patients/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const patient = await prisma.patient.findUnique({
      where: { id: parseInt(id) }
    });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
});

router.post('/patients', async (req: Request, res: Response) => {
  const newPatient: Patient = req.body;
  try {
    const createdPatient = await prisma.patient.create({
      data: newPatient
    });
    res.status(201).json(createdPatient);
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Failed to create patient' });
  }
});

router.put('/patients/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedPatientData: Partial<Patient> = req.body;
  try {
    const updatedPatient = await prisma.patient.update({
      where: { id: parseInt(id) },
      data: updatedPatientData
    });
    res.json(updatedPatient);
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ error: 'Failed to update patient' });
  }
});

router.delete('/patients/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.patient.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ error: 'Failed to delete patient' });
  }
});

export default router;
