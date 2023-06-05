# cucumber-selenium-typescript

Idea originally from this ruby project and ported to typescript:
<https://github.com/selenium-cucumber/selenium-cucumber-ruby>

Not all steps are implemented but there are enough implemented to be very useful.

## how to use

Add to your project
`yarn add -D @symbolik/selenium-cucumber-ts`

In your `cucumber.js` file you'll need to add the following:
at the top:

```bash
process.env.TS_NODE_IGNORE = '/node_modules\/(?!(@symbolik)\/)/'
```

in the `feature` var

```bash
  '--require node_modules/@symbolik/selenium-cucumber-ts/step_definitions/**/*.ts',
```

## To work on this project

You can checkout the code from this project and run

```bash
yarn install
```

you can then run the current tests with

```bash
yarn test
```

### For autocompletion of step defs in vscode

install `Cucumber (Cherkin) Full Support` plugin

```json
{
  "cucumberautocomplete.steps": [
    "features/step_definitions/**/*_steps.ts",
    "node_modules/@symbolik/selenium-cucumber-ts/step_definitions/**/*_steps.ts"
  ],
  "cucumberautocomplete.smartSnippets": true,
  "cucumberautocomplete.stepsInvariants": true,
  "cucumberautocomplete.customParameters": [
    {
      "parameter": "{jsonObject}",
      "value": "(it|item {string}|file {string}|{string})"
    }
  ]
}
```

## Supported Steps

- [Navigation Steps](docs/navigation.md)
- [Assertion Steps](docs/pageAssertions.md)
- [Input Steps](docs/inputs.md)
- [Click Steps](docs/clicks.md)
- [Progress Steps](docs/progress.md)
- [Javascript Handling Steps](docs/javascript.md)
- [Screenshot Steps](docs/screenshot.md)
- [Configuration Steps](docs/configurations.md)
- [Mobile Steps](docs/mobile.md)
