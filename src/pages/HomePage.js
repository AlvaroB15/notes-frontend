import {useTechnology} from "../context/technologyContext";
import {useEffect} from "react";

export const HomePage = () => {
    const {getTechnology} = useTechnology();

    useEffect(() => {
        getTechnology()
    }, []);


    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
};

// 02:29:32 Listar Publicaciones
