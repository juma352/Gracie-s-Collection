(function () {
    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    async function loadJSON(path) {
        const response = await fetch(path, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error(`Failed to load ${path}: ${response.status}`);
        }

        return response.json();
    }

    function setImageSource(selector, imagePath, altText) {
        const imageElement = document.querySelector(selector);

        if (!imageElement || !imagePath) {
            return;
        }

        imageElement.src = imagePath;

        if (altText) {
            imageElement.alt = altText;
        }
    }

    function accentClasses(accent) {
        if (accent === 'purple') {
            return {
                hoverText: 'group-hover:text-purple-300',
                arrow: 'text-purple-300'
            };
        }

        return {
            hoverText: 'group-hover:text-blue-300',
            arrow: 'text-blue-300'
        };
    }

    function renderGalleryCards(collections) {
        return collections.map((collection) => {
            const styles = accentClasses(collection.accent);

            return `
                <a href="${escapeHtml(collection.href)}" class="group block cursor-pointer">
                    <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                        <img src="${escapeHtml(collection.image)}" alt="${escapeHtml(collection.alt)}" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 class="font-artistic-heading text-3xl font-bold mb-3 ${styles.hoverText} transition-colors duration-300">${escapeHtml(collection.title)}</h3>
                            <p class="font-artistic-body text-gray-200 leading-relaxed mb-4">${escapeHtml(collection.description)}</p>
                            <div class="flex items-center ${styles.arrow} font-semibold group-hover:text-white transition-colors duration-300">
                                <span>View Collection</span>
                                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        }).join('');
    }

    function renderPhotoGrid(photos) {
        return photos.map((photo, index) => `
            <div class="group cursor-pointer" onclick="openLightbox(${index})">
                <div class="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02] h-80">
                    <img src="${escapeHtml(photo.image)}" alt="${escapeHtml(photo.title)} - ${escapeHtml(photo.description)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 class="font-artistic-sub text-lg font-semibold mb-1">${escapeHtml(photo.title)}</h3>
                        <p class="text-sm text-gray-200">${escapeHtml(photo.description)}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    window.SiteContent = {
        loadJSON,
        renderGalleryCards,
        renderPhotoGrid,
        setImageSource
    };
}());