# bdeak.net

personal website

## Development

```
docker build -t bdeak.net . && docker run --rm -p 8080:80 -v .:/var/www/html/ bdeak.net
```

Website is now accessible on <http://localhost:8080>.