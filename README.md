# vue spike!

i used a couple of npm commands to initialize the vue project!
'm currently exploring stuff like:
  - reactivity
  - routes
  - general vue syntax

what have i started to implement?
  - going on specific routes is supposed to change the css of *ALL* pages on the site. for example: going on /blue changes the background color to blue!
  - a birthday timer thing! not sure why, i just did.

# docker usage
build the container:
```bash
docker build -t vue-spike .
```

run the container:
```bash
docker run -p 8080:8080 vue-spike
```

afterwards open your browser and access ```http://localhost:8080/```