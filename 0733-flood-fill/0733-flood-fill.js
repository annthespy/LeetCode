/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc]; // step 1: store the original color

    // step 2: if it's already the new color, no need to do anything
    if (originalColor === color) return image;

    // define helper function that does the actual flood filling
    const fill = (r, c) => {
        // 1. Check boundaries (stay inside the grid)
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;

        // 2. Check if current pixel is the original color
        if (image[r][c] !== originalColor) return;

        // 3. Fill the pixel with the new color
        image[r][c] = color;

        // 4. Recurse (check and fill neighbors: up, down, left, right)
        fill(r - 1, c); // up
        fill(r + 1, c); // down
        fill(r, c - 1); // left
        fill(r, c + 1); // right
    };

    // start the flood fill from the starting pixel
    fill(sr, sc);

    // return the modified image
    return image;
}