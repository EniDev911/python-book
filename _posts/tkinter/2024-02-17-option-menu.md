---
title: Option Menu
author: enidev911
categories: [Tkinter, Widget]
tags: [Widgets]
---

## Ejemplo


{% tabs optionmenu %}

{% tab optionmenu main.py %}
```py
import tkinter as tk

root = tk.Tk()
root.geometry("300x500")

optionList = [
  "Aries",
  "Taurus",
  "Geminis",
  "Cancer"
]
variable = tk.StringVar(root)
variable.set("Selecciona tu signo")

opt = tk.OptionMenu(root, variable, *optionList)
opt.pack()

def print_selected():
    print("Seleccionaste: {}".format(variable.get()))

submit_button = tk.Button(root, text='Imprimir selección', command=print_selected) 
submit_button.pack() 
root.mainloop()
```
{% endtab %}

{% tab optionmenu resultado %}
![option menu](img/optionmenu1.png)
{% endtab %}
{% endtabs %}
