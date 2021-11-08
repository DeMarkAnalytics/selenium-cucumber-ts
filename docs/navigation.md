# Navigation Steps

## Implemented and tested

### To open/close URL and to navigate between pages use following steps :

```cucumber
 Then I navigate to "*"
 Then I navigate forward
 Then I navigate back
 Then I refresh page
```

## Implemented but not tested

### To switch between windows use following steps :

```cucumber
 Then I switch to new window
 Then I switch to previous window
 Then I switch to window having title "*"
 Then I switch to window having url "*"
 Then I close new window
 Then I switch to main window
```

### To switch between frames use following steps :

```cucumber
 Then I switch to frame "*"
 Then I switch to main content
```

### To interact with browser use following steps :

```cucumber
 Then I resize browser window size to width # and height #
 Then I maximize browser window
 Then I close browser
```

### To zoom in/out webpage use following steps :

```cucumber
 Then I zoom in page
 Then I zoom out page
```

### To zoom out webpage till necessary element displays use following steps :

```cucumber
 Then I zoom out page till I see element having (id,name,class,xpath,css) "*"
```

### To reset webpage view use following step :

```cucumber
 Then I reset page view
```

### To scroll webpage use following steps :

```cucumber
 Then I scroll to top of page
 Then I scroll to end of page
```

### To scroll webpage to specific element use following steps :

```cucumber
 Then I scroll to element having (id,name,class,xpath,css) "*"
```

### To hover over a element use following steps :

```cucumber
 Then I hover over element having (id,name,class,xpath,css) "*"
```

## Unimplemented