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

