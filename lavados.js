// Configuración del Google Spreadsheet
const SHEET_ID = '1wCeeO7EnrESFsCdEFN-5oTPyHCXAEjypiaIDYgTnXl4';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// Imágenes por defecto para las tarjetas (puedes cambiarlas)
const DEFAULT_IMAGES = {
    estandar: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYn0rd4qhX9BU-SOHOHKbkZA1zeLZmK8lZhFyt_PGKidwjLqFYFhX8Dn13NUcxye6JG1QoGuT3SffbDBjeJLNwq6iCdnreAVpCPGW4DnC6S3aPusjfmcC6Do1p8sOW66SNCny-4xs45qYKFZsP2qspIXm5Js-xw_oBOXUNuI2scAjsJxyUMIPpQG6PVAcOP5NumtjRSQXX0F0gwOTEg5L9DN7bbdTxdCkLRRSoNhYHfbWjXUSotKVcDPhKKxPm0vcyNVYLJ3jwuDY',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBHaUCUwK-bbdnTyxqppdfN_SwSLxEP-ptOUsLaDgVKcFIyEv5Fva8r7yLLzx4TapoMRCANtIKGJMTbB2LBkVkQyOOUe3xURucUYO1Muyt957hH7OJlio-R1aaso-2sfRBv9pYwWeD0HMoSITywMNWGIo386MWuXhZVf-mNj_JxRhQkxuY_L1_L0PjCb-tf-lFEqDcp_kQhi_44Fjp1m1ag3p5aMNSux7qTPMDrPu11d-IwQKUo7JMmgUbMvaToZ6BbOIfDqAFT3Bc',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAlMeHNENAMFPuS1pHvD4LJB4vn4vkreMvyJxQbVDGZI1BAcUxY8BImbSIi8-MtNgSLH1Nlb4jOmikIBXkxUcopkiC9uNIVvTF5q1Q7MMHxNqvjXbhDrAzWBx6PgKFWwb5RgCbjhDR0sAMIdMGGecSFFUFgHAiRtQ4VMgd0GmKfbVPFYwhT09rmk3z7yCI8pYv2W4TOVc0Sz9sv-cqwWG6uB1c5LI6d_d37fuE_oU6c6Sp6AL2XLMy4QRWwqobLM1BrBZm954fzBKw',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBHSKvASOY_M7x0HG9-zR3SE7XYz8o2yLq29xvxCcxqxkzPoj-OjPs2ijrO0xN7WkfeXw0WfhsK3fG7V4IEPdDGj5ysJAbO4OxsvQokfPIzvRpZrlzlmGaTP6IjuFK0rupw3vjWJNyNdRYez_qIdOVFNx2rdun38VioyILKYDUB9lIRss8r_Q2hOirOoUpONmF20nduht0aG_HyQ09uGP37lwwStguG1lf4QETHsabVH56r1EptOG3Ck7F-9dUUpg_ZLV-cY6jhxog'
    ],
    premium: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuChcreqysdgb9CHqfeUkGMD5TSI1RIaJe1pTRhXqLHNvdmrvcrYR2y1j-BFk11N9r_oeThD7UwjYckh8LFwKMC7_3614UfamVOmAOE76mfsP5wD6akOwdWlTJvdqC4nYOjRE5Cx-mgVoKZGvKamyGpPw7j7WJ33WumN8MNTu4DVtHp1wnEzaE7F1FNE736bzH-Iklo7AB6vnU1hPzZeM5xd1F55zLp6aWfr96QMJt0aDw7ImNScftE8qPcxgBOcZ0ddjx3KNDkUAcA',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBroWmur8hhw2JrqGTtqATmZx_oYkq1-pEMFIu__mGLcaXkocwHajSs9PSI4QToemLL-EmTs9T5JAYXsqu9uC50xrEsLu26UrDo40m-C0v3VWVxcQVJNJAgrLQsZNE9wIvv3HYXt5NBLKD-ed7feBMiTFvcycax2fOj9odsrtl0uXonJwBIisMPNGFH661f54mi-KwUjxP61HKuIpzUqDVG2OUjLN9zPkCOJLTWvAgFwbJCUILX3i34v_GKq3IksIeYhMGGKwxgVAA',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuChnvwdehJl-Lg169rw9G6T1J9oXIP1N-GuZiR3OzOg3mcYozaHcbcmTRqlPNyBCgkf5uLHuMKRcV3wnbDXDPSf1KX15m8VBo8WQ5-iNiNxoL0i_7VxZElQf6MU3qn6OpSSNcCtIf43hSK3FWWVHdCU7UwUbn3dlem6yUrPgWtWPeOJ2vh4T5su1CZseESrb9jbTxZQhFi_A-MkAmNBW3tf_W6OYXKTGeHTyFImmCL0wcEQX4JXeVSwZzZ8pfEQiwcuEG5GXg6H9Og'
    ]
};

