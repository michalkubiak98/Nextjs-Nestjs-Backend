// src/tasks/dto/create-task.dto.ts
import { z } from 'zod';

export const CreateTaskDtoSchema = z.object({
  title: z.string(),
  description: z.string(),
  isCompleted: z.boolean().optional(),
});

export type CreateTaskDto = z.infer<typeof CreateTaskDtoSchema>;
