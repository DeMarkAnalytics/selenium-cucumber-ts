# Input Steps

## Steps For TextFields

To enter text into input field use following steps :

```cucumber
 Then I enter "*" into input field having (id,name,class,xpath) "*"
```

To clear input field use following steps :

```cucumber
 Then I clear input field having (id,name,class,xpath) "*"
```

## Steps For Dropdown List

To select option by text from dropdown use following steps :

```cucumber
 Then I select "*" option by text from dropdown having (id,name,class,xpath) "*"
```

To select option by index from dropdown use following steps :

```cucumber
 Then I select # option by index from dropdown having (id,name,class,xpath) "*"
```

To select option by value from dropdown use following steps :

```cucumber
 Then I select "*" option by value from dropdown having (id,name,class,xpath) "*"
```

## Steps For Multiselect List

To select option by text from multiselect dropdown use following steps :

```cucumber
 Then I select "*" option by text from multiselect dropdown having (id,name,class,xpath) "*"
```

To select option by index from multiselect dropdown use following steps :

```cucumber
 Then I select (\d+) option by index from multiselect dropdown having (id,name,class,xpath,css) "*" should
```

To select option by value from multiselect dropdown use following steps :

```cucumber
 Then I select "(.*?)" option by value from multiselect dropdown having (id,name,class,xpath,css) "*" should
```

To select all options from multiselect use following steps :

```cucumber
 Then I select all options from multiselect dropdown having (id,name,class,xpath,css) "*" should
```

To unselect all options from multiselect use following steps :

```cucumber
 Then I unselect all options from multiselect dropdown having (id,name,class,xpath,css) "*" should
```

## Steps For Checkboxes

To check the checkbox use following steps :

```cucumber
 Then I check the checkbox having (id,name,class,xpath,css) "*" should
```

To uncheck the checkbox use following steps :

```cucumber
 Then I uncheck the checkbox having (id,name,class,xpath,css) "*" should
```

To toggle checkbox use following steps

```cucumber
 Then I toggle checkbox having (id,name,class,xpath,css) "*" should
```

## Steps For Radio Buttons

### To select radio button use following steps

```cucumber
 Then I select radio button having (id,name,class,xpath,css) "*" should
```

### To select one radio button by text from radio button group use following steps

```cucumber
 Then I select "(.*?)" option by text from radio button group having (id,name,class,xpath,css) "*" should
```

### To select one radio button by value from radio button group use following steps

```cucumber
 Then I select "(.*?)" option by value from radio button group having (id,name,class,xpath,css) "*" should
```