// Estructura de datos del spreadsheet real:
// Columna A: Tipo de lavado (Estándar/Premium)
// Columna B: Nombre del lavado
// Columna C: Descripción
// Columna D: Detalle de lavado (lista de servicios)
// Columna E: Precio
// Columna F: Demora

/**
 * Formatea el precio para mostrar en Guaraníes con separador de miles
 * @param {string|number} precio - Precio sin formato
 * @returns {string} Precio formateado en Guaraníes
 */
function formatPrecio(precio) {
    if (!precio) return '';
    const numero = parseInt(precio.toString().replace(/\D/g, ''));
    if (isNaN(numero)) return precio;
    return `₲ ${numero.toLocaleString('es-PY')}`;
}

/**
 * Obtiene los datos del Google Spreadsheet
 * @returns {Promise<Array>} Array con los datos parseados
 */
async function fetchSheetData() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        
        // Google devuelve JSONP, necesitamos extraer el JSON
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);
        
        return parseSheetData(data);
    } catch (error) {
        console.error('Error al obtener datos del spreadsheet:', error);
        return null;
    }
}

/**
 * Parsea los datos del spreadsheet al formato que necesitamos
 * @param {Object} data - Datos crudos del spreadsheet
 * @returns {Object} Objeto con lavados estándar y premium
 */
function parseSheetData(data) {
    const rows = data.table.rows;
    const lavados = {
        estandar: [],
        premium: []
    };
    
    let estandarIndex = 0;
    let premiumIndex = 0;
    
    rows.forEach((row, index) => {
        // Saltamos la primera fila si es encabezado
        if (index === 0 && row.c[0]?.v?.toLowerCase().includes('tipo')) {
            return;
        }
        
        const tipo = row.c[0]?.v?.toString().toLowerCase().trim() || '';
        const nombre = row.c[1]?.v || '';
        const descripcion = row.c[2]?.v || '';
        const detalle = row.c[3]?.v || '';
        const precio = row.c[4]?.v || '';
        const demora = row.c[5]?.v || '';
        
        if (!nombre) return; // Saltamos filas vacías
        
        const lavado = {
            nombre,
            descripcion,
            detalle,
            precio: formatPrecio(precio),
            demora,
            imagen: ''
        };
        
        if (tipo.includes('estándar') || tipo.includes('estandar') || tipo.includes('classic')) {
            lavado.imagen = DEFAULT_IMAGES.estandar[estandarIndex % DEFAULT_IMAGES.estandar.length];
            lavados.estandar.push(lavado);
            estandarIndex++;
        } else if (tipo.includes('premium') || tipo.includes('full')) {
            lavado.imagen = DEFAULT_IMAGES.premium[premiumIndex % DEFAULT_IMAGES.premium.length];
            lavados.premium.push(lavado);
            premiumIndex++;
        }
    });
    
    return lavados;
}

/**
 * Genera el HTML de una tarjeta de lavado estándar
 * @param {Object} lavado - Datos del lavado
 * @param {number} index - Índice de la tarjeta
 * @returns {string} HTML de la tarjeta
 */
