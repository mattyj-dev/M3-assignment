//PROMPT THE USER FOR THEIR PREFERRED LANGUAGE ("es", "de", "en", and "fr")
let preferredlanguage = prompt("What language code: 'es' 'de' 'en' or 'fr'?")

//DISPLAY 'HELLO WORLD' IN CORRESPONDING LANGUAGE THE USER CHOSE
switch (preferredlanguage) {
    case 'es':
        document.write('<center>¡Hola mundo!</center>')
        break
    case 'de':
        document.write('<center>Hallo Welt!</center>')
        break
    case 'fr':
        document.write('<center>Bonjour le monde!</center>')
        break
    default:
        document.write('<center>Hello world!</center>')
}