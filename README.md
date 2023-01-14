via npm

TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. 
Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

npm install typescript --save-dev


All of these dependency managers support lockfiles, 
ensuring that everyone on your team is using the same version of the language. 
You can then run the TypeScript compiler using one of the following commands:

npx tsc

npx tsc basico.ts

npx tsc -v

Monitora o arquivo js para atualizar...
npx tsc -w

COMMON COMMANDS

  tsc
  Compiles the current project (tsconfig.json in the working directory.)

  tsc app.ts util.ts
  Ignoring tsconfig.json, compiles the specified files with default compiler options.

  tsc -b
  Build a composite project in the working directory.

  tsc --init
  Creates a tsconfig.json with the recommended settings in the working directory.

  tsc -p ./path/to/tsconfig.json
  Compiles the TypeScript project located at the specified path.

  tsc --help --all
  An expanded version of this information, showing all possible compiler options

  tsc --noEmit
  tsc --target esnext
  Compiles the current project, with additional settings.

COMMAND LINE FLAGS

     --help, -h  Print this message.

    --watch, -w  Watch input files.

          --all  Show all compiler options.

  --version, -v  Print the compiler's version.

         --init  Initializes a TypeScript project and creates a tsconfig.json file.

  --project, -p  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

    --build, -b  Build one or more projects and their dependencies, if out of date

   --showConfig  Print the final configuration instead of building.

COMMON COMPILER OPTIONS

               --pretty  Enable color and formatting in TypeScript's output to make compiler errors easier to read.
                  type:  boolean
               default:  true

           --target, -t  Set the JavaScript language version for emitted JavaScript and include compatible library decla                         rations.
                one of:  es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext
               default:  es3

           --module, -m  Specify what module code is generated.
                one of:  none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext
               default:  undefined

                  --lib  Specify a set of bundled library declaration files that describe the target runtime environment                         .
           one or more:  es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext, dom, dom.i                         terable, webworker, webworker.importscripts, webworker.iterable, scripthost, es2015.core, es201                         5.collection, es2015.generator, es2015.iterable, es2015.promise, es2015.proxy, es2015.reflect,                          es2015.symbol, es2015.symbol.wellknown, es2016.array.include, es2017.object, es2017.sharedmemor                         y, es2017.string, es2017.intl, es2017.typedarrays, es2018.asyncgenerator, es2018.asynciterable/                         esnext.asynciterable, es2018.intl, es2018.promise, es2018.regexp, es2019.array, es2019.object,                          es2019.string, es2019.symbol/esnext.symbol, es2019.intl, es2020.bigint/esnext.bigint, es2020.da                         te, es2020.promise, es2020.sharedmemory, es2020.string, es2020.symbol.wellknown, es2020.intl, e                         s2020.number, es2021.promise/esnext.promise, es2021.string, es2021.weakref/esnext.weakref, es20                         21.intl, es2022.array/esnext.array, es2022.error, es2022.intl, es2022.object, es2022.sharedmemo                         ry, es2022.string/esnext.string, esnext.intl
               default:  undefined

              --allowJs  Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors fro                         m these files.
                  type:  boolean
               default:  false

              --checkJs  Enable error reporting in type-checked JavaScript files.
                  type:  boolean
               default:  false

                  --jsx  Specify what JSX code is generated.
                one of:  preserve, react, react-native, react-jsx, react-jsxdev
               default:  undefined

      --declaration, -d  Generate .d.ts files from TypeScript and JavaScript files in your project.
                  type:  boolean
               default:  `false`, unless `composite` is set

       --declarationMap  Create sourcemaps for d.ts files.
                  type:  boolean
               default:  false

  --emitDeclarationOnly  Only output d.ts files and not JavaScript files.
                  type:  boolean
               default:  false

            --sourceMap  Create source map files for emitted JavaScript files.
                  type:  boolean
               default:  false

              --outFile  Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, als                         o designates a file that bundles all .d.ts output.

               --outDir  Specify an output folder for all emitted files.

       --removeComments  Disable emitting comments.
                  type:  boolean
               default:  false

               --noEmit  Disable emitting files from a compilation.
                  type:  boolean
               default:  false

               --strict  Enable all strict type-checking options.
                  type:  boolean
               default:  false

                --types  Specify type package names to be included without being referenced in a source file.

      --esModuleInterop  Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowS                         yntheticDefaultImports' for type compatibility.
                  type:  boolean
               default:  false
