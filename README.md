# OreUI Shim
Engine created by [Candela](https://github.com/Luminoso-256).

## How to use

Prerequisite: `config.json` has `use_translation`. By default, this is set to `true`. To avoid copyright issues, translation files are not mirrored here. Simply go to the `oreui` RP in your game files (`data/resource_packs/oreui`), copy the `texts` folder to `src`. Alternatively, just set `use_translation` to false and prepare to see *way* too many very-long translation keys.
Copy `hbui` folder from your game files (`data/gui/dist`) to the base directory

Ensure you have the correct file structure.
The files should look something like this:

```
oreui
│   config.json
│   engine.js
│   index.js
│
└───src
│   │   assets
│   │   facets
│   │   │   <oreui facets>
│   └───texts
│   │   │   <oreui text files>
│   │   facets.json
│
└───hbui
│   │   <subfolders>
│   │   index.html
│   │   <other files>
```

Start the app from the base directory (in our example, `oreui`):

```bash
node .
```
