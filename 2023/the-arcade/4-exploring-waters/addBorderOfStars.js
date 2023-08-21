/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 * @param {Array[Array[String]]} picture 
 */
function addBorderOfStars(picture) {

    let len = picture[0].length, height = picture.length;
    let bounds = "*".repeat(len + 2);
    for (let i = 0; i < height; i++) {
        picture[i] = "*"+ picture[i] + "*";
    }
    picture.push(bounds);
    picture.unshift(bounds);
    return picture;

}