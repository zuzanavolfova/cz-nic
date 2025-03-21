# CZ.NIC z. s. p. o. – Javascript task

    The goal of this task is to create a web page with the detail of fictional domain neviditelna-univerzita.cz in Vue.js.
    The approximate required look in full resolution is present in separate PNG files.
    The result does not have to be 1:1 same as the images are, but the core structure of the displayed information should be kept.
## Technology requirements:
    • The solution must use Vue.js framework in version 3.
        ◦ Single file components are preferred.
        ◦ It is possible (but not required) to use some UI library for Vue.js, for example PrimeVue, Vuetify.
        ◦ The more rules from Vue style guide (https://vuejs.org/guide/introduction.html) are used, the better, all rules from the category Priority A: Essential should be definitely followed.
    • The functionality of particular components should be tested. It is possible to use any testing framework, we mostly make use of Jest.
    • All data that should be displayed on the web page are placed in the file called domain-detail.json. Root component should load this file and draw particular application partsaccording to it.
        ◦ To load data from JSON file, make sure to use a library for handling http requests, e.g. fetch, axios or similar. Don't import the file directly.

## Application requirements:
    • The web page with the detail has two modes - brief and detailed. To switch between these two modes, the Verbose view switch under the domain name is used. For detailed comparison please see detail-brief.png and detail-
    detailed.png.

    • After the Show button in the AuthInfo row is clicked, the secret password is displayed.
    • After the user name in the top right corner of the page is clicked, the user menu is displayed (Please see detail-usermenu.png).
    • The web page should be reasonably responsive – when two columns don‘t fit side by side, they should be displayed on top of each other