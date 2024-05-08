
### Especificar un nombre de archivo


````markdown
```shell
# content
```
{: file="path/to/file" }
````

### Códigos liquid

````markdown
{% raw %}
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
```
{% endraw %}
````

