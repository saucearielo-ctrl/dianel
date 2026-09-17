

// Base de datos de productos organizada por categorías
const productos = [
    {
        id: 1,
        categoria: "mujer",
        nombre: "Brallet de encaje",
        precio: 6000,
        talles: ["85", "90", "95", "100"],
        imagen: "imagenes/mujeres/brallet-encaje.jpeg",
        
    },
    {
        id: 2,
        categoria: "mujer",
        nombre: "Brallet",
        precio: 7000,
        talles: ["S", "M", "L", "XL"],
        imagen: "imagenes/mujeres/brallet.jpeg",
        
    },


    {
        id: 5,
        categoria: "nino",
        nombre: "Medias antideslizantes",
        descripcion: "Algodón suave y costuras planas anti-rozaduras.",
        precio: 2500,
        talles: ["Hasta 4 años"],
        imagen: "imagenes/niños/media-niño-antideslizante.jpeg",
        
    },

    {
        id: 6,
        categoria: "nino",
        nombre: "Conjunto niñas",
        descripcion: "Algodón suave y costuras planas anti-rozaduras.",
        precio: 5000,
        talles: ["Hasta 12 años"],
        imagen: "imagenes/niños/conjunto-niñas.jpeg",
        
    },
    {

        id: 7,
        categoria: "nino",
        nombre: "Bombachitas niñas",
        descripcion: "Algodón suave y costuras planas anti-rozaduras.",
        precio: 2500,
        talles: ["Hasta 12 años"],
        imagen: "imagenes/niños/bombachitas.jpeg",
        
    },
    {

        id: 8,
        categoria: "nino",
        nombre: "Boxer niños",
        descripcion: "Algodón suave y costuras planas anti-rozaduras.",
        precio: 2500,
        talles: ["Hasta 4 años"],
        imagen: "imagenes/niños/box-niños.jpeg",
        
    },
    {

        id: 9,
        categoria: "nino",
        nombre: "Bomchitas lisas nenas",
        descripcion: "Algodón suave y costuras planas anti-rozaduras.",
        precio: 2500,
        talles: ["Hasta 4 años"],
        imagen: "imagenes/niños/bombachitas-nenas-1.jpeg",
        
    },
        {

        id: 10,
        categoria: "nino",
        nombre: "Medias nenas",
        descripcion: "Algodón suave y costuras planas anti-rozaduras.",
        precio: 1500,
        talles: ["Hasta 4 años"],
        imagen: "imagenes/niños/medias-nenas.jpeg",
        
    },
    {
        id: 11,
        categoria: "mujer",
        nombre: "Colales especial",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 3000,
        talles: ["XL"],
        imagen: "imagenes/mujeres/colaess-especial.jpeg",
        
    },
    {
        id: 12,
        categoria: "mujer",
        nombre: "Colales en modal",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 2500,
        talles: ["M", "L"],
        imagen: "imagenes/mujeres/colales-en-modal.jpeg",
        
    },
    {
        id: 13,
        categoria: "mujer",
        nombre: "Conjunto armado de algodón",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 12000,
        talles: ["85", "90", "100"],
        imagen: "imagenes/mujeres/conj-armaddo-de-algodon.jpeg",
        
    },
    {
        id: 14,
        categoria: "mujer",
        nombre: "Conjunto armado/modal",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 13000,
        talles: ["85", "90", "95", "100"],
        imagen: "imagenes/mujeres/conj-armado-modal.jpeg",
        
    },
    {
        id: 15,
        categoria: "mujer",
        nombre: "Conjunto armado de morley",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 13000,
        talles: [ "90", "100"],
        imagen: "imagenes/mujeres/conj-armado-morley.jpeg",
        
    },
    {
        id: 16,
        categoria: "mujer",
        nombre: "Conjunto straple con les regulable",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 15000,
        talles: ["95"],
        imagen: "imagenes/mujeres/conj-straple-con-less-regulable.jpeg",
        
    },
    {
        id: 17,
        categoria: "mujer",
        nombre: "Conjunto armado de 3 piezas",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 16000,
        talles: ["85", "90", "95", "100"],
        imagen: "imagenes/mujeres/conj.armado-3piezas.jpeg",
        
    },
    {
        id: 18,
        categoria: "mujer",
        nombre: "Conjunto armado Linda Luna",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 15000,
        talles: ["85", "90", "95",],
        imagen: "imagenes/mujeres/conjunto-armado-linda-luna.jpeg",
        
    },
    {
        id: 19,
        categoria: "mujer",
        nombre: "Conjunto armado",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 12000,
        talles: ["95"],
        imagen: "imagenes/mujeres/conjunto-armado.jpeg",
        
    },
    {
        id: 20,
        categoria: "mujer",
        nombre: "Conjunto deportivo",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 7000,
        talles: ["S/M", "L/XL"],
        imagen: "imagenes/mujeres/conjunto-deportivo.jpeg",
        
    },
        {
        id: 21,
        categoria: "mujer",
        nombre: "Conjunto triangulito",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 8000,
        talles: ["85", "90", "100"],
        imagen: "imagenes/mujeres/Conjunto-triangulito.jpeg",
        
    },
    {
        id: 22,
        categoria: "mujer",
        nombre: "Corpiño algodón",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 3000,
        talles: ["85", "90", "95", "100"],
        imagen: "imagenes/mujeres/corpino-algodon.jpeg",
        
    },
    {
        id: 23,
        categoria: "mujer",
        nombre: "Culotte les",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 3500,
        talles: ["M/L"],
        imagen: "imagenes/mujeres/culote-less.jpeg",
        
    },
    {
        id: 24,
        categoria: "mujer",
        nombre: "Conjunto deportivo con broche",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 8500,
        talles: ["L", "XL"],
        imagen: "imagenes/mujeres/deportivo-con-broche.jpeg",
        
    },
    {
        id: 25,
        categoria: "mujer",
        nombre: "Conjunto deportivo con top y vedetina",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 9000,
        talles: ["L", "XL"],
        imagen: "imagenes/mujeres/deportivo-con-top-entero.jpeg",
        
    },
    {
        id: 26,
        categoria: "mujer",
        nombre: "Pack colales x 3",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 12000,
        talles: ["L"],
        imagen: "imagenes/mujeres/pack-colaless.jpeg",
        
    },
    {
        id: 27,
        categoria: "mujer",
        nombre: "Reductores",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 7000,
        talles: ["110", "115"],
        imagen: "imagenes/mujeres/reductores.jpeg",
        
    },
    {
        id: 28,
        categoria: "mujer",
        nombre: "Top con cierre",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 8000,
        talles: ["S/M", "L/XL"],
        imagen: "imagenes/mujeres/top-con-cierre.jpeg",
        
    },
    {
        id: 29,
        categoria: "mujer",
        nombre: "Top deportivo con cierre",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 7500,
        talles: ["S/M"],
        imagen: "imagenes/mujeres/top-deportivo-cierre.jpeg",
        
    },
    {
        id: 30,
        categoria: "mujer",
        nombre: "Top deportivo entero",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 7000,
        talles: ["S/M", "L/XL"],
        imagen: "imagenes/mujeres/top-deportivo.jpeg",
        
    },
    {
        id: 31,
        categoria: "mujer",
        nombre: "Triangulito liso",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 7500,
        talles: ["85", "90", "95", "100"],
        imagen: "imagenes/mujeres/triangulito-liso.jpeg",
        
    },
        {
        id: 32,
        categoria: "mujer",
        nombre: "Vedetina algodón",
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 3500,
        talles: ["S", "M", "L", "XL"],
        imagen: "imagenes/mujeres/vedetina-algodon.jpeg",
        
    },
    {
        id: 33,
        categoria: "juvenil",
        nombre: "Conjunto juvenil" ,
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 6500,
        talles: ["75", "80"],
        imagen: "imagenes/juveniles/conjunto-juveniles.jpeg",
        
    },
        {
        id: 34,
        categoria: "juvenil",
        nombre: "Bóxer juvenil" ,
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 3500,
        talles: ["14", "16"],
        imagen: "imagenes/juveniles/box-juvenil.jpeg",
        
    },
    {
        id: 35,
        categoria: "juvenil",
        nombre: "Culotte les con encaje" ,
        descripcion: "Transparencias delicadas con ajuste perfecto y confort total.",
        precio: 4000,
        talles: ["S"],
        imagen: "imagenes/juveniles/culote-less-encaje.jpeg",
        
    },
    {
        id: 3,
        categoria: "hombre",
        nombre: "Bóxer UOMO",
        descripcion: "Algodón peinado con elástico suave que no ajusta.",
        precio: 9500,
        talles: ["S", "M", "L", "XL"],
        imagen: "imagenes/hombres/box-uomo.jpeg",
        
    },
    {
        id: 36,
        categoria: "hombre",
        nombre: "Bóxer Microfibra",
        descripcion: "Algodón peinado con elástico suave que no ajusta.",
        precio: 4500,
        talles: ["1", "2", "3", "4"],
        imagen: "imagenes/hombres/boxer-men.jpeg",
        
    },
    {
        id: 37,
        categoria: "hombre",
        nombre: "Media Adidas",
        descripcion: "Algodón peinado con elástico suave que no ajusta.",
        precio: 3000,
        talles: ["35/40"],
        imagen: "imagenes/hombres/media-adidas.jpeg",
        
    },
    {
        id: 38,
        categoria: "hombre",
        nombre: "Medias de vestir",
        descripcion: "Algodón peinado con elástico suave que no ajusta.",
        precio: 3000,
        talles: ["35/40"],
        imagen: "imagenes/hombres/medias-varias.jpeg",
        
    },
    {    id: 39,
        categoria: "hombre",
        nombre: "Bóxer Calvin Klein",
        descripcion: "Algodón peinado con elástico suave que no ajusta.",
        precio: 9500,
        talles: ["1", "2", "3", "4"],
        imagen: "imagenes/hombres/boxer-calvin.jpeg",
        
    },
    

];

