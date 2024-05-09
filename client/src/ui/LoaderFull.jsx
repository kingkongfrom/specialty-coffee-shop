import Lottie from "lottie-react";
import coffeeAnimation from "../../public/images/coffee-grains-animation.json";

export default function LoaderFull() {
    return (
        <>
            <div
                className="
                fixed
                bg-black
                bg-opacity-70
                inset-0
                w-full
                z-40
                flex
                items-center
                justify-center
                h-[100vh]
                overflow-hidden
            "
            >
                <div className="p-3 rounded-md">
                    <Lottie animationData={coffeeAnimation} className="h-[350px]" />
                </div>
            </div>
        </>
    );
};