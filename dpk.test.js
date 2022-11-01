const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given 0 as input", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey.length).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '12' when given event object as {partitionKey: 12}", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 12});
    expect(trivialKey).toBe("12");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '12' when given {partitionKey: '12'}", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: '12'});
    expect(trivialKey).toBe("12");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hash code of length 128 when given 123 as input", () => {
    const trivialKey = deterministicPartitionKey(123);
    expect(trivialKey.length).toBe(128);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal hash code of length 128 when given '123' as input", () => {
    const trivialKey = deterministicPartitionKey('123');
    expect(trivialKey.length).toBe(128);
  });
});




