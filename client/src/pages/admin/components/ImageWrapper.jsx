import React from 'react';
import { TiDelete } from "react-icons/ti";

const ImageWrapper = ({ image, handleDrop, handleDrag, handleRemove, className }) => {
    const url = URL.createObjectURL(image.file);

    return (
        <div
            id={image.id}
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            className={`image-wrapper ${className}`}
        >
            <img
                src={url}
                alt={`Preview ${image.order}`}
                className="preview-image"
            />
            <button
                onClick={() => {
                    handleRemove(image.id);
                    URL.revokeObjectURL(url); // Clean up to avoid memory leaks
                }}
            >
                <span className='absolute top-0 right-0'><TiDelete size={30} className='text-red-600 hover:text-red-400'/></span>
            </button>
        </div>
    );
};

export default ImageWrapper;