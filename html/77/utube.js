/* globals $*/
(async function () {
    "use strict";
    async function loadJson(url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
          }
          const data = await response.json();
          return data;
        } catch (e) {
         console.log(e)
        }
      }
    const myvideo =$('#vidul')
    const plyr = $('#myvid')

    const utube = await loadJson('vudeo.json');
    utube.forEach(vid => {
        const theli =$(`<li> ${vid.name} </li>`)
   
        theli.click(() => {
            plyr.attr('src',vid.url)
        });
        myvideo.append(theli);
      });

}())

