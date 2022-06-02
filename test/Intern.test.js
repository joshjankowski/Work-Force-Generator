const Intern = require('../lib/Intern');

describe('test school', ()  => {
  const school = "UCSD";
  const e = new Intern("Josh", 123, "email@email.com", school);
  it('should return the school', () => {
    expect(e.getSchool()).toBe(school);
  });});

describe('test role', ()  => {
  const role = "Intern";
  const e = new Intern("Josh", 123, "josh@josh.com", role);
  it('should return the role', () => {
    expect(e.getRole()).toBe(role);
  });});
