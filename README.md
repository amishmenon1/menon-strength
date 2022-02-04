# Menon Strength Fitness Training Website

When I'm not developing apps, I am a powerlifter and fitness trainer. I decided to build a website using VueJS to market my fitness services.

The live website can be accessed by going to https://amishmenon1.github.io/menon-strength/

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploying changes to Github Pages

1. `npm run build`
2. `git add .`
3. `git add dist -f`
4. `git commit -m "committing changes"`
5. `git push`
6. Delete the old gh-pages branch
   - `git push origin --delete gh-pages`
7. Re-run subtree command
   - `git subtree push --prefix dist origin gh-pages`

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
