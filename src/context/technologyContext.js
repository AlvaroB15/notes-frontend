import {createContext, useContext, useState} from "react";
import {getTechnologyRequest} from "../api/technology";

const technologyContext = createContext(undefined);

export const useTechnology = () => {
    return useContext(technologyContext);
}

export const TechnologyProvider = ({children}) => {

    const [technology, setTechnology] = useState([]);

    const getTechnology = async () => {
        const response = await getTechnologyRequest();
        console.log(response);
    }

    return (
        <technologyContext.Provider
            value={{technology, setTechnology, getTechnology}}>
            {children}
        </technologyContext.Provider>
    )
};
