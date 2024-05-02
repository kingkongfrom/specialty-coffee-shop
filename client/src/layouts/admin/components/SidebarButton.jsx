import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

const SidebarButton = ({children, hover, variant, name, path }) => {
    return (
        <Link to={path} className="mb-3 w-full hover:text-yellow-800">
            <Flex
                direction="row"
                alignItems="center"
                justifyContent={
                    variant === "sidebar"
                        ? hover
                            ? "start"
                            : "center"
                        : "start"
                }
            >
                {children}
                {variant === "sidebar" ? (
                    hover ? (
                        <Text ms={3}>{name}</Text>
                    ) : null
                ) : (
                    <Text ms={3}>{name}</Text>
                )}
            </Flex>
        </Link>
    );
}

export default SidebarButton;