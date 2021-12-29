# Assertion Steps

## Title assertions

### To assert that page title can be found use following step

```cucumber
 Then I should see page title as "*"
 Then I should not see page title as "*"

 Then I should see page title having partial text as "*"
 Then I should not see page title having partial text as "*"
```

## Steps For Asserting Element Text

### To assert element text use any of the following steps

```cucumber
 Then element having (id,name,class,xpath,css) "*" should have text as "*"
 Then element having (id,name,class,xpath,css) "*" should have partial text as "*"
 Then element having (id,name,class,xpath,css) "*" should not have text as "*"
 Then element having (id,name,class,xpath,css) "*" should not have partial text as "*"

## Steps For Asserting Element Attribute

### To assert element attribute use any of the following steps :

```cucumber
 Then element having (id,name,class,xpath,css) "*" should have attribute "*" with value "*"
 Then element having (id,name,class,xpath,css) "*" should not have attribute "*" with value "*"

## Steps For Asserting Element Accessibility

### To assert that element is enabled use any of the following steps :

```cucumber
 Then element having (id,name,class,xpath,css) "*" should be enabled
```

### To assert that element is disabled use any of the following steps

```cucumber
 Then element having (id,name,class,xpath,css) "*" should be disabled
```

## Steps For Asserting Element Visibility

### To assert that element is present use any of the following steps

```cucumber
 Then element having (id,name,class,xpath,css) "*" should be present
```

### To assert that element is not present use any of the following steps

```cucumber
 Then element having (id,name,class,xpath,css) "*" should not be present
```

## Steps For Asserting Checkbox

### To assert that checkbox is checked use any of the following steps

```cucumber
 Then checkbox having (id,name,class,xpath,css) "*" should be checked
```

### To assert that checkbox is unchecked use any of the following steps

```cucumber
 Then checkbox having (id,name,class,xpath,css) "*" should be unchecked
```

## Steps For Asserting Dropdown List

### To assert that option by text from dropdown list selected use following steps

```cucumber
 Then option "*" by text from dropdown having (id,name,class,xpath,css) "*" should be selected
```

### To assert that option by value from dropdown list selected use following steps

```cucumber
 Then option "*" by value from dropdown having (id,name,class,xpath,css) "*" should be selected
```

### To assert that option by text from dropdown list unselected use following steps

```cucumber
 Then option "*" by text from dropdown having (id,name,class,xpath,css) "*" should be unselected
```

### To assert that option by value from dropdown list unselected use following steps

```cucumber
 Then option "*" by value from dropdown having (id,name,class,xpath,css) "*" should be unselected
```

## Steps For Asserting Radio Button

### To assert that radio button selected use any of the following steps

```cucumber
 Then radio button having (id,name,class,xpath,css) "*" should be selected
```

### To assert that radio button not selected use any of the following steps

```cucumber
 Then radio button having (id,name,class,xpath,css) "*" should be unselected
```

### To assert that radio button group selected by text use any of the following steps

```cucumber
 Then option "*" by text from radio button group having (id,name,class,xpath,css) "*" should be selected
```

### To assert that radio button group selected by value use any of the following steps

```cucumber
 Then option "*" by value from radio button group having (id,name,class,xpath,css) "*" should be selected
```

### To assert that radio button group not selected by text use any of the following steps

```cucumber
 Then option "*" by text from radio button group having (id,name,class,xpath,css) "*" should be unselected
```

### To assert that radio button group not selected by value use any of the following steps

```cucumber
 Then option "*" by value from radio button group having (id,name,class,xpath,css) "*" should be unselected
```

## Steps For Asserting Links

### To assert that link is present use following steps

```cucumber
 Then link having text "*" should be present
 Then link having partial text "*" should be present
```

### To assert that link is not present use following steps

```cucumber
 Then link having text "*" should not be present
 Then link having partial text "*" should not be present
```

## Steps For Asserting Javascript Pop-Up Alert

### To assert text on javascript pop-up alert use following step

```cucumber
 Then I should see alert text as "*"
```

## Steps For Asserting Difference in images

### To assert difference in actual image and expected image (from remotely hosted) use following steps

```cucumber
 Then actual image having (id,name,class,xpath,css) "*" should be similar
 Then actual image having url "*" and expected image having url "*" should be similar
```

### To assert difference in actual image and expected image (from local machine) use following steps

```cucumber
 Then actual image having (id,name,class,xpath,css) "*" should be similar
 Then actual image having url "*" and expected image having image_name "*" should be similar
```

### To assert difference in actual image and expected image (from same webpage) use following steps

```cucumber
 Then actual image having (id,name,class,xpath,css) "*" should be similar
 Then actual image having url "*" and expected image having url "*" should be similar
```
