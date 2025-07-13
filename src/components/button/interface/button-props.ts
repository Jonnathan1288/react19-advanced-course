export interface ButtonProps {
    name: string,
    onClick: (value: string) => void,
    disabled?: boolean
}

// export const findFirst = (list: number[]): number => {
//     return list[0];
// }

// export const findFirstString = (list: string[]): string => {
// return list[0];
// }

export const findFirst = <T>(t: T[]): T | null => {
    if (!t || t.length === 0) return null;
    return t[0]
};

export const findFirst1 = <T>(t: T[]): T | null => {
    if (!t || t.length === 0) return null;
    return t?.[0]
};