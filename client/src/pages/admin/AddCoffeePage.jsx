import {
    Card,
    CardBody,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Box, Container, Button, Text
} from "@chakra-ui/react";
import { useState } from "react";
import CoffeeForm from "./components/CoffeeForm.jsx";
import ImageUpload from "./components/ImageUpload.jsx";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddCoffeePage = () => {
    //State to store the images that will be uploaded by ImageUpload Component
    const [images, setImages] = useState([]);

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

    console.log(coffee)
    return (
        <Container maxW='95%'>
            <Box className='pb-5'>
                <Breadcrumb mt={5}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin">inicio</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/products">productos</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink fontWeight='bold'>agregar un nuevo cafe</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Card my={5}>
                    <CardBody className='bg-colorBase text-colorDark  rounded-lg'>
                        <CoffeeForm coffee={coffee} setCoffee={setCoffee} inputColor='white'/>
                    </CardBody>
                </Card>

                <Card my={5}>
                    <CardBody className='bg-colorBase text-colorDark  rounded-lg'>
                        <Text align='center' fontWeight='bold' mb={3}>Descripcion del producto</Text>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<h3>...</h3>"
                            onReady={ ( editor ) => {
                                console.log( "CKEditor5 React Component is ready to use!", editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setCoffee({ ...coffee, description: data})
                                console.log( { event, editor, data } );
                            } }

                        />
                    </CardBody>
                </Card>

                <Card my={5}>
                    <CardBody className='bg-colorBase text-colorDark rounded-lg'>
                        <ImageUpload images={images} setImages={setImages}/>
                    </CardBody>
                </Card>

                <Button w='full' rounded='full' fontWeight="bolder" fontSize={20} py={7} className='!bg-orange-500 !text-white hover:!bg-orange-600'>
                    AGREGAR
                </Button>
            </Box>
        </Container>
    );
};

export default AddCoffeePage;
