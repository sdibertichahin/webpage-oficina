fetch("js/datos.json")
    .then(response => response.json())
    .then(datos => {

        // ESTADÍSTICAS

        let contenedorEstadisticas =
            document.querySelector("#contenedorEstadisticas");

        datos.estadisticas.forEach(estadistica => {

            contenedorEstadisticas.innerHTML += `
                <div class="estadistica">

                    <span>
                        ${estadistica.numero}
                    </span>

                    <p>
                        ${estadistica.texto}
                    </p>

                </div>
            `;

        });



        // ENFOQUE

        let contenedorEnfoque =
            document.querySelector("#contenedorEnfoque");

        datos.enfoque.forEach(item => {

            contenedorEnfoque.innerHTML += `
                <div class="enfoque-item">

                    <h3>
                        ${item.titulo}
                    </h3>

                    <p>
                        ${item.descripcion}
                    </p>

                </div>
            `;

        });



        // SERVICIOS

       const contenedorServicios = document.querySelector("#contenedorServicios");

datos.servicios.forEach(servicio => {

    contenedorServicios.innerHTML += `
        <article class="servicio">

            <img
                src="${servicio.icono}"
                alt=""
                class="servicio-icono"
            >

            <h3>${servicio.nombre}</h3>

            <p>${servicio.descripcion}</p>

        </article>
    `;

});


        // EQUIPO

        const contenedorEquipo = document.querySelector("#contenedorEquipo");

datos.equipo.forEach((persona, index) => {

    contenedorEquipo.innerHTML += `
        <article class="persona ${index % 2 !== 0 ? "invertida" : ""}">

            <div class="persona-img">
                <img
                    src="${persona.imagen}"
                    alt="${persona.nombre}"
                >
            </div>

            <div class="persona-info">

                <h3>${persona.nombre}</h3>

                <h4>${persona.cargo}</h4>

                <p>${persona.descripcion}</p>

            </div>

        </article>
    `;

});


        const contenedorCasos = document.querySelector("#contenedorCasos");

datos.casos.forEach(caso => {

    contenedorCasos.innerHTML += `
        <div class="caso-video">

            <iframe
                src="${caso.video}"
                title="${caso.titulo}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>

        </div>

        <div class="caso-info">

            <h3>${caso.titulo}</h3>

            <p>${caso.descripcion}</p>

        </div>
    `;

});


    });