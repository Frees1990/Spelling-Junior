beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("Game.html", "utf-8")
    document.open();
    document.write(fileContents);
    document.close();
});

describe("word object contains correct keys", () => {
    test("score key exist", () => {
        expect("score" in game).toBe(true);
    });
});