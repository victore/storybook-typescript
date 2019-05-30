{
  "compilerOptions": {
    "outDir": "build/lib", 
    "module": "commonjs",
    "target": "es5",
    "lib": ["es5", "es6", "es7", "es2017", "dom"],
    "sourceMap": true,
    "allowJs": false,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "src",
    "baseUrl": "src",
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build", "scripts"]
}