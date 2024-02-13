let tabsHTML = "";
let contentHTML = "";

tab_items();
content_items();

const tabs = document.querySelectorAll(".tab");

tabs.forEach ((tab, index) => { //Brukte disse postene fra StackOverflow posten til å finne svar på toggling av faner: https://stackoverflow.com/questions/55439746/vanilla-javascript-show-tab-and-hide-others, https://stackoverflow.com/questions/66978996/is-there-a-better-way-of-creating-tabs-using-vanilla-javascript-than-this 
    if (index == 0) {
        document.querySelector('.tab').classList.add('tab-active');
        document.querySelector('.tab-content').classList.add('content-active');
    }

    tab.addEventListener("click", function() {

        const tab_contents = document.querySelectorAll(".tab-content");

        tabs.forEach(tab_remove => {
            tab_remove.classList.remove("tab-active");
        });

        tab_contents.forEach(content => {
            content.classList.remove('content-active');
        });

        tab.classList.add("tab-active");
        tab_contents[index].classList.add('content-active');

    });
});

function tab_items() {

    resources.map(recourse => tabsHTML += `<li class="tab"><a href="#">${recourse.category}</li>`);

    const main = document.getElementsByTagName("ul");
    main[0].innerHTML = tabsHTML;

}

function content_items() {

    resources.map(recourse => contentHTML += `
    <article class="tab-content">
        <h2>${recourse.category}</h2>
        <p>${recourse.text}</p>
        <ul>
        ${recourse.sources.map(source =>
                `<li><a href="${source.url}">${source.title}</a></li>`
        ).join("")} 
        </ul>
    </article>
`);

    const main = document.getElementsByTagName("main");
    main[0].innerHTML = contentHTML;

}


