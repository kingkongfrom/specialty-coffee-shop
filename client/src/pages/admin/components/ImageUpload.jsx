import { useState, useRef, useEffect } from "react";
import ImageWrapper from "./ImageWrapper";
import autoAnimate from "@formkit/auto-animate";
import { FaCloudUploadAlt } from "react-icons/fa";

const ImageUpload = ({images, setImages}) => {
    const inputRef = useRef(null);
    const parentRef = useRef(null);
    const [dragId, setDragId] = useState("");

    function handleDropFiles(event) {
        event.preventDefault();
        const inputImages = event.dataTransfer.files;
        const filelist = Array.from(inputImages ?? []).map((image, index) => ({
            id: crypto.randomUUID(),
            order: images.length + 1 + index,
            file: image,
        }));
        setImages((prev) => [...prev, ...filelist]);
    }

    function handleDragOver(event) {
        event.preventDefault(); // This is necessary to allow for the drop
    }

    function handleChange(e) {
        const inputImages = e.currentTarget.files;
        const filelist = Array.from(inputImages ?? []).map((image, index) => ({
            id: crypto.randomUUID(),
            order: images.length + 1 + index,
            file: image,
        }));
        setImages((prev) => [...prev, ...filelist]);
    }

    function clearImages() {
        setImages([]);
    }

    function handleDrag(e) {
        setDragId(e.currentTarget.id);
    }

    function handleDrop(e) {
        e.preventDefault();
        const dragImage = images.find((image) => image.id === dragId);
        const dropImage = images.find(
            (image) => image.id === e.currentTarget.id,
        );

        const dragImageOrder = dragImage.order;
        const dropImageOrder = dropImage.order;

        const update = images.map((image) => {
            if (image.id === dragId) {
                image.order = dropImageOrder;
            }
            if (image.id === e.currentTarget.id) {
                image.order = dragImageOrder;
            }
            return image;
        });
        setImages(update);
    }

    function removeImage(id) {
        const update = images
            .filter((image) => image.id !== id)
            .map((image, index) => ({
                id: image.id,
                order: index + 1,
                file: image.file,
            }));
        setImages(update);
    }

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [images]);

    return (
        <>
            <div className="controls">
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    ref={inputRef}
                    onChange={handleChange}
                />
                <label
                    htmlFor="fileInput"
                    className="flex w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-colorDark py-12 font-bold hover:border-green-700 hover:text-green-700"
                    onDrop={handleDropFiles}
                    onDragOver={handleDragOver}
                >
                    <FaCloudUploadAlt size={40} />
                    <p>drag images or click to upload</p>
                </label>
            </div>
            <div className="preview-container" ref={parentRef}>
                {images.length > 0
                    ? images
                          .sort((a, b) => a.order - b.order)
                          .map((image, index) => (
                              <ImageWrapper
                                  key={image.id}
                                  image={image}
                                  handleDrop={handleDrop}
                                  handleDrag={handleDrag}
                                  handleRemove={removeImage}
                                  className={index === 0 && 'border-4 border-green-700'}
                              />
                          ))
                    : null}
            </div>
        </>
    );
};

export default ImageUpload;
