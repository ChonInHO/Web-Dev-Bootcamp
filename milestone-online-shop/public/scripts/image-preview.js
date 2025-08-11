const imagePickerElement = document.querySelector('#image-upload-control input');
const imagePreviewElement = document.querySelector('#image-upload-control img');


function updateImagePreview() {
    const file = imagePickerElement.files;

    if (!file || file.length === 0) {
        imagePreviewElement.style.display = 'none';
        return;
    }

    const pickedFile = file[0];

    imagePreviewElement.src = URL.createObjectURL(pickedFile);
    imagePreviewElement.style.display = 'block'
}

imagePickerElement.addEventListener('change', updateImagePreview)