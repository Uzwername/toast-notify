# TOAST NOTIFY

version: `0.0.1`

## Features


#### `examples/index.html`

To display a simple toast message at the top-left

```js 
toast.show({title: 'first toast', position: 'topleft'}) 
```


## Quick start


STEP ONE 

Running the script directly on the console
1.  Copy the script
2.  Run `toast.show({title: 'first toast', position: 'topleft'})`

STEP TWO (Via NPM) Recommended

Now you're ready to rumble!

## Show() Options

|Option|Description|Platform|
|-|:-----:|
|`message`|Message to be displayed
|`position`|topleft, topright,bottomleft, bottomright, bottomfullwidth, topfullwidth, bottomcenter, topcenter
|`type`|warn, info, alert

## NOTE

The toast notification container position foreach screen is set by the first notification instance that shows up,
a page can not have two notification position set.


## License

This project is licensed under the MIT license, Copyright (c) 2020.
