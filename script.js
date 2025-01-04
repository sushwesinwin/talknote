// How it works
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.preview .flexbox-1');

    container.addEventListener('click', (e) => {
        const previewHeader = e.target.closest('.preview-header');

        if (!previewHeader) return;

        const preview = previewHeader.parentElement;
        const previewBody = preview.querySelector('.preview-body');
        const icon = previewHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-xmark');
        icon.classList.toggle('fa-plus');

        // Toggle body
        previewBody.classList.toggle('open');

        // Header color
        previewHeader.classList.toggle('blue')

        // Close the other bodies
        const otherBodies = container.querySelectorAll('.preview-content');





        otherBodies.forEach((otherBody) => {
            if (otherBody !== preview) {
                const otherPreviewBody = otherBody.querySelector('.preview-body');
                const otherIcon = otherBody.querySelector('.preview-header i');
                const otherPreviewHeader = otherBody.querySelector('.preview-header')

                otherPreviewBody.classList.remove('open');
                otherPreviewHeader.classList.remove('blue')
                otherIcon.classList.remove('fa-xmark');
                otherIcon.classList.add('fa-plus');

            }
        })
    })
})

