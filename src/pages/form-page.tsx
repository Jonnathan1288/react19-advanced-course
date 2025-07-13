import { useForm } from "react-hook-form";
import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";

type FormData = {
    name: string;
    email: string;
    age: number;
};

export const FormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<FormData>();

    const send = (data: FormData) => {
        console.log(data);
    };

    return (
        <>
            <ButtonBackComponent />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <form
                    onSubmit={handleSubmit(send)}
                    className="w-full max-w-md space-y-6 bg-white shadow-md rounded-2xl p-6"
                >
                    <h1 className="text-xl font-semibold text-gray-700">
                        Form page: <span className="text-indigo-600">{watch("name")}</span>
                    </h1>

                    <section className="space-y-2">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            {...register("name", {
                                required: "The name is mandatory",
                                minLength: { value: 3, message: "Must be 3 characters" },
                            })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            placeholder="Enter name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name?.message}</p>
                        )}
                    </section>

                    <section className="space-y-2">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            {...register("email", {
                                required: "The email is required",
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: "Invalid email",
                                },
                            })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            placeholder="Enter the email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email?.message}</p>
                        )}
                    </section>

                    <section className="space-y-2">
                        <label className="block text-sm font-medium text-gray-600">Age</label>
                        <input
                            {...register("age", {
                                required: "Age is mandatory",
                                valueAsNumber: true,
                                min: { value: 18, message: "Invalid age" },
                                max: { value: 100, message: "Invalid age MAX" },
                            })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="number"
                            placeholder="Ej: 20"
                        />
                        {errors.age && (
                            <p className="text-red-500 text-sm">{errors.age?.message}</p>
                        )}
                    </section>

                    <div className="flex justify-between gap-2">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            SEND
                        </button>
                        <button
                            onClick={() => reset()}
                            type="button"
                            className="w-full px-4 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                        >
                            RESTORE
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
