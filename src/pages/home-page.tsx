import { CardListComponent } from "../components/course/card-list/card-list";

export const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
            <div className=" mx-auto w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-8">REACT 19 </h1>
                <CardListComponent />
            </div>
        </main>
    );
};
