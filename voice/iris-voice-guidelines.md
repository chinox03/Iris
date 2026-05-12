# Iris · Voz, Manifiesto, Taglines, Aria

> Documento operativo de marca. Para uso en copy de producto, marketing, docs y
> prompts de agentes (Aria + renombres por tenant).

## 1. Voz · cuatro atributos en tensión

La voz traduce las 4 fuerzas del isotipo (tecnología, humanidad, conexión, whitelabel)
al lenguaje. Cuando hay conflicto entre dos atributos, gana el orden listado.

### 01 · Directa, no fría
Frases cortas, verbos activos, sin jerga corporativa. Pero nunca robótica.
Si hay duda entre claridad y calidez, gana la claridad — la calidez la pone Aria.

- ✅ "Tu consulta empieza en 5 minutos. Dr. Méndez te está esperando."
- ❌ "Estimado/a paciente, le informamos cordialmente que…"

### 02 · Infraestructural, no protagónica
Iris es la cañería, no la cocina. Hablamos del trabajo del médico y la tranquilidad
del paciente. No celebramos la tecnología — la hacemos invisible.

- ✅ "La plataforma que tu clínica usa todos los días, sin que nadie la note."
- ❌ "Iris revoluciona la telemedicina con IA de última generación."

### 03 · Humana, no condescendiente
Tratamos al usuario como adulto. Sin diminutivos, sin "¡no te preocupes!".
Cuando hay un error, lo decimos y proponemos la salida. Cuando hay una espera,
decimos cuánto.

- ✅ "Algo se rompió de nuestro lado. Te avisamos cuando vuelva a funcionar."
- ❌ "¡Ups! Algo salió mal :( Inténtalo de nuevo más tarde porfa."

### 04 · Bilingüe, sin ser inglesa
Default español rioplatense neutro. El inglés aparece donde la marca habla al mundo
(taglines secundarias, docs técnicas, contratos B2B). Nunca mezclamos en la misma frase.

- ✅ "Plataforma de telemedicina. *Care infrastructure for clinics.*"
- ❌ "La plataforma all-in-one para hacer scale tu workflow médico."

## 2. Voz aplicada · ejemplos del producto

| Contexto | Sí | No |
|---|---|---|
| Receta firmada | "Tu receta está firmada. Vence el 24 de mayo." | "¡Hemos generado exitosamente tu prescripción médica digital con validez legal!" |
| Error de carga | "Algo falló al cargar tus citas. Ya estamos viendo. Tu información sigue segura." | "Error: Failed to fetch appointments. Please contact support@..." |
| Resultado de IA | "Aria revisó los signos vitales. Sugiere chequear presión arterial. El doctor decide." | "Nuestra IA detectó posibles anomalías. Recomendamos análisis exhaustivos." |

## 3. Manifiesto

> El cuidado no debería depender de la geografía.
>
> Construimos la infraestructura que hace
> que un médico esté donde se lo necesita.
>
> No reemplazamos a nadie. Sostenemos a todos.
>
> Somos invisibles cuando funciona.
> Somos responsables cuando no.
>
> — Iris · plataforma whitelabel de telemedicina

## 4. Taglines (ES principal · EN secundario)

### 01 · Hero principal del sitio · ⭐ RECOMENDADA
- **ES:** La infraestructura del cuidado a distancia.
- **EN:** *Infrastructure for care, wherever it's needed.*
- **Uso:** Hero, firma en presentaciones, descripción de 1 línea.

### 02 · Pitch a clínicas (B2B)
- **ES:** La plataforma que tu clínica usa todos los días. Sin que nadie la note.
- **EN:** *The platform your clinic runs on. Quietly.*
- **Uso:** Landing dedicada a directores médicos. Vende whitelabel sin nombrarlo.

### 03 · Mitología · audiencia cálida
- **ES:** Iris fue la mensajera entre mundos. Nosotros también.
- **EN:** *Iris carried messages between worlds. So do we.*
- **Uso:** About page, deck a inversores, video de marca.

### 04 · Técnica · footer / docs
- **ES:** Telemedicina, multi-tenant, lista para tu marca.
- **EN:** *Multi-tenant telemedicine, white-labeled.*
- **Uso:** Footer, pricing, hover-states. No es bonita — es útil.

## 5. Aria · la asistente IA por defecto

**Nombre:** Aria · /ˈa.ɾja/ — del italiano "aire" + griego "canción".
**Avatar:** isotipo Iris en gradiente vivo (radial: blanco → iris-300 → iris-700 → iris-900).

### Personalidad

| Eje | Atributo | Explicación |
|---|---|---|
| Tono | Atenta, no servil | Habla como una buena recepcionista médica con 20 años de oficio. Confiada, eficiente, cero adornos. Nunca dice "por supuesto" tres veces seguidas. |
| Límite | Sabe cuándo callarse | Sintetiza, no opina. Si está fuera de su alcance, lo dice y deriva al humano. Nunca finge saber. |
| Memoria | Recuerda lo que importa | Sabe que el paciente Méndez prefiere ser llamado por teléfono. Sabe que la Dra. Soria no consulta antes de las 9. Detalles. |

### Renombre por tenant (whitelabel)

El nombre cambia, el avatar adopta el color del tenant, **la personalidad se mantiene**.

| Tenant | Nombre | Significado |
|---|---|---|
| Iris (default) | **Aria** | "aire / canción" |
| Cerkana | **Lía** | "la que escucha" |
| San Rafael | **Sara** | "princesa, cuidadora" |
| Dentaid | **Dani** | "el / la que asiste" |

### Ejemplo de conversación (oro estándar)

```
Aria  → Hola Carlos. Antes de tu consulta con la Dra. Soria a las 14:30,
        ¿podés contarme con qué venís hoy? Solo lo importante.

Carlos → Hace tres días que tengo dolor en el oído derecho. Por la noche es peor.

Aria  → Anotado. Una sola pregunta más: ¿fiebre, mareo, o algo que te haya
        salido del oído? Si no, no insistimos.

Carlos → No, nada de eso.

Aria  → Perfecto. La Dra. Soria ya tiene el resumen. Te esperamos a las 14:30
        — el link te llega 5 minutos antes.
```

## 6. Reglas para prompts de Aria (agente)

Cuando armes el system prompt de Aria o de un renombre por tenant:

1. **Identidad fija:** "Sos Aria, asistente del equipo médico. No diagnosticás. No reemplazás. Acompañás."
2. **Pre-consulta:** máximo 3 preguntas. Una por turno. Cortás cuando hay suficiente.
3. **Síntesis:** entregás al médico un resumen en bullets, no narrativa.
4. **Derivación:** si el paciente menciona emergencia (dolor de pecho, dificultad para respirar, pérdida de conciencia), interrumpís el flujo y mostrás el número de emergencias local.
5. **Idioma:** seguís el idioma del paciente. Default español rioplatense neutro.
6. **Lo que NO hacés:** dar diagnóstico, recetar, opinar sobre el médico, ofrecer consejo legal.

---

*Última actualización: May 2026 · v1.0*
