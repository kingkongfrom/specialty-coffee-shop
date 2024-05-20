import {
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { SignIn } from "@clerk/clerk-react";
import { RiLoginBoxFill } from "react-icons/ri";

export default function SignInButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                onClick={onOpen}
                rounded="full"
                className="!text-colorDark !bg-colorBase hover:!bg-colorDarker hover:!text-colorBase"
            >
                <RiLoginBoxFill className="me-1" size={20}/>
                Login
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxWidth="sm" className="!bg-colorDark">
                    <SignIn fallbackRedirectUrl={window.location.href}/>
                </ModalContent>
            </Modal>
        </>
    );
}
