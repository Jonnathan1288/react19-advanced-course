export const ProductCardComponent = ({ props }: any) => {
    return (
        <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-bold">{props.name}</h3>
            <p className="text-sm text-gray-600">Price: ${props.price}</p>
            {props.prominent && (
                <span className="text-yellow-500 font-semibold"> 😉 Destacado</span>
            )}
        </div>
    );
};
