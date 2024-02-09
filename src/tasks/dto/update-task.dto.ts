// src/tasks/dto/update-task.dto.ts
import { z } from 'zod';

export const UpdateTaskDtoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  isCompleted: z.boolean().optional(),
});

export type UpdateTaskDto = z.infer<typeof UpdateTaskDtoSchema>;
