import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  course_slug: z.string().min(1, 'Please select a course'),
  message: z.string().optional(),
});

export type EnquirySchemaType = z.infer<typeof enquirySchema>;
