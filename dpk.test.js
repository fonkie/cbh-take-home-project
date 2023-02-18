const { deterministicPartitionKey } = require("./dpk");
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('Returns event partition key when it exists', () => {
    const event = { partitionKey: 'key' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('key');
  });

  it('Calculates partition key using hash function when no partition key is provided', () => {
    const event = { name: 'lucy', age: 20 };
    const data = JSON.stringify(event);
    const hash = crypto.createHash('sha3-512').update(data).digest('hex');
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hash);
  });

  it("Creates a hash of the event data if event.partitionKey is undefined and returns it", () => {
    const data = { a: 1, b: "2", c: [3, 4] };
    const hash = crypto.createHash("sha3-512").update(JSON.stringify(data)).digest("hex");
    expect(deterministicPartitionKey(data)).toBe(hash);
  });

  it("Creates a hash of the candidate if it's longer than the maximum partition key length", () => {
    const longString = "a".repeat(256 + 1);
    const hash = crypto.createHash("sha3-512").update(longString).digest("hex");
    expect(deterministicPartitionKey({ partitionKey: longString })).toBe(hash);
  });
});


