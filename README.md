# vuex-storage-js

Vue.js and Vuex plugin to persistence data with localStorage/sessionStorage



### Install

```bash
$ npm install vuex-storage-js
```

### Use

```
import vuexStoragejs from 'vuex-storage-js'

const options = {}

const store = createStore({
  plugins: [vuexStoragejs(options)]
})
```



### Options

```
{
	keys: ''
}
```

