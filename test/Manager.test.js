const Manager = require('../lib/Manager');

describe('test office number', ()  => {
  const officeNumber = "1202";
  const e = new Manager("Josh", 123, "email@email.com", officeNumber);
  it('should return the office number', () => {
    expect(e.getOfficeNumber()).toBe(officeNumber);
  });});

describe('test id', ()  => {
  const role = "Manager";
  const e = new Manager("Josh", 123, "josh@josh.com", role );
  it('should return the email of the person entered', () => {
    expect(e.getRole()).toBe(role);
  });});
