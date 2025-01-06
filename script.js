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

                otherPreviewBody.classList.remove('open-faq');
                otherPreviewHeader.classList.remove('blue')
                otherIcon.classList.remove('fa-xmark');
                otherIcon.classList.add('fa-plus');

            }
        })
    })
})

// FAQ
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const faqHeader = e.target.closest('.faq-group-header');

        if (!faqHeader) return;

        const faq = faqHeader.parentElement;
        const faqBody = faq.querySelector('.faq-group-body');
        const icon = faqHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');

        // Toggle body
        faqBody.classList.toggle('open-faq');

        // Header color
        faqHeader.classList.toggle('blue')

        // Close the other bodies
        const otherBodies = faqContainer.querySelectorAll('.faq-content');


        otherBodies.forEach((otherBody) => {
            if (otherBody !== faq) {
                const otherFaqBody = otherBody.querySelector('.faq-group-body');
                const otherIcon = otherBody.querySelector('.faq-group-header i');
                const otherFaqHeader = otherBody.querySelector('.faq-group-header')

                otherFaqBody.classList.remove('open-faq');
                otherFaqHeader.classList.remove('blue')
                otherIcon.classList.remove('fa-angle-up');
                otherIcon.classList.add('fa-angle-down');

            }
        })
    })
})