module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/unit/__mocks__/fileMock.js",
    "\\.(css)$": "identity-obj-proxy"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFiles": [
    "<rootDir>/test/setup/setupTests.ts"
  ],
  "testURL": "http://localhost",
  "testEnvironment": "node",
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}
