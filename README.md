# sticky-isi

[![NPM](https://img.shields.io/npm/v/sticky-isi.svg)](https://www.npmjs.com/package/sticky-isi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install ilama007/sticky-isi
```

- Original Library Credit: https://www.npmjs.com/package/react-sticky-footer
- Modified to custom fit ISI styles, accept footer reference
- Added dependency: react-portal

## Typical Usage

```jsx
import React, { useState, useEffect, useRef } from 'react';
import StickyISI from '@ilama007/sticky-isi';

const App = () => {
  // This could be replaced by DOM method as well to pass element
  const footerRef = useRef(null);
  const ISI_HEIGHT = 150;
  const [elmRef, setElmRef] = useState(null);

  useEffect(() => {
    setElmRef(footerRef.current);
  }, []);

  return (
    <div>
      <div id='lipsum'>
        <p>
          Integer ut sapien enim. Vestibulum consectetur ex faucibus, vestibulum
          justo sed, pulvinar lorem. Mauris bibendum lacus nisl, vitae maximus
          metus vulputate vitae. In varius bibendum nibh nec dictum. Nunc
          tristique, felis hendrerit consequat pharetra, sem est lacinia mi,
          faucibus pellentesque tellus tellus porta arcu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Proin erat eros, condimentum eget cursus sed, feugiat sed orci.
        </p>
       </div>
        {elmRef && (
          <StickyISI
            footerRef={elmRef}
            stickyHeight={ISI_HEIGHT}
            stickyStyles={{
              height: ISI_HEIGHT,
              backgroundColor: 'yellow'
            }}
          >
            <h2>Indication</h2>
            <p>
              Lorem ipsum dolor sit amet, falli erant utinam ius an, quod hinc dicit
              eu pro, an inciderint theophrastus delicatissimi usu. Et vis etiam
              detraxit. Pro an affert aeterno ponderum. Ad sit feugait suscipit, in
              qui ullum tollit docendi, corpora principes appellantur pro in. Dicant
              aliquip delectus et nam, usu ea utinam volutpat delicatissimi, mel ut
              dicat scripta. Ne vim nostro blandit. Mel paulo deleniti explicari te.
              An facer animal omittam sit, ornatus salutatus pri ne. Ut duo debet
              consul eleifend. Quem meliore ut sea, vix justo summo disputationi ex.
          </p>
          </StickyISI>
        )}
        <footer ref={footerRef}>
          <h2>Footer</h2>
            <p>
              Proin et blandit est, a dignissim felis. In hendrerit odio nec erat
              accumsan facilisis. Sed non odio at ante consectetur consectetur. In
              id facilisis elit. Vestibulum quis tristique odio. Integer dapibus
              ornare porttitor. Donec ac leo non purus hendrerit finibus. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Vestibulum in sem id dolor interdum consectetur in sed dolor.
              Nam a dignissim odio, non varius nibh. Fusce tincidunt, justo nec
              facilisis pharetra, dui diam dignissim dui, ut sodales ligula diam id
              justo.
            </p>
            <p>
              Duis bibendum vestibulum rhoncus. Sed vitae sapien in massa porttitor
              porta quis quis dolor. Nullam tincidunt finibus lorem, vestibulum
              eleifend urna auctor vitae. Praesent lorem eros, consequat in nunc
              vel, pharetra malesuada mi. Proin nec mauris nulla. Integer vitae dui
              eu leo pretium mattis. Integer sit amet ex maximus, placerat orci
              eget, varius enim. Morbi a laoreet est, vel commodo tellus.
            </p>
        </footer>
    </div>
  )}

  export default App;
}
```

## License

MIT © [@ilama007](https://github.com/@ilama007)
