(function () {

    // --- DEFAULT MAESTRO DATA ---
    const DEFAULT_MAESTRO = `CUIT	RAZON_SOCIAL	COND_IVA	ALIAS
20-12503199-5	GONZALEZ JORGE ALBERTO	RI	MAINQUE (Gonzalez)
20-13989607-7	ARROYO OSVALDO E.	RI	OEA Arroyo
20-20042392-6	MARCOS MARCELO OSCAR	RI	MARCOS
20-23873862-9	DÍAZ IGNACIO JAVIER	RI	EL BARCO
20-30784201-8	GOMEZ PERACCA ANDRES	RI	LA BODEGUITA (Gomez Peracca)
23-25316535-9	CICATIELLO EDGARDO ADOLFO	RI	Cicatiello Edgardo
24-24124642-2	TATO JUAN ANDRES	RI	ALMACEN DE VINOS
30-52851366-9	CASA PALM S.A.C.I.I.A.	RI	Casa Palm
30-56029640-8	GRANJA SAN MIGUEL S.A.	RI	Granja San Miguel
30-58404786-7	MADECO S.A.C. e I	RI	MADECO
30-64592271-5	INDUSTRIAS SALADILLO S.A.	RI	SALADILLO
30-67277058-7	NIPPON CAR S.R.L.	RI	NIPPON CAR SRL
30-68908953-0	FRILOP S.R.L.	RI	FRILOP
30-69957640-5	CUVELIER LOS ANDES S.A.	RI	Cuvelier Los Andes
30-70725102-2	MADERWIL S.A.	RI	MADERWILL SA
30-70817475-7	DISTRIBUIDORA ELPAR S.R.L.	RI	Distribuidora ELPAR
30-70850179-0	SUPER CLIN S.R.L.	RI	SuperClin
30-70984298-2	ROCO S.R.L.	RI	ROCCO
30-71133567-2	MR Y MR S.A.	RI	MR y MR SA
30-71214772-1	MARCAS AL SUR S.R.L.	RI	Marcas al Sur
30-71431387-4	J y J S Hecho de GOVONI J	RI	LA BAHIA
30-71603663-0	ALOCAL S.A.S.	RI	ALOCAL
30-71686397-9	DHUMAX S.A.S.	RI	DHUMAX
30-71791838-6	MANANTIALES DE LA PATAGONIA S.A.S.	RI	ALUNCO
30-71849936-0	B.C.A.M. OBRAS Y DESARROL	RI	Obras y Desarrollos
33-71523904-9	CASA PIRQUE S.A.	RI	Com Patagonia (Casa Pirque)
30-70942912-0	TRUCHAS SAYHUEQUE S.R.L.	RI	TRUCHAS
20-20151191-8	ALSINA MARCELO JAVIER	RI	ALSINA 
20-29872352-3	MORENO BERNARDO ROQUE	RI	SERVITEC
30-64014267-3	ORACLE ARGENTINA S.R.L.	RI	ORACLE
30-71427974-9	SUR INDUMENTARIA BARILOCHE	RI	SUR INDUMENTARIA
23-08107490-9	GALINDEZ DEHEZA FERNANDO	RI	GALINDEZ
20-04440477-0	GIMENEZ CARLOS ALBERTO	RI	GIMENEZ CARLOS
30-70158199-3	ALTO VALOR S.A.	RI	ALTO VALOR
30-62635273-8	AGUA Y GAS S.R.L.	RI	AGUA Y GAS
30-71196652-4	LE MARQUE S.A.	RI	LE MARQUE
30-70814021-6	PATAGONIA VINOS S.R.L.	RI	PATAGONIA VINOS
30-71738934-0	RR PATAGONIA S.A.	RI	RR PATAGONIA
20-10985920-7	BORETSKY PABLO	RI	BORETSKY
30-67281280-8	CEDISUR S.A.	RI	CEDISUR
30-71643222-6	AGRÍCOLA DE CASO S.R.L.	RI	Agricola de Caso
30-68907011-2	ACUARELA S.R.L.	RI	Mix
30-71624838-7	ABERTURAS INTELIGENTES S.A.	RI	Abertec
20-93713307-4	KIBYSH VIKTOR	RI	KIBYSH VIKTOR
30-50537486-6	PRODUCTOS VENIER S.A.	RI	Venier
20-92494090-6	GLAS Y LECHNER CRISTIAN J	RI	Glas y Lechner
20-21669189-0	RODRÍGUEZ ROBERTO CRISTIA	RI	Todo Luz
30-71806546-8	MASA PATAGONIA S.A.S.	RI	MASA
30-71084627-4	PROVETEL ARGENTINA S.A.	RI	Provetel
30-71036350-8	GS ALIMENTOS S.R.L.	RI	Grupo Serra
30-71038353-3	TOKIO GASTRONOMÍA S.R.L.	RI	Ventimiglia
30-66135045-4	BARCIA INDUSTRIA METALÚRGICA	RI	Barcia
30-51787491-0	LA AGRÍCOLA S.A.	RI	Familia Zuccardi
30-70759619-4	ESPA ARGENTINA S.A.U.	RI	ESPA
30-69958285-5	BODEGA DIAMANDES S.A.	RI	Diamandes
30-70708466-5	CLOS DE LOS SIETE S.A.	RI	Clos de los Siete
30-71219239-5	NANDY PAISAJISMO S.R.L.	RI	GWall
30-55656579-8	Cruz del Sur (Víctor Masso)	RI	Cruz del Sur
23-23697774-9	FERNÁNDEZ CARLOS DANIEL	RI	Fernandez Carlos Daniel
30-64603999-8	FERBA S.R.L.	RI	Ferba
30-71874027-0	BEBER BIEN S.A.S.	RI	BEBER BIEN
33-50448711-9	EL TEHUELCHE S.A.	RI	El Tehuelche
20-20151191-8	ALSINA MARCELO JAVIER	RI	Triuno
33-71523904-9	CASA PIRQUE S.A.	RI	Casa Pirque
30-70799361-4	PROYECTO ORION S.R.L.	RI	Las 3 Marias
30-68588939-7	DIRECTV ARGENTINA S.R.L.	RI	Directv
33-70779039-9	ENERGÍA S.R.L.	RI	Pizzuti
30-71780180-2	AMENITIES COMPANY S.R.L.	RI	Amenities Company SRL
20-26716960-9	GONZÁLEZ DIEGO MANUEL	RI	Gonzalez Diego Manuel
30-71893490-3	DISTRI-LIMP PATAGONIA S. A. S.	RI	Distri Limp
20-40160851-7	ORTIZ CARLOS	RI	Puente (Ortiz Carlos)
30-71235642-8	FULLMOON S.A.	RI	Euterma
30-71230444-4	DEMOY S.R.L.	RI	Demoy
30-71559993-3	YATEN REVESTIMIENTOS S.R.L.	RI	Yaten Revestimientos
30-70873618-6	COMERCIALIZADORA MORRES S	RI	Morres
30-68966588-4	CONDUCOM S.A.	RI	Conducom 
30-70963104-3	HIZA INGENIERIA Y CONSTRUCCIONES SRL	RI	Hiza
30-71404589-6	RR PATAGONIA S.A.	RI	R&R Patagonia
30-68599995-8	DI STABILE e HIJOS S.A.	RI	Di Stabile
30-71733920-3	V.B.S. S.A.S.	RI	VBS
30-71886138-8	GRUPO ABERTEC PATAGONIA S.A.S.	RI	AbertecH
33-70225354-9	TRANSPORTE SIERRA S.R.L.	RI	TRANSPORTE SIERRA S.R.L.
20-24171282-7	EPIS GUSTAVO PEDRO	RI	Epis
30-71685061-3	LUCKY TEAM S.A.	RI	Taraborelli
33-70837621-9	METAB S.A.	RI	Metab
30-71008729-2	ROLLAND WINE AND CONSULTING S.A.	RI	Rolland
30-71903585-6	BLZ S.A.S.	RI	Sayhueque
30-65775295-5	ANOXIDE S.R.L.	RI	Anoxide
30-60921310-4	LA CAMPANA JAPONESA S.R.L.	RI	Viveros La Facultad
20-23123274-6	GIMENEZ MARTIN CARLOS	RI	Gimenez Martin Carlos
30-52055782-9	RELD SACIFIA	RI	Reld
20-32087109-4	GALEAZZI FEDERICO ANDRES	RI	Dolce Rama
30-71522491-3	ACG AIRE S.R.L	RI	ACG AIRE
20-13132035-4	BOUCHER FRANCISCO MARCELO	RI	Boucher Francisco Marcelo
20-29543860-7	Jorge Ernesto Calvi	RI	FULL CLEAN`;

    // --- DOM ELEMENTS ---
    const textMaestro = document.getElementById('maestroInput');
    const textAfip = document.getElementById('afipInput');
    const textOutput = document.getElementById('tsvOutput');
    const textHeaderDef = document.getElementById('defaultHeaderInput');

    const btnProcess = document.getElementById('processBtn');
    const btnCopy = document.getElementById('copyBtn');
    const btnToggleMaestro = document.getElementById('toggleMaestroBtn');
    const btnResetMaestro = document.getElementById('resetMaestroBtn');
    const btnClearInput = document.getElementById('clearInputBtn');
    const btnImportMaestro = document.getElementById('btnImportMaestro');
    const btnExportMaestro = document.getElementById('btnExportMaestro');
    const fileImportMaestro = document.getElementById('importMaestroFile');

    const divMaestro = document.getElementById('maestroContainer');
    const statusBadge = document.getElementById('statusBadge');
    const toastContainer = document.getElementById('toastContainer');

    // --- INIT ---
    // 1. Maestro
    const savedMaestro = localStorage.getItem('shafu_maestro_v1');
    if (textMaestro) {
        textMaestro.value = savedMaestro ? savedMaestro : DEFAULT_MAESTRO;
    }
    // 2. Header Default
    const savedHeader = localStorage.getItem('shafu_header_v3');
    // Header por defecto precargado (el de la imagen del usuario para ayudar)
    // Header por defecto precargado (Versión Compacta - Vista Web "Mis Comprobantes")
    // OJO: AFIP web a veces oculta "Tipo de Comprobante". Esta versión asume: Fecha, PV, Nro, Denom...
    const DEFAULT_HEADER_TEXT = `Fecha de Emisión	Punto de Venta	Número Desde	Denominación Emisor	Imp. Neto Gravado IVA 0%	Imp. Neto Gravado IVA 2,5%	IVA 2,5%	Imp. Neto Gravado IVA 5%	IVA 5%	Imp. Neto Gravado IVA 10,5%	IVA 10,5%	Imp. Neto Gravado IVA 21%	IVA 21%	Imp. Neto Gravado IVA 27%	IVA 27%	Imp. Neto Gravado Total	Imp. Neto No Gravado	Imp. Op. Exentas	Otros Tributos	Total IVA	Imp. Total`;

    if (textHeaderDef) {
        // Forzar la actualización al header correcto si el usuario tiene el que causó problemas
        const oldBadHeader = "Tipo Doc. Emisor";
        if (!savedHeader || savedHeader.length < 50 || savedHeader.includes(oldBadHeader)) {
            textHeaderDef.value = DEFAULT_HEADER_TEXT;
            // Actualizar también el storage para que no persista el malo
            localStorage.setItem('shafu_header_v3', DEFAULT_HEADER_TEXT);
        } else {
            textHeaderDef.value = savedHeader;
        }
    }

    // --- EVENTS ---
    if (textMaestro) {
        textMaestro.addEventListener('input', () => {
            localStorage.setItem('shafu_maestro_v1', textMaestro.value);
            statusBadge.textContent = "Maestro Guardado";
        });
    }

    if (textHeaderDef) {
        textHeaderDef.addEventListener('input', () => {
            localStorage.setItem('shafu_header_v3', textHeaderDef.value);
        });
    }

    // Botones Maestro
    if (btnResetMaestro) {
        btnResetMaestro.addEventListener('click', () => {
            if (confirm('¿Restaurar maestro original?')) {
                textMaestro.value = DEFAULT_MAESTRO;
                localStorage.removeItem('shafu_maestro_v1');
                showToast('Maestro restaurado.', 'success');
            }
        });
    }

    if (btnExportMaestro) {
        btnExportMaestro.addEventListener('click', () => {
            const blob = new Blob([textMaestro.value], { type: 'text/tab-separated-values' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `maestro_proveedores_${new Date().toISOString().slice(0, 10)}.tsv`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('Descarga iniciada.', 'success');
        });
    }

    if (btnImportMaestro) {
        btnImportMaestro.addEventListener('click', () => fileImportMaestro.click());
        fileImportMaestro.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                textMaestro.value = ev.target.result;
                localStorage.setItem('shafu_maestro_v1', textMaestro.value);
                showToast('Maestro importado correctamente.', 'success');
                // Mostrar panel para confirmar visualmente
                divMaestro.classList.remove('hidden');
                btnToggleMaestro.textContent = "Ocultar Maestro";
            };
            reader.readAsText(file);
            e.target.value = ''; // Reset input
        });
    }

    if (btnClearInput) {
        btnClearInput.addEventListener('click', () => {
            textAfip.value = '';
            textOutput.value = '';
            statusBadge.textContent = "Listo";
            statusBadge.style.color = "";
            statusBadge.style.background = "";
            textAfip.focus();
        });
    }

    if (btnToggleMaestro) {
        btnToggleMaestro.addEventListener('click', () => {
            divMaestro.classList.toggle('hidden');
            btnToggleMaestro.textContent = divMaestro.classList.contains('hidden')
                ? "Ver/Editar Manualmente"
                : "Ocultar Maestro";
        });
    }

    if (btnProcess) btnProcess.addEventListener('click', processData);

    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            if (!textOutput.value) return;
            navigator.clipboard.writeText(textOutput.value)
                .then(() => showToast('Copiado.', 'success'))
                .catch(() => showToast('Error al copiar', 'error'));
        });
    }

    // --- MAIN LOGIC ---

    function processData() {
        clearToasts();

        // 2. Parsear Maestro
        const maestroMap = parseMaestro(textMaestro.value.trim()); // CUIT -> { razon, condIva }
        if (maestroMap.size === 0) {
            showToast('El maestro de proveedores está vacío o inválido.', 'error');
            return;
        }

        // 3. Parsear AFIP
        const rawAfip = textAfip.value.trim();
        if (!rawAfip) {
            showToast('No ingresaste datos de entrada.', 'warning');
            return;
        }

        let afipLines = rawAfip.split(/\r?\n/);

        // --- LÓGICA DE ENCABEZADO AUTOMÁTICO ---
        // Chequeamos si la primera línea parece ser un dato (empieza con fecha dd/mm/aaaa)
        // O si el usuario pegó encabezado.
        const firstLine = afipLines[0].trim();
        const seemsLikeData = /^\d{1,2}\/\d{1,2}\/\d{2,4}/.test(firstLine);

        if (seemsLikeData) {
            // NO TIENE ENCABEZADO -> Usar el del box por defecto
            const headerDef = textHeaderDef.value.trim();
            if (!headerDef) {
                showToast('Tus datos no tienen títulos y la caja de "Encabezado por Defecto" está vacía.', 'error');
                return;
            }
            // Insertamos el header virtualmente
            afipLines.unshift(headerDef);
            showToast('Usando encabezado por defecto.', 'success');
        } else {
            // Tiene encabezado (supuestamente).
            // Validamos que no sea basura.
            if (afipLines.length < 2) {
                // Solo hay 1 linea y no parece fecha -> es solo header?
                showToast('Solo hay encabezados, faltan datos.', 'warning');
                return;
            }
        }

        // Detectar separador (Ignorando el header inyectado si existe)
        let sepMode = 'tab';

        let sampleLine = afipLines[0]; // Por defecto miramos el header
        if (seemsLikeData && afipLines.length > 1) {
            // Si Inyectamos el header, miramos la primera linea de datos REAL
            sampleLine = afipLines[1];
        }

        if (sampleLine.includes('\t')) {
            sepMode = 'tab';
        } else if (sampleLine.includes(';')) {
            sepMode = 'semi';
        } else {
            sepMode = 'spaces';
        }

        // Parsear HEADERS (Siempre usar tabs si fue inyectado, o el modo detectado si es nativo)
        if (seemsLikeData) {
            // Header inyectado es TAB seguro
            headers = afipLines[0].split('\t');
        } else {
            // Header nativo usa el mismo modo que detectamos (o tab si detectamos spaces en data pero header tiene tabs?)
            // Asumimos consistencia, o split flexible
            if (sepMode === 'tab') headers = afipLines[0].split('\t');
            else if (sepMode === 'semi') headers = afipLines[0].split(';');
            else headers = afipLines[0].split(/\s{2,}/);
        }

        // Limpieza de headers vacios
        headers = headers.map(h => h.trim()).filter(h => h);

        // Mapeo flexible de columnas
        const findCol = (...names) => {
            for (let name of names) {
                const idx = headers.findIndex(h => normalizeHeader(h) === normalizeHeader(name));
                if (idx !== -1) return idx;
            }
            return -1;
        };

        const colMap = {
            fecha: findCol('Fecha de Emisión', 'Fecha'),
            tipoComp: findCol('Tipo de Comprobante', 'Tipo'),
            pv: findCol('Punto de Venta', 'Pto. Vta.', 'PV'),
            nroDesde: findCol('Número Desde', 'Número', 'Nro.', 'N°', 'Nro'),
            cuit: findCol('Nro. Doc. Emisor', 'CUIT', 'Doc. Emisor'),
            denom: findCol('Denominación Emisor', 'Denominación', 'Razón Social', 'Nombre'),
            impTotal: findCol('Imp. Total', 'Total', 'Importe Total'),
            netoNG: findCol('Imp. Neto No Gravado', 'Neto No Gravado', 'No Gravado'),
            opExentas: findCol('Imp. Op. Exentas', 'Op. Exentas', 'Exento'),
            otrosTrib: findCol('Otros Tributos', 'Otros'),
            // IVAs
            neto21: findCol('Imp. Neto Gravado IVA 21%', 'Neto 21%'),
            iva21: findCol('IVA 21%'),
            neto105: findCol('Imp. Neto Gravado IVA 10,5%', 'Neto 10,5%', 'Neto 10.5%'),
            iva105: findCol('IVA 10,5%', 'IVA 10.5%'),
            neto27: findCol('Imp. Neto Gravado IVA 27%', 'Neto 27%'),
            iva27: findCol('IVA 27%'),
            neto5: findCol('Imp. Neto Gravado IVA 5%', 'Neto 5%'),
            neto25: findCol('Imp. Neto Gravado IVA 2,5%', 'Neto 2,5%', 'Neto 2.5%'),
        };

        // --- FALLBACK POR POSICION (Si fallan los nombres/encodings) ---
        // Asumimos estructura estándar de "Mis Comprobantes": Fecha(0), PV(1), Nro(2), Denom(3)...
        if (colMap.pv === -1) colMap.pv = 1; // 2da columna
        if (colMap.nroDesde === -1) colMap.nroDesde = 2; // 3ra columna (CONFIRMADO POR USUARIO)
        // A veces Denom es la 3 o la 4. Si no la encontramos, probamos la 3 (4ta col)
        if (colMap.denom === -1) colMap.denom = 3;

        // FECHA es obligatorio siempre. DENOM es fundamental si no hay CUIT.
        if (colMap.fecha === -1) {
            showToast('No encuentro la columna "Fecha de Emisión".', 'error');
            return;
        }

        const tsvRows = [];
        const errors = [];
        let processedCount = 0;

        // Iterar filas
        for (let i = 1; i < afipLines.length; i++) {
            const line = afipLines[i].trim();
            if (!line) continue;

            // Split según modo detectado
            let cols = [];
            if (sepMode === 'tab') cols = line.split('\t');
            else if (sepMode === 'semi') cols = line.split(';');
            else cols = line.split(/\s{2,}/);

            const getVal = (idx) => idx >= 0 && cols[idx] ? cols[idx].trim() : "";
            const getNum = (idx) => parseNum(getVal(idx));

            // -- FECHA --
            const fechaStr = getVal(colMap.fecha);
            // Si la fila no tiene fecha válida, saltar
            if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaStr)) continue;

            // -- PROVEEDOR (BUSQUEDA INTELIGENTE) --
            let cuitFmt = "";
            let maestroProv = null;

            // A. Intentar por CUIT si existe la columna
            if (colMap.cuit !== -1) {
                let c = getVal(colMap.cuit).replace(/\D/g, '');
                if (c.length === 11) {
                    cuitFmt = `${c.substring(0, 2)}-${c.substring(2, 10)}-${c.substring(10)}`;
                    maestroProv = maestroMap.getByCuit(cuitFmt);
                }
            }

            // B. Si falló o no existe col CUIT, intentar por NOMBRE
            if (!maestroProv && colMap.denom !== -1) {
                const nombreRaw = getVal(colMap.denom);
                if (nombreRaw) {
                    // FIX: El usuario puede tener las columnas corridas y tener el CUIT en el Nombre
                    // Chequear si parece un cUIT (11 numeros)
                    const asCuit = nombreRaw.replace(/\D/g, '');
                    if (asCuit.length === 11) {
                        const cuitFmt2 = `${asCuit.substring(0, 2)}-${asCuit.substring(2, 10)}-${asCuit.substring(10)}`;
                        maestroProv = maestroMap.getByCuit(cuitFmt2);
                    }

                    if (!maestroProv) {
                        maestroProv = maestroMap.getByName(nombreRaw);
                    }
                }
            }

            if (!maestroProv) {
                const denom = getVal(colMap.denom) || "Desconocido";
                errors.push(`BLOQUEO: Proveedor no reconocido (${denom}). Agregalo al maestro.`);
                continue;
            }

            cuitFmt = maestroProv.cuit; // Usar el CUIT oficial del maestro

            // 4. Chequeo RI
            if (maestroProv.condIva !== 'RI') {
                continue;
            }

            // 5. Tasas Prohibidas
            if (getNum(colMap.neto5) > 0.05 || getNum(colMap.neto25) > 0.05) {
                errors.push(`BLOQUEO: Tasa 5% o 2.5% detectada en ${maestroProv.razon}`);
                continue;
            }

            // 6. Extracción de Importes
            // Tasas activas
            const tasas = [];
            // Orden requerido 21 -> 27 -> 10.5
            const addTasa = (netoIdx, ivaIdx, tasaVal) => {
                const n = getNum(netoIdx);
                const i = getNum(ivaIdx);
                if (n > 0.02 || i > 0.02) { // Tolerancia minima
                    tasas.push({ tasa: tasaVal, neto: n, iva: i });
                }
            };

            addTasa(colMap.neto21, colMap.iva21, "21");
            addTasa(colMap.neto27, colMap.iva27, "27");
            addTasa(colMap.neto105, colMap.iva105, "10,5");

            // Datos Comunes
            const common = {
                fecha: fechaStr,
                proveedor: maestroProv.razon, // MAYUSCULAS del maestro
                tipoComp: "Factura",
                tipoFact: "A", // RI
                pv: pad(getVal(colMap.pv), 5),
                nro: pad(getVal(colMap.nroDesde), 8),
                concepto: getConcepto(getVal(colMap.denom), cuitFmt), // Logica de deduccion
                cuit: cuitFmt,
                condIva: maestroProv.condIva
            };

            // Percepciones / No Gravados (Solo para primera fila)
            let noGravado = getNum(colMap.netoNG) + getNum(colMap.opExentas);
            let otrosTributos = getNum(colMap.otrosTrib); // 'Otros Tributos' base

            let percIva = 0;
            let percIIBB_RN = 0;
            let percIIBB_CABA = 0;
            let otraPerc = 0;

            // --- SPECIAL LOGIC ---
            // 1. MARCOS MARCELO (20-20042392-6): Generic 'Percepciones' -> IIBB RN
            if (cuitFmt === '20-20042392-6' && otrosTributos > 0) {
                percIIBB_RN += otrosTributos;
                otrosTributos = 0;
            }
            // 2. Telecom -> Standard -> Otra Percepcion
            otraPerc += otrosTributos;

            // Si NO hay tasas (Factura 'A' pero todo exento? O error?)
            if (tasas.length === 0) {
                // Si el total es > 0, procesamos como una sola fila con tasa indeterminada o 0?
                // Shafu reglas: "Solo Factura A... Tasa 21, 27, 10,5".
                // Si no hay tasas gravadas, no generamos fila de 'impuesto', pero quizas si de No Gravado?
                // Asumamos que si hay No Gravado > 0 y Total > 0, generamos 1 fila. Tasa = ""
                if (getNum(colMap.impTotal) > 0.05) {
                    tasas.push({ tasa: "0", neto: 0, iva: 0 }); // Placeholder para que entre al loop
                }
            }

            // Generar Filas
            tasas.forEach((t, idx) => {
                // SAFETY CHECK: Columna Desfasada
                // Si el Neto detectado es exactamente igual al Total de la factura (y no es 0), 
                // es 99% probable que haya un desfasaje de columnas (la columna Total cayó en la columna Neto).
                // Ignoramos esta tasa fantasma.
                const totalInvoice = getNum(colMap.impTotal);
                if (t.neto > 0 && Math.abs(t.neto - totalInvoice) < 0.1 && totalInvoice > 100) {
                    // Solo saltamos si hay otras tasas o si parece muy sospechoso (ej. no hay IVA pero hay NETO=TOTAL en una col gravada)
                    // Pero para seguridad, asumimos que NUNCA el Neto Gravado es igual al Total (siempre hay IVA o Percep).
                    // Salvo tasa 0%, pero esa cae en otra logica.
                    return;
                }

                // Fila Output
                // FECHA | PROVEEDOR | TIPO COMP | TIPO FACT | PV | NRO | CONCEPTO | NETO | IVA | NO GRAV | PERC IVA | IIBB RN | IIBB CABA | OTRA PERC | TOTAL | CUIT | COND | TASA

                let rowNeto = t.neto;
                let rowIva = t.iva;
                let rowNoGrav = 0;
                let rowPercIva = 0;
                let rowPercRN = 0;
                let rowPercCABA = 0;
                let rowOtraPerc = 0;
                let rowTotal = 0;

                if (idx === 0) {
                    // Primera fila carga con los extras
                    rowNoGrav = noGravado;
                    rowPercIva = percIva;
                    rowPercRN = percIIBB_RN;
                    rowPercCABA = percIIBB_CABA;
                    rowOtraPerc = otraPerc;
                }

                // Calculo Total Fila logicamente
                // NETO + IVA + NG + PERCEPCIONES
                rowTotal = rowNeto + rowIva + rowNoGrav + rowPercIva + rowPercRN + rowPercCABA + rowOtraPerc;

                // Formatear salida
                const lineOutput = [
                    common.fecha,
                    common.proveedor, // Ya viene limpio del maestro
                    common.tipoComp,
                    common.tipoFact,
                    common.pv,
                    common.nro,
                    common.concepto,
                    fmtNum(rowNeto),
                    fmtNum(rowIva),
                    fmtNum(rowNoGrav),
                    fmtNum(rowPercIva),
                    fmtNum(rowPercRN),
                    fmtNum(rowPercCABA),
                    fmtNum(rowOtraPerc),
                    fmtNum(rowTotal),
                    common.cuit,
                    common.condIva,
                    t.tasa === "0" ? "" : t.tasa // Si era placeholder, vacio
                ].join('\t');

                tsvRows.push(lineOutput);
                processedCount++;
            });
        }

        if (errors.length > 0) {
            // Mostrar errores
            textOutput.value = "AVISO (bloqueo TSV):\n" + errors.join('\n');
            showToast(`Se encontraron ${errors.length} problemas.`, 'warning');
            statusBadge.textContent = "Revisar";
            statusBadge.style.color = "var(--warning)";
            statusBadge.style.background = "rgba(245, 158, 11, 0.1)";
            return;
        }

        if (processedCount === 0) {
            textOutput.value = "";
            showToast('No se encontraron comprobantes válidos en el rango de fechas.', 'warning');
            return;
        }

        // Success
        textOutput.value = tsvRows.join('\n');
        statusBadge.textContent = `Generado (${processedCount} filas)`;
        statusBadge.style.color = "var(--success)";
        statusBadge.style.background = "rgba(16, 185, 129, 0.1)";
        btnCopy.disabled = false;
        showToast('Conversión exitosa', 'success');
    }

    // --- UTILS ---
    function parseMaestro(txt) {
        const byCuit = new Map();
        const byName = new Map();

        // 1. Pre-procesamiento: Unir líneas rotas
        // Un registro nuevo siempre empieza con un CUIT (2 digitos, un guion o espacio, etc)
        // Regex laxa para inicio de CUIT: empieza con numero numero
        const linesRaw = txt.split(/\r?\n/);
        const records = [];
        let buffer = "";

        for (let line of linesRaw) {
            line = line.trim();
            if (!line) continue;
            // Ignorar encabezados explicitos
            if (line.toUpperCase().includes('CUIT') && line.toUpperCase().includes('RAZON')) continue;

            // Detectar inicio de CUIT: 20, 23, 24, 27, 30, 33, 34 seguido de numeros
            // Soporta: "20-123", "20 123", "20123"
            const isNewRecord = /^(20|23|24|27|30|33|34)[\s-]?\d{6,}/.test(line);

            if (isNewRecord) {
                if (buffer) records.push(buffer);
                buffer = line;
            } else {
                // Es continuación del anterior (ej: nombre en renlgon de abajo)
                if (buffer) buffer += " " + line;
                else buffer = line; // Caso raro: empieza con basura sin CUIT, lo guardamos igual por si acaso contiene el CUIT mas adelante
            }
        }
        if (buffer) records.push(buffer);

        // 2. Procesamiento de registros unidos
        for (const fullLine of records) {
            // Estrategia: Buscar patrón de CUIT (11 digitos) dentro del string
            // 2.A: Si hay tabs, usar estructura fija
            if (fullLine.includes('\t')) {
                const parts = fullLine.split('\t');
                // Estructura esperada: CUIT | RAZON | COND | ALIAS
                if (parts.length >= 2) {
                    const c = parts[0].trim().replace(/\D/g, '');
                    if (c.length === 11) {
                        const cuitFmt = `${c.substring(0, 2)}-${c.substring(2, 10)}-${c.substring(10)}`;
                        const razon = parts[1].trim();
                        const cond = parts[2] ? parts[2].trim() : 'RI';
                        const alias = parts[3] ? parts[3].trim() : '';

                        const obj = { cuit: cuitFmt, razon, condIva: cond, alias };
                        byCuit.set(cuitFmt, obj);
                        byName.set(razon, obj);
                        continue;
                    }
                }
            }

            // 2.B: Fallback para pegados sin tabs (espacios)
            // Limpiamos dashes para buscar easy

            // Buscar secuencia de 11 digitos que empiece con prefijos validos
            // Puede estar con guiones dentro del texto
            // Regex match CUIT con guiones: \b(20|27...)-\d{8}-\d\b
            const matchCuit = fullLine.match(/\b(20|23|24|27|30|33|34)[-\s]?\d{8}[-\s]?\d{1}\b/);

            let cuit, cuitFmt, resto;

            if (matchCuit) {
                // Tenemos CUIT seguro
                let raw = matchCuit[0].replace(/\D/g, '');
                if (raw.length !== 11) continue;

                cuitFmt = `${raw.substring(0, 2)}-${raw.substring(2, 10)}-${raw.substring(10)}`;

                // El resto del texto es el Nombre + Metadata
                // Removemos el CUIT del string original para que quede solo el nombre
                resto = fullLine.replace(matchCuit[0], "").trim();
            } else {
                // No encontramos patrón CUIT claro, saltamos
                continue;
            }

            // Detectar Condición IVA en el resto del texto (heurística)
            // Buscamos palabras clave aisladas
            let condIva = 'RI';
            let razon = resto;
            let alias = "";

            // Limpieza de simbolos duplicados o espacios extra
            razon = razon.replace(/\s{2,}/g, ' ').trim();

            // Buscar tokens de condicion
            const matchCond = razon.match(/[\s(](RI|RESP\s?INS|MONOTRIBUTO|MT|EXENTO|EX)[)\s]|^RI\s|\sRI$/i);

            if (matchCond) {
                const token = matchCond[1].toUpperCase(); // RI, MT, EX...
                if (token.includes('MONO') || token === 'MT') condIva = 'MT';
                else if (token.includes('EX')) condIva = 'EX';
                else condIva = 'RI';

                // Opcional: Podríamos intentar limpiar la palabra "RI" del nombre, 
                // pero a veces es arriesgado si es parte de "RICO". 
                // matchCond incluye espacios/parentesis delimitadores, asi que es seguro remover matchCond[0]
                razon = razon.replace(matchCond[0], " ").replace(/\s{2,}/, ' ').trim();
            }
            // Limpiar parentesis vacios que hayan quedado
            razon = razon.replace(/\(\s*\)/g, '').trim().toUpperCase();

            // Guardar
            const obj = { cuit: cuitFmt, razon, condIva, alias };
            byCuit.set(cuitFmt, obj);
            byName.set(razon, obj);
            // Tambien indexar por nombre limpio sin S.A., etc para matches parciales futuros? No por ahora.
        }

        return {
            size: byCuit.size,
            getByCuit: (c) => byCuit.get(c),
            getByName: (n) => {
                if (!n) return null;
                const search = n.trim().toUpperCase();
                // Búsqueda exacta
                if (byName.has(search)) return byName.get(search);
                // Búsqueda "contiene"
                for (const [key, val] of byName) {
                    // Cuidado con matches muy cortos
                    if (key.length > 5 && (search.includes(key) || key.includes(search))) return val;
                }
                return null;
            }
        };
    }

    // --- HELPER FUNCTIONS ---

    function normalizeHeader(h) {
        if (!h) return "";
        return h.toLowerCase()
            .replace(/\./g, '')
            .replace(/ó/g, 'o')
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/á/g, 'a')
            .replace(/ñ/g, 'n')
            // Fix encoding glitches
            .replace(/ã³/g, 'o')
            .replace(/Ã©/g, 'e') // é -> Ã©
            .replace(/ã©/g, 'e')
            .replace(/Ãº/g, 'u') // ú -> Ãº e.g. Numero
            .replace(/\u00C3\u00BA/g, 'u') // Unicode exacto para Ã + º
            .replace(/ãº/g, 'u')
            .replace(/Ã/g, 'i')  // A veces í -> Ã
            .replace(/[\uFFFD]/g, '')   // Replacement chars (U+FFFD)
            .replace(/nro doc/g, 'nro doc') // ensure match
            .trim();
    }

    function parseNum(str) {
        if (!str) return 0;
        // 1.234,56 -> 1234.56
        let clean = str.replace(/\./g, '').replace(',', '.');
        return parseFloat(clean) || 0;
    }

    function pad(str, len) {
        return (str || "").toString().padStart(len, "0");
    }

    // Helper: Formato español 1.234,56
    function fmtNum(n) {
        return n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function getConcepto(provName, cuit) {
        // Reglas
        if (provName.includes("FRILOP")) return "Venta de alimentos";
        return "Compra de mercaderías";
    }

    function showToast(msg, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<span>${msg}</span>`;

        toastContainer.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    function clearToasts() {
        toastContainer.innerHTML = '';
    }

})();
