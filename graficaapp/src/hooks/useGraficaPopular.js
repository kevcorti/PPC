import { useContext } from "react"
import { GraficaPopularContext } from "../context/GraficaPopularContext"

export function useGraficaPopular() {
    const context = useContext(GraficaPopularContext);
    if (!context) {
        throw new Error("Context must be in AppProvider");
    }
    return context;
}