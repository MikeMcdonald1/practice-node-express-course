const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile(
      "temp.txt",
      "This is line 1\nThis is line 2\nThis is line 3\n"
    );
    console.log("File written successfully");
  } catch (err) {
    console.log("Error writing to file: ", err);
  }
};

const reader = async () => {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("Error reading file: ", err);
  }
};
