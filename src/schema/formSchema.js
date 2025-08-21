import {z} from "zod";

const formSchema = z.object({
    email: z.string().email("Invalid email").nonempty("email is required"),
    firstName: z.string().min(2, "First name must be 2 characters"),
    lastName: z.string().min(2, "Last name must be 2 characters"),
});

export default formSchema;