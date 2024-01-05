---
title: Funciones en Python
author: enidev911
date: 2019-08-09 20:55:00 +0800
categories: [Python, Funciones]
tags: [funciones en python]
pin: true
---

## Funciones en Python

Anteriormente hemos visto funciones nativas que vienen con Python como `len()` para calcular la longitud de una lista, pero al igual que en otros lenguajes de programación, también podemos definir **nuestras propias funciones**. Para ello tenemos que usar la palabra reservada `def`:

```py
def nombre_funcion(parametros):
  valor_de_retorno = parametros ** 2
  return valor_de_retorno
```

Cualquier función tendrá un **nombre**, opcionalmente podrá recibir **parámetros**, el cuerpo que contiene el **código a ejecutar** y opcionalmente, pero que en la mayoría de los casos se hace es que nos retorna un valor. Por ejemplo el siguiente código define una función que recibe un parámetro y retorna el valor pasado a la función elevado al cuadrado:

```py
def elevar_al_cuadrado(numero):
  return numero ** 2
al_cuadrado = elevar_al_cuadrado(3)
print(al_cuadrado) # 9
```