function createEstandarCard(lavado, index) {
    // El último lavado estándar se destaca
    const isDestacado = index === 2; // Wash 4 destacado
    const destacadoBorder = isDestacado ? 'border-2 border-primary' : '';
    const destacadoBadge = isDestacado ? `
        <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full font-bold text-xs uppercase">El más popular</div>
    ` : '';
    const buttonClass = isDestacado 
        ? 'bg-primary text-white hover:opacity-90' 
        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white';
    
    // Formatear el detalle para mostrar como lista
    const detalleFormateado = lavado.detalle 
        ? lavado.detalle.split('\n').filter(item => item.trim()).map(item => 
            `<li class="flex items-start gap-2 font-body font-normal"><span class="text-white/80">✓</span> ${item.trim()}</li>`
          ).join('')
        : '';
    
    const cardId = `card-${index}`;
    
    return `
        <div class="flip-card" id="${cardId}">
            <div class="flip-card-inner">
                <!-- Cara Frontal -->
                <div class="flip-card-front bg-white flex flex-col rounded-3xl ${destacadoBorder} shadow-xl shadow-primary/5">
                    <div class="h-48 relative overflow-hidden rounded-t-3xl flex-shrink-0">
                        <img class="w-full h-full object-cover" 
                             src="${lavado.imagen}" 
                             alt="${lavado.nombre}"/>
                        ${destacadoBadge}
                        ${lavado.precio ? `
                            <div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                                ${lavado.precio}
                            </div>
                        ` : ''}
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <h4 class="text-xl font-bold mb-2 font-display text-primary">${lavado.nombre}</h4>
                        <p class="text-gray text-sm mb-3 flex-1">${lavado.descripcion || 'Servicio de lavado profesional.'}</p>
                        ${lavado.demora ? `
                            <p class="text-xs text-gray mb-4 flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm">schedule</span>
                                ${lavado.demora}
                            </p>
                        ` : ''}
                        <div class="flex flex-col gap-2 mt-auto">
                            <button onclick="openAgendarModal('${lavado.nombre.replace(/'/g, "\\'")}', '${lavado.precio}')" class="w-full py-3 rounded-full ${buttonClass} font-bold transition-all text-sm">Agendar</button>
                            <button onclick="document.getElementById('${cardId}').classList.toggle('flipped')" 
                                    class="w-full py-3 rounded-full border-2 border-gray/30 text-gray font-bold transition-all text-sm hover:border-primary hover:text-primary">
                                Más información
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Cara Trasera -->
                <div class="flip-card-back p-5 flex flex-col rounded-3xl shadow-xl">
                    <h4 class="text-xl font-bold mb-3 text-white font-display">${lavado.nombre}</h4>
                    <p class="text-white/80 text-xs uppercase tracking-wider mb-2">Incluye:</p>
                    <ul class="text-sm space-y-1.5 flex-1 overflow-y-auto mb-4 text-white/90">
                        ${detalleFormateado || '<li>Servicio completo de lavado</li>'}
                    </ul>
                    ${lavado.precio ? `<p class="text-white font-bold text-lg mb-3">${lavado.precio}</p>` : ''}
                    <div class="flex flex-col gap-2 mt-auto">
                        <button onclick="openAgendarModal('${lavado.nombre.replace(/'/g, "\\'")}', '${lavado.precio}')" class="w-full py-3 rounded-full bg-white text-primary font-bold transition-all text-sm hover:bg-white/90">Agendar</button>
                        <button onclick="document.getElementById('${cardId}').classList.toggle('flipped')" 
                                class="w-full py-3 rounded-full border-2 border-white text-white font-bold transition-all text-sm hover:bg-white/20">
                            Volver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Genera el HTML de una tarjeta de lavado premium
 * @param {Object} lavado - Datos del lavado
 * @param {number} index - Índice de la tarjeta
 * @returns {string} HTML de la tarjeta
 */
function createPremiumCard(lavado, index) {
    const cardId = `premium-card-${index}`;
    const modalId = `premium-modal-${index}`;
    
    // Resaltar "Wash" en azul
    const nombreConWashAzul = lavado.nombre.replace(/wash/gi, '<span class="text-primary">Wash</span>');
    
    // Contar items para ajustar el espaciado
    const items = lavado.detalle ? lavado.detalle.split('\n').filter(item => item.trim()) : [];
    const itemCount = items.length;
    
    // Ajustar espaciado según cantidad de items
    const spaceClass = itemCount > 5 ? 'space-y-1' : itemCount > 4 ? 'space-y-1.5' : 'space-y-2';
    const textSize = itemCount > 5 ? 'text-xs' : 'text-sm';
    
    // Formatear el detalle para mostrar como lista
    const detalleFormateado = items.length > 0
        ? items.map(item => 
            `<li class="flex items-center gap-2 font-body font-normal text-white/90 ${textSize}"><span class="w-1 h-1 bg-white rounded-full flex-shrink-0"></span> ${item.trim()}</li>`
          ).join('')
        : '<li class="font-body font-normal text-sm">Servicio premium completo</li>';
    
    return `
        <div class="group relative overflow-hidden rounded-3xl min-w-[calc(100vw-2rem)] w-[calc(100vw-2rem)] sm:min-w-[400px] sm:w-[400px] md:min-w-[500px] md:w-[500px] h-[350px] flex-shrink-0 snap-start" id="${cardId}">
            <img class="absolute inset-0 w-full h-full object-cover transition-all duration-500 premium-img" 
                 id="${cardId}-img"
                 src="${lavado.imagen}" 
                 alt="${lavado.nombre}"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 premium-overlay transition-all duration-500" id="${cardId}-overlay"></div>
            
            <!-- Precio en esquina superior derecha (solo visible en frontal) -->
            ${lavado.precio ? `<div class="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold border border-white/30 z-10 transition-all duration-500 premium-price" id="${cardId}-price">${lavado.precio}</div>` : ''}
            
            <!-- Botón volver en esquina superior derecha (solo visible en detalle) -->
            <button onclick="togglePremiumDetail('${cardId}')" class="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full font-bold border border-white/30 z-10 transition-all duration-500 opacity-0 pointer-events-none premium-back flex items-center justify-center hover:bg-white hover:text-black" id="${cardId}-back">
                <span class="material-symbols-outlined text-lg">arrow_back</span>
            </button>
            
            <!-- Contenido frontal -->
            <div class="absolute bottom-0 left-0 p-6 sm:p-8 w-full premium-front transition-all duration-500" id="${cardId}-front">
                <h4 class="text-2xl sm:text-3xl font-black text-white font-display mb-2">${nombreConWashAzul}</h4>
                <p class="text-white/80 mb-4 font-body text-sm sm:text-base">${lavado.descripcion || 'Tratamiento premium para tu vehículo.'}</p>
                ${lavado.demora ? `
                    <p class="text-xs text-white/60 mb-4 flex items-center gap-1 font-body">
                        <span class="material-symbols-outlined text-sm">schedule</span>
                        ${lavado.demora}
                    </p>
                ` : ''}
                <button onclick="togglePremiumDetail('${cardId}')" class="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold border border-white/30 hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">Ver detalle</button>
            </div>
            
            <!-- Contenido detalle (oculto por defecto) -->
            <div class="absolute inset-0 p-6 flex flex-col opacity-0 pointer-events-none transition-all duration-500 premium-detail" id="${cardId}-detail">
                <div class="mb-4">
                    <p class="text-white/50 text-xs uppercase tracking-[0.2em] mb-1 font-body">Premium</p>
                    <h4 class="text-xl font-black text-white font-display">${nombreConWashAzul}</h4>
                </div>
                <div class="flex-1 overflow-hidden">
                    <ul class="${spaceClass}">
                        ${detalleFormateado}
                    </ul>
                </div>
                <div class="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
                    ${lavado.precio ? `<p class="text-white font-bold text-xl font-body">${lavado.precio}</p>` : ''}
                    <button onclick="openAgendarModal('${lavado.nombre}', '${lavado.precio || ''}')" class="flex-1 py-3 rounded-full bg-white text-black font-bold transition-all hover:bg-white/90 hover:scale-105">Agendar</button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Toggle para mostrar/ocultar detalle de tarjeta premium
 */
function togglePremiumDetail(cardId) {
    const front = document.getElementById(`${cardId}-front`);
    const detail = document.getElementById(`${cardId}-detail`);
    const overlay = document.getElementById(`${cardId}-overlay`);
    const img = document.getElementById(`${cardId}-img`);
    
    if (detail.classList.contains('opacity-0')) {
        // Mostrar detalle
        detail.classList.remove('opacity-0', 'pointer-events-none');
        detail.classList.add('opacity-100');
        front.classList.add('opacity-0', 'pointer-events-none');
        // Oscurecer más la imagen
        overlay.classList.remove('from-black/80', 'via-black/40', 'to-black/20');
        overlay.classList.add('from-black/90', 'via-black/80', 'to-black/70');
        img.classList.add('scale-110', 'blur-sm');
        // Ocultar precio, mostrar botón volver
        const price = document.getElementById(`${cardId}-price`);
        const back = document.getElementById(`${cardId}-back`);
        if (price) {
            price.classList.add('opacity-0', 'pointer-events-none');
        }
        if (back) {
            back.classList.remove('opacity-0', 'pointer-events-none');
        }
    } else {
        // Ocultar detalle
        detail.classList.add('opacity-0', 'pointer-events-none');
        detail.classList.remove('opacity-100');
        front.classList.remove('opacity-0', 'pointer-events-none');
        // Restaurar imagen
        overlay.classList.add('from-black/80', 'via-black/40', 'to-black/20');
        overlay.classList.remove('from-black/90', 'via-black/80', 'to-black/70');
        img.classList.remove('scale-110', 'blur-sm');
        // Mostrar precio, ocultar botón volver
        const price = document.getElementById(`${cardId}-price`);
        const back = document.getElementById(`${cardId}-back`);
        if (price) {
            price.classList.remove('opacity-0', 'pointer-events-none');
        }
        if (back) {
            back.classList.add('opacity-0', 'pointer-events-none');
        }
    }
}

/**
 * Scroll del carrusel de tarjetas premium
 * @param {number} direction - Dirección del scroll (-1 izquierda, 1 derecha)
 */
function scrollPremium(direction) {
    const container = document.getElementById('lavados-premium');
    const cardWidth = 520; // Ancho de tarjeta + gap
    container.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
}

/**
 * Renderiza las tarjetas en el DOM
 * @param {Object} lavados - Objeto con arrays de lavados estándar y premium
 */
function renderLavados(lavados) {
    // Renderizar lavados estándar
    const estandarContainer = document.getElementById('lavados-estandar');
    if (estandarContainer && lavados.estandar.length > 0) {
        estandarContainer.innerHTML = lavados.estandar.map((lavado, index) => createEstandarCard(lavado, index)).join('');
    }
    
    // Renderizar lavados premium
    const premiumContainer = document.getElementById('lavados-premium');
    if (premiumContainer && lavados.premium.length > 0) {
        premiumContainer.innerHTML = lavados.premium.map((lavado, index) => createPremiumCard(lavado, index)).join('');
    }
}

/**
 * Muestra un mensaje de carga
 */
function showLoading() {
    const estandarContainer = document.getElementById('lavados-estandar');
    const premiumContainer = document.getElementById('lavados-premium');
    
    const loadingHTML = `
        <div class="min-w-[320px] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl shadow-primary/5 animate-pulse">
            <div class="h-56 bg-slate-200 dark:bg-slate-700"></div>
            <div class="p-8">
                <div class="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-4 w-3/4"></div>
                <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mb-6"></div>
                <div class="h-12 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
            </div>
        </div>
    `;
    
    if (estandarContainer) {
        estandarContainer.innerHTML = loadingHTML.repeat(3);
    }
    
    if (premiumContainer) {
        premiumContainer.innerHTML = `
            <div class="col-span-2 h-64 bg-slate-800 rounded-3xl animate-pulse"></div>
        `;
    }
}

/**
 * Inicializa la carga de datos
 */
async function initLavados() {
    showLoading();
    
    const lavados = await fetchSheetData();
    
    if (lavados) {
        renderLavados(lavados);
        console.log('Lavados cargados:', lavados);
    } else {
        console.error('No se pudieron cargar los lavados');
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initLavados);

// ========================================
// SISTEMA DE AGENDAMIENTO
// ========================================

// Variables globales para el agendamiento
let agendamiento = {
    nombre: '',
    precio: '',
    fecha: '',
    horario: ''
};

// Número de WhatsApp (cambiar por el número real)
const WHATSAPP_NUMBER = '595983140313'; // Formato: código país + número sin espacios ni signos

/**
 * Consulta servicio corporativo via WhatsApp
 */
function consultarCorporativo() {
    const mensaje = 'Buenas, me gustaría recibir más información sobre el servicio corporativo.';
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Consulta información sobre lavados via WhatsApp
 */
function consultarLavados() {
    const mensaje = 'Buenas. Me gustaría más información sobre los lavados disponibles.';
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Abre el modal de agendamiento
 * @param {string} nombreLavado - Nombre del lavado seleccionado
 * @param {string} precio - Precio del lavado
 */
function openAgendarModal(nombreLavado, precio = '') {
    agendamiento.nombre = nombreLavado;
    agendamiento.precio = precio;
    agendamiento.fecha = '';
    agendamiento.horario = '';
    
    // Actualizar el header del modal
    document.getElementById('modal-lavado-nombre').textContent = nombreLavado;
    
    // Establecer fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha-lavado').min = today;
    document.getElementById('fecha-lavado').value = '';
    
    // Resetear pasos
    mostrarPaso('fecha');
    
    // Mostrar modal
    const modal = document.getElementById('modal-agendar');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de agendamiento
 */
function closeAgendarModal() {
    const modal = document.getElementById('modal-agendar');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

/**
 * Muestra un paso específico del modal
 * @param {string} paso - Nombre del paso (fecha, horario, confirmacion)
 */
function mostrarPaso(paso) {
    document.querySelectorAll('.paso-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`paso-${paso}`).classList.remove('hidden');
}

/**
 * Avanza al paso de selección de horario
 */
function irAPasoHorario() {
    const fecha = document.getElementById('fecha-lavado').value;
    if (!fecha) {
        alert('Por favor selecciona una fecha');
        return;
    }
    agendamiento.fecha = fecha;
    
    // Limpiar selección de horario anterior
    document.querySelectorAll('.horario-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/10');
    });
    
    mostrarPaso('horario');
}

/**
 * Vuelve al paso de fecha
 */
function volverAPasoFecha() {
    mostrarPaso('fecha');
}

/**
 * Selecciona un horario
 * @param {string} hora - Hora seleccionada
 */
function seleccionarHorario(hora) {
    agendamiento.horario = hora;
    
    // Marcar botón seleccionado
    document.querySelectorAll('.horario-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/10');
    });
    event.target.classList.add('border-primary', 'bg-primary/10');
    
    // Mostrar resumen
    irAPasoConfirmacion();
}

/**
 * Avanza al paso de confirmación
 */
function irAPasoConfirmacion() {
    // Formatear fecha para mostrar
    const fechaObj = new Date(agendamiento.fecha + 'T12:00:00');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', options);
    
    // Actualizar resumen
    document.getElementById('resumen-servicio').textContent = agendamiento.nombre;
    document.getElementById('resumen-fecha').textContent = fechaFormateada;
    document.getElementById('resumen-horario').textContent = agendamiento.horario + ' hs';
    
    mostrarPaso('confirmacion');
}

/**
 * Vuelve al paso de horario
 */
function volverAPasoHorario() {
    mostrarPaso('horario');
}

/**
 * Confirma el agendamiento y abre WhatsApp
 */
function confirmarAgendamiento() {
    // Formatear fecha para el mensaje
    const fechaObj = new Date(agendamiento.fecha + 'T12:00:00');
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', options);
    
    // Crear mensaje para WhatsApp
    const mensaje = `Buenas. Me gustaría agendar un lavado ${agendamiento.nombre} para el día ${fechaFormateada} a las ${agendamiento.horario}. ¿Tendrían disponibilidad?`;
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    window.open(whatsappUrl, '_blank');
    
    // Cerrar modal
    closeAgendarModal();
}

// Exportar para uso externo si es necesario
window.WashMotorsLavados = {
    fetchSheetData,
    renderLavados,
    initLavados,
    openAgendarModal,
    closeAgendarModal
};
