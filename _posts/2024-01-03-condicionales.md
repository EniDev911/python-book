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

Cuando queremos abrir un archivo (digamos, en el disco duro), primero debemos *abrir* el archivo. Al abrir el archivo nos comunicamos con el sistema operativo, el cual sabe dónde están almacenados los datos de cada archivo. Cuando abres un archivo, le estás pidiendo al sistema operativo que encuentre el archivo por su nombre y se asegure que existe.


## Abrir archivos

> Es importante dominar los conceptos de **ruta relativa** y **ruta absoluta** para trabajar con archivos.
{: .prompt-warning }

Para abrir un archivo Python nos brinda la función `open()` que recibe como argumento la **ruta del archivo** que queremos manejar como un *`string`* y como segundo argumento el **modo de apertura** también como un *`string`*.

{:class='fs-5'}
Ver el ejemplo

```py
manejador = open('file.txt')
print(manejador)
```

Si el `open` es exitoso, el sistema operativo nos devuelve un *manejador de archivo*, que en este caso lo estamos asignando a una variable llamada `manejador`. El **manejador de archivo** no son los datos contenidos en el archivo, sino un "manejador" (*handler*) que podemos usar para leer los datos. Obtendrás un manejador de archivo si el archivo solicitado existe y si tienes los permisos apropiados para leerlo.


---

## Leer un archivo

Para leer un archivo sabemos que lo primero es abrir el respectivo archivo, si nos ponemos a pensar en una lista de amigos que tenemos en un archivo de texto llamado `amigos.txt` con el siguiente contenido:

```
Marco
Luis
Gabriel
Alejandro
```
{: file='amigos.txt' }


Y luego tenemos que usar la función `open` para abrir el archivo en modo lectura:

```py
manejador = open('amigos.txt')
manejador.read()
```

---

## Escritura de un archivo

Para escribir texto en un archivo hay que abrir el archivo en **modo escritura**. Para ello utilizamos el *argumento adicional* en la función `open()` que se indica en la siguiente operación:

```shell
f = open('some_data.dat', 'w')
```


---


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
# Se intenta abrir un archivo y se captura una posible excepción
try:
	with open('archivo.txt') as file:
		read_data = file.read()
		print(read_data)
except:
	# Se entra aquí si no pudo ser abierto
	print('No se pudo abrir')
```