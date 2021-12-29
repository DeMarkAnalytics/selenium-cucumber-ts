# Mobile steps have not been implemted but are planned

## Mobile Steps

### To tap on app element use following steps

```cucumber
 Then I tap on element having (id,name,class,xpath,css) "*" should
```

### To Tap on back button of device use following step

```cucumber
    Then I tap on back button of device
    Then I press back button of device
```

## Swipe steps

### To perform swipe using app elements use following steps

```cucumber
    Then I swipe from element having (id,name,class,xpath,css) "*" to element having (id,name,class,xpath,css) "*"
```

### To perform swipe using co-ordinates

```cucumber
    Then I swipe from co-ordinates "*","*" to co-ordinates "*","*"
```

### To perform swipe using direction

```cucumber
    Then I swipe right
    Then I swipe left
    Then I swipe up
    Then I swipe down
```

### To perform swipe using app element with direction use following steps

```cucumber
    Then I swipe element having (id,name,class,xpath,css) "*" to right
    Then I swipe element having (id,name,class,xpath,css) "*" to left
    Then I swipe element having (id,name,class,xpath,css) "*" to up
    Then I swipe element having (id,name,class,xpath,css) "*" to down
```

### To perform swipe using co-ordinates with direction use following steps

```cucumber
    Then I swipe co-ordinates "*","*" to left
    Then I swipe co-ordinates "*","*" to right
    Then I swipe co-ordinates "*","*" to up
    Then I swipe co-ordinates "*","*" to down
```

## long tap steps

---

### To perform long tap with default duration of 2 seconds on app elements use following steps

```cucumber
    Then I long tap on element having (id,name,class,xpath,css) "*"
```

### To perform long tap with customized duration of seconds on app elements use following steps

```cucumber
   Then I long tap on element having (id,name,class,xpath,css) "*" for "*" sec
```

### To perform long tap with default duration of 2 seconds using co-ordinates use following step

```cucumber
   Then I long tap on coordinate "*","*"
```

### To perform long tap with customized duration of seconds using co-ordinates use following step

```cucumber
   Then I long tap on co\-ordinate "*","*" for "*" sec
```

## Close app step

```cucumber
   Then I close app
```
