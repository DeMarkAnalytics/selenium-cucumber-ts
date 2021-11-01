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
  "cucumberautocomplete.steps": ["features/step_definitions/**/*_steps.ts", "node_modules/@symbolik/selenium-cucumber-ts/step_definitions/**/*_steps.ts"],
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

## Navigation Steps

[here](docs/navigation.md)

## Assertion Steps

[here](docs/pageAssertions.md)

## Input Steps

[here](docs/inputs.md)

## Click Steps

[here](docs/clicks.md)

## Progress Steps

[here](docs/progress.md)

## Javascript Handling Steps

[here](docs/javascript.md)

## Screenshot Steps

[here](docs/screenshot.md)

## Configuration Steps

[here](docs/configurations.md)

## Mobile Steps

[here](docs/mobile.md)
