import { ProductCardComponent } from "./components/card-product";

export const MapComponent = () => {
    const fruits = ["Apple", "Banana", "Cherry"];

    const products = [
        { id: 1, name: "Celular", price: 1.2, prominent: true },
        { id: 2, name: "Computadora personal", price: 1.2, prominent: false },
        { id: 3, name: "Raton", price: 1.2, prominent: true },
    ];

    return (
        <>
            <span className="text-2xl font-bold">List of Fruits</span>
            {/* {fruits.map((fruit, i) => (
                <li key={i}>{fruit}</li>
            ))} */}

            {fruits.map((item, i) => {
                const value = item.toUpperCase();
                return <div key={i}>{value}</div>;
            })}

            <span className="text-2xl font-bold">List of Fruits</span>

            <section className="flex flex-col gap-4">
                {products.map((item, i) => (
                    <ProductCardComponent key={i} props={item} />
                ))}
            </section>
        </>
    );
};
