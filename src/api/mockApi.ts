export interface ImageData {
    id: string;
    name: string;
    url: string
}

let images: ImageData[] = [];

export const uploadImage = (name: string, url: string) => {
    const id = Date.now().toString();
    images.push({ id, name, url });
};

export const getImages = (): ImageData[] => {
    return [...images];
};

export const deleteImage = (id: string) => {
    images = images.filter((img) => img.id !== id);
};