let carrito = [];

// Elementos del DOM
const gridProductos = document.getElementById("productsSlider");
const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotalPrice = document.getElementById("cart-total-price");
const btnCheckout = document.getElementById("btn-checkout");
const tituloCatalogo = document.getElementById("titulo-catalogo");

// Renderizar Productos en pantalla
function mostrarProductos(categoriaFiltro = "todos") {
    gridProductos.innerHTML = "";
    
    let productosFiltrados = categoriaFiltro === "todos" 
        ? productos 
        : productos.filter(p => p.categoria === categoriaFiltro);

    if(productosFiltrados.length === 0) {
        gridProductos.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#666;">No hay productos disponibles en esta categoría actualmente.</p>`;
        return;
    }

    productosFiltrados.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Generar opciones de talles
        let tallesHTML = prod.talles.map((talle, index) => `
            <input type="radio" id="talle-${prod.id}-${talle}" name="talle-${prod.id}" value="${talle}" ${index === 0 ? 'checked' : ''} class="size-radio">
            <label for="talle-${prod.id}-${talle}" class="size-label">${talle}</label>
        `).join('');

        card.innerHTML = `
            ${prod.badge ? `<div class="badge">${prod.badge}</div>` : ''}
            <div class="product-img" style="background-image: url('${prod.imagen}'); cursor: zoom-in;" onclick="abrirModalZoom(${prod.id})"></div>
            <div class="product-info">
                <div>
                    <h3>${prod.nombre}</h3>
                    
                    <div class="sizes-selector">
                        <label>Seleccionar Talle:</label>
                        <div class="sizes-options">
                            ${tallesHTML}
                        </div>
                    </div>
                </div>
                <div class="product-footer">
                    <span class="price">$${prod.precio.toLocaleString('es-AR')}</span>
                    <button class="btn-add-cart" onclick="agregarAlCarrito(${prod.id})">Agregar al Carrito</button>
                </div>
            </div>
        `;
        gridProductos.appendChild(card);
    });
}

