import { Box, FormControl, FormHelperText, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import {roastTypes, grindingTypes, weights, processTypes, regions} from "../../../utils/constants.js";
import {capitalize, capitalizeWords } from "../../../utils/stringFunctions.js";

const CoffeeForm = ({ inputColor }) => {
    //State to store Coffee props
    const [coffee, setCoffee] = useState({
        SKU:'',
        producer:'',
        variety:'',
        roast:'',
        weight:0,
        grinding:'',
        region:'',
        process:'',
        description:'',
        price:0,
        discount:null,
        discount_start_date:null,
        discount_end_date:null,
    });
    //Function to update coffee props
    const handleChange = (e) => {
        setCoffee({
            ...coffee,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Box className="grid gap-3">
                {/*SKU*/}
                <FormControl isRequired>
                    <FormLabel>SKU</FormLabel>
                    <Input
                        type="number"
                        id="SKU"
                        name="SKU"
                        value={coffee.SKU}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    />
                </FormControl>

                {/*Producer Name*/}
                <FormControl isRequired>
                    <FormLabel>Nombre del productor {coffee.producer}</FormLabel>
                    <Input
                        id="producer"
                        name="producer"
                        value={coffee.producer}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    />
                </FormControl>

                {/*Region Name*/}
                <FormControl isRequired>
                    <FormLabel>Region {coffee.producer}</FormLabel>
                    <Select
                        id="region"
                        name="region"
                        value={coffee.region}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    >
                        {regions.map((region) => (
                            <option
                                key={region}
                                value={region}
                            >{capitalizeWords(region)}</option>
                        ))}
                    </Select>
                </FormControl>

                {/*Variety*/}
                <FormControl isRequired>
                    <FormLabel>Variedad</FormLabel>
                    <Input
                        id="variety"
                        name="variety"
                        value={coffee.variety}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    />
                </FormControl>
            </Box>
            <Box className="grid gap-3">
                {/*Roast Type*/}
                <FormControl isRequired>
                    <FormLabel>Tipo de tueste</FormLabel>
                    <Select
                        id="roast"
                        name="roast"
                        value={coffee.roast}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    >
                        {roastTypes.map((roastType) => (
                            <option
                                key={roastType}
                                value={roastType}
                            >{capitalize(roastType)}</option>
                        ))}
                    </Select>
                </FormControl>

                {/*Weight Type*/}
                <FormControl isRequired>
                    <FormLabel>Peso</FormLabel>
                    <Select
                        id="weight"
                        name="weight"
                        value={coffee.weight}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    >
                        {weights.map((weight) => (
                            <option
                                key={weight}
                                value={weight}
                            >{weight} gramos</option>
                        ))}
                    </Select>
                </FormControl>

                {/*Grinding Type*/}
                <FormControl isRequired>
                    <FormLabel>Tipo de Grano</FormLabel>
                    <Select
                        id="grinding"
                        name="grinding"
                        value={coffee.grinding}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    >
                        {grindingTypes.map((grindingType) => (
                            <option
                                key={grindingType}
                                value={grindingType}
                            >{capitalize(grindingType)}</option>
                        ))}
                    </Select>
                </FormControl>

                {/*Grinding Type*/}
                <FormControl isRequired>
                    <FormLabel>Proceso</FormLabel>
                    <Select
                        id="process"
                        name="process"
                        value={coffee.process}
                        onChange={handleChange}
                        style={{ backgroundColor: inputColor || "white" }}
                    >
                        {processTypes.map((processType) => (
                            <option
                                key={processType}
                                value={processType}
                            >{capitalize(processType)}</option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}

export default CoffeeForm;