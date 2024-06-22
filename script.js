document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const bannerTabs = document.querySelectorAll('.banner-tab');

    function activateTab(tabId) {
        tabs.forEach(item => item.classList.remove('active'));
        contents.forEach(item => item.classList.remove('active'));
        bannerTabs.forEach(item => item.classList.remove('active'));

        const tabElement = document.querySelector(`[data-tab="${tabId}"]`);
        if (tabElement) {
            tabElement.classList.add('active');
        }
        const contentElement = document.getElementById(tabId);
        if (contentElement) {
            contentElement.classList.add('active');
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            activateTab(tab.getAttribute('data-tab'));
        });
    });

    bannerTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            activateTab(tab.getAttribute('data-tab'));
        });
    });

    // Set the default active tab and content
    activateTab('home');
});
