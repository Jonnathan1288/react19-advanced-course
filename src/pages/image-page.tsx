import { useSearchParams } from "react-router-dom";
import { ButtonBackComponent } from "../components/ui/buttons/button-back-component";
import localImage from "./../assets/historic-world-populatio.jpeg";
export const ImagePage = () => {
    const [searchParams] = useSearchParams();

    const url = searchParams.get("url");

    return (
        <>
            <ButtonBackComponent />
            <div className="max-w-3xl mx-auto p-6 space-y-10 text-center">
                <h1 className="text-3xl font-bold">Images with REACT</h1>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Imported local images</h2>
                    <img src={localImage} alt="" />
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">External image</h2>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAcfsdWMPB-aAabU0VpOlC5SrEr3qOe10bg&s"
                        alt=""
                    />
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Image as background</h2>
                    <div
                        className="flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"
                        style={{
                            backgroundImage:
                                "url('https://npr.brightspotcdn.com/legacy/sites/wkar/files/201405/Happy_graphic.jpg')",
                        }}
                    >
                        <span className="bg-black/60 px-4 py-2 rounded-2xl text-white">
                            Background with text
                        </span>
                    </div>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Lazy Loading</h2>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAcfsdWMPB-aAabU0VpOlC5SrEr3qOe10bg&s"
                        alt=""
                        loading="lazy"
                    />
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Use Search Params</h2>
                    <img src={url ?? ""} alt="" loading="lazy" />
                </section>
            </div>
        </>
    );
};
