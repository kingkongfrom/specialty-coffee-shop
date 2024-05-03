import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from "@chakra-ui/react";

const ProductsPage = () => {
    return(
        <Container maxW='95%'>
            <Breadcrumb mt={5}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/admin">inicio</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink fontWeight='bold'>productos</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Container>
    )
}

export default ProductsPage;