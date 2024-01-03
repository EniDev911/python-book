---
title: Funciones integradas
author: enidev911
date: 2019-08-09 20:55:00 +0800
categories: [Python, Funciones]
tags: [funciones en python]
pin: true
img_path: '/posts/20180809'
---

Python tiene una gran variedad de funciones que podemos utilizar sin necesidad de importar ningún módulo.

## Funciones matemáticas

### abs()

La función `abs()` retorna el valor absoluto, es decir su valor sin importar su signo. El argumento que puede recibir la función puede ser un número entero, un número de coma flotante. En caso de números complejos retorna el valor de la magnitud.


```py
abs(3)
# 3
abs(-3)
# 3
abs(-3.0)
# 3.0
abs(3+4j)
# 5.0
```

## Generación de secuencias iterables

### range()

La función `range()` genera una secuencia de números enteros que podemos utilizar para iterar en un **bucle**. La secuencia generada comienza en **0** y termina en el entero anterior al argumento dado. Alternativamente, la función puede recibir dos parámetros más que son opcionales.

#### Sintaxis

```
range(start, stop, step)
```

#### Parámetros

- `start` (*Opcional*) : Un número entero que permite especificar el número que comenzará la secuencia.
	- Predeterminado 0
- `stop` (*Requerido*) : Un número entero que permite especificar el termino de la secuencia.
- `step` (*Opcional - 1*) : Un número entero que permite especificar como incrementar la secuencia.
	- Predeterminado 1


#### Ejemplos

Crea una secuencia de 9 números comenzando desde el 4, y muestra cada número de la secuencia:

```py
start = 4
stop = start + 9
for n in range(start, stop):
	print(n)
```

Crea una secuencia de números comenzando desde el 1 hasta el 30, pero que valla incrementando de 3 en 3:

```py
start = 1
stop = 31
step = 3
for n in range(start, stop, step):
	print(n)
```

### Enumerate()

La función `enumerate()` toma una secuencia o un iterador y retorna un objeto de tipo `enumerate`. El dicho objeto es una *tupla* con el valor y sus respectivos índices.

#### Sintaxis

```
enumarate(iterable, start)
```




