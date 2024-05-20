import { Box, Divider, FormControl, FormHelperText, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import {roastTypes, grindingTypes, weights, processTypes, regions} from "../../../utils/constants.js";
import {capitalize, capitalizeWords } from "../../../utils/stringFunctions.js";

const CoffeeForm = ({ coffee, setCoffee }) => {

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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                    />
                </FormControl>

                {/*Producer Name*/}
                <FormControl isRequired>
                    <FormLabel>
                        Nombre del productor {coffee.producer}
                    </FormLabel>
                    <Input
                        id="producer"
                        name="producer"
                        value={coffee.producer}
                        onChange={handleChange}
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                    >
                        <option value={null} className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase">Seleccione la region</option>
                        {regions.map((region) => (
                            <option
                                key={region}
                                value={region}
                                className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                            >
                                {capitalizeWords(region)}
                            </option>
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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                    >
                        <option value={null} className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase">
                            Seleccione el tipo de tueste
                        </option>
                        {roastTypes.map((roastType) => (
                            <option
                                key={roastType}
                                value={roastType}
                                className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                            >
                                {capitalize(roastType)}
                            </option>
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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                    >
                        <option value={null} className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase">Seleccione el peso</option>
                        {weights.map((weight) => (
                            <option
                                key={weight}
                                value={weight}
                                className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                            >
                                {weight} gramos
                            </option>
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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                    >
                        <option value={null} className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase">Seleccione el tipo de grano</option>
                        {grindingTypes.map((grindingType) => (
                            <option
                                key={grindingType}
                                value={grindingType}
                                className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                            >
                                {capitalize(grindingType)}
                            </option>
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
                        className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                    >
                        <option value={null} className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase">
                            Seleccione el proceso
                        </option>
                        {processTypes.map((processType) => (
                            <option
                                key={processType}
                                value={processType}
                                className="!bg-white !text-colorDark dark:!bg-colorDark dark:!text-colorBase"
                            >
                                {capitalize(processType)}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Divider my={5} className='!border-2 !border-colorDark md:col-span-2'/>

        </Box>
    );
}

export default CoffeeForm;