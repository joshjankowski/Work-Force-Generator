const Employee = require('../lib/Employee');

describe('create an employee object', ()  => {
  const e = new Employee("")
  it('should return object', () => {
    expect(typeof(e)).toBe('object');
  });});

describe('test name', ()  => {
  const name = "Josh";
  const e = new Employee(name)
  it('should return the name of the person entered', () => {
    expect(e.name).toBe(name);
  });});

describe('test id', ()  => {
  const id = "123";
  const e = new Employee("Josh", id);
  it('should return the id of the person entered', () => {
    expect(e.getId()).toBe(id);
  });});

describe('test id', ()  => {
  const email = "Josh@josh.com";
  const e = new Employee("Josh", 123, email );
  it('should return the email of the person entered', () => {
    expect(e.getEmail()).toBe(email);
  });});

describe('test id', ()  => {
  const role = "Employee";
  const e = new Employee("Josh", 123, "josh@josh.com",role );
  it('should return the email of the person entered', () => {
    expect(e.getRole()).toBe(role);
  });});
