import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";

export const ApiPage = () => {
    // const [pk, setPk] = useState<any[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    const {
        data: data1,
        isLoading: isLoading1,
        error: error1,
        refetch: refetch1,
    } = useQuery({
        queryKey: ["QUERY POKE PARENT "],
        queryFn: async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            return res.data.results;
        },
    });

    // Dependence of query 1
    const { isLoading: isLoading2, error: error2 } = useQuery({
        queryKey: ["QUERY POKE CHILD "],
        queryFn: async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            return res.data.results;
        },
        enabled: !!data1,
        refetchOnWindowFocus: false, // get
        refetchInterval: 1000,
        // staleTime: 1000 * 60 * 5,
        // ref
    });

    // Using fetch
    // const { data, isLoading, error } = useQuery({
    //     queryKey: ["QUERY POKE "],
    //     queryFn: async () => {
    //         const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").then(
    //             (resp) => resp.json()
    //         );
    //         return res.results;
    //     },
    // });

    const isLoading = isLoading1 || isLoading2;
    const error = error1 || error2;

    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error {error.message}</span>;

    // useEffect(() => {
    //     // fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    //     //     .then((resp) => resp.json())
    //     //     .then((data) => {
    //     //         setPk(data.results);
    //     //         console.log(data.results);
    //     //     });

    //     setTimeout(() => {
    //         axios
    //             .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    //             .then((rest) => {
    //                 setLoading(false);
    //                 setPk(rest.data.results);
    //             })
    //             .catch(() => {
    //                 setLoading(false);
    //             });
    //     }, 1000);
    // }, []);

    return (
        <>
            <ButtonBackComponent />
            <div className="min-h-screen bg-amber-100 text-black p-6">
                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">APIs Page</h1>
                        <button
                            onClick={() => refetch1()}
                            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                        >
                            Ok Click
                        </button>
                    </div>

                    <div className="space-y-2">
                        {data1?.length > 0 ? (
                            data1.map((item: any, i: number) => (
                                <p key={i} className="text-gray-800 text-lg border-b pb-1">
                                    {item.name}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No data available</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

// export const ApiPage = () => {
//     const [pk, setPk] = useState<any>();

//     useEffect(() => {
//         fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setPk(data);
//                 console.log(data);
//                 console.log(pk.abilities[0].ability.name);
//             });
//     }, []);

//     // useEffect(() => {
//     //     fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
//     //         .then((resp) => resp.json())
//     //         .then((data) => {
//     //             setPokemons(data.results);
//     //             console.log(data.results);
//     //         });
//     // }, []);

//     return (
//         <>
//             <ButtonBackComponent />
//             <div className="h-screen bg-amber-200 text-black">
//                 <span>APIs Page1</span>

//                 {pk?.abilities.length > 0 && <span> {pk.abilities[0].ability.name}</span>}
//             </div>
//         </>
//     );
// };
