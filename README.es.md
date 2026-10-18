# Plantilla de sitio web estático: despliega HTML, CSS y JavaScript simples desde GitHub

[English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [Español](README.es.md)

Una plantilla de sitio web estático para la pila **Sitio estático** de la [plataforma de aprendizaje
MitsuruTech](https://mitsurutech.co.uk/es/learning): HTML, CSS y JavaScript simples, sin nada ejecutándose
detrás. Despliégala gratis desde su dirección de GitHub con
[el despliegue de una aplicación web desde GitHub](https://mitsurutech.co.uk/es/apps), sin cuenta y sin nada que instalar; la
[guía de despliegue de aplicaciones desde GitHub](https://mitsurutech.co.uk/es/help/deploy-app) del manual explica los pasos.

Despliégala desde la pestaña **Deploy App** con la URL de este repositorio y el lenguaje establecido en
*Sitio estático*. Los valores predeterminados son:

- **Build:** `test -f index.html || { echo '...'; exit 1; }`
  No hay nada que construir, así que el build comprueba que haya algo que servir. Un
  repositorio cuyas páginas estén en una subcarpeta se desplegaría sin error y respondería
  404 en `/`, lo que te deja con una dirección que funciona y nada que depurar.
- **Start:** `python3 -m http.server $PORT`
  Sirve el contenido del repositorio. Si tus páginas están en una subcarpeta, añade
  `--directory public` en lugar de moverlas.

## Los archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La propia página. Tiene que estar en la raíz del repositorio, o cambia el comando de inicio. |
| `style.css` | Enlazado desde la página, así que verlo servido demuestra que se encuentran las hojas de estilo. |
| `script.js` | Muestra la hora y cuenta las pulsaciones del botón, para que veas que JavaScript se ejecuta de verdad. |

## Lo que no tiene

Ni paso de build, ni dependencias, ni archivo de paquetes, que es la idea: es
la única pila cuyo build solo llega a GitHub.

## Licencia

Esta obra está bajo licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Puedes compartirla y adaptarla para aprender y enseñar, si citas a Mitsuru Technologies Ltd, no la usas comercialmente y compartes lo que hagas con ella bajo la misma licencia. El texto completo está en el archivo `LICENSE`. Cubre los archivos de este repositorio.

## Acerca de

Creado por [Mitsuru Technologies](https://mitsurutech.co.uk) para la
[plataforma de aprendizaje MitsuruTech](https://mitsurutech.co.uk/es/learning): Python, Java, Go, Node, SQL y
Linux en el navegador para escuelas y centros, con laboratorios de contenedores, aplicaciones web desplegadas desde GitHub y
cuestionarios que se califican solos. Prueba código sin cuenta en el
[entorno de pruebas](https://mitsurutech.co.uk/es/playground).
