export function createElementWithAttribute(element, attribute, attributeVal) {
    const newElemnt = document.createElement(element);
    if(attribute) {
        newElemnt.setAttribute(attribute, attributeVal);
    }
    return newElemnt;
}