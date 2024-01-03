---
title: Trabajar con archivos
author: enidev911
date: 2024-01-02 20:55:00 +0800
categories: [Python, Archivos]
tags: [trabajar con archivos]
pin: true
img_path: '/posts/20180809'
---

En este capítulo, vamos a comenzar a trabajar con la *Memoria Secundaria* (o archivos).

Nos vamos enfocar principalmente en leer y escribir archivos como los que creamos en un editor de texto. Más adelante veremos cómo trabajar con archivos de bases de datos, que son archivos binarios diseñados específicamente para ser leídos y escritos a través de software para el manejo de bases de datos.

## Abrir archivos

Cuando queremos abrir un archivo (digamos, en el disco duro), primero debemos *abrir* el archivo. Al abrir el archivo nos comunicamos con el sistema operativo, el cual sabe dónde están almacenados los datos de cada archivo. Cuando abres un archivo, le estás pidiendo al sistema operativo que encuentre el archivo por su nombre y se asegure que existe.

```py
manejador_archivo = open('file.txt')
print(manejador_archivo)
```

Si el `open` es exitoso, el sistema operativo nos devuelve un *manejador de archivo*. El manejador de archivo no son los datos contenidos en el archivo, sino un "manejador" (*handler*) que podemos usar para leer los datos. Obtendrás un manejador de archivo si el archivo solicitado existe y si tienes los permisos apropiados para leerlo.


---

## Escritura de un archivo

Para escribir texto en un archivo hay que abrir el archivo en **modo escritura**. Para ello utilizamos el *argumento adicional* en la función `open()` que se indica en la siguiente operación:

```shell
f = open('some_data.dat', 'w')
```

## Propiedades del objeto file

Además de los diferentes métodos que podemos acceder desde el **objeto File**, también podemos acceder a diferentes propiedades para conocer más sobre el objeto que estamos utilizando.

Se pueden acceder a las siguientes **propiedades**:

- `closed`: retorna **True** si el archivo se ha cerrado, en caso contrario será **False**.
- `mode`: retorna el modo en el que fue abierto el archivo.
- `name`: retorna el nombre del archivo.
- `encoding`: retorna la codificación de caracteres del archivo.


{:class='fs-5'}
Podemos ver un ejemplo

```py
archivo = open("ejemplo.txt", "a+")
archivo.write("hola")
content = archivo.read()
nombre = archivo.name # 'ejemplo.txt'
modo = archivo.mode
encoding = archivo.encoding
archivo.close()
```

---

## Utilizando la estructura with

La **estructura with** es una estructura de control, Python define a la estructura `with` como **un administrador de contexto** (*context manager*).

{:class='fs-5'}
Un ejemplo sería:

```py
with open("ejemplo.txt", "r") as archivo:
	content = archivo.read()
```
{:file='demos/uso_with.py'}

> Utilizar esta estructura es que nos cerrará automáticamente el objeto sin necesidad de tener que llamar explícitamente al método `close()` para cerrarlo manualmente.
{: .prompt-info }

---

## Manejando excepciones usando with

> Este apartado requiere haber estudiado sobre **Menejo de excepciones**
{: .prompt-info }

El uso de `with` resuelve problemas y puede lidiar de mejor manera con **objetos** que utilizan **recursos** externos. Es una excelente combinación el uso de `with` con el manejo de excepciones con las cláusulas `try` `except`.

Un ejemplo muy típico es intentar abrir un archivo, pero capturar una posible excepción. 

{:class='fs-5'}
Veamos el ejemplo

```py
# Se intenta abrir un fichero y se captura una posible excepción
try:
	with open('fichero.txt') as file:
		read_data = file.read()
except:
	# Se entra aquí si no pudo ser abierto
	print('No se pudo abrir')
```