// Filtrar por categoría desde los botones o tarjetas
window.filtrarCategoria = function(categoria) {
    mostrarProductos(categoria);
    
    // Actualizar botones activos de forma segura
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
        const onclickAttr = btn.getAttribute("onclick") || "";
        if (onclickAttr.includes(`'${categoria}'`) || onclickAttr.includes(`"${categoria}"`)) {
            btn.classList.add("active");
        }
    });

    // Desplazarse hacia la sección de catálogo suavemente
    document.getElementById("catalogo").scrollIntoView({ behavior: 'smooth' });
}

// Agregar producto al carrito
window.agregarAlCarrito = function(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    
    // Obtener el talle seleccionado
    const talleSeleccionadoInput = document.querySelector(`input[name="talle-${idProducto}"]:checked`);
    const talle = talleSeleccionadoInput ? talleSeleccionadoInput.value : producto.talles[0];

    // Verificar si ya existe el mismo producto con el mismo talle
    const indexExistente = carrito.findIndex(item => item.id === idProducto && item.talle === talle);

    if(indexExistente > -1) {
        carrito[indexExistente].cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            talle: talle,
            cantidad: 1
        });
    }

    actualizarCarritoUI();
    abrirCarrito();
}

// Actualizar Interfaz del Carrito
function actualizarCarritoUI() {
    cartItemsContainer.innerHTML = "";
    
    if(carrito.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío</p>`;
        cartCount.textContent = "0";
        cartTotalPrice.textContent = "$0";
        return;
    }

    let total = 0;
    let totalItems = 0;

    carrito.forEach((item, index) => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        totalItems += item.cantidad;

        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item-card";
        itemDiv.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.nombre}</h4>
                <p>Talle: <strong>${item.talle}</strong> | Cant: ${item.cantidad}</p>
                <p>$${subtotal.toLocaleString('es-AR')}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="eliminarDelCarrito(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    cartCount.textContent = totalItems;
    cartTotalPrice.textContent = `$${total.toLocaleString('es-AR')}`;
}

// Eliminar producto del carrito
window.eliminarDelCarrito = function(index) {
    carrito.splice(index, 1);
    actualizarCarritoUI();
}

// Control de apertura y cierre del cajón del carrito
function abrirCarrito() {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
}

function cerrarCarrito() {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
}

cartBtn.addEventListener("click", abrirCarrito);
closeCart.addEventListener("click", cerrarCarrito);
cartOverlay.addEventListener("click", cerrarCarrito);

// Enviar Pedido por WhatsApp
btnCheckout.addEventListener("click", () => {
    if(carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! 🛍️ Vengo desde la página web de *DiaNel Lencería* y quiero hacer el siguiente encargo/consultar stock:\n\n";
    
    let totalGeneral = 0;
    carrito.forEach((item, i) => {
        let sub = item.precio * item.cantidad;
        totalGeneral += sub;
        mensaje += `${i + 1}. *${item.nombre}*\n   - Talle: ${item.talle}\n   - Cantidad: ${item.cantidad}\n   - Subtotal: $${sub.toLocaleString('es-AR')}\n\n`;
    });

    mensaje += `💰 *Total estimado: $${totalGeneral.toLocaleString('es-AR')}*\n\n¿Podrías confirmarme stock y datos para el envío por favor?`;

    let telefono = "543704282706"; // Tu número de WhatsApp
    let urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWhatsApp, "_blank");
});

// Inicializar cargando todos los productos al abrir la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos("todos");
});

const prodPrevBtn = document.querySelector('.products .prev-btn');
const prodNextBtn = document.querySelector('.products .next-btn');

if (prodNextBtn && prodPrevBtn && gridProductos) {
    prodNextBtn.addEventListener('click', () => {
        gridProductos.scrollBy({ left: 320, behavior: 'smooth' });
    });

    prodPrevBtn.addEventListener('click', () => {
        gridProductos.scrollBy({ left: -320, behavior: 'smooth' });
    });
}


function abrirModalZoom(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    
    document.getElementById('imgZoom').src = producto.imagen;
    document.getElementById('tituloZoom').textContent = producto.nombre;
    document.getElementById('descZoom').textContent = producto.$precio;
    document.getElementById('modalZoom').classList.add('activo');
}

function cerrarModalZoom() {
    document.getElementById('modalZoom').classList.remove('activo');
}

// Eventos de cierre (botón X o hacer clic fuera del recuadro blanco)
document.getElementById('cerrarModal').addEventListener('click', cerrarModalZoom);
document.getElementById('modalZoom').addEventListener('click', (e) => {
    if (e.target.id === 'modalZoom') cerrarModalZoom();
});
// Cierre con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModalZoom();
});
