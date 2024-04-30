import {
    Card,
    CardBody,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Box, Container
} from "@chakra-ui/react";
import { useState } from "react";
import CoffeeForm from "./components/CoffeeForm.jsx";

const AddCoffeePage = () => {
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

    return (
        <Container maxW='95%'>
            <Box>
                <Breadcrumb mt={5}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Products</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Add a Coffee</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Card mt={5} >
                    <CardBody>
                        <CoffeeForm />
                    </CardBody>
                </Card>
            </Box>
        </Container>
    );
};

export default AddCoffeePage;
