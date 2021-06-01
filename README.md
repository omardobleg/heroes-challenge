# Desarrollar, utilizando Angular, una aplicación SPA que permita hacer un mantenimiento de súper héroes:

## Se deberá crear un Servicio que guarde la información y que permita:

- Consultar todos los súper héroes.
- Consultar un único súper héroe por id.
- Consultar todos los súper héroes que contienen, en su nombre, el valor de un parámetro enviado en la petición. Por ejemplo, si enviamos “man” devolverá “Spiderman”, “Superman”, “Manolito el fuerte”, etc.
- Modificar un súper héroe.
- Eliminar un súper héroe.
- Test unitario de este servicio (opcional).

## Se deberá crear un Componente que, a partir del servicio anterior:

- Mostrará una lista paginada de héroes donde aparecerán botones de añadir, editar y borrar.
- Encima de esta lista paginada, se mostrará un input para filtrar por el héroe seleccionado.
- Al pulsar el botón de añadir se generará un formulario vacío con las validaciones que se estimen oportunas. Después de dar de alta el nuevo héroe se volverá a la lista paginada.
  -Al pulsar el botón de edición se generará un formulario con los datos del héroe seleccionado y se permitirá modificar su información. Una vez editado se deberá volver a la lista paginada.
- Al pulsar el botón de borrar, se preguntará si se está seguro de que se desea borrar el héroe y, al confirmarlo, lo borrará.
- Test unitario de este componente (opcional).

## Puntos a tener en cuenta:

- La información de súper héroes se guardará dentro del servicio. (No hace falta un backend).
- Se valorarán las soluciones propuestas para cada punto, el modelo de datos y formato del código.
- La prueba se debe presentar en un repositorio de Git.

  Puntos opcionales de mejora:

- Utilizar Angular Material, Ionic, TailwindCSS, PrimeNG o cualquier otro framework de componentes/CSS, como apoyo visual.
- Rutas y navegación de la página.
- Almacenamiento de la información de súper héroes en el localStorage.
- Directiva para que al crear o editar en la caja de texto del nombre del héroe, siempre se muestre en mayúscula.

  Se valorará positivamente:

- Cómo se construye el modelo de datos.
- Uso de programación reactiva.
- Código legible usando lambdas.

Además de los puntos indicados, te añado más puntos que sería interesante añadir:

- Uso de Storybook para la representación de los componentes.
- Tests unitarios con Jest
- Test e2e con Cypress
- Gestión de estado con NGRX, Akita, BehaviorSubject… con la que te sientas más cómodo.
- Internacionalización con ngx-translate, transloco…
- Uso de nx workspaces (opcional)
- En vez de usar datos síncronos, crear un archivo db.json y usar json-server (opcional). De ser así, hay que dar feedback al usuario con skeleton loaders, spinners, progressbar…
- Técnicas de optimización: infinite scroll, ChangeDetection OnPush, trackBy en los ngFor…
  … y todo lo que se te ocurra
