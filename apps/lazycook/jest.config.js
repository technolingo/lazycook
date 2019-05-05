module.exports = {
  name: "lazycook",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/lazycook/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
