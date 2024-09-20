const mybutton = $("button");
mybutton.click(async (ev) => {
    console.log(ev.target.id)

    try {
        const r = await fetch(`${ev.target.id}.json`);



        if (!r.ok) {
            throw new Error();
        }

        const myfood = await r.json();
        console.log(myfood)

        const display = $('#dis');
        const name = $('#name');
        const recipe = $('#recipe');
        const icon = $('#icon');

        display.text(myfood.dis)
        name.text(myfood.name)
        recipe.text(myfood.ingredients)
        icon.attr('src',myfood.image)

    } catch (e) {
        console.error('oops', e);
    }